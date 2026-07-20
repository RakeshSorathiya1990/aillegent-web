import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cost Optimisation",
  description:
    "Control the cost of building and running your platform — across development practices, team allocation, infrastructure, cloud architecture, monitoring, and performance.",
  alternates: { canonical: "/services/cost-optimisation" },
}

export default function CostOptimisationPage() {
  return (
    <>
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
              <span>Cost Optimisation</span>
            </div>
            <h1>
              Control the cost of
              <br /> <span className="grad-text">building and running</span>
              <br /> your platform
            </h1>
            <p className="lead">
              Cost is a product decision as much as a finance decision. We look across development practices, team
              allocation, infrastructure usage, cloud architecture, monitoring, and performance to find practical
              savings.
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

              <text className="v-kick" x="40" y="40">
                COST PER RELEASE
              </text>

              {/* axes */}
              <line className="v-line" x1="52" y1="70" x2="52" y2="320" />
              <line className="v-line" x1="52" y1="320" x2="372" y2="320" />
              {/* gridlines */}
              <line className="v-line" x1="52" y1="130" x2="372" y2="130" opacity=".4" />
              <line className="v-line" x1="52" y1="200" x2="372" y2="200" opacity=".4" />
              <line className="v-line" x1="52" y1="270" x2="372" y2="270" opacity=".4" />

              {/* descending bars */}
              <rect className="v-tile" x="70" y="120" width="42" height="200" rx="4" />
              <rect className="v-tile" x="132" y="160" width="42" height="160" rx="4" />
              <rect className="v-tile" x="194" y="200" width="42" height="120" rx="4" />
              <rect className="v-tile" x="256" y="240" width="42" height="80" rx="4" />
              <rect className="v-tile" x="318" y="272" width="42" height="48" rx="4" />

              {/* trending-down curve over bars */}
              <path className="v-stroke" data-draw d="M91 116 L153 156 L215 196 L277 236 L339 268" />

              {/* before / after markers */}
              <circle className="v-sky" cx="91" cy="116" r="6" />
              <circle className="v-mint" cx="339" cy="268" r="6" />
              <text className="v-lab" x="91" y="104" textAnchor="middle">
                Before
              </text>
              <text className="v-lab" x="339" y="256" textAnchor="middle">
                After
              </text>

              {/* trending-down icon */}
              <g transform="translate(320,336) scale(.9)">
                <path className="v-ico" d="M16 17h6v-6" />
                <path className="v-ico" d="m22 17-8.5-8.5-5 5L2 7" />
              </g>

              {/* x-axis labels */}
              <g className="v-sub" textAnchor="middle">
                <text x="91" y="340">
                  M1
                </text>
                <text x="153" y="340">
                  M2
                </text>
                <text x="215" y="340">
                  M3
                </text>
                <text x="277" y="340">
                  M4
                </text>
                <text x="339" y="340">
                  M5
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== TWO DIMENSIONS (g-2 cards) ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Where cost is <span className="grad-text">actually decided</span>
            </h2>
            <p className="lead">
              Sustainable savings come from two directions at once — how the product is built, and what it takes to run.
            </p>
          </div>
          <div className="grid g-2" style={{ marginTop: 52 }}>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <span className="cn">01</span>
              <h3>Development cost</h3>
              <p>
                Delivery processes, engineering effort, rework, automation, maintainability, and the right level of
                technical complexity.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 13v8" />
                  <path d="m8 17 4-4 4 4" />
                  <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
                </svg>
              </div>
              <span className="cn">02</span>
              <h3>Resource cost</h3>
              <p>Team composition, cloud infrastructure, databases, containers, monitoring, and capacity usage.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== ILLUSTRATIVE FIGURES (stat band) ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Practical opportunities, <span className="grad-text">not blunt cuts</span>
            </h2>
            <p className="lead">
              A structured review looks across delivery and resource usage to find optimisation that lasts as the product
              grows.
            </p>
          </div>
          <div className="stat-band" data-animate style={{ marginTop: 48 }}>
            <div className="stat">
              <div className="v" data-count="30" data-suffix="%">
                0%
              </div>
              <div className="k">Lower cloud run-cost*</div>
            </div>
            <div className="stat">
              <div className="v" data-count="40" data-suffix="%">
                0%
              </div>
              <div className="k">Less delivery rework*</div>
            </div>
            <div className="stat">
              <div className="v" data-count="3" data-suffix="×">
                0×
              </div>
              <div className="k">Faster capacity decisions*</div>
            </div>
            <div className="stat">
              <div className="v" data-count="6">
                0
              </div>
              <div className="k">Cost levers reviewed*</div>
            </div>
          </div>
          <div className="data-note" data-animate>
            * Illustrative — replace with verified data.
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/services">
              All services <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Find your savings</Link>
          </p>
        </div>
      </section>
    </>
  )
}
