import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Services | Product, AI, Cloud, Quality & Cost",
  description:
    "End-to-end software development services — product engineering, applied AI, data engineering, cloud, quality, and cost optimisation for teams ready to scale.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://aillegent.com/services" },
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
              <span>Services</span>
            </div>
            <h1>
              Engineering capability
              <br /> that connects from
              <br /> <span className="grad-text">idea to operations</span>
            </h1>
            <p className="lead">
              Choose a focused engagement or combine capabilities across the whole lifecycle. Aillegent connects product
              strategy, software delivery, AI, data, cloud operations, quality, and cost control into one delivery model.
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
              {/* connectors from the central requirement to each capability */}
              <g>
                <path className="v-stroke" data-draw d="M200 200 L200 74" />
                <path className="v-stroke" data-draw d="M200 200 L322 158" />
                <path className="v-stroke" data-draw d="M200 200 L275 300" />
                <path className="v-stroke" data-draw d="M200 200 L125 300" />
                <path className="v-stroke" data-draw d="M200 200 L78 158" />
              </g>
              {/* capability: product (code) */}
              <circle cx="200" cy="74" r="30" className="v-panel" />
              <g className="v-ico" transform="translate(188,62)">
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </g>
              <text x="200" y="24" textAnchor="middle" className="v-lab">
                Product
              </text>
              {/* capability: applied ai (sparkle) */}
              <circle cx="322" cy="158" r="30" className="v-panel" />
              <g className="v-ico" transform="translate(310,146)">
                <path d="M12 3c.4 3.5 2.5 5.6 6 6-3.5.4-5.6 2.5-6 6-.4-3.5-2.5-5.6-6-6 3.5-.4 5.6-2.5 6-6z" />
              </g>
              <text x="322" y="206" textAnchor="middle" className="v-lab">
                Applied AI
              </text>
              {/* capability: cloud */}
              <circle cx="275" cy="300" r="30" className="v-panel" />
              <g className="v-ico" transform="translate(263,288)">
                <path d="M12 13v8" />
                <path d="m8 17 4-4 4 4" />
                <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
              </g>
              <text x="275" y="352" textAnchor="middle" className="v-lab">
                Cloud
              </text>
              {/* capability: quality (shield-check) */}
              <circle cx="125" cy="300" r="30" className="v-panel" />
              <g className="v-ico" transform="translate(113,288)">
                <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </g>
              <text x="125" y="352" textAnchor="middle" className="v-lab">
                Quality
              </text>
              {/* capability: cost (trending-down) */}
              <circle cx="78" cy="158" r="30" className="v-panel" />
              <g className="v-ico" transform="translate(66,146)">
                <path d="M16 17h6v-6" />
                <path d="m22 17-8.5-8.5-5 5L2 7" />
              </g>
              <text x="78" y="206" textAnchor="middle" className="v-lab">
                Cost
              </text>
              {/* central requirement node */}
              <circle cx="200" cy="200" r="40" className="v-tile" />
              <text x="200" y="194" textAnchor="middle" className="v-kick">
                YOUR
              </text>
              <text x="200" y="208" textAnchor="middle" className="v-title">
                Requirement
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== SERVICE GROUPS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Focused engagements that <span className="grad-text">combine into a lifecycle</span>
            </h2>
            <p className="lead">
              Each capability stands on its own — or works alongside the others across discovery, build, deployment,
              quality, and operations.
            </p>
          </div>
          <div className="cap-grid u-mt-56">
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <span className="cn">01</span>
              <h3>Product Engineering</h3>
              <p>Custom product development, frontend and backend engineering, APIs, architecture, and modernisation.</p>
              <Link className="btn-text" href="/services/product-engineering">
                Explore <span className="arw">→</span>
              </Link>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 3c.4 3.5 2.5 5.6 6 6-3.5.4-5.6 2.5-6 6-.4-3.5-2.5-5.6-6-6 3.5-.4 5.6-2.5 6-6z" />
                  <path d="M19 14c.16 1.4 1 2.24 2.4 2.4-1.4.16-2.24 1-2.4 2.4-.16-1.4-1-2.24-2.4-2.4 1.4-.16 2.24-1 2.4-2.4z" />
                </svg>
              </div>
              <span className="cn">02</span>
              <h3>Applied AI</h3>
              <p>
                AI product design, machine learning, deep learning, custom LLMs, fine-tuning, MLOps, LLMOps, and agentic
                automation.
              </p>
              <Link className="btn-text" href="/services/applied-ai">
                Explore <span className="arw">→</span>
              </Link>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                  <path d="M3 12a9 3 0 0 0 18 0" />
                </svg>
              </div>
              <span className="cn">03</span>
              <h3>Data Engineering</h3>
              <p>
                Data warehousing, gathering and ingestion, cleaning and preparation, manipulation, statistical analysis,
                and visualisation.
              </p>
              <Link className="btn-text" href="/services/data-engineering">
                Explore <span className="arw">→</span>
              </Link>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 13v8" />
                  <path d="m8 17 4-4 4 4" />
                  <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
                </svg>
              </div>
              <span className="cn">04</span>
              <h3>Cloud &amp; Platform Engineering</h3>
              <p>
                Deployment, CI/CD, Docker, ECS and container platforms, security, governance, monitoring, storage,
                databases, and infrastructure.
              </p>
              <Link className="btn-text" href="/services/cloud-platform">
                Explore <span className="arw">→</span>
              </Link>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="cn">05</span>
              <h3>Quality Engineering</h3>
              <p>
                Business scenario breakdown, test environments, UAT, production confidence, web automation, API
                automation, and performance testing.
              </p>
              <Link className="btn-text" href="/services/quality-engineering">
                Explore <span className="arw">→</span>
              </Link>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M16 17h6v-6" />
                  <path d="m22 17-8.5-8.5-5 5L2 7" />
                </svg>
              </div>
              <span className="cn">06</span>
              <h3>Cost Optimisation</h3>
              <p>
                Delivery efficiency, team and resource planning, infrastructure usage, monitoring, and cost-aware
                architecture.
              </p>
              <Link className="btn-text" href="/services/cost-optimisation">
                Explore <span className="arw">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CROSS-SERVICE / ARCHITECTURE ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="split">
            <div data-animate>
              <h2 className="h2 balance u-mt-14">
                Designed around your <span className="grad-text">business requirement</span>
              </h2>
              <p className="lead u-mt-18">
                The right solution may be a focused monolith, a microservice platform, a domain-driven design, an
                event-driven system, or a distributed-transaction architecture. We select the approach based on
                operational needs, product maturity, team capability, and future scale — not trend alone.
              </p>
              <div className="tags u-mt-26">
                <span className="tag">Monolith</span>
                <span className="tag">Microservices</span>
                <span className="tag">Domain-driven design</span>
                <span className="tag">Event-driven</span>
                <span className="tag">Distributed transactions</span>
              </div>
            </div>
            <div className="split-media" data-animate aria-hidden="true">
              <svg viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="mg" x1="0" y1="0" x2="400" y2="300">
                    <stop offset="0" stopColor="#0E9E76" />
                    <stop offset="1" stopColor="#3B7DE0" />
                  </linearGradient>
                </defs>
                {/* requirement source */}
                <rect x="20" y="110" width="120" height="72" rx="14" className="m-panel" />
                <text x="80" y="138" textAnchor="middle" className="m-kick">
                  REQUIREMENT
                </text>
                <text x="80" y="158" textAnchor="middle" className="m-sub" fontSize="8px">
                  needs · scale · team
                </text>
                {/* architecture options */}
                <rect x="240" y="22" width="148" height="36" rx="10" className="m-panel" />
                <text x="258" y="44" className="m-muted" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5px">
                  Monolith
                </text>
                <rect x="240" y="68" width="148" height="36" rx="10" className="m-panel" />
                <text x="258" y="90" className="m-muted" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5px">
                  Microservices
                </text>
                {/* selected fit — highlighted */}
                <rect x="240" y="114" width="148" height="36" rx="10" className="m-tile" />
                <circle cx="374" cy="132" r="5" className="m-pulse" />
                <text
                  x="258"
                  y="136"
                  className="m-ink"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="10.5px"
                  fontWeight={600}
                >
                  Domain-driven
                </text>
                <rect x="240" y="160" width="148" height="36" rx="10" className="m-panel" />
                <text x="258" y="182" className="m-muted" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5px">
                  Event-driven
                </text>
                <rect x="240" y="206" width="148" height="36" rx="10" className="m-panel" />
                <text x="258" y="228" className="m-muted" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5px">
                  Distributed txn
                </text>
                {/* faint links to unselected */}
                <path fill="none" stroke="#8296AA59" strokeWidth="1.5" d="M140 146 C192 120 200 48 240 40" />
                <path fill="none" stroke="#8296AA59" strokeWidth="1.5" d="M140 146 C192 130 200 98 240 86" />
                <path fill="none" stroke="#8296AA59" strokeWidth="1.5" d="M140 146 C192 166 200 188 240 178" />
                <path fill="none" stroke="#8296AA59" strokeWidth="1.5" d="M140 146 C192 182 200 230 240 224" />
                {/* selected connector — bold gradient */}
                <path className="m-stroke" data-draw d="M140 146 C194 146 198 132 240 132" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH MARQUEE ===== */}
      <section className="section-sm" aria-label="Technologies we build with">
        <div className="wrap">
          <div className="marquee-cap" data-animate>
            The stack we build on
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            <span className="mq-item">Java</span>
            <span className="mq-item">Node.js</span>
            <span className="mq-item">Python</span>
            <span className="mq-item">React</span>
            <span className="mq-item">Next.js</span>
            <span className="mq-item">TypeScript</span>
            <span className="mq-item">PostgreSQL</span>
            <span className="mq-item">AWS</span>
            <span className="mq-item">Docker</span>
            <span className="mq-item">Kubernetes</span>
            <span className="mq-item">Terraform</span>
            <span className="mq-item">Kafka</span>
            <span className="mq-item">Pandas</span>
            <span className="mq-item">PySpark</span>
            <span className="mq-item">TensorFlow</span>
            <span className="mq-item">PyTorch</span>
            <span className="mq-item">LangChain</span>
            <span className="mq-item">GraphQL</span>
            <span className="mq-item">Java</span>
            <span className="mq-item">Node.js</span>
            <span className="mq-item">Python</span>
            <span className="mq-item">React</span>
            <span className="mq-item">Next.js</span>
            <span className="mq-item">TypeScript</span>
            <span className="mq-item">PostgreSQL</span>
            <span className="mq-item">AWS</span>
            <span className="mq-item">Docker</span>
            <span className="mq-item">Kubernetes</span>
            <span className="mq-item">Terraform</span>
            <span className="mq-item">Kafka</span>
            <span className="mq-item">Pandas</span>
            <span className="mq-item">PySpark</span>
            <span className="mq-item">TensorFlow</span>
            <span className="mq-item">PyTorch</span>
            <span className="mq-item">LangChain</span>
            <span className="mq-item">GraphQL</span>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section">
        <div className="wrap">
          <div className="cta" data-animate>
            <div className="cta-inner">
              <h2 className="balance">
                Not sure <span className="grad-text">where to start?</span>
              </h2>
              <p>One focused capability or the whole lifecycle — you don&apos;t need the full answer before reaching out.</p>
              <div className="btn-row u-jc-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Let&apos;s figure it out together <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
