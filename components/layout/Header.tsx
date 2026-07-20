"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { nav } from "@/lib/site"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // lock scroll + escape to close while menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="Aillegent home">
            <Image className="brand-logo" src="/img/aillegent-logo.png" alt="Aillegent" width={141} height={50} priority />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation <span className="arw">→</span>
            </Link>
            <button
              className="menu-btn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mm-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Start a conversation <span className="arw">→</span>
        </Link>
      </div>
    </>
  )
}
