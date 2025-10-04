import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Aillegent - Transform Your Vision Into Reality",
  description:
    "Enterprise software development company with 10 years of experience building scalable solutions across Health, Finance, Travel, and more.",

  icons: {
    // main favicon (used by most browsers)
    icon: "/allig-trio.png",
    // pinned / shortcut icon (Windows / some browsers)
    shortcut: "/allig-trio.png",
    // apple touch icon for iOS / Safari
    apple: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
