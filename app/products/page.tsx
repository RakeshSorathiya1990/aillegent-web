import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Products — Shilp, Eventik & Permit360",
  description:
    "Software Aillegent builds, owns, and runs — Shilp for cinematic AI prompts, Eventik for AI photo delivery, and Permit360 for electronic permit-to-work.",
  alternates: { canonical: "/products" },
}

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "https://aillegent.com/products" },
          ],
        }}
      />
      {/* ===== INNER HERO ===== */}
      <section className="phero phero-center">
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="wrap phero-grid">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Products</span>
            </div>
            <h1>
              Software we <span className="grad-text">build, own, and run</span>
            </h1>
            <p className="lead">
              Alongside client engineering, Aillegent builds its own products — the clearest proof of how we design,
              ship, and operate software in production.
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

              {/* connectors from the AI core to each generated output */}
              <path className="v-stroke" data-draw d="M150 200 C 200 148 208 100 244 100" />
              <path className="v-stroke" data-draw d="M156 200 H 244" />
              <path className="v-stroke" data-draw d="M150 200 C 200 252 208 300 244 300" />

              {/* AI core */}
              <circle cx="106" cy="200" r="52" className="v-tile" />
              <circle cx="106" cy="200" r="52" fill="none" stroke="url(#vg)" strokeWidth="2.4" />
              <g transform="translate(106,200) scale(1.7) translate(-12,-12)">
                <path className="v-ico" d="M12 3c.4 3.5 2.5 5.6 6 6-3.5.4-5.6 2.5-6 6-.4-3.5-2.5-5.6-6-6 3.5-.4 5.6-2.5 6-6z" />
                <path className="v-ico" d="M19 14c.16 1.4 1 2.24 2.4 2.4-1.4.16-2.24 1-2.4 2.4-.16-1.4-1-2.24-2.4-2.4 1.4-.16 2.24-1 2.4-2.4z" />
              </g>
              <text className="v-kick" x="106" y="278" textAnchor="middle">
                AI CORE
              </text>

              {/* output 1 · cinematic frame */}
              <rect className="v-panel" x="248" y="62" width="120" height="76" rx="10" />
              <rect className="v-line" x="262" y="76" width="92" height="40" rx="5" />
              <path className="v-mint" d="M300 84 l16 12 -16 12 z" />
              <text className="v-sub" x="262" y="132">
                FILM
              </text>

              {/* output 2 · worksheet */}
              <rect className="v-panel" x="248" y="162" width="120" height="76" rx="10" />
              <path className="v-line" d="M262 180 H346 M262 196 H346 M262 212 H330 M304 176 V216" />
              <path className="v-ico" d="M266 197 l4 4 8 -9" />
              <text className="v-sub" x="262" y="232">
                PHOTOS
              </text>

              {/* output 3 · insight */}
              <rect className="v-panel" x="248" y="262" width="120" height="76" rx="10" />
              <g className="v-sky">
                <rect x="266" y="300" width="12" height="18" rx="2" />
                <rect x="290" y="292" width="12" height="26" rx="2" />
                <rect x="314" y="284" width="12" height="34" rx="2" />
                <rect x="338" y="296" width="12" height="22" rx="2" />
              </g>
              <path className="v-stroke" d="M272 296 L296 288 L320 280 L344 292" />
              <text className="v-sub" x="262" y="332">
                PERMITS
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="prod-grid prod-grid-3">
            <article className="prod" data-animate>
              <div className="prod-vis">
                <Image src="/img/shilp-app.jpg" alt="" width={1500} height={1000} loading="lazy" />
              </div>
              <div className="prod-body">
                <span className="prod-tag">Creative AI</span>
                <h3>Shilp</h3>
                <p>
                  <strong>Indian cinematic prompt generation, shaped by your creative intent.</strong> Shilp is an AI
                  prompt generator that turns an idea, scene, or brand need into richer Indian-style, cinematic prompts
                  for image and video creation.
                </p>
                <Link className="btn-text" href="/products/shilp">
                  Explore Shilp <span className="arw">→</span>
                </Link>
              </div>
            </article>
            <article className="prod" data-animate>
              <div className="prod-vis">
                <Image src="/img/eventik-extra-2.jpeg" alt="" width={1440} height={1024} loading="lazy" />
              </div>
              <div className="prod-body">
                <span className="prod-tag">Photography AI</span>
                <h3>Eventik</h3>
                <p>
                  <strong>AI photo delivery and studio management, in one place.</strong> Eventik is the complete
                  platform for event photographers and studios — guests find their own photos with a single selfie, and
                  the business runs from one login.
                </p>
                <Link className="btn-text" href="/products/eventik">
                  Explore Eventik <span className="arw">→</span>
                </Link>
              </div>
            </article>
            <article className="prod" data-animate>
              <div className="prod-vis">
                <svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <g fill="none" stroke="#3B7DE0" strokeWidth="1.5" opacity=".8">
                    <rect x="40" y="34" width="150" height="38" rx="8" />
                    <rect x="40" y="82" width="150" height="38" rx="8" />
                  </g>
                  <g fill="#3B7DE0" opacity=".4">
                    <rect x="54" y="46" width="60" height="5" rx="2.5" />
                    <rect x="54" y="57" width="40" height="5" rx="2.5" />
                    <rect x="54" y="94" width="60" height="5" rx="2.5" />
                    <rect x="54" y="105" width="40" height="5" rx="2.5" />
                  </g>
                  <g fill="#25D79B29" stroke="#0E9E7680" strokeWidth="1.2">
                    <rect x="146" y="42" width="34" height="16" rx="8" />
                    <rect x="146" y="90" width="34" height="16" rx="8" />
                  </g>
                  <g fill="none" stroke="#25D79B" strokeWidth="1.5">
                    <path d="M198 77 H238" />
                    <path d="M231 70 l7 7 -7 7" />
                  </g>
                  <circle cx="292" cy="77" r="34" fill="none" stroke="#0E9E76" strokeWidth="1.6" />
                  <path d="M279 77l9 9 16-18" fill="none" stroke="#25D79B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="prod-body">
                <span className="prod-tag">Industrial EHS</span>
                <h3>Permit360</h3>
                <p>
                  <strong>The electronic work permit system for modern plants.</strong> Permit360 replaces paper permits
                  and email approvals with one cloud-based, auditable permit-to-work platform — built for chemical,
                  pharma, and manufacturing sites.
                </p>
                <Link className="btn-text" href="/products/permit360">
                  Explore Permit360 <span className="arw">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section">
        <div className="wrap">
          <div className="cta" data-animate>
            <div className="cta-inner">
              <h2 className="balance">
                Want a <span className="grad-text">closer look</span> at any of them?
              </h2>
              <p>
                Request a walkthrough and we will show you the product on a real example — your use case, not a canned
                demo.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Request a product walkthrough <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
