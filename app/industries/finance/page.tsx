import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Finance | Industries",
  description:
    "Custom software for finance teams — bring documents, data, deadlines, and processes into structured, dependable systems built around your domain.",
  alternates: { canonical: "/industries/finance" },
}

export default function FinanceIndustryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aillegent.com/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://aillegent.com/industries" },
            { "@type": "ListItem", position: 3, name: "Finance", item: "https://aillegent.com/industries/finance" },
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
              <span>Finance</span>
            </div>
            <h1>
              Finance operations that demand intelligence, <span className="grad-text">control, and clarity</span>
            </h1>
            <p className="lead">
              From private capital operations to document-heavy processes, we build technology that reads the detail,
              structures it, and keeps decisions traceable — designed around your operating model.
            </p>
          </div>
          <div className="phero-vis phero-vis-img" data-animate aria-hidden="true">
            <Image
              className="shot"
              src="/img/ind-finance.jpg"
              alt="Documents flowing into structured analysis"
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
              Where technology meets <span className="grad-text">financial detail</span>
            </h2>
            <p className="lead">
              Four operations-led areas where we apply product engineering and applied AI to reduce manual effort and
              improve clarity.
            </p>
          </div>
          <div className="grid g-2 u-mt-52 u-grid-fit-340">
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 6h5a2 2 0 0 1 2 2v1M9 18h5a2 2 0 0 0 2-2v-1" /></svg>
              </div>
              <span className="cn">01</span>
              <h3>Private equity operations</h3>
              <p>
                Support the operating processes around private equity — from deal-related documentation to structured,
                reviewable process steps that keep information organised and traceable.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
              </div>
              <span className="cn">02</span>
              <h3>Private debt operations</h3>
              <p>
                Bring structure to private debt operations, organising the documents, terms, and process steps that
                lending depends on into a clearer, connected view.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 3h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M8 12h7M8 16h4" /></svg>
              </div>
              <span className="cn">03</span>
              <h3>Finance document intelligence using AI</h3>
              <p>
                Apply AI to read, extract, and structure information from finance documents, turning dense filings and
                paperwork into organised data that teams can review and work with.
              </p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3c.4 3.5 2.5 5.6 6 6-3.5.4-5.6 2.5-6 6-.4-3.5-2.5-5.6-6-6 3.5-.4 5.6-2.5 6-6z" /><path d="M19 14c.16 1.4 1 2.24 2.4 2.4-1.4.16-2.24 1-2.4 2.4-.16-1.4-1-2.24-2.4-2.4 1.4-.16 2.24-1 2.4-2.4z" /></svg>
              </div>
              <span className="cn">04</span>
              <h3>AI-assisted market and trading research</h3>
              <p>
                Explore how AI can support market and trading research as an analytics and technology capability —
                helping teams organise information and investigate process ideas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE NOTE ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="note" data-animate>
            <span className="ni">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h4>A note on scope and compliance</h4>
              <p>
                Aillegent makes no performance, investment-return, or financial-advice claims. Any trading-related
                capability described here is a research, analytics, or technology capability — not financial advice — and
                is reviewed against applicable compliance requirements.
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
            <Link className="b-link" href="/industries/intellectual-property">
              Intellectual Property <span className="arw">→</span>
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
