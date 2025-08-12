import SiteHeader from "@/components/site-header"
import HeroCard from "@/components/hero-card"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 text-slate-50 relative overflow-hidden">
      {/* Animated background circuit pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg
          className="w-full h-full animate-pulse"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Decorative circuit pattern background"
        >
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h80v80h-80z M30 30h40v40h-40z M50 10v20 M50 70v20 M10 50h20 M70 50h20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <SiteHeader />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20" role="main">
        <section className="text-center mb-8 space-y-4" aria-labelledby="main-heading">
          <h1 id="main-heading" className="text-4xl md:text-6xl font-semibold tracking-tight">
            Banking Without Borders.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            A smarter way to send, spend, and save — anywhere.
          </p>
          <p className="text-lg text-cyan-400 font-medium">
            Built for Migrants. Powered by Innovation.
          </p>
        </section>

        <section aria-labelledby="waitlist-section">
          <h2 id="waitlist-section" className="sr-only">
            Join Our Waitlist
          </h2>
          <HeroCard />
        </section>
      </main>

      <Footer />
    </div>
  )
}
