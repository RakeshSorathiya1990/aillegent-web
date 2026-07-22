import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Advertising Technology | Industries",
  description:
    "Custom software for advertising technology — campaign systems, monitoring, and performance analysis across Google, Meta, and Bing channels.",
  alternates: { canonical: "/industries/advertising-technology" },
}

export default function AdvertisingTechnologyIndustryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://aillegent.com/industries" },
            { "@type": "ListItem", position: 3, name: "Advertising Technology", item: "https://aillegent.com/industries/advertising-technology" },
          ],
        }}
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
              <Link href="/industries">Industries</Link>
              <span className="sep">/</span>
              <span>Advertising Technology</span>
            </div>
            <h1>
              Turn campaign data into <span className="grad-text">clearer operating decisions</span>
            </h1>
            <p className="lead">
              Give marketing and operations teams a clearer view of campaign activity, performance signals, and
              conversion-related outcomes.
            </p>
          </div>
          {/* Hero visual: campaign channel data → performance dashboard */}
          <div className="phero-vis phero-vis-img" data-animate aria-hidden="true">
            <Image
              className="shot"
              src="/img/ind-adtech.jpg"
              alt="Campaign signals merging into one clear chart"
              width={1200}
              height={751}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Where advertising teams need <span className="grad-text">engineering clarity</span>
            </h2>
            <p className="lead">
              We build monitoring and analysis tools that make campaign activity, spend efficiency, and conversion
              outcomes easier to see and act on.
            </p>
          </div>
          <div className="grid g-3" style={{ marginTop: "52px" }}>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 6h5a2 2 0 0 1 2 2v1M9 18h5a2 2 0 0 0 2-2v-1" /></svg>
              </div>
              <span className="cn">01</span>
              <h3>Campaign systems for Google, Meta/Facebook, and Bing channels</h3>
              <p>
                Build systems that bring activity across Google, Meta/Facebook, and Bing channels into one connected
                campaign view.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 13v8" /><path d="m8 17 4-4 4 4" /><path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" /></svg>
              </div>
              <span className="cn">02</span>
              <h3>Campaign monitoring tools</h3>
              <p>
                Monitoring tools that surface campaign activity and status so teams can respond to what is happening as
                it happens.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 17h6v-6" /><path d="m22 17-8.5-8.5-5 5L2 7" /></svg>
              </div>
              <span className="cn">03</span>
              <h3>Performance analysis</h3>
              <p>
                Analysis views that turn raw performance signals into a clearer read on how campaigns are actually doing.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 3h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M8 12h7M8 16h4" /></svg>
              </div>
              <span className="cn">04</span>
              <h3>Conversion analysis</h3>
              <p>
                Structure conversion-related outcomes so marketing and operations teams can see what is contributing to
                results.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
              </div>
              <span className="cn">05</span>
              <h3>CPC and CPA visibility</h3>
              <p>
                Bring cost-per-click and cost-per-acquisition into everyday decisions, so spend efficiency stays visible.
              </p>
            </article>
          </div>

          <div className="note" data-animate style={{ marginTop: "34px" }}>
            <span className="ni">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h4>The value we aim for</h4>
              <p>
                Give marketing and operations teams a clearer view of campaign activity, performance signals, and
                conversion-related outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/industries/recruitment">
              Recruitment <span className="arw">→</span>
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
