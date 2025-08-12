import Link from "next/link"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-6">
      <div className="flex justify-center space-x-6 text-sm text-slate-400">
        <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-cyan-400 transition-colors">
          Terms of Service
        </Link>
        <Link href="/contact" className="hover:text-cyan-400 transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  )
}
