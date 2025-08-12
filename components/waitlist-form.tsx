"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [clientMetadata, setClientMetadata] = useState({
    locale: undefined as string | undefined,
    referrer: undefined as string | undefined,
    utm_source: undefined as string | undefined,
    utm_medium: undefined as string | undefined,
    utm_campaign: undefined as string | undefined,
  })

  useEffect(() => {
    // Safely access browser APIs only on the client
    const urlParams = new URLSearchParams(window.location.search)
    setClientMetadata({
      locale: navigator.language,
      referrer: document.referrer || undefined,
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
    })
  }, [])

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email,
          ...clientMetadata,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("Welcome to the waitlist! We'll be in touch soon.")
        setEmail("")
      } else if (response.status === 429) {
        setStatus("error")
        setMessage("Too many requests. Please try again in an hour.")
      } else {
        setStatus("error")
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4" aria-label="Join waitlist form">
        <div className="relative">
          <label htmlFor="email-input" className="sr-only">
            Email address for waitlist signup
          </label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 bg-slate-900/70 border border-cyan-400/30 rounded-full text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
            disabled={isSubmitting}
            aria-describedby={status !== "idle" ? "form-status" : undefined}
            aria-invalid={status === "error"}
            required
            autoComplete="email"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-600 text-slate-900 font-semibold rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          whileTap={{ scale: 0.98 }}
          aria-describedby={status !== "idle" ? "form-status" : undefined}
        >
          <span className={`inline-block ${isSubmitting ? "animate-pulse" : ""}`}>
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </span>
        </motion.button>
      </form>

      {/* Status message */}
      {status !== "idle" && (
        <motion.div
          id="form-status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center text-sm ${status === "success" ? "text-cyan-400" : "text-red-400"}`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          aria-atomic="true"
        >
          {message}
        </motion.div>
      )}
    </div>
  )
}
