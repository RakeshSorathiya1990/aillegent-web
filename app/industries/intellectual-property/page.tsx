import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Intellectual Property | Industries",
  description:
    "Custom software for intellectual property — filing, deadlines, correspondence, and patent lifecycle management in one connected, dependable operating view.",
  alternates: { canonical: "/industries/intellectual-property" },
}

export default function IntellectualPropertyIndustryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://aillegent.com/industries" },
            { "@type": "ListItem", position: 3, name: "Intellectual Property", item: "https://aillegent.com/industries/intellectual-property" },
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
              <span>Intellectual Property</span>
            </div>
            <h1>
              Bring clarity to the <span className="grad-text">patent and IP lifecycle</span>
            </h1>
            <p className="lead">
              Patent work connects people, documents, deadlines, communications, and process steps. We help firms hold
              all of it in one coherent, dependable operating view.
            </p>
          </div>
          <div className="phero-vis phero-vis-img" data-animate aria-hidden="true">
            <Image
              className="shot"
              src="/img/ind-ip.jpg"
              alt="A patent journey through checkpoints"
              width={1200}
              height={751}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== VALUE STATEMENT ===== */}
      <section className="section">
        <div className="wrap">
          <div className="note" data-animate>
            <span className="ni">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h4>The value we aim for</h4>
              <p>
                Create a more connected operating view across people, documents, deadlines, communications, and process
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Across the patent <span className="grad-text">lifecycle</span>
            </h2>
            <p className="lead">
              Where we apply product engineering and applied AI to bring structure, awareness, and connection to IP
              operations.
            </p>
          </div>
          <div className="grid g-3 u-mt-52 u-grid-fit-272">
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 3h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M9 13h6M9 17h4" /></svg>
              </div>
              <span className="cn">01</span>
              <h3>Filing and office actions</h3>
              <p>
                Structure the steps of preparing, filing, and responding to PTO office actions, so every stage stays
                clear, ordered, and on track.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
              </div>
              <span className="cn">02</span>
              <h3>Deadlines and fees</h3>
              <p>
                Keep critical dates visible with timely alerts, and bring the same order to fees and payment-related
                steps — traceable, and never missed.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <span className="cn">03</span>
              <h3>Communication and correspondence</h3>
              <p>
                Give lawyers, foreign associates, and clients a shared space where the exchanges and correspondence that
                move a matter forward stay connected.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></svg>
              </div>
              <span className="cn">04</span>
              <h3>Lifecycle management</h3>
              <p>
                Follow a matter from first filing through its full lifecycle, keeping the whole journey in one connected,
                dependable view.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
              </div>
              <span className="cn">05</span>
              <h3>Automation and team platforms</h3>
              <p>
                Populate routine forms from information the casework already holds, and give firm teams a shared platform
                that connects people, matters, and work.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/industries/advertising-technology">
              Advertising Technology <span className="arw">→</span>
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
