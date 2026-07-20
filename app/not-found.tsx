import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="phero phero-center">
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="wrap phero-grid">
        <div>
          <h1>
            This page has <span className="grad-text">moved on</span>
          </h1>
          <p className="lead">
            The page you were looking for isn&apos;t here. Let&apos;s get you back to something useful.
          </p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href="/" className="btn btn-primary btn-lg">
              Back to home <span className="arw">→</span>
            </Link>
            <Link href="/contact" className="btn-text">
              Contact us <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
