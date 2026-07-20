"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import anime from "animejs"
import Lenis from "lenis"

declare global {
  interface Window {
    __lenis?: Lenis | null
  }
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  /* ---------- smooth scroll (Lenis) — init once ---------- */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true, overscroll: false })
    lenisRef.current = lenis
    window.__lenis = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      window.__lenis = null
    }
  }, [])

  /* ---------- per-route motion: reveals, draw-in, count-up, magnetics ---------- */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const cleanups: Array<() => void> = []

    // scroll to top on navigation (Lenis keeps its own position otherwise)
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })

    /* anchor links -> smooth scroll */
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    const onAnchor = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement
      const id = a.getAttribute("href") || ""
      if (id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      if (lenisRef.current) lenisRef.current.scrollTo(el as HTMLElement, { offset: -72, duration: 1.1 })
      else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
    }
    anchors.forEach((a) => a.addEventListener("click", onAnchor))
    cleanups.push(() => anchors.forEach((a) => a.removeEventListener("click", onAnchor)))

    /* reveals */
    const animEls = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"))
    const heroEls = Array.from(
      document.querySelectorAll<HTMLElement>(".hero [data-animate], .phero [data-animate]"),
    )
    if (reduce) {
      animEls.forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
    } else {
      if (heroEls.length) {
        anime.timeline({ easing: "easeOutExpo" }).add({
          targets: heroEls,
          translateY: [42, 0],
          opacity: [0, 1],
          duration: 1050,
          delay: anime.stagger(110, { start: 120 }),
        })
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target as HTMLElement
              io.unobserve(el)
              anime({ targets: el, translateY: [38, 0], opacity: [0, 1], duration: 850, easing: "easeOutQuad" })
            }
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
      )
      animEls.forEach((el) => {
        if (heroEls.indexOf(el) === -1) io.observe(el)
      })
      cleanups.push(() => io.disconnect())
    }

    /* SVG draw-in */
    document.querySelectorAll<SVGPathElement | SVGCircleElement>("[data-draw]").forEach((p) => {
      try {
        const len = (p as SVGGeometryElement).getTotalLength()
        p.style.strokeDasharray = String(len)
        p.style.strokeDashoffset = reduce ? "0" : String(len)
        if (reduce) return
        const o = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                o.unobserve(p)
                anime({ targets: p, strokeDashoffset: [len, 0], duration: 1400, easing: "easeInOutSine" })
              }
            })
          },
          { threshold: 0.3 },
        )
        o.observe(p)
        cleanups.push(() => o.disconnect())
      } catch {
        /* ignore */
      }
    })

    /* charts reveal */
    const chartObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            chartObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    document.querySelectorAll(".chart-card").forEach((el) => chartObs.observe(el))
    cleanups.push(() => chartObs.disconnect())

    /* count-up stats */
    const countUp = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-count") || "0") || 0
      const suffix = el.getAttribute("data-suffix") || ""
      const whole = target % 1 === 0
      if (reduce) {
        el.textContent = target + suffix
        return
      }
      const obj = { v: 0 }
      anime({
        targets: obj,
        v: target,
        duration: 1600,
        easing: "easeOutExpo",
        update: () => {
          el.textContent = (whole ? Math.round(obj.v) : obj.v.toFixed(1)) + suffix
        },
      })
    }
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement)
            countObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => countObs.observe(el))
    cleanups.push(() => countObs.disconnect())

    /* magnetic buttons + card spotlight (hover-capable devices only) */
    if (!reduce && window.matchMedia("(hover:hover)").matches) {
      document.querySelectorAll<HTMLElement>(".btn-primary").forEach((btn) => {
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect()
          btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.16}px,${
            (e.clientY - r.top - r.height / 2) * 0.22 - 2
          }px)`
        }
        const leave = () => {
          btn.style.transform = ""
        }
        btn.addEventListener("pointermove", move)
        btn.addEventListener("pointerleave", leave)
        cleanups.push(() => {
          btn.removeEventListener("pointermove", move)
          btn.removeEventListener("pointerleave", leave)
        })
      })
      document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect()
          card.style.setProperty("--mx", `${e.clientX - r.left}px`)
          card.style.setProperty("--my", `${e.clientY - r.top}px`)
        }
        card.addEventListener("pointermove", move)
        cleanups.push(() => card.removeEventListener("pointermove", move))
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return <>{children}</>
}
