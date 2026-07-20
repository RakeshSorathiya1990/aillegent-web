"use client"

import { useEffect, useRef } from "react"

export default function BrandPyramid() {
  const pinRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const pin = pinRef.current
    if (!pin) return
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches
    const steps = Array.from(pin.querySelectorAll<HTMLElement>(".pin-step"))
    const tiers = Array.from(pin.querySelectorAll<SVGGElement>(".pyr-tier"))

    if (reduce) {
      steps.forEach((s) => s.classList.add("active"))
      tiers.forEach((t) => t.classList.add("active"))
      return
    }

    const n = steps.length
    let cur = -1
    const onScroll = () => {
      const r = pin.getBoundingClientRect()
      const total = pin.offsetHeight - window.innerHeight
      const prog = total > 0 ? Math.min(Math.max(-r.top / total, 0), 0.9999) : 0
      const idx = Math.min(Math.floor(prog * n), n - 1)
      if (idx === cur) return
      cur = idx
      steps.forEach((s, k) => s.classList.toggle("active", k === idx))
      tiers.forEach((t, k) => t.classList.toggle("active", k <= idx))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="pin" id="approach" ref={pinRef}>
      <div className="pin-stage">
        <div className="pin-grid">
          <div className="pin-copy">
            <h2 className="h2 balance" style={{ marginBottom: 34 }}>
              How we&apos;re <span className="grad-text">built</span>
            </h2>
            <div className="pin-steps">
              <div className="pin-step" data-i="0">
                <span className="lbl">Like a product team</span>
                <h3>Product-led thinking</h3>
                <p>We start with the outcome and the user, then design the smallest thing that actually moves the business.</p>
              </div>
              <div className="pin-step" data-i="1">
                <span className="lbl">Like a system integrator</span>
                <h3>Enterprise-grade execution</h3>
                <p>Delivery maturity, platform partnerships, and compliance thinking — so it holds up at scale and in production.</p>
              </div>
              <div className="pin-step" data-i="2">
                <span className="lbl">Like an engineering company</span>
                <h3>Engineering-first culture</h3>
                <p>Modern capabilities, lean hands-on teams, and engineering DNA that ships — and keeps shipping.</p>
              </div>
            </div>
          </div>
          <div className="pin-vis" aria-hidden="true">
            <svg viewBox="0 0 460 430" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="pt" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#33E2AA" />
                  <stop offset="1" stopColor="#0E9E76" />
                </linearGradient>
                <linearGradient id="pm" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#12A386" />
                  <stop offset="1" stopColor="#3B7DE0" />
                </linearGradient>
                <linearGradient id="pb" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3B7DE0" />
                  <stop offset="1" stopColor="#2C64C4" />
                </linearGradient>
              </defs>
              <g className="pyr-tier" data-t="0">
                <path d="M230 26 L279.5 137 L180.5 137 Z" fill="url(#pt)" />
                <text className="pyr-label" x="230" y="128" textAnchor="middle" style={{ fontSize: "12.5px" }}>Product-led</text>
              </g>
              <g className="pyr-tier" data-t="1">
                <path d="M177.8 143 L282.2 143 L337.4 267 L122.6 267 Z" fill="url(#pm)" />
                <text className="pyr-label" x="230" y="201" textAnchor="middle">Enterprise-grade</text>
                <text className="pyr-sub" x="230" y="221" textAnchor="middle">SCALE · COMPLIANCE</text>
              </g>
              <g className="pyr-tier" data-t="2">
                <path d="M119.9 273 L340.1 273 L394 394 L66 394 Z" fill="url(#pb)" />
                <text className="pyr-label" x="230" y="330" textAnchor="middle">Engineering-first</text>
                <text className="pyr-sub" x="230" y="350" textAnchor="middle">HANDS-ON BUILDERS</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
