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
// Add error handling for Redis connection
let ratelimit: Ratelimit | null = null;

try {
  const redis = Redis.fromEnv();
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    analytics: true,
  });
  console.log("Rate limiter initialized successfully");
} catch (error) {
  console.error("Failed to initialize rate limiter:", error);
  console.warn("Continuing without rate limiting");
}

function sha256(input: string) {
  const salt = process.env.HASH_SALT ?? "";
  return crypto.createHash("sha256").update(salt + input).digest("hex");
}

export async function POST(req: Request) {
  const startTime = Date.now();
  
  try {
    // Get IP address for rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "0.0.0.0";
    
    // Check rate limit with timeout (increased to 8 seconds for slow Redis)
    if (ratelimit) {
      try {
        const rateLimitPromise = ratelimit.limit(ip);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Rate limit timeout")), 8000)
        );
        
        const { success } = await Promise.race([rateLimitPromise, timeoutPromise]) as { success: boolean };
        
        if (!success) {
          console.log(`Rate limit exceeded for IP: ${ip}`);
          return NextResponse.json({ ok: false, error: "RATE_LIMIT" }, { status: 429 });
        }
        console.log("Rate limit check passed");
      } catch (rateLimitError) {
        const errorMessage = rateLimitError instanceof Error ? rateLimitError.message : String(rateLimitError);
        console.warn("Rate limiting failed, proceeding without rate limit:", errorMessage);
        // Continue without rate limiting if Redis is unavailable
      }
    } else {
      console.warn("Rate limiter not initialized, proceeding without rate limit");
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      console.log("Invalid input:", parsed.error);
      return NextResponse.json({ ok: false, error: "INVALID_INPUT" }, { status: 400 });
    }
    const { email, locale, referrer, utm_source, utm_medium, utm_campaign, honeypot } = parsed.data;

    // Honeypot check
    if (honeypot && honeypot.trim().length > 0) {
      console.log("Honeypot triggered, silently accepting");
      return NextResponse.json({ ok: true }, { status: 200 }); // silently accept, do nothing
    }

    const ipHash = sha256(ip);

    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json({ ok: false, error: "CONFIG_ERROR" }, { status: 500 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    // Add timeout for Supabase operation
    const supabasePromise = supabase.from("waitlist_emails").insert({
      email,
      locale,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      user_agent: req.headers.get("user-agent"),
      ip_hash: ipHash,
    });

    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Supabase timeout")), 5000)
    );

    const { error } = await Promise.race([supabasePromise, timeoutPromise]) as { error: unknown };

    if (error) {
      console.error("Supabase error:", error);
      // Unique violation should return success to avoid email fishing UX
      if (error && typeof error === 'object' && 'code' in error && error.code === "23505") {
        console.log("Duplicate email detected:", email);
        return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
      }
      return NextResponse.json({ ok: false, error: "DB_ERROR" }, { status: 500 });
    }

    const duration = Date.now() - startTime;
    console.log(`Waitlist signup successful for ${email} in ${duration}ms`);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`Waitlist signup failed after ${duration}ms:`, error);
    return NextResponse.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
