import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://paravis.app'),
  title: {
    default: "Paravis - Banking Without Borders",
    template: "%s | Paravis"
  },
  description: "A smarter way to send, spend, and save — anywhere. Built for migrants, powered by innovation. Join our waitlist for early access to revolutionary financial services.",
  keywords: [
    "banking",
    "fintech", 
    "migrants",
    "financial services",
    "cross-border payments",
    "digital banking",
    "money transfer",
    "paravis",
    "banking without borders",
    "international banking"
  ],
  authors: [{ name: "Paravis Team" }],
  creator: "Paravis",
  publisher: "Paravis",
  category: "Financial Technology",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paravis.app",
    siteName: "Paravis",
    title: "Paravis - Banking Without Borders",
    description: "A smarter way to send, spend, and save — anywhere. Built for migrants, powered by innovation.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Paravis Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paravis - Banking Without Borders",
    description: "A smarter way to send, spend, and save — anywhere. Built for migrants, powered by innovation.",
    images: ["/android-chrome-512x512.png"],
    creator: "@paravis",
    site: "@paravis",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
  alternates: {
    canonical: "https://paravis.app",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0891b2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        {/* AI-friendly meta tags for ChatGPT and other bots */}
        <meta name="ai:title" content="Paravis - Banking Without Borders" />
        <meta name="ai:description" content="Revolutionary financial services platform built for migrants. Offers cross-border payments, digital banking, and money transfer services." />
        <meta name="ai:keywords" content="fintech, banking, migrants, cross-border payments, digital banking, financial services" />
        <meta name="ai:type" content="financial technology service" />
        <meta name="ai:status" content="waitlist" />
        
        {/* Schema.org structured data for AI understanding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Paravis",
              "description": "A smarter way to send, spend, and save — anywhere. Built for migrants, powered by innovation.",
              "url": "https://paravis.app",
              "logo": "https://paravis.app/android-chrome-512x512.png",
              "foundingDate": "2025",
              "industry": "Financial Technology",
              "serviceType": "Digital Banking",
              "areaServed": "Global",
              "targetAudience": {
                "@type": "Audience",
                "audienceType": "Migrants and International Users"
              },
              "offers": {
                "@type": "Service",
                "name": "Digital Banking Services",
                "description": "Cross-border payments, digital banking, and money transfer services for migrants",
                "serviceType": "Financial Services"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "paravisapp@gmail.com"
              },
              "sameAs": [
                "https://twitter.com/paravis"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
