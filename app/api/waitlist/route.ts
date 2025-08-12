import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const schema = z.object({
  email: z.string().email(),
  locale: z.string().optional(),
  referrer: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  honeypot: z.string().optional(), // must be empty
});

// Create a new ratelimiter that allows 5 requests per hour per IP
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  analytics: true,
});

function sha256(input: string) {
  const salt = process.env.HASH_SALT ?? "";
  return crypto.createHash("sha256").update(salt + input).digest("hex");
}

export async function POST(req: Request) {
  try {
    // Get IP address for rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "0.0.0.0";
    
    // Check rate limit
    const { success } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json({ ok: false, error: "RATE_LIMIT" }, { status: 429 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "INVALID_INPUT" }, { status: 400 });
    }
    const { email, locale, referrer, utm_source, utm_medium, utm_campaign, honeypot } = parsed.data;

    // Honeypot check
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 }); // silently accept, do nothing
    }

    const ipHash = sha256(ip);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.from("waitlist_emails").insert({
      email,
      locale,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      user_agent: req.headers.get("user-agent"),
      ip_hash: ipHash,
    });

    if (error) {
      // Unique violation should return success to avoid email fishing UX
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error as any).code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
      }
      return NextResponse.json({ ok: false, error: "DB_ERROR" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
