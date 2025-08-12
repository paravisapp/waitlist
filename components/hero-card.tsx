"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import WaitlistForm from "./waitlist-form"

export default function HeroCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
        className={`
          w-[92vw] max-w-[820px] aspect-[1.586/1] 
          bg-slate-900/70 backdrop-blur-md 
          border border-cyan-400/20 
          shadow-2xl rounded-3xl 
          ring-1 ring-cyan-400/30 
          transition-all duration-300 ease-out
          relative overflow-hidden
          ${isHovered ? "ring-cyan-300/50 shadow-cyan-400/20" : ""}
        `}
      >
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />

        {/* Holographic background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl animate-pulse" />

        {/* Card content */}
        <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
          {/* Top row: Chip and PARAVIS wordmark */}
          <div className="flex justify-between items-start">
            {/* Metallic chip */}
            <div className="w-12 h-9 md:w-14 md:h-10 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200/50 to-transparent rounded-sm" />
              </div>
            </div>

            {/* PARAVIS wordmark */}
            <div className="text-right">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-slate-50">PARAVIS</h2>
            </div>
          </div>

          {/* Center: Waitlist form */}
          <div className="flex-1 flex items-center justify-center py-8">
            <WaitlistForm />
          </div>

          {/* Bottom row: Card details and hologram */}
          <div className="flex justify-between items-end">
            {/* Embossed card details */}
            <div className="space-y-2 text-slate-300">
              <div className="text-lg md:text-xl font-mono tracking-widest">1234 5678 9012 3456</div>
              <div className="text-sm md:text-base font-mono">VALID THRU 12/29</div>
              <div className="text-xs md:text-sm font-mono opacity-75">CARDHOLDER NAME</div>
            </div>

            {/* Holographic emblem */}
            <div className="w-16 h-16 md:w-20 md:h-20 opacity-30">
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
