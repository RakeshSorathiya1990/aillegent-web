import type React from "react"
import type { Metadata } from "next"
import { Rubik, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/site"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import MotionProvider from "@/components/motion/MotionProvider"
import "@/styles/main.scss"

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "product engineering",
    "applied AI",
    "data engineering",
    "cloud platform",
    "quality engineering",
    "cost optimisation",
    "software development",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: "/img/aillegent-mark.png",
    shortcut: "/img/aillegent-mark.png",
    apple: "/img/aillegent-mark.png",
  },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/img/aillegent-mark.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gandhinagar",
    addressCountry: "IN",
  },
  description: site.description,
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rubik.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* add the `js` hook before paint so reveal styles apply only with JS on */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
