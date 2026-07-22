import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Quality Engineering",
  description:
    "Quality engineering and test automation services — automated web, API, and performance testing that gives your team the confidence to release faster.",
  alternates: { canonical: "/services/quality-engineering" },
}

export default function QualityEngineeringPage() {
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
              { "@type": "ListItem", position: 3, name: "Quality Engineering", item: "https://aillegent.com/services/quality-engineering" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Quality Engineering",
            serviceType: "Quality Engineering",
            url: "https://aillegent.com/services/quality-engineering",
            description:
              "Build quality into the delivery cycle — connecting business scenarios, test environments, UAT, production checks, and automation so teams release with confidence.",
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
              <span>Quality Engineering</span>
            </div>
            <h1>
              Build quality into the
              <br /> <span className="grad-text">delivery cycle</span>
            </h1>
            <p className="lead">
              Quality starts with the business scenario, not the final release. Aillegent connects feature expectations,
              test environments, UAT, production checks, and automation so teams can release with confidence.
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

              <text className="v-kick" x="72" y="30">
                SCENARIO → PRODUCTION
              </text>

              {/* vertical connector line with checks */}
              <path className="v-stroke" data-draw d="M40 74 L40 344" />

              {/* Stage 01 — Business scenario */}
              <circle className="v-mint" cx="40" cy="74" r="13" />
              <path className="v-ico-w" d="M34 74 l4 4 l8 -9" />
              <rect className="v-panel" x="72" y="48" width="300" height="56" rx="12" />
              <text className="v-kick" x="90" y="72">
                01
              </text>
              <text className="v-title" x="90" y="90">
                Business scenario
              </text>
              <g transform="translate(330,62) scale(.9)">
                <path className="v-ico" d="M5 3h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <path className="v-ico" d="M8 12h7M8 16h4" />
              </g>

              {/* Stage 02 — Test environments */}
              <circle className="v-mint" cx="40" cy="164" r="13" />
              <path className="v-ico-w" d="M34 164 l4 4 l8 -9" />
              <rect className="v-panel" x="72" y="138" width="300" height="56" rx="12" />
              <text className="v-kick" x="90" y="162">
                02
              </text>
              <text className="v-title" x="90" y="180">
                Test environments
              </text>
              <g transform="translate(330,152) scale(.9)">
                <path className="v-ico" d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                <path className="v-ico" d="m9 12 2 2 4-4" />
              </g>

              {/* Stage 03 — UAT */}
              <circle className="v-mint" cx="40" cy="254" r="13" />
              <path className="v-ico-w" d="M34 254 l4 4 l8 -9" />
              <rect className="v-panel" x="72" y="228" width="300" height="56" rx="12" />
              <text className="v-kick" x="90" y="252">
                03
              </text>
              <text className="v-title" x="90" y="270">
                User acceptance (UAT)
              </text>
              <g transform="translate(330,242) scale(.9)">
                <path className="v-ico" d="M9 12l2 2 4-4" />
                <circle className="v-ico" cx="12" cy="12" r="9" />
              </g>

              {/* Stage 04 — Production */}
              <circle className="v-sky" cx="40" cy="344" r="13" />
              <path className="v-ico-w" d="M34 344 l4 4 l8 -9" />
              <rect className="v-tile" x="72" y="318" width="300" height="56" rx="12" />
              <text className="v-kick" x="90" y="342">
                04
              </text>
              <text className="v-title" x="90" y="360">
                Production release
              </text>
              <g transform="translate(330,332) scale(.9)">
                <path className="v-ico" d="M12 13v8" />
                <path className="v-ico" d="m8 17 4-4 4 4" />
                <path className="v-ico" d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== QUALITY CYCLE (process) ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Quality, from <span className="grad-text">scenario to production</span>
            </h2>
            <p className="lead">
              A disciplined path that keeps business intent, testing, and automation connected the whole way to release.
            </p>
          </div>
          <div className="process u-mt-48" data-animate>
            <div className="pstep">
              <div className="pn">01</div>
              <div className="pc">
                <h3>Business requirement scenario breakdown</h3>
                <p>Convert real business needs into clear testable scenarios.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">02</div>
              <div className="pc">
                <h3>Feature-to-scenario mapping</h3>
                <p>Ensure each product feature has meaningful coverage.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">03</div>
              <div className="pc">
                <h3>Testing environment → UAT → production</h3>
                <p>Maintain a disciplined path from internal testing to user validation and live release.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">04</div>
              <div className="pc">
                <h3>Integrated automation</h3>
                <p>Use a one-click automation approach for integrated microservice testing where appropriate.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">05</div>
              <div className="pc">
                <h3>Web automation testing</h3>
                <p>Production-scale automated browser testing for critical user journeys.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">06</div>
              <div className="pc">
                <h3>API testing automation</h3>
                <p>Verify service contracts, integrations, and backend behaviour.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">07</div>
              <div className="pc">
                <h3>Performance testing</h3>
                <p>Understand how the platform behaves under realistic demand.</p>
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
            <Link className="b-link" href="/services/cost-optimisation">
              Cost Optimisation <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Improve release confidence</Link>
          </p>
        </div>
      </section>
    </>
  )
}
