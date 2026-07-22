import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Permit360",
  description:
    "Permit360 is an electronic permit-to-work (e-PTW) system for modern plants — configurable permits, approvals, and live visibility for industrial safety.",
  alternates: { canonical: "/products/permit360" },
}

export default function Permit360Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
              { "@type": "ListItem", position: 2, name: "Products", item: "https://aillegent.com/products" },
              { "@type": "ListItem", position: 3, name: "Permit360", item: "https://aillegent.com/products/permit360" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Permit360",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://aillegent.com/products/permit360",
            description:
              "Permit360 is the electronic work permit system for modern plants — configurable permits and approval routes, one-click permit-to-work, live dashboards, and a complete audit trail.",
            publisher: { "@type": "Organization", "@id": "https://aillegent.com/#organization" },
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
              <Link href="/products">Products</Link>
              <span className="sep">/</span>
              <span>Permit360</span>
            </div>
            <h1>
              The electronic work permit system for <span className="grad-text">modern plants</span>
            </h1>
            <p className="lead">
              One easy-to-use, cloud-based platform that replaces paper permits and email approvals — configure your own
              permits and approval routes, raise and close them in a click, and see every live permit in real time. Built
              for chemical, pharma, and manufacturing plants.
            </p>
          </div>
          <div className="phero-vis" data-animate aria-hidden="true">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#25D79B" /><stop offset="1" stopColor="#3B7DE0" /></linearGradient>
              </defs>

              <text className="v-kick" x="72" y="30">PERMIT LIFECYCLE</text>

              {/* lifecycle spine */}
              <path className="v-stroke" data-draw d="M40 76 L40 356" />

              {/* 01 Request */}
              <circle className="v-mint" cx="40" cy="76" r="12" />
              <rect className="v-panel" x="72" y="52" width="300" height="48" rx="12" />
              <text className="v-kick" x="90" y="72">01</text>
              <text className="v-title" x="90" y="90">Request</text>
              <g transform="translate(334,64) scale(.85)"><path className="v-ico" d="M5 3h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path className="v-ico" d="M12 10v6M9 13h6" /></g>

              {/* 02 Approve */}
              <circle className="v-mint" cx="40" cy="146" r="12" />
              <rect className="v-panel" x="72" y="122" width="300" height="48" rx="12" />
              <text className="v-kick" x="90" y="142">02</text>
              <text className="v-title" x="90" y="160">Approve</text>
              <g transform="translate(334,134) scale(.85)"><circle className="v-ico" cx="9" cy="8" r="3.5" /><path className="v-ico" d="M3 20c0-3.6 2.7-5.8 6-5.8s6 2.2 6 5.8" /><path className="v-ico" d="m15 9 2.5 2.5L22 7" /></g>

              {/* 03 Activate (highlighted, validity window) */}
              <circle className="v-sky" cx="40" cy="216" r="12" />
              <path className="v-ico-w" d="M35 216l3.5 3.5 6.5-7.5" />
              <rect className="v-tile" x="72" y="192" width="300" height="48" rx="12" />
              <text className="v-kick" x="90" y="212">03</text>
              <text className="v-title" x="90" y="230">Activate</text>
              <g transform="translate(334,204) scale(.85)"><circle className="v-ico" cx="12" cy="13" r="8" /><path className="v-ico" d="M12 9v4l3 2M12 2v3" /></g>
              <rect className="v-mint" x="196" y="204" width="120" height="24" rx="12" />
              <text x="256" y="220" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="9px" letterSpacing=".1em" fill="#fff">VALID 08:00–18:00</text>

              {/* 04 Work */}
              <circle className="v-mint" cx="40" cy="286" r="12" />
              <rect className="v-panel" x="72" y="262" width="300" height="48" rx="12" />
              <text className="v-kick" x="90" y="282">04</text>
              <text className="v-title" x="90" y="300">Work</text>
              <g transform="translate(334,274) scale(.85)"><path className="v-ico" d="M14.3 6.3a4.5 4.5 0 0 0 5.9 5.9L16 16.4a2.1 2.1 0 0 1-3-3l4.2-4.2z" /><path className="v-ico" d="M9.7 17.7 5.5 21.9a2.1 2.1 0 0 1-3-3l4.2-4.2a4.5 4.5 0 0 1 5.9-5.9" /></g>

              {/* 05 Close */}
              <circle className="v-mint" cx="40" cy="356" r="12" />
              <rect className="v-panel" x="72" y="332" width="300" height="48" rx="12" />
              <text className="v-kick" x="90" y="352">05</text>
              <text className="v-title" x="90" y="370">Close</text>
              <g transform="translate(334,344) scale(.85)"><path className="v-ico" d="M5 3h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path className="v-ico" d="m8.5 13 2.5 2.5 5-5.5" /></g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM IT SOLVES ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              The problem <span className="grad-text">it solves</span>
            </h2>
            <p className="lead">
              Paper permits leave EHS teams without a defensible record: scattered and unauditable sign-offs, permits that
              stay live by accident, approvals that bypass the chain, and no live operational picture across the site.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BUILT FOR REAL PLANTS (context image) ===== */}
      <section className="banner-img" aria-label="A modern industrial plant">
        <div className="wrap" data-animate>
          <Image
            src="/img/permit360-plant.jpg"
            alt="A modern, clean chemical and pharmaceutical plant interior"
            width={1915}
            height={821}
            loading="lazy"
          />
        </div>
      </section>

      {/* ===== LIFECYCLE ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              How a permit moves through <span className="grad-text">Permit360</span>
            </h2>
            <p className="lead">Five stages, one system — every step recorded, routed, and visible in real time.</p>
          </div>
          <div className="grid g-3 u-mt-56">
            <article className="card" data-animate>
              <span className="cn">01</span>
              <h3>Request</h3>
              <p>Raise from a template in a click; fields auto-fill and autosave.</p>
            </article>
            <article className="card" data-animate>
              <span className="cn">02</span>
              <h3>Approve</h3>
              <p>Routed by role, level, and conditions you define.</p>
            </article>
            <article className="card" data-animate>
              <span className="cn">03</span>
              <h3>Activate</h3>
              <p>Issued with a validity window and a signed PDF.</p>
            </article>
            <article className="card" data-animate>
              <span className="cn">04</span>
              <h3>Work</h3>
              <p>Monitored live; suspend or extend as needed.</p>
            </article>
            <article className="card" data-animate>
              <span className="cn">05</span>
              <h3>Close</h3>
              <p>Signed off with a closure PDF; everyone notified.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== WHY TEAMS CHOOSE IT ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Why teams <span className="grad-text">choose it</span>
            </h2>
          </div>
          <ul className="deliver u-mt-44" data-animate>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Fully configurable permit forms and approval routing — no code, no waiting on IT.</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>One-click permit-to-work from a single screen.</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Live dashboards and KPIs — counts, approval turnaround, expiry tracking.</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Web, mobile, and plant-floor kiosk; cloud or on-premise.</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Complete audit trail, per-company data isolation, automatic backup.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== PERMIT TYPES ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              A permit type for <span className="grad-text">every hazard</span>
            </h2>
            <p className="lead">Standard high-risk permit types out of the box — plus any custom type your team defines.</p>
          </div>
          <div className="tags u-mt-40" data-animate>
            <span className="tag">Hot work</span>
            <span className="tag">Cold work</span>
            <span className="tag">Confined space entry</span>
            <span className="tag">Work at height</span>
            <span className="tag">Electrical (LOTO)</span>
            <span className="tag">Excavation</span>
            <span className="tag">Radiography</span>
            <span className="tag">Composite</span>
            <span className="tag">Custom types</span>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/products">
              All products <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Book a Permit360 demo</Link>
          </p>
        </div>
      </section>
    </>
  )
}
