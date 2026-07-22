import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Domain-driven software development across finance, intellectual property, advertising technology, and recruitment — engineering shaped by how your industry works.",
  alternates: { canonical: "/industries" },
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://aillegent.com/industries" },
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
              <span>Industries</span>
            </div>
            <h1>
              Engineering that speaks your <span className="grad-text">industry&apos;s language</span>
            </h1>
            <p className="lead">
              Technology is more useful when it understands the operating model around it. Aillegent applies product,
              AI, data, cloud, and quality capability across industries where the details matter.
            </p>
          </div>
          <div className="phero-vis" data-animate aria-hidden="true">
            {/* Domain nodes orbiting a shared core */}
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#25D79B" />
                  <stop offset="1" stopColor="#3B7DE0" />
                </linearGradient>
              </defs>
              {/* connective strokes core -> domains */}
              <path className="v-stroke" data-draw d="M200 200 L200 96" />
              <path className="v-stroke" data-draw d="M200 200 L304 200" />
              <path className="v-stroke" data-draw d="M200 200 L200 316" />
              <path className="v-stroke" data-draw d="M200 200 L96 200" />
              {/* domain nodes */}
              <g>
                <circle cx="200" cy="96" r="30" className="v-panel" />
                <text x="200" y="100" textAnchor="middle" className="v-kick">
                  FIN
                </text>
              </g>
              <g>
                <circle cx="304" cy="200" r="30" className="v-panel" />
                <text x="304" y="204" textAnchor="middle" className="v-kick">
                  IP
                </text>
              </g>
              <g>
                <circle cx="200" cy="316" r="30" className="v-panel" />
                <text x="200" y="320" textAnchor="middle" className="v-kick">
                  ADT
                </text>
              </g>
              <g>
                <circle cx="96" cy="200" r="30" className="v-panel" />
                <text x="96" y="204" textAnchor="middle" className="v-kick">
                  REC
                </text>
              </g>
              {/* shared engineering core */}
              <circle cx="200" cy="200" r="46" fill="url(#vg)" opacity="0.16" />
              <circle cx="200" cy="200" r="34" fill="none" stroke="url(#vg)" strokeWidth="2" />
              <g className="v-ico" transform="translate(188 188)" fill="none" strokeWidth="1.7">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="12" r="3" />
                <path d="M9 6h5a2 2 0 0 1 2 2v1M9 18h5a2 2 0 0 0 2-2v-1" />
              </g>
              <text x="200" y="250" textAnchor="middle" className="v-sub">
                One engineering core
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES LIST ===== */}
      <section className="section">
        <div className="wrap ind-wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Engineering shaped by <span className="grad-text">domain understanding</span>
            </h2>
            <p className="lead">
              We work where business processes, data, compliance, reliability, and operational speed all matter. Our
              approach starts with the domain — not just the technology choice.
            </p>
          </div>
          <div className="ind-list" data-animate>
            <Link className="ind-item" href="/industries/finance">
              <span className="n">01</span>
              <span className="t">Finance</span>
              <span className="arw">→</span>
            </Link>
            <Link className="ind-item" href="/industries/intellectual-property">
              <span className="n">02</span>
              <span className="t">Intellectual Property</span>
              <span className="arw">→</span>
            </Link>
            <Link className="ind-item" href="/industries/advertising-technology">
              <span className="n">03</span>
              <span className="t">Advertising Technology</span>
              <span className="arw">→</span>
            </Link>
            <Link className="ind-item" href="/industries/recruitment">
              <span className="n">04</span>
              <span className="t">Recruitment</span>
              <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section">
        <div className="wrap">
          <div className="cta" data-animate>
            <div className="cta-inner">
              <h2 className="balance">
                Your domain, <span className="grad-text">taken seriously</span>
              </h2>
              <p>
                Tell us about the operating model, the constraints, and the details that matter — we will meet you at
                that level.
              </p>
              <div className="btn-row u-jc-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Discuss your domain <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
