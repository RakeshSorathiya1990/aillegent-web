"use client"

import { useEffect, useRef, useState } from "react"

const ITEMS = [
  {
    quote:
      "Aillegent moved us from a fragile MVP to a production platform we actually trust — without the usual handoff gaps.",
    av: "RK",
    name: "Placeholder Name",
    role: "VP Engineering · SaaS startup",
  },
  {
    quote:
      "They started with our business problem, then earned every technical decision from there. Nothing over-built.",
    av: "SM",
    name: "Placeholder Name",
    role: "Founder · FinTech",
  },
  {
    quote:
      "The delivery cycle kept architecture, quality, and cost in the same conversation the whole way through.",
    av: "AV",
    name: "Placeholder Name",
    role: "CTO · Enterprise platform",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const reduceRef = useRef(false)

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }
  const play = () => {
    if (reduceRef.current) return
    stop()
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % ITEMS.length), 5500)
  }

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion:reduce)").matches
    play()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="tstrip"
      data-animate
      onMouseEnter={stop}
      onMouseLeave={play}
    >
      <span className="tquote-mark">&ldquo;</span>
      <div className="tviewport">
        {ITEMS.map((t, i) => (
          <div key={i} className={`tcard${i === active ? " active" : ""}`}>
            <p className="quote">{t.quote}</p>
            <div className="who">
              <span className="av">{t.av}</span>
              <div>
                <b>{t.name}</b>
                <br />
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tdots">
        {ITEMS.map((_, i) => (
          <button
            key={i}
            className={`tdot${i === active ? " active" : ""}`}
            type="button"
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => {
              setActive(i)
              play()
            }}
          />
        ))}
      </div>
    </div>
  )
}
