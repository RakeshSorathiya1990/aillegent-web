import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Shilp — Cinematic Indian-style Prompt Generation",
  description:
    "Shilp is an AI prompt generator for Indian-style cinematic storytelling — turn an idea, scene, or brand into rich prompts for image and video creation.",
  alternates: { canonical: "/products/shilp" },
}

export default function ShilpPage() {
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
              { "@type": "ListItem", position: 3, name: "Shilp", item: "https://aillegent.com/products/shilp" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Shilp",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Web",
            url: "https://aillegent.com/products/shilp",
            description:
              "Shilp turns a creative requirement into richer AI image and video prompts with Indian cultural and cinematic context.",
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
              <span>Shilp</span>
            </div>
            <h1>
              From a creative requirement to a <span className="grad-text">cinematic Indian-style prompt</span>
            </h1>
            <p className="lead">
              Shilp helps creators turn an idea, scene, brand need, or storytelling requirement into richer AI image and
              video prompts with Indian cultural and cinematic context.
            </p>
          </div>
          <div className="phero-vis phero-vis-img" data-animate aria-hidden="true">
            <Image
              className="shot"
              src="/img/shilp-app.jpg"
              alt="Shilp — prompt input, creative direction chips, and a generated cinematic prompt"
              width={1500}
              height={1000}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              From an idea to a <span className="grad-text">structured prompt</span>
            </h2>
          </div>
          <div className="process u-mt-44" data-animate>
            <div className="pstep">
              <div className="pn">01</div>
              <div className="pc">
                <h3>Describe the requirement</h3>
                <p>Describe the subject, mood, use case, or intended scene.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">02</div>
              <div className="pc">
                <h3>Select creative direction</h3>
                <p>Select relevant creative direction and contextual parameters.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">03</div>
              <div className="pc">
                <h3>Generate the prompt</h3>
                <p>Generate a structured, expressive prompt.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">04</div>
              <div className="pc">
                <h3>Refine for your tool</h3>
                <p>Refine the output for your creation tool of choice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Give creative direction <span className="grad-text">more depth</span>
            </h2>
          </div>
          <ul className="deliver u-mt-44" data-animate>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Reduce the blank-page problem when starting visual concepts.</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Bring cultural context, atmosphere, and cinematic direction into prompts.</span>
            </li>
            <li>
              <span className="ck">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>Create a more consistent foundation for content ideation.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/products/eventik">
              Eventik <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to talk? <Link href="/contact">Request a Shilp walkthrough</Link>
          </p>
        </div>
      </section>
    </>
  )
}
