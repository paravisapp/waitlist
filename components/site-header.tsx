import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-50 hover:text-cyan-400 transition-colors"
        >
          PARAVIS
        </Link>
      </div>
    </header>
  )
}
