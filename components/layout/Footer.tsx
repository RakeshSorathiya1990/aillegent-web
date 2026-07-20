import Link from "next/link"
import Image from "next/image"
import { site } from "@/lib/site"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand" aria-label="Aillegent home">
              <Image className="brand-logo" src="/img/aillegent-logo.png" alt="Aillegent" width={141} height={50} />
            </Link>
            <p>Product engineering, applied AI, data, cloud, quality, and optimisation for teams ready to scale.</p>
            <p className="foot-contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <div className="foot-social">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Aillegent on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.64 4.76 6.08V21h-4v-5.39c0-1.28-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
                </svg>
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email Aillegent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/industries">Industries</Link>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} Aillegent. All rights reserved.</span>
          <div className="foot-legal">
            <span>Build faster</span>
            <span>Scale confidently</span>
            <span>Optimise continuously</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
