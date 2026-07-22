"use client"

import { useEffect, useRef, useState } from "react"

type Item = {
  quote: string
  av?: string
  name?: string
  role?: string
  url?: string
}

const ITEMS: Item[] = [
  {
    quote:
      "Aillegent felt less like a vendor and more like an extension of our own team. They understood what we were building, moved fast without cutting corners, and what they shipped held up in production.",
    av: "AG",
    name: "Amit Goswami",
    role: "Co-founder, Secvritas",
    url: "https://www.secvritas.com/",
  },
  {
    quote:
      "They started with our business problem, then earned every technical decision from there — nothing over-built, nothing left half-finished.",
  },
  {
    quote:
      "The delivery stayed connected end to end. Architecture, quality, and cost were part of the same conversation the whole way through.",
  },
  {
    quote:
      "From a rough idea to a running product, the team kept us moving with clear communication and engineering we could depend on.",
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
    <div className="tstrip" data-animate onMouseEnter={stop} onMouseLeave={play}>
      <span className="tquote-mark">&ldquo;</span>
      <div className="tviewport">
        {ITEMS.map((t, i) => (
          <div key={i} className={`tcard${i === active ? " active" : ""}`}>
            <p className="quote">{t.quote}</p>
            {t.name && (
              <div className="who">
                <span className="av">{t.av}</span>
                <div>
                  <b>{t.name}</b>
                  <br />
                  <span>
                    {t.url ? (
                      <a href={t.url} target="_blank" rel="noopener noreferrer">
                        {t.role}
                      </a>
                    ) : (
                      t.role
                    )}
                  </span>
                </div>
              </div>
            )}
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
