import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Eventik",
  description:
    "Eventik is AI photo delivery and studio management for event photographers — guests find their photos with a single selfie, and the studio runs from one login.",
  alternates: { canonical: "/products/eventik" },
}

export default function EventikPage() {
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
              { "@type": "ListItem", position: 3, name: "Eventik", item: "https://aillegent.com/products/eventik" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Eventik",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://aillegent.com/products/eventik",
            description:
              "Eventik is the complete platform for event photographers and studios — AI face-matching photo delivery, leads, invoices, packages, portfolio, and analytics in one login.",
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
              <span>Eventik</span>
            </div>
            <h1>
              Every guest finds their photos with a <span className="grad-text">single selfie</span>
            </h1>
            <p className="lead">
              Eventik is the complete platform for event photographers and studios. Upload an event once, and AI
              face-matching delivers each guest&apos;s photos to their phone in seconds — no sorting, no shared folders, no
              endless requests.
            </p>
          </div>
          <div className="phero-vis phero-vis-img" data-animate>
            {/* real product screenshots (demo data) */}
            <div className="phone-duo">
              <Image src="/img/eventik-app-1.jpeg" alt="Eventik selfie upload screen" width={739} height={1600} loading="lazy" />
              <Image
                src="/img/eventik-app-2.jpeg"
                alt="Eventik matched photo gallery for a guest"
                width={739}
                height={1600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ONE LOGIN FOR THE ENTIRE BUSINESS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              One login for the <span className="grad-text">entire business</span>
            </h2>
            <p className="lead">Beyond galleries — Eventik runs the whole studio, from first inquiry to final payment.</p>
          </div>
          <div className="grid g-3 u-mt-56">
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3c.4 3.5 2.5 5.6 6 6-3.5.4-5.6 2.5-6 6-.4-3.5-2.5-5.6-6-6 3.5-.4 5.6-2.5 6-6z" /><circle cx="19" cy="17" r="3" /></svg>
              </div>
              <h3>AI photo delivery</h3>
              <p>Guests take a selfie and instantly receive their own photos.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="9" cy="8" r="3.5" /><path d="M2 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" /><path d="M17 4.5a3.5 3.5 0 0 1 0 7" /><path d="M19 15c2 .8 3 2.5 3 6" /></svg>
              </div>
              <h3>Leads &amp; clients</h3>
              <p>Manage inquiries and client relationships in one place.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 2h9l5 5v15H6z" /><path d="M15 2v5h5" /><path d="M10 13h6M10 17h6M10 9h2" /></svg>
              </div>
              <h3>Estimates &amp; invoices</h3>
              <p>Send GST-ready estimates and invoices without extra tools.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
              </div>
              <h3>Service packages</h3>
              <p>Build reusable packages for faster, consistent quoting.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17" /><path d="M12 3c-2.5 2.4-3.8 5.4-3.8 9s1.3 6.6 3.8 9c2.5-2.4 3.8-5.4 3.8-9S14.5 5.4 12 3z" /></svg>
              </div>
              <h3>Portfolio website</h3>
              <p>Showcase your work with a polished site, no developer needed.</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" rx="1" /><rect x="13" y="8" width="3" height="10" rx="1" /><path d="m7 8 4-3 4 2 5-4" /></svg>
              </div>
              <h3>Business analytics</h3>
              <p>Revenue, pending payments, and growth at a glance.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== RUN THE STUDIO (real dashboard) ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="split" data-animate>
            <div>
              <h2 className="h2 balance">
                From the first inquiry to the <span className="grad-text">final delivered photo</span>
              </h2>
              <p className="lead u-mt-18">
                Eventik handles it all — clients, events, leads, storage, and revenue in one dashboard — so photographers
                can focus on shooting, not admin.
              </p>
            </div>
            <div className="split-media split-media-img" data-animate>
              <Image
                className="shot"
                src="/img/eventik-dash.jpeg"
                alt="Eventik studio dashboard — clients, events, leads, and storage at a glance"
                width={1440}
                height={1412}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORE OF THE PLATFORM (real screens) ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Every part of the studio, <span className="grad-text">already built</span>
            </h2>
          </div>
          <div className="grid g-2 u-mt-52">
            <figure className="shot-fig" data-animate>
              <Image
                className="shot"
                src="/img/eventik-extra-2.jpeg"
                alt="Eventik event media manager — photos, videos, and flipbooks for a wedding"
                width={1440}
                height={1024}
                loading="lazy"
              />
              <figcaption>Event media, organised — photos, videos, and flipbooks per event.</figcaption>
            </figure>
            <figure className="shot-fig" data-animate>
              <Image
                className="shot"
                src="/img/eventik-extra-1.jpeg"
                alt="Eventik portfolio website builder — hero, gallery, services, and theme controls"
                width={1440}
                height={1222}
                loading="lazy"
              />
              <figcaption>A portfolio website you edit yourself — no developer needed.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/products/permit360">
              Permit360 <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">See Eventik in action</Link>
          </p>
        </div>
      </section>
    </>
  )
}
