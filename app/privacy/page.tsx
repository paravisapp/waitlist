import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how Paravis collects, uses, and protects your personal information. KVKK-compliant privacy notice for our waitlist.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Paravis",
    description: "Learn about how Paravis protects your privacy and handles your data.",
    url: "https://paravis.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-cyan-400">Privacy Notice</h1>
            <p className="text-slate-300">Last updated: January 2025</p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-8 space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Data Collection</h2>
              <p className="text-slate-300 leading-relaxed">
                We collect only the following information when you join our waitlist:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Your email address (required)</li>
                <li>Browser language/locale (optional)</li>
                <li>Referrer information (optional)</li>
                <li>UTM campaign parameters (optional)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Purpose</h2>
              <p className="text-slate-300 leading-relaxed">
                We use your information solely for waitlist notifications and to contact you when Paravis launches. 
                We do not share, sell, or use your data for any other purpose.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Data Retention</h2>
              <p className="text-slate-300 leading-relaxed">
                Your data will be retained until our product launch or until you request deletion, whichever comes first. 
                After launch, you can opt out of communications at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Your Rights</h2>
              <p className="text-slate-300 leading-relaxed">
                In accordance with KVKK (Turkish Personal Data Protection Law) and international privacy standards, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Request deletion of your data</li>
                <li>Access your stored information</li>
                <li>Correct any inaccurate data</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Contact</h2>
              <p className="text-slate-300 leading-relaxed">
                For privacy-related questions, data deletion requests, or any concerns, contact us at:{" "}
                <a 
                  href="mailto:support@paravis.app" 
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  support@paravis.app
                </a>
              </p>
            </section>
          </div>

          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-full transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
