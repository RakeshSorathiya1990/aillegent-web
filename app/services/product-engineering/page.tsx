import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Product Engineering | Custom Software & Architecture",
  description:
    "Custom software product development — platforms, backends, and APIs engineered around your business requirements, from architecture through to production.",
  alternates: { canonical: "/services/product-engineering" },
}

export default function ProductEngineeringPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://aillegent.com/services" },
              { "@type": "ListItem", position: 3, name: "Product Engineering", item: "https://aillegent.com/services/product-engineering" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Product Engineering",
            serviceType: "Product Engineering",
            url: "https://aillegent.com/services/product-engineering",
            description:
              "Turn product requirements into software people can rely on — custom development, frontend and backend engineering, APIs, architecture, and production readiness.",
            provider: { "@type": "Organization", "@id": "https://aillegent.com/#organization" },
            areaServed: "Worldwide",
          },
        ]}
      />
      {/* ===== INNER HERO ===== */}
      <section className="phero">
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="wrap phero-grid">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/services">Services</Link>
              <span className="sep">/</span>
              <span>Product Engineering</span>
            </div>
            <h1>
              Turn product requirements
              <br /> into software people can <span className="grad-text">rely on</span>
            </h1>
            <p className="lead">
              We design and build custom products from the first requirement through delivery, release, and iteration.
              The work combines business understanding, technical architecture, documentation, frontend and backend
              development, and production readiness.
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
              {/* source blocks: UI / API / DATA assembling into a product */}
              <rect x="30" y="60" width="104" height="60" rx="12" className="v-tile" />
              <g className="v-ico" transform="translate(46,78)">
                <rect x="0" y="0" width="24" height="18" rx="2" />
                <path d="M0 6h24" />
              </g>
              <text x="80" y="96" className="v-title">
                UI
              </text>
              <rect x="30" y="170" width="104" height="60" rx="12" className="v-tile" />
              <g className="v-ico" transform="translate(46,188)">
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </g>
              <text x="80" y="206" className="v-title">
                API
              </text>
              <rect x="30" y="280" width="104" height="60" rx="12" className="v-tile" />
              <g className="v-ico" transform="translate(46,298)">
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
              </g>
              <text x="80" y="316" className="v-title">
                DATA
              </text>
              {/* assembly connectors */}
              <path className="v-stroke" data-draw d="M134 90 C186 90 190 174 232 178" />
              <path className="v-stroke" data-draw d="M134 200 C170 202 190 198 232 200" />
              <path className="v-stroke" data-draw d="M134 310 C186 310 190 226 232 222" />
              {/* assembled product panel */}
              <rect x="236" y="112" width="134" height="176" rx="14" className="v-panel" />
              <rect x="252" y="130" width="102" height="20" rx="5" className="v-tile" />
              <circle cx="264" cy="140" r="3.5" className="v-mint" />
              <text x="303" y="144" textAnchor="middle" className="v-kick">
                PRODUCT
              </text>
              <rect x="252" y="162" width="102" height="9" rx="4.5" className="v-line" fill="#FFFFFF14" />
              <rect x="252" y="180" width="76" height="9" rx="4.5" className="v-line" fill="#FFFFFF14" />
              <rect x="252" y="198" width="88" height="9" rx="4.5" className="v-line" fill="#FFFFFF14" />
              <rect x="252" y="222" width="102" height="48" rx="8" className="v-tile" />
              <text x="303" y="249" textAnchor="middle" className="v-lab" fontSize="9px" letterSpacing=".04em">
                Ships to production
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DELIVER ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              From first requirement to a <span className="grad-text">production-ready product</span>
            </h2>
          </div>
          <ul className="deliver u-mt-44" data-animate>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Custom web and platform development</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Frontend and backend engineering</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>API and integration development</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Product discovery and requirement analysis</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Solution architecture and technical documentation</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Product modernisation and capability expansion</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== ARCHITECTURE ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Choose the architecture that <span className="grad-text">fits the business</span>
            </h2>
            <p className="lead">
              We select the approach based on operational needs, product maturity, team capability, and future scale —
              not trend alone.
            </p>
          </div>
          <div className="spec u-mt-44" data-animate>
            <div className="spec-row">
              <div className="st">
                <span className="rn">01</span>Monolithic architecture
              </div>
              <div className="sd">A focused foundation for a product that needs speed, cohesion, and manageable complexity.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">02</span>Microservices
              </div>
              <div className="sd">Independently deployable services for systems that benefit from clear boundaries and operational scale.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">03</span>Domain-driven design
              </div>
              <div className="sd">A model that keeps software language and boundaries close to the business domain.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">04</span>Event-driven systems
              </div>
              <div className="sd">A responsive approach where events trigger downstream actions.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">05</span>Distributed transaction patterns
              </div>
              <div className="sd">Reliable coordination for operations that span services and require controlled consistency.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">The stack behind the build</h2>
          </div>
          <div className="tags u-mt-36" data-animate>
            <span className="tag">Java</span>
            <span className="tag">Node.js</span>
            <span className="tag">Python</span>
            <span className="tag">Frontend development</span>
            <span className="tag">Backend development</span>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/services/applied-ai">
              Applied AI <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Plan your product build</Link>
          </p>
        </div>
      </section>
    </>
  )
}
