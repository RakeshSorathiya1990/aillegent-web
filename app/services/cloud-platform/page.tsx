import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cloud & Platform Engineering",
  description:
    "Cloud foundations that make releases repeatable, systems observable, access controlled, and infrastructure cost visible — deployment, CI/CD, containers, monitoring, and governance.",
  alternates: { canonical: "/services/cloud-platform" },
}

export default function CloudPlatformPage() {
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
              <span>Cloud &amp; Platform</span>
            </div>
            <h1>
              Make production operations a
              <br /> <span className="grad-text">product capability</span>
            </h1>
            <p className="lead">
              A production environment should make releases repeatable, systems observable, access controlled, and
              infrastructure cost visible. We design cloud foundations that support the application — not slow it down.
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

              {/* production cloud with monitoring */}
              {/* Labels sit clearly above the cloud shape */}
              <text className="v-kick" x="48" y="26">
                PRODUCTION CLOUD
              </text>
              <text className="v-sub" x="70" y="48">
                MONITORING
              </text>
              {/* cloud shape below the labels */}
              <path
                className="v-panel"
                d="M52 108 a30 30 0 0 1 22 -52 a40 40 0 0 1 74 4 a34 34 0 0 1 56 12 a30 30 0 0 1 44 26 a26 26 0 0 1 -12 50 H70 a30 30 0 0 1 -18 -40 z"
              />
              {/* monitoring waveform */}
              <polyline className="v-line" points="70,118 330,118" />
              <path className="v-stroke" data-draw d="M70 114 L104 100 L134 122 L166 88 L200 114 L236 92 L268 116 L300 102 L330 118" />
              <circle className="v-mint" cx="166" cy="88" r="4" />
              <circle className="v-sky" cx="236" cy="92" r="4" />
              {/* monitoring labels */}
              <g className="v-lab">
                <text x="70" y="142">
                  Health
                </text>
                <text x="160" y="142">
                  Logs
                </text>
                <text x="238" y="142">
                  Alerts
                </text>
              </g>

              {/* rising deploy arrow into cloud */}
              <path className="v-stroke" data-draw d="M200 296 L200 166" />
              <path className="v-mint" d="M200 152 L192 168 L208 168 Z" />

              {/* pipeline stages (bottom) */}
              {/* 01 Commit */}
              <rect className="v-tile" x="16" y="300" width="108" height="72" rx="12" />
              <g transform="translate(28,314) scale(.72)">
                <path className="v-ico" d="m18 16 4-4-4-4" />
                <path className="v-ico" d="m6 8-4 4 4 4" />
                <path className="v-ico" d="m14.5 4-5 16" />
              </g>
              <text className="v-kick" x="86" y="326">
                01
              </text>
              <text className="v-lab" x="70" y="360" textAnchor="middle">
                Commit
              </text>

              {/* 02 Build & CI */}
              <rect className="v-tile" x="146" y="300" width="108" height="72" rx="12" />
              <g transform="translate(158,314) scale(.72)">
                <circle className="v-ico" cx="6" cy="6" r="3" />
                <circle className="v-ico" cx="6" cy="18" r="3" />
                <circle className="v-ico" cx="18" cy="12" r="3" />
                <path className="v-ico" d="M9 6h5a2 2 0 0 1 2 2v1M9 18h5a2 2 0 0 0 2-2v-1" />
              </g>
              <text className="v-kick" x="216" y="326">
                02
              </text>
              <text className="v-lab" x="200" y="360" textAnchor="middle">
                Build &amp; CI/CD
              </text>

              {/* 03 Deploy */}
              <rect className="v-tile" x="276" y="300" width="108" height="72" rx="12" />
              <g transform="translate(288,314) scale(.72)">
                <path className="v-ico" d="M12 13v8" />
                <path className="v-ico" d="m8 17 4-4 4 4" />
                <path className="v-ico" d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
              </g>
              <text className="v-kick" x="346" y="326">
                03
              </text>
              <text className="v-lab" x="330" y="360" textAnchor="middle">
                Deploy
              </text>

              {/* connectors between stages */}
              <line className="v-line" x1="124" y1="336" x2="140" y2="336" />
              <path className="v-ico" d="M129 331 l8 5 l-8 5" />
              <line className="v-line" x1="254" y1="336" x2="270" y2="336" />
              <path className="v-ico" d="M259 331 l8 5 l-8 5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== CLOUD SERVICES (spec rows) ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Everything a dependable <span className="grad-text">production platform</span> needs
            </h2>
            <p className="lead">
              Nine areas that keep releases repeatable, systems observable, and infrastructure under control as the
              product grows.
            </p>
          </div>
          <div className="spec" data-animate style={{ marginTop: 48 }}>
            <div className="spec-row">
              <div className="st">
                <span className="rn">01</span>Deployment
              </div>
              <div className="sd">Reliable release processes for applications and services.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">02</span>CI/CD
              </div>
              <div className="sd">Automated build, test, and delivery pipelines.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">03</span>Docker &amp; containers
              </div>
              <div className="sd">Containerised applications and consistent runtime environments.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">04</span>ECS / container platforms
              </div>
              <div className="sd">Managed orchestration and scalable service deployment.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">05</span>Security
              </div>
              <div className="sd">Access controls, secure configurations, and deployment safeguards.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">06</span>Governance
              </div>
              <div className="sd">Standards, ownership, policies, and operational guardrails.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">07</span>Monitoring
              </div>
              <div className="sd">Health, logs, performance, alerts, and production visibility.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">08</span>Data storage &amp; databases
              </div>
              <div className="sd">Durable, appropriate data services for product needs.</div>
            </div>
            <div className="spec-row">
              <div className="st">
                <span className="rn">09</span>Infrastructure
              </div>
              <div className="sd">Cloud environments, configuration, and operational foundations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COST CONTROL (band-soft, split) ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Optimise without losing <span className="grad-text">reliability</span>
            </h2>
          </div>
          <div className="split" style={{ marginTop: 48 }}>
            <div data-animate>
              <p className="lead">
                Cloud cost optimisation is not simply reducing infrastructure spend. It means matching resources to
                actual demand, identifying waste, improving observability, and making architecture and deployment choices
                that remain efficient as the product grows.
              </p>
              <div className="tags" style={{ marginTop: 24 }}>
                <span className="tag">Match resources to demand</span>
                <span className="tag">Identify waste</span>
                <span className="tag">Improve observability</span>
                <span className="tag">Efficient architecture</span>
              </div>
              <div className="note" data-animate style={{ marginTop: 28 }}>
                <span className="ni">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </span>
                <div>
                  <h4>Reliability comes first</h4>
                  <p>
                    Efficiency should follow observability and sound architecture — not come at the expense of a stable
                    production platform.
                  </p>
                </div>
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
                <text className="m-kick" x="24" y="34">
                  RESOURCES vs DEMAND
                </text>
                {/* axes */}
                <line className="m-line" x1="40" y1="60" x2="40" y2="248" />
                <line className="m-line" x1="40" y1="248" x2="372" y2="248" />
                {/* demand curve */}
                <path className="m-stroke" data-draw d="M52 210 C120 150 150 120 200 132 C250 144 300 96 360 108" />
                {/* resource steps closely matched to demand */}
                <path className="m-line" d="M52 224 H108 V176 H172 V150 H240 V128 H360" />
                {/* demand markers */}
                <circle className="m-mint" cx="52" cy="210" r="4" />
                <circle className="m-sky" cx="200" cy="132" r="4" />
                <circle className="m-mint" cx="360" cy="108" r="4" />
                <g className="m-sub">
                  <text x="52" y="266">
                    Low
                  </text>
                  <text x="188" y="266">
                    Scaling
                  </text>
                  <text x="326" y="266">
                    Peak
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/services/quality-engineering">
              Quality Engineering <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Review your platform</Link>
          </p>
        </div>
      </section>
    </>
  )
}
