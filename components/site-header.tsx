import Link from "next/link"
import ParavisLogo from "./paravis-logo"

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity duration-200"
          aria-label="Paravis - Banking Without Borders"
        >
          <ParavisLogo 
            width={140} 
            height={35}
            priority={true}
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </header>
  )
}
