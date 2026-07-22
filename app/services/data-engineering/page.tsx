import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Data Engineering",
  description:
    "Data engineering services — warehousing, pipelines, cleaning, and analytics that make your data dependable, using Pandas, PySpark, NumPy, and modern tooling.",
  alternates: { canonical: "/services/data-engineering" },
}

export default function DataEngineeringPage() {
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
              { "@type": "ListItem", position: 3, name: "Data Engineering", item: "https://aillegent.com/services/data-engineering" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Data Engineering",
            serviceType: "Data Engineering",
            url: "https://aillegent.com/services/data-engineering",
            description:
              "Make your data dependable before you make it intelligent — warehousing, ingestion, cleaning, transformation, statistical analysis, and reporting from Aillegent.",
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
              <span>Data Engineering</span>
            </div>
            <h1>
              Make your data <span className="grad-text">dependable</span>
              <br /> before you make it intelligent
            </h1>
            <p className="lead">
              AI and analytics are only as good as the data underneath them. We gather, clean, structure, and analyse
              your data — so every model, dashboard, and decision stands on solid ground.
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

              {/* stage labels */}
              <text className="v-kick" x="58" y="38" textAnchor="middle">
                SOURCES
              </text>
              <text className="v-kick" x="204" y="38" textAnchor="middle">
                WAREHOUSE
              </text>
              <text className="v-kick" x="338" y="38" textAnchor="middle">
                INSIGHT
              </text>

              {/* scattered source tiles */}
              <rect className="v-panel" x="20" y="70" width="76" height="48" rx="10" />
              <g className="v-ico" transform="translate(32,82) scale(.85)">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 9h20" />
              </g>
              <text className="v-sub" x="58" y="98">
                APP
              </text>

              <rect className="v-panel" x="36" y="150" width="76" height="48" rx="10" />
              <g className="v-ico" transform="translate(48,162) scale(.85)">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 3v18" />
              </g>
              <text className="v-sub" x="74" y="178">
                SHEETS
              </text>

              <rect className="v-panel" x="20" y="230" width="76" height="48" rx="10" />
              <g className="v-ico" transform="translate(32,242) scale(.85)">
                <path d="M4 4h16M4 10h12M4 16h16M4 22h8" />
              </g>
              <text className="v-sub" x="58" y="258">
                LOGS
              </text>

              <rect className="v-panel" x="36" y="310" width="76" height="48" rx="10" />
              <g className="v-ico" transform="translate(48,322) scale(.85)">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
              </g>
              <text className="v-sub" x="74" y="338">
                CRM
              </text>

              {/* ingestion flows into the warehouse */}
              <path className="v-stroke" data-draw d="M96 94 C140 94 142 176 168 184" />
              <path className="v-stroke" data-draw d="M112 174 C138 174 144 192 166 196" />
              <path className="v-stroke" data-draw d="M96 254 C140 254 142 226 168 216" />
              <path className="v-stroke" data-draw d="M112 334 C150 334 148 244 170 228" />

              {/* warehouse cylinder */}
              <g className="v-ico-w" transform="translate(166,156)">
                <ellipse cx="38" cy="14" rx="38" ry="14" />
                <path d="M0 14v66c0 7.7 17 14 38 14s38-6.3 38-14V14" />
                <path d="M0 47c0 7.7 17 14 38 14s38-6.3 38-14" />
              </g>
              <circle className="v-mint" cx="204" cy="170" r="3.5" />
              <text className="v-sub" x="204" y="272" textAnchor="middle">
                STRUCTURED · GOVERNED
              </text>

              {/* delivery flow to insight */}
              <path className="v-stroke" data-draw d="M242 200 C270 200 280 186 304 186" />

              {/* insight bar-chart panel */}
              <rect className="v-tile" x="304" y="140" width="76" height="96" rx="12" />
              <rect className="v-sky" x="318" y="196" width="10" height="26" rx="2" />
              <rect className="v-mint" x="334" y="180" width="10" height="42" rx="2" />
              <rect className="v-sky" x="350" y="164" width="10" height="58" rx="2" />
              <text className="v-sub" x="342" y="252" textAnchor="middle">
                REPORTING
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
              What we <span className="grad-text">deliver</span>
            </h2>
            <p className="lead">
              From scattered sources to analysis-ready datasets — the full path from raw data to answers people trust.
            </p>
          </div>
          <div className="grid g-3" style={{ marginTop: 56 }}>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                  <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                </svg>
              </div>
              <h3>Data warehousing</h3>
              <p>A single, structured home for your business data.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 3v12" />
                  <path d="m8 11 4 4 4-4" />
                  <path d="M4 19h16" />
                </svg>
              </div>
              <h3>Data gathering &amp; ingestion</h3>
              <p>Bringing scattered sources into one reliable flow.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="m9 12 2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3>Data cleaning &amp; preparation</h3>
              <p>Accurate, consistent, analysis-ready datasets.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                  <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                  <path d="m9 9 6 6M15 9l-6 6" />
                </svg>
              </div>
              <h3>Data manipulation &amp; transformation</h3>
              <p>Reshaping data for the questions you ask.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M3 3v18h18" />
                  <path d="m7 15 4-5 3 3 5-7" />
                </svg>
              </div>
              <h3>Statistical analysis</h3>
              <p>Honest answers about what the numbers actually say.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="12" width="4" height="8" rx="1" />
                  <rect x="10" y="8" width="4" height="12" rx="1" />
                  <rect x="17" y="4" width="4" height="16" rx="1" />
                </svg>
              </div>
              <h3>Visualisation &amp; reporting</h3>
              <p>Charts and dashboards people actually read.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              A proven <span className="grad-text">Python data stack</span>
            </h2>
            <p className="lead">The tools we reach for across ingestion, transformation, analysis, and reporting.</p>
          </div>
          <div className="tags" data-animate style={{ marginTop: 40 }}>
            <span className="tag">Python</span>
            <span className="tag">Pandas</span>
            <span className="tag">PySpark</span>
            <span className="tag">NumPy</span>
            <span className="tag">Matplotlib</span>
            <span className="tag">Seaborn</span>
          </div>
        </div>
      </section>

      {/* ===== CROSS-LINK ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Data that feeds <span className="grad-text">everything else</span>
            </h2>
            <p className="lead">
              Clean data foundations power our{" "}
              <Link href="/services/applied-ai" style={{ color: "var(--brand)", fontWeight: 500 }}>
                Applied AI engagements
              </Link>
              , sharpen cost decisions, and make monitoring meaningful. Data Engineering is where the other capabilities
              get their fuel.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/services/cloud-platform">
              Cloud &amp; Platform Engineering <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Put your data to work</Link>
          </p>
        </div>
      </section>
    </>
  )
}
