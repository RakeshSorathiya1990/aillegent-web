import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import BrandPyramid from "@/components/motion/BrandPyramid"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "About",
  description:
    "Aillegent brings product, AI, data, cloud, quality, and cost engineering into one accountable team — specialists who connect product ambition to production reality.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://aillegent.com/about" },
          ],
        }}
      />
      {/* ===== HERO ===== */}
      <section className="phero phero-center">
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="wrap phero-grid">
          <div>
            <h1>
              Specialists who connect product ambition to <span className="grad-text">production reality</span>
            </h1>
            <p className="lead">
              Aillegent brings product, AI, data, cloud, quality, and cost thinking into one engineering conversation —
              and one accountable team. We move quickly without losing the discipline reliable production systems demand.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WORKSPACE ===== */}
      <section className="intro-img" aria-label="Where the work happens">
        <div className="wrap" data-animate>
          <Image
            src="/img/about-team.jpg"
            alt="A bright engineering workspace with laptops and an architecture whiteboard"
            width={1500}
            height={1000}
          />
        </div>
      </section>

      {/* ===== HOW WE'RE BUILT (scroll-pinned pyramid) ===== */}
      <BrandPyramid />

      {/* ===== HOW WORK MOVES ===== */}
      <section className="section band-soft" id="process">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              How work moves from requirement to <span className="grad-text">release</span>
            </h2>
            <p className="lead">
              Each step carries the context of the last — and our six-stage delivery cycle keeps every decision
              connected. <Link href="/#cycle" className="link-brand">See the cycle in action →</Link>
            </p>
          </div>
          <div className="grid g-3 u-mt-56">
            <article className="card" data-animate><span className="cn">01</span><h3>Requirement &amp; domain analysis</h3><p>Understand the business goal, users, and domain context before committing to a solution.</p></article>
            <article className="card" data-animate><span className="cn">02</span><h3>Solution &amp; architecture</h3><p>Define functional and non-functional requirements and the architecture that fits them.</p></article>
            <article className="card" data-animate><span className="cn">03</span><h3>Documentation</h3><p>Capture decisions, interfaces, and delivery detail so the build stays aligned as it grows.</p></article>
            <article className="card" data-animate><span className="cn">04</span><h3>Development</h3><p>Engineer frontend, backend, APIs, data, and AI-enabled capability against the agreed plan.</p></article>
            <article className="card" data-animate><span className="cn">05</span><h3>Cloud infrastructure</h3><p>Set up deployment, CI/CD, containers, security, and monitoring for repeatable releases.</p></article>
            <article className="card" data-animate><span className="cn">06</span><h3>Testing &amp; scalable production</h3><p>Move from business scenarios through automation and performance testing to stable production.</p></article>
          </div>
        </div>
      </section>

      {/* ===== CLIENT LIFECYCLE ===== */}
      <section className="section" id="growth">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Grow the engagement <span className="grad-text">with the product</span>
            </h2>
            <p className="lead">
              The same team can meet a product where it is — validating a first idea, building momentum, or running a
              governed enterprise platform — without losing the context in between.
            </p>
          </div>
          <div className="growth u-mt-56">
            <article className="gcard" data-animate><span className="g-idx">01 · Quick MVP</span><h3>Quick MVP</h3><p>Core product scope, architecture, delivery, and a release path for early market validation.</p></article>
            <article className="gcard" data-animate><span className="g-idx">02 · Startup Growth</span><h3>Startup Growth</h3><p>Feature growth, scalable systems, AI capability, automation, cloud foundations, and better engineering rhythms.</p></article>
            <article className="gcard" data-animate><span className="g-idx">03 · Enterprise Production</span><h3>Enterprise Production</h3><p>Deployment support, stabilisation, monitoring, governance, performance, reliability, and cost optimisation.</p></article>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE + TEAM APPROACH ===== */}
      <section className="section band-soft" id="team">
        <div className="wrap">
          <div className="split" data-animate>
            <div>
              <h2 className="h2 balance">
                Start with the business problem, then earn the <span className="grad-text">technical complexity</span>
              </h2>
              <p className="lead u-mt-18">
                We begin with requirements, domain context, system constraints, and the outcome that matters. The
                architecture, technology choices, automation, and operational model follow from that work.
              </p>
              <div className="tags u-mt-30">
                <span className="tag">Java</span>
                <span className="tag">Node.js</span>
                <span className="tag">Python</span>
                <span className="tag">Frontend &amp; backend</span>
                <span className="tag">Data engineering</span>
                <span className="tag">Data science</span>
                <span className="tag">AI cost optimisation</span>
                <span className="tag">Cloud &amp; infrastructure</span>
                <span className="tag">Quality automation</span>
              </div>
            </div>
            <div className="split-media" data-animate aria-hidden="true">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="abFlow" x1="0" y1="0" x2="400" y2="0"><stop offset="0" stopColor="#0E9E76" /><stop offset="1" stopColor="#3B7DE0" /></linearGradient>
                </defs>
                <rect x="20" y="110" width="148" height="80" rx="14" fill="none" stroke="url(#abFlow)" strokeWidth="1.8" />
                <g stroke="#0E9E76" strokeWidth="1.8" fill="none"><circle cx="52" cy="146" r="14" /><circle cx="52" cy="146" r="7" /></g>
                <circle cx="52" cy="146" r="2.5" fill="#0E9E76" />
                <text x="76" y="140" fontFamily="Rubik" fontWeight={600} fontSize="12px" fill="#0C1320">The business</text>
                <text x="76" y="157" fontFamily="Rubik" fontWeight={600} fontSize="12px" fill="#0C1320">problem</text>
                <path data-draw fill="none" stroke="url(#abFlow)" strokeWidth="1.8" strokeLinecap="round" d="M168 150 C210 150 210 64 248 64" />
                <path data-draw fill="none" stroke="url(#abFlow)" strokeWidth="1.8" strokeLinecap="round" d="M168 150 H248" />
                <path data-draw fill="none" stroke="url(#abFlow)" strokeWidth="1.8" strokeLinecap="round" d="M168 150 C210 150 210 236 248 236" />
                <g fill="#0C13200D" stroke="#0C13201F" strokeWidth="1">
                  <rect x="248" y="38" width="132" height="52" rx="12" />
                  <rect x="248" y="124" width="132" height="52" rx="12" />
                  <rect x="248" y="210" width="132" height="52" rx="12" />
                </g>
                <text x="268" y="68" fontFamily="Rubik" fontWeight={600} fontSize="12.5px" fill="#0C1320">Architecture</text>
                <text x="268" y="154" fontFamily="Rubik" fontWeight={600} fontSize="12.5px" fill="#0C1320">Technology</text>
                <text x="268" y="240" fontFamily="Rubik" fontWeight={600} fontSize="12.5px" fill="#0C1320">Operations</text>
                <g fill="#25D79B"><circle cx="248" cy="64" r="4.5" /><circle cx="248" cy="150" r="4.5" /><circle cx="248" cy="236" r="4.5" /></g>
              </svg>
            </div>
          </div>
          <div className="note u-mt-48" data-animate>
            <span className="ni">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h4>More coming soon</h4>
              <p>Verified team profiles, partners, and case studies will be added as they are confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section" id="contact-cta">
        <div className="wrap">
          <div className="cta" data-animate>
            <div className="cta-inner">
              <h2 className="balance">
                One team, from first idea to <span className="grad-text">running product</span>
              </h2>
              <p>
                Bring us the outcome that matters and the constraints around it — we will help define the architecture,
                technology, and delivery path that fit.
              </p>
              <div className="btn-row u-jc-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Work with us <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
