import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Applied AI | ML, LLMs & Agentic Automation",
  description:
    "Apply AI where it changes real outcomes — AI products, machine learning, custom LLMs, MLOps, LLMOps, and agentic automation built for practical production use.",
  alternates: { canonical: "/services/applied-ai" },
}

export default function AppliedAIPage() {
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
              <span>Applied AI</span>
            </div>
            <h1>
              Apply AI where it changes
              <br /> <span className="grad-text">real outcomes</span>
            </h1>
            <p className="lead">
              AI creates value when it is connected to trusted data, product behaviour, human decisions, and production
              operations. Aillegent builds AI products and AI-enabled systems designed for practical use — not just
              demonstrations.
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
              <text x="66" y="70" textAnchor="middle" className="v-kick">
                DATA
              </text>
              <text x="200" y="70" textAnchor="middle" className="v-kick">
                MODEL
              </text>
              <text x="334" y="70" textAnchor="middle" className="v-kick">
                DECISION
              </text>
              {/* data source (cylinder) */}
              <g className="v-ico-w" transform="translate(46,140)">
                <ellipse cx="20" cy="8" rx="20" ry="8" />
                <path d="M0 8v40c0 4.4 9 8 20 8s20-3.6 20-8V8" />
                <path d="M0 28c0 4.4 9 8 20 8s20-3.6 20-8" />
              </g>
              {/* model: small neural network */}
              <g className="v-line">
                <path d="M150 150 L210 130" />
                <path d="M150 150 L210 200" />
                <path d="M150 200 L210 130" />
                <path d="M150 200 L210 200" />
                <path d="M150 250 L210 130" />
                <path d="M150 250 L210 200" />
                <path d="M210 130 L262 165" />
                <path d="M210 200 L262 165" />
              </g>
              <circle cx="150" cy="150" r="9" className="v-sky" />
              <circle cx="150" cy="200" r="9" className="v-sky" />
              <circle cx="150" cy="250" r="9" className="v-sky" />
              <circle cx="210" cy="130" r="10" className="v-mint" />
              <circle cx="210" cy="200" r="10" className="v-mint" />
              <circle cx="262" cy="165" r="12" className="v-white" />
              {/* decision output */}
              <rect x="300" y="150" width="70" height="60" rx="12" className="v-tile" />
              <g className="v-ico" transform="translate(318,164)">
                <path d="M20 6 9 17l-5-5" />
              </g>
              <text x="335" y="226" textAnchor="middle" className="v-lab">
                Product action
              </text>
              {/* flow connectors between stages */}
              <path className="v-stroke" data-draw d="M86 168 C120 168 122 190 138 195" />
              <path className="v-stroke" data-draw d="M274 165 C286 165 290 178 300 180" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== CORE CAPABILITIES ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              AI that connects to <span className="grad-text">data, product, and operations</span>
            </h2>
          </div>
          <ul className="deliver" data-animate style={{ marginTop: 44 }}>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>AI product and tool development</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>AI implementation in existing products and processes</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Machine learning model development and deployment</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Deep learning model development and deployment</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Custom LLM development and fine-tuning</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>MLOps and LLMOps</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Custom agentic automation and optimisation</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>AI cost optimisation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== DELIVERY APPROACH ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Start with the decision, then <span className="grad-text">earn the capability</span>
            </h2>
          </div>
          <div className="process" data-animate style={{ marginTop: 44 }}>
            <div className="pstep">
              <div className="pn">01</div>
              <div className="pc">
                <h3>Identify the opportunity</h3>
                <p>Identify the business decision, task, or process that should improve.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">02</div>
              <div className="pc">
                <h3>Assess the constraints</h3>
                <p>Assess data, system integration, quality, security, and operational constraints.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">03</div>
              <div className="pc">
                <h3>Prototype the smallest useful capability</h3>
                <p>Prototype the smallest useful AI capability.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">04</div>
              <div className="pc">
                <h3>Integrate into day-to-day work</h3>
                <p>Integrate it into the product or the team&apos;s day-to-day work.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">05</div>
              <div className="pc">
                <h3>Monitor and improve</h3>
                <p>Monitor quality, cost, and ongoing improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/services/data-engineering">
              Data Engineering <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Discuss an AI use case</Link>
          </p>
        </div>
      </section>
    </>
  )
}
