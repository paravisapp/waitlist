"use client"

import { motion } from "framer-motion"
import WaitlistForm from "./waitlist-form"
import ParavisLogo from "./paravis-logo"

export default function HeroCard() {

  return (
    <motion.div
      className="relative"
      whileHover={{
        rotateY: 5,
        rotateX: 2,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{ perspective: 1000 }}
    >
      <div
        className="
          w-[95vw] max-w-[820px] 
          aspect-[1.2/1] xs:aspect-[1.4/1] sm:aspect-[1.586/1]
          min-h-[480px] sm:min-h-[400px]
          bg-slate-900/70 backdrop-blur-md 
          border border-cyan-400/20 
          shadow-2xl rounded-2xl sm:rounded-3xl
          ring-1 ring-cyan-400/30 
          transition-all duration-300 ease-out
          relative overflow-hidden
          hover:ring-cyan-300/50 hover:shadow-cyan-400/20
        "
      >
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />

        {/* Holographic background effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl sm:rounded-3xl animate-pulse" 
          suppressHydrationWarning={true}
        />

        {/* Card content */}
        <div className="relative h-full p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-between">
          {/* Top row: Chip and PARAVIS wordmark */}
          <div className="flex justify-between items-start mb-2 sm:mb-0">
            {/* Metallic chip */}
            <div className="w-10 h-7 xs:w-12 xs:h-9 md:w-14 md:h-10 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200/50 to-transparent rounded-sm" />
              </div>
            </div>

            {/* PARAVIS logo */}
            <div className="text-right flex justify-end">
              <ParavisLogo 
                width={120} 
                height={30}
                className="h-5 xs:h-6 md:h-8 w-auto"
              />
            </div>
          </div>

          {/* Center: Waitlist form */}
          <div className="flex-1 flex items-center justify-center py-4 xs:py-6 sm:py-8">
            <WaitlistForm />
          </div>

          {/* Bottom row: Card details and hologram */}
          <div className="flex justify-between items-end mt-2 sm:mt-0">
            {/* Embossed card details */}
            <div className="space-y-1 xs:space-y-2 text-slate-300">
              <div className="text-sm xs:text-base sm:text-lg md:text-xl font-mono tracking-wider xs:tracking-widest">
                <span className="block xs:hidden">1234 5678</span>
                <span className="block xs:hidden">9012 3456</span>
                <span className="hidden xs:block">1234 5678 9012 3456</span>
              </div>
              <div className="text-xs xs:text-sm md:text-base font-mono">VALID THRU 12/29</div>
              <div className="text-xs md:text-sm font-mono opacity-75">CARDHOLDER NAME</div>
            </div>

            {/* Holographic emblem */}
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-30">
              <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="hologram" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="35" stroke="url(#hologram)" strokeWidth="2" fill="none" />
                <path
                  d="M25 40 L35 50 L55 30"
                  stroke="url(#hologram)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
