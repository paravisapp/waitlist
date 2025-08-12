import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Paravis waitlist. Learn about our waitlist policies and your rights when joining our early access program.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Paravis",
    description: "Terms of Service for Paravis waitlist signup and early access program.",
    url: "https://paravis.app/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-cyan-400">Terms of Service</h1>
            <p className="text-slate-300">Waitlist Terms — Last updated: January 2025</p>
          </header>

          <div className="bg-slate-900/50 rounded-2xl p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Purpose</h2>
              <p className="text-slate-300 leading-relaxed">
                These Terms apply only to the waitlist sign-up page for Paravis. By joining the waitlist, you agree that:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-3 ml-4">
                <li>
                  You are providing your contact information (e.g., name, email) voluntarily so we can notify you about 
                  Paravis' launch, updates, and early access opportunities.
                </li>
                <li>
                  Joining the waitlist does not create any customer, financial, or contractual relationship with Paravis.
                </li>
                <li>
                  The service being promoted is not yet live, and no banking or payment functionality is currently being offered.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Data Collection & Use</h2>
              <p className="text-slate-300 leading-relaxed">
                Information you submit will be stored securely and used only for:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Sending you product updates and launch announcements</li>
                <li>Inviting you to participate in beta testing or surveys</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                <strong>We will not sell or share your personal data with third parties for marketing purposes.</strong>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Changes to the Waitlist</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>
                  Paravis reserves the right to modify, pause, or close the waitlist at any time without prior notice.
                </li>
                <li>
                  You may request removal from the waitlist at any time by contacting us.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">No Service Guarantees</h2>
              <p className="text-slate-300 leading-relaxed">
                Joining our waitlist does not guarantee:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Access to Paravis services when they become available</li>
                <li>Specific launch dates or timelines</li>
                <li>Particular features or functionalities</li>
                <li>Pricing or fee structures</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Governing Law</h2>
              <p className="text-slate-300 leading-relaxed">
                These Terms are governed by the laws of the Republic of Türkiye.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Contact Information</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have questions about these Terms, please contact us at:{" "}
                <a 
                  href="mailto:paravisapp@gmail.com" 
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  paravisapp@gmail.com
                </a>
              </p>
            </section>
          </div>

          <footer className="text-center space-y-4">
            <p className="text-slate-400 text-sm">
              By joining our waitlist, you acknowledge that you have read and agree to these Terms.
            </p>
            <nav className="flex justify-center space-x-6">
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                ← Back to Home
              </Link>
              <Link 
                href="/privacy" 
                className="inline-flex items-center px-4 py-2 text-slate-300 hover:text-cyan-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 text-slate-300 hover:text-cyan-300 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}
