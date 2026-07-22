import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/forms/ContactForm"
import { site } from "@/lib/site"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contact — Tell Us What You Are Building",
  description:
    "Tell us about your software product, AI opportunity, or platform challenge and we'll help identify a practical next step. Get in touch with Aillegent.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://aillegent.com/contact" },
          ],
        }}
      />
      {/* ===== HERO ===== */}
      <section className="phero phero-center phero-og">
        <div className="glow g1" />
        <div className="glow g2" />
        <Image className="phero-bg-img" src="/img/og-cover.jpg" alt="" aria-hidden="true" fill sizes="100vw" priority />
        <div className="wrap phero-grid">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Contact</span>
            </div>
            <h1>
              Tell us what you are building—or what is <span className="grad-text">holding it back</span>
            </h1>
            <p className="lead">
              Share the product, the AI opportunity, the platform challenge, or the delivery bottleneck you want to
              improve. We will help identify a practical next step.
            </p>
          </div>
          <div className="phero-vis" data-animate aria-hidden="true">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#25D79B" />
                  <stop offset="1" stopColor="#3B7DE0" />
                </linearGradient>
              </defs>
              <rect className="v-panel" x="40" y="44" width="320" height="312" rx="20" />
              <text x="64" y="82" className="v-kick">CONVERSATION</text>
              <path className="v-line" data-draw d="M64 96 H336" />
              <rect className="v-panel" x="64" y="116" width="184" height="58" rx="15" />
              <rect className="v-white" x="82" y="134" width="120" height="7" rx="3.5" opacity=".72" />
              <rect className="v-white" x="82" y="150" width="84" height="7" rx="3.5" opacity=".34" />
              <rect className="v-tile" x="150" y="194" width="186" height="58" rx="15" />
              <rect className="v-mint" x="168" y="212" width="112" height="7" rx="3.5" />
              <rect className="v-mint" x="168" y="228" width="76" height="7" rx="3.5" opacity=".55" />
              <rect className="v-panel" x="64" y="272" width="96" height="40" rx="14" />
              <circle cx="90" cy="292" r="5" className="v-mint" />
              <circle cx="110" cy="292" r="5" className="v-mint" opacity=".6" />
              <circle cx="130" cy="292" r="5" className="v-mint" opacity=".3" />
              <rect className="v-line" x="64" y="326" width="272" height="2" rx="1" />
              <circle cx="312" cy="336" r="20" fill="url(#vg)" />
              <path className="v-ico-w" d="M304 336 h14 M313 331 l5 5 -5 5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <ContactForm />

            <div className="contact-side" data-animate>
              <div className="contact-item">
                <span className="ci">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="ci">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" /></svg>
                </span>
                <div>
                  <h4>Response</h4>
                  <p>We review context before replying.</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="ci">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <div>
                  <h4>Location</h4>
                  <p>Remote-first team · {site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
