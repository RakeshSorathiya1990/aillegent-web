import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import type { CSSProperties } from "react"
import DeliveryCycle from "@/components/motion/DeliveryCycle"
import Testimonials from "@/components/motion/Testimonials"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="top">
        <div className="aurora" aria-hidden="true">
          <i className="a1" />
          <i className="a2" />
          <i className="a3" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-inner">
            <h1 data-animate>
              <span className="v">Build</span> the product.
              <br />
              <span className="v">Deploy</span> with confidence.
              <br />
              <span className="v">Scale</span> with control.
            </h1>
            <p className="sub" data-animate>
              Aillegent turns business requirements into dependable digital products — and stays until they run well in
              production.
            </p>
            <div className="hero-actions" data-animate>
              <div className="btn-row u-ai-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start a conversation <span className="arw">→</span>
                </Link>
                <a href="#services" className="btn-text">
                  Explore our capabilities <span className="arw">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              One partner across the <span className="grad-text">product lifecycle</span>
            </h2>
          </div>
          <div className="cap-grid u-mt-56">
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
              </div>
              <span className="cn">01</span>
              <h3>Product Engineering</h3>
              <p>Custom platforms, backends, and APIs built around real business requirements.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3c.4 3.5 2.5 5.6 6 6-3.5.4-5.6 2.5-6 6-.4-3.5-2.5-5.6-6-6 3.5-.4 5.6-2.5 6-6z" /><path d="M19 14c.16 1.4 1 2.24 2.4 2.4-1.4.16-2.24 1-2.4 2.4-.16-1.4-1-2.24-2.4-2.4 1.4-.16 2.24-1 2.4-2.4z" /></svg>
              </div>
              <span className="cn">02</span>
              <h3>Applied AI</h3>
              <p>AI products, custom LLM systems, and agentic automation that reach production.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></svg>
              </div>
              <span className="cn">03</span>
              <h3>Data Engineering</h3>
              <p>Warehousing, pipelines, and analysis that make data dependable.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 13v8" /><path d="m8 17 4-4 4 4" /><path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" /></svg>
              </div>
              <span className="cn">04</span>
              <h3>Cloud &amp; Platform</h3>
              <p>Secure deployment with CI/CD, containers, monitoring, and governance.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <span className="cn">05</span>
              <h3>Quality Engineering</h3>
              <p>Automated web, API, and performance testing for release confidence.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 17h6v-6" /><path d="m22 17-8.5-8.5-5 5L2 7" /></svg>
              </div>
              <span className="cn">06</span>
              <h3>Cost Optimisation</h3>
              <p>Lower the cost of delivery, infrastructure, and ongoing operations.</p>
            </article>
          </div>
          <div className="center u-mt-44" data-animate>
            <Link className="btn-text" href="/services">
              View all services <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES / DATA ===== */}
      <section className="section" id="outcomes">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Engineered for <span className="grad-text">measurable outcomes</span>
            </h2>
            <p className="lead">
              We optimise for what a business can actually feel — faster releases, lower run-cost, and reliability that
              holds under real demand.
            </p>
          </div>

          <div className="stat-band" data-animate>
            <div className="stat"><div className="v" data-count="6">0</div><div className="k">Core engineering capabilities</div></div>
            <div className="stat"><div className="v" data-count="3">0</div><div className="k">Products we build &amp; run</div></div>
            <div className="stat"><div className="v" data-count="4">0</div><div className="k">Industries we serve</div></div>
            <div className="stat"><div className="v" data-count="6">0</div><div className="k">Stage delivery cycle</div></div>
          </div>

          <div className="charts">
            {/* line / area chart */}
            <div className="chart-card" data-animate>
              <div className="chart-head">
                <div className="chart-title">Cost per release, over time</div>
                <div className="chart-tag">Trend</div>
              </div>
              <svg viewBox="0 0 560 240" preserveAspectRatio="none" role="img" aria-label="Cost per release trending down">
                <defs>
                  <linearGradient id="cLine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#25D79B" /><stop offset="1" stopColor="#3B7DE0" /></linearGradient>
                  <linearGradient id="cArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#25D79B" stopOpacity=".28" /><stop offset="1" stopColor="#25D79B" stopOpacity="0" /></linearGradient>
                </defs>
                <g className="c-grid"><line x1="0" y1="60" x2="560" y2="60" /><line x1="0" y1="120" x2="560" y2="120" /><line x1="0" y1="180" x2="560" y2="180" /></g>
                <path className="c-area" d="M20 70 L112 96 L204 88 L296 128 L388 150 L480 170 L540 182 L540 220 L20 220 Z" />
                <path className="c-line c-draw" style={{ ["--len"]: 640 } as CSSProperties} d="M20 70 L112 96 L204 88 L296 128 L388 150 L480 170 L540 182" />
                <circle className="c-dot" cx="540" cy="182" r="5" />
                <g className="c-axis" textAnchor="middle"><text x="20" y="236">M1</text><text x="204" y="236">M3</text><text x="388" y="236">M5</text><text x="540" y="236">M7</text></g>
              </svg>
              <div className="legend"><span><i className="sw-mint" />Cloud + delivery cost</span><span><i className="sw-sky" />Trend</span></div>
            </div>

            {/* donut chart */}
            <div className="chart-card" data-animate>
              <div className="chart-head">
                <div className="chart-title">Where an engagement focuses</div>
                <div className="chart-tag">Typical mix</div>
              </div>
              <svg viewBox="0 0 240 240" role="img" aria-label="Engagement focus split">
                <circle className="donut-ring" cx="120" cy="120" r="90" stroke="#FFFFFF12" />
                <circle className="donut-seg" cx="120" cy="120" r="90" stroke="#25D79B" style={{ ["--seg"]: 254 } as CSSProperties} transform="rotate(-90 120 120)" />
                <circle className="donut-seg" cx="120" cy="120" r="90" stroke="#3B7DE0" style={{ ["--seg"]: 170 } as CSSProperties} transform="rotate(72 120 120)" />
                <circle className="donut-seg" cx="120" cy="120" r="90" stroke="#0E9E76" style={{ ["--seg"]: 141 } as CSSProperties} transform="rotate(180 120 120)" />
                <text className="donut-center" x="120" y="116">100%</text>
                <text className="donut-sub" x="120" y="134">LIFECYCLE</text>
              </svg>
              <div className="legend"><span><i className="sw-mint" />Build &amp; ship 45%</span><span><i className="sw-sky" />Quality 30%</span><span><i className="sw-brand" />Optimise 25%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE: DELIVERY CYCLE ===== */}
      <DeliveryCycle />

      {/* ===== CASE STUDIES ===== */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Proof in the <span className="grad-text">outcomes we deliver</span>
            </h2>
            <p className="lead">What focused engineering changes for the teams we work with — from cloud run-cost to release speed and production-grade AI.</p>
          </div>
          <div className="case-grid">
            <article className="case" data-animate>
              <div className="case-vis"><Image src="/img/case-1.jpg" alt="Cloud infrastructure being right-sized" width={1200} height={751} /></div>
              <span className="tag">Cloud · Cost</span>
              <div className="metric">70%</div>
              <div className="desc">Lower cloud run-cost after right-sizing infrastructure and removing idle capacity across environments.</div>
            </article>
            <article className="case" data-animate>
              <div className="case-vis"><Image src="/img/case-2.jpg" alt="Automated delivery pipeline" width={1200} height={751} /></div>
              <span className="tag">Quality · Release</span>
              <div className="metric">6×</div>
              <div className="desc">Faster, safer releases once automated web, API, and performance testing joined the delivery cycle.</div>
            </article>
            <article className="case" data-animate>
              <div className="case-vis"><Image src="/img/case-3.jpg" alt="AI removing manual effort" width={1200} height={751} /></div>
              <span className="tag">Applied AI</span>
              <div className="metric">40%</div>
              <div className="desc">Manual effort removed from an expert process with a focused, production-grade AI capability.</div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== GROWTH ===== */}
      <section className="section" id="growth">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">The right engineering support at every stage</h2>
          </div>
          <div className="growth u-mt-56">
            <article className="gcard" data-animate><span className="g-idx">01 · Quick MVP</span><h3>Quick MVP</h3><p>Validate a focused product idea quickly with the right core features, architecture decisions, and delivery path.</p></article>
            <article className="gcard" data-animate><span className="g-idx">02 · Startup Growth</span><h3>Startup Growth</h3><p>Strengthen the platform with scalable development practices, automation, AI capability, and cloud foundations.</p></article>
            <article className="gcard" data-animate><span className="g-idx">03 · Enterprise Production</span><h3>Enterprise Production</h3><p>Add deployment support, stabilisation, governance, monitoring, performance engineering, and operational cost control.</p></article>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="section" id="products">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Products we <span className="grad-text">build, own, and run</span>
            </h2>
            <p className="lead">Our own products are the clearest proof of how we design, ship, and operate software in production.</p>
          </div>
          <div className="prod-grid prod-grid-3 u-mt-56">
            <article className="prod" data-animate>
              <div className="prod-vis"><Image src="/img/shilp-app.jpg" alt="" width={1500} height={1000} /></div>
              <div className="prod-body">
                <span className="prod-tag">Creative AI</span>
                <h3>Shilp</h3>
                <p>AI prompt generation for Indian-style cinematic storytelling, shaped by your creative intent.</p>
                <Link className="btn-text" href="/products/shilp">Explore Shilp <span className="arw">→</span></Link>
              </div>
            </article>
            <article className="prod" data-animate>
              <div className="prod-vis"><Image src="/img/eventik-extra-2.jpeg" alt="" width={1440} height={1024} /></div>
              <div className="prod-body">
                <span className="prod-tag">Photography AI</span>
                <h3>Eventik</h3>
                <p>AI photo delivery and complete studio management for event photographers — guests find their photos with a single selfie.</p>
                <Link className="btn-text" href="/products/eventik">Explore Eventik <span className="arw">→</span></Link>
              </div>
            </article>
            <article className="prod" data-animate>
              <div className="prod-vis">
                <svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <g fill="none" stroke="#3B7DE0" strokeWidth="1.5" opacity=".8"><rect x="40" y="34" width="150" height="38" rx="8" /><rect x="40" y="82" width="150" height="38" rx="8" /></g>
                  <g fill="#3B7DE0" opacity=".4"><rect x="54" y="46" width="60" height="5" rx="2.5" /><rect x="54" y="57" width="40" height="5" rx="2.5" /><rect x="54" y="94" width="60" height="5" rx="2.5" /><rect x="54" y="105" width="40" height="5" rx="2.5" /></g>
                  <g fill="#25D79B29" stroke="#0E9E7680" strokeWidth="1.2"><rect x="146" y="42" width="34" height="16" rx="8" /><rect x="146" y="90" width="34" height="16" rx="8" /></g>
                  <g fill="none" stroke="#25D79B" strokeWidth="1.5"><path d="M198 77 H238" /><path d="M231 70 l7 7 -7 7" /></g>
                  <circle cx="292" cy="77" r="34" fill="none" stroke="#0E9E76" strokeWidth="1.6" />
                  <path d="M279 77l9 9 16-18" fill="none" stroke="#25D79B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="prod-body">
                <span className="prod-tag">Industrial EHS</span>
                <h3>Permit360</h3>
                <p>The electronic permit-to-work system for modern plants — configurable permits, approvals, and live visibility.</p>
                <Link className="btn-text" href="/products/permit360">Explore Permit360 <span className="arw">→</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section" id="industries">
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
            <Link className="ind-item" href="/industries/finance"><span className="n">01</span><span className="t">Finance</span><span className="arw">→</span></Link>
            <Link className="ind-item" href="/industries/intellectual-property"><span className="n">02</span><span className="t">Intellectual Property</span><span className="arw">→</span></Link>
            <Link className="ind-item" href="/industries/advertising-technology"><span className="n">03</span><span className="t">Advertising Technology</span><span className="arw">→</span></Link>
            <Link className="ind-item" href="/industries/recruitment"><span className="n">04</span><span className="t">Recruitment</span><span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="voices">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">What partners value</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" id="contact">
        <div className="wrap">
          <div className="cta" data-animate>
            <div className="cta-inner">
              <h2 className="balance">
                Have a product problem <span className="grad-text">worth solving?</span>
              </h2>
              <p>
                Whether you are validating an MVP, improving an existing platform, deploying AI, or bringing a production
                environment under control, we can help define the next practical step.
              </p>
              <div className="btn-row u-jc-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start a conversation <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
