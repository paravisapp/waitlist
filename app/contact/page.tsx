import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Paravis team. Contact us for waitlist questions, support, or general inquiries about our banking platform.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | Paravis",
    description: "Get in touch with the Paravis team for waitlist questions and support.",
    url: "https://paravis.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-cyan-400">Contact Us</h1>
            <p className="text-slate-300">We&apos;re here to help with your waitlist questions</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-slate-900/50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-slate-200">Email Support</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:paravisapp@gmail.com"
                      className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>paravisapp@gmail.com</span>
                    </a>
                    <p className="text-slate-400 text-sm ml-8">
                      We aim to respond within 3–5 business days
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-slate-200">What We Can Help With</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                    <li>Waitlist questions and status</li>
                    <li>Privacy and data concerns</li>
                    <li>General inquiries about Paravis</li>
                    <li>Removal from the waitlist</li>
                    <li>Technical issues with signup</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-slate-200">Response Times</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">General inquiries: 3-5 business days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-slate-300">Privacy requests: 1-2 business days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">Technical issues: 1-3 business days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-slate-900/50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-200">When will Paravis launch?</h3>
                  <p className="text-slate-300 text-sm">
                    We&apos;re working hard to bring Paravis to market. Waitlist members will be the first to know 
                    about our launch timeline and early access opportunities.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-200">Is joining the waitlist free?</h3>
                  <p className="text-slate-300 text-sm">
                    Yes, joining our waitlist is completely free. There are no costs or obligations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-200">How do I remove my email?</h3>
                  <p className="text-slate-300 text-sm">
                    Simply email us at paravisapp@gmail.com with &quot;Remove from waitlist&quot; in the subject line, 
                    and we&apos;ll remove you within 24-48 hours.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-200">Will you share my data?</h3>
                  <p className="text-slate-300 text-sm">
                    No, we will never sell or share your personal data with third parties for marketing purposes. 
                    See our <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</Link> for details.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-200">What services will Paravis offer?</h3>
                  <p className="text-slate-300 text-sm">
                    Paravis will offer digital banking services designed for migrants, including cross-border 
                    payments, money transfers, and international banking solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="text-center space-y-4">
            <div className="bg-slate-900/30 rounded-xl p-6">
              <h3 className="text-lg font-medium text-cyan-400 mb-3">Still have questions?</h3>
              <p className="text-slate-300 mb-4">
                Don&apos;t hesitate to reach out. We&apos;re building Paravis for people like you, and your feedback matters.
              </p>
            </div>
            
            <nav className="flex justify-center space-x-6 pt-4">
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
                href="/terms" 
                className="inline-flex items-center px-4 py-2 text-slate-300 hover:text-cyan-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}
