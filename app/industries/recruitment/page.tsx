import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Recruitment | Industries",
  description:
    "From vendor requirement to the right candidate, in one connected flow — tools that capture the requirement, structure it for review, and support organised candidate matching.",
  alternates: { canonical: "/industries/recruitment" },
}

export default function RecruitmentIndustryPage() {
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
              <Link href="/industries">Industries</Link>
              <span className="sep">/</span>
              <span>Recruitment</span>
            </div>
            <h1>
              From vendor requirement to the right candidate, <span className="grad-text">in one connected flow</span>
            </h1>
            <p className="lead">
              Build tools that capture the vendor requirement, structure it for review, and support an organised,
              transparent candidate matching process.
            </p>
          </div>
          {/* Hero visual: vendor requirement intake → structured review → candidate match */}
          <div className="phero-vis phero-vis-img" data-animate aria-hidden="true">
            <Image
              className="shot"
              src="/img/ind-recruit.jpg"
              alt="A requirement matched to the right candidate — illustrative"
              width={1200}
              height={751}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== CONNECTED FLOW ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              From vendor requirement to <span className="grad-text">candidate match</span>
            </h2>
            <p className="lead">
              A single, connected flow that keeps the requirement, the review, and the match in one line of sight.
            </p>
          </div>
          <div className="wf" data-animate style={{ marginTop: "52px" }}>
            <div className="wf-node">Vendor</div>
            <span className="wf-arw">→</span>
            <div className="wf-node">Requirement</div>
            <span className="wf-arw">→</span>
            <div className="wf-node">Candidate</div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Tools shaped around <span className="grad-text">how hiring really moves</span>
            </h2>
          </div>
          <div className="split" style={{ marginTop: "52px" }}>
            <div data-animate>
              <p className="lead">
                Build tools that capture the vendor requirement, structure it for review, and support an organised,
                transparent candidate matching process.
              </p>
              <ul className="deliver" data-animate style={{ marginTop: "26px" }}>
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>Capture the vendor requirement clearly at the point of intake.</span>
                </li>
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>Structure that requirement so it is ready for review.</span>
                </li>
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>Support a more organised candidate matching process.</span>
                </li>
              </ul>
            </div>
            <div className="split-media" data-animate aria-hidden="true">
              <svg viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="mg" x1="0" y1="0" x2="400" y2="300"><stop offset="0" stopColor="#0E9E76" /><stop offset="1" stopColor="#3B7DE0" /></linearGradient>
                </defs>
                {/* requirement doc */}
                <rect className="m-panel" x="30" y="56" width="124" height="156" rx="12" />
                <text className="m-kick" x="54" y="78">REQUIREMENT</text>
                <line className="m-line" x1="44" y1="88" x2="144" y2="88" />
                <path className="m-line" d="M44 108h80M44 128h80M44 148h58M44 168h68" />
                {/* flowing connector with dot terminus */}
                <path className="m-stroke" data-draw d="M154 134 C178 134 182 134 200 134" />
                <circle className="m-mint" cx="200" cy="134" r="5" />
                {/* candidate list */}
                <rect className="m-tile" x="218" y="56" width="150" height="156" rx="12" />
                <text className="m-kick" x="240" y="78">CANDIDATES</text>
                <line style={{ stroke: "#0E9E7640", strokeWidth: 1 }} x1="228" y1="86" x2="358" y2="86" />
                {/* candidate 1 */}
                <g className="m-ico"><circle cx="244" cy="112" r="9" /><path d="M232 134c0-8 24-8 24 0" /></g>
                <path className="m-line" d="M268 108h74M268 122h56" />
                {/* candidate 2 */}
                <g className="m-ico"><circle cx="244" cy="162" r="9" /><path d="M232 184c0-8 24-8 24 0" /></g>
                <path className="m-line" d="M268 158h74M268 172h56" />
                {/* selected indicator */}
                <circle className="m-pulse" cx="354" cy="112" r="5" />
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
            <Link className="b-link" href="/industries">
              All industries <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Discuss your domain</Link>
          </p>
        </div>
      </section>
    </>
  )
}
