"use client"

import { useEffect, useRef } from "react"

type Stage = { name: string; body: string; out: string }

const STAGES: Stage[] = [
  { name: "Discover", body: "Turn business goals, user needs, and domain context into a clear problem to solve.", out: "Prioritised requirement definition" },
  { name: "Architect", body: "Define functional and non-functional requirements, solution architecture, and delivery documentation.", out: "Build-ready system blueprint" },
  { name: "Build", body: "Develop frontend, backend, APIs, data, and AI-enabled capabilities.", out: "Working product increments" },
  { name: "Launch", body: "Set up CI/CD, containers, cloud infrastructure, databases, security, and governance.", out: "Secure, repeatable deployment" },
  { name: "Validate", body: "Move from business scenarios through test environments and UAT to production with automation and performance testing.", out: "Verified, scalable experience" },
  { name: "Optimise", body: "Monitor reliability, performance, and cost; feed findings into the next product decision.", out: "Stable growth with controlled spend" },
]

export default function DeliveryCycle() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const rotorRef = useRef<HTMLDivElement>(null)
  const ringArcRef = useRef<SVGCircleElement>(null)
  const ccNumRef = useRef<HTMLSpanElement>(null)
  const ccNameRef = useRef<HTMLSpanElement>(null)
  const cpStepRef = useRef<HTMLDivElement>(null)
  const cpTitleRef = useRef<HTMLHeadingElement>(null)
  const cpBodyRef = useRef<HTMLParagraphElement>(null)
  const cpOutRef = useRef<HTMLSpanElement>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches
    const rotor = rotorRef.current
    const wrap = wrapRef.current
    const ringArc = ringArcRef.current
    const section = sectionRef.current
    if (!rotor || !wrap || !section) return

    const N = STAGES.length
    const STEP = 360 / N
    const RING_R = 38
    const C = 2 * Math.PI * RING_R
    let current = 0

    const nodeEls: HTMLDivElement[] = []
    const nameEls: HTMLDivElement[] = []
    const listeners: Array<() => void> = []

    STAGES.forEach((s, i) => {
      const node = document.createElement("div")
      node.className = "node"
      const btn = document.createElement("button")
      btn.className = "node-btn"
      btn.type = "button"
      btn.setAttribute("aria-label", "Stage " + (i + 1) + ": " + s.name)
      btn.innerHTML = '<span class="node-dot">' + String(i + 1).padStart(2, "0") + "</span>"
      const onClick = () => {
        if (scrollDriven) { scrollToStage(i); return }
        stop(); go(i); start()
      }
      btn.addEventListener("click", onClick)
      listeners.push(() => btn.removeEventListener("click", onClick))
      node.appendChild(btn)
      rotor.appendChild(node)
      nodeEls.push(node)
      const nm = document.createElement("div")
      nm.className = "node-name"
      nm.textContent = s.name
      rotor.appendChild(nm)
      nameEls.push(nm)
    })

    function layout() {
      const size = wrap ? wrap.clientWidth : 0
      if (!size) return
      const cx = size / 2, cy = size / 2, rDot = size * (RING_R / 100), DOT = 27
      STAGES.forEach((s, i) => {
        const a = (i * STEP - 90) * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a)
        const dx = cx + rDot * ca, dy = cy + rDot * sa
        nodeEls[i].style.left = dx + "px"
        nodeEls[i].style.top = dy + "px"
        const nm = nameEls[i]
        let lx: number, ly: number, tx: string
        if (Math.abs(ca) < 0.5) { lx = dx; ly = dy + (sa < 0 ? -1 : 1) * (DOT + 14); tx = "-50%" }
        else if (ca > 0) { lx = dx + DOT + 6; ly = dy; tx = "0" }
        else { lx = dx - DOT - 6; ly = dy; tx = "-100%" }
        nm.style.left = lx + "px"
        nm.style.top = ly + "px"
        nm.style.transform = "translate(" + tx + ",-50%)"
      })
    }

    const fades = [cpStepRef.current, cpTitleRef.current, cpBodyRef.current, cpOutRef.current, ccNumRef.current, ccNameRef.current].filter(Boolean) as HTMLElement[]
    let fadeTimer: ReturnType<typeof setTimeout> | undefined
    const pad = (n: number) => String(n).padStart(2, "0")

    function go(idx: number) {
      const prev = current
      const i = ((idx % N) + N) % N
      if (i === prev && ccNameRef.current && ccNameRef.current.textContent === STAGES[i].name) return
      current = i
      const arcLen = Math.max(i / N, 0.014) * C
      if (ringArc) {
        if (i === 0 && prev === N - 1) {
          ringArc.style.transition = "none"
          ringArc.style.strokeDasharray = arcLen + " " + (C - arcLen)
          void ringArc.getBoundingClientRect()
          ringArc.style.transition = ""
        } else {
          ringArc.style.strokeDasharray = arcLen + " " + (C - arcLen)
        }
      }
      nodeEls.forEach((el, k) => el.classList.toggle("active", k === i))
      nameEls.forEach((el, k) => el.classList.toggle("active", k === i))
      const s = STAGES[i]
      const apply = () => {
        if (ccNumRef.current) ccNumRef.current.textContent = "Stage " + pad(i + 1) + " / " + pad(N)
        if (ccNameRef.current) ccNameRef.current.textContent = s.name
        if (cpStepRef.current) cpStepRef.current.textContent = "Stage " + pad(i + 1) + " — " + s.name
        if (cpTitleRef.current) cpTitleRef.current.textContent = s.name
        if (cpBodyRef.current) cpBodyRef.current.textContent = s.body
        if (cpOutRef.current) cpOutRef.current.textContent = s.out
      }
      clearTimeout(fadeTimer)
      if (reduce) { apply(); return }
      fades.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(10px)" })
      fadeTimer = setTimeout(() => {
        apply()
        fades.forEach((el) => { el.style.opacity = "1"; el.style.transform = "translateY(0)" })
      }, 430)
    }

    const scrollDriven = !reduce

    let lockTarget = -1
    let lockTimer: ReturnType<typeof setTimeout> | undefined
    function scrollToStage(i: number) {
      const pinC = section
      if (!pinC) return
      const total = pinC.offsetHeight - window.innerHeight
      const y = window.scrollY + pinC.getBoundingClientRect().top + (i / N) * total + total / (N * 2)
      lockTarget = i
      clearTimeout(lockTimer)
      lockTimer = setTimeout(() => { lockTarget = -1 }, 1600)
      go(i)
      if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.1 })
      else window.scrollTo({ top: y, behavior: "smooth" })
    }

    let timer: ReturnType<typeof setInterval> | undefined
    function stop() { if (timer) { clearInterval(timer); timer = undefined } }
    function start() { if (reduce || scrollDriven) return; timer = setInterval(() => go(current + 1), 5000) }

    const onPrev = () => { const t = (current - 1 + N) % N; if (scrollDriven) { scrollToStage(t); return } stop(); go(t); start() }
    const onNext = () => { const t = (current + 1) % N; if (scrollDriven) { scrollToStage(t); return } stop(); go(t); start() }
    prevRef.current?.addEventListener("click", onPrev)
    nextRef.current?.addEventListener("click", onNext)
    listeners.push(() => prevRef.current?.removeEventListener("click", onPrev))
    listeners.push(() => nextRef.current?.removeEventListener("click", onNext))

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); const t = (current + 1) % N; if (scrollDriven) { scrollToStage(t); return } stop(); go(t); start() }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); const t = (current - 1 + N) % N; if (scrollDriven) { scrollToStage(t); return } stop(); go(t); start() }
    }
    wrap.addEventListener("keydown", onKey)
    listeners.push(() => wrap.removeEventListener("keydown", onKey))

    layout()
    requestAnimationFrame(layout)
    const lt = setTimeout(layout, 320)
    let rt: ReturnType<typeof setTimeout>
    const onResize = () => { clearTimeout(rt); rt = setTimeout(layout, 120) }
    window.addEventListener("resize", onResize, { passive: true })
    listeners.push(() => window.removeEventListener("resize", onResize))

    go(0)

    if (scrollDriven) {
      const onCyc = () => {
        const r = section.getBoundingClientRect()
        const total = section.offsetHeight - window.innerHeight
        const prog = total > 0 ? Math.min(Math.max(-r.top / total, 0), 0.9999) : 0
        const idx = Math.min(Math.floor(prog * N), N - 1)
        if (lockTarget >= 0) { if (idx === lockTarget) lockTarget = -1; return }
        if (idx !== current) go(idx)
      }
      window.addEventListener("scroll", onCyc, { passive: true })
      onCyc()
      listeners.push(() => window.removeEventListener("scroll", onCyc))
    } else {
      const co = new IntersectionObserver((es) => { es.forEach((e) => (e.isIntersecting ? start() : stop())) }, { threshold: 0.3 })
      co.observe(wrap)
      listeners.push(() => co.disconnect())
    }

    return () => {
      stop()
      clearTimeout(fadeTimer)
      clearTimeout(lt)
      listeners.forEach((fn) => fn())
      rotor.innerHTML = ""
    }
  }, [])

  return (
    <section className="pin-cycle" id="cycle" ref={sectionRef}>
      <div className="pin-stage">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              From requirement to <span className="grad-text">reliable production</span>
            </h2>
            <p className="lead">
              Good delivery is not a handoff from discovery to development. It is a connected cycle that keeps business
              context, architecture, quality, cloud operations, and cost decisions aligned. Select a stage to explore it.
            </p>
          </div>
          <div className="cycle">
            <div className="cycle-stage" id="cycleWrap" role="group" aria-label="Delivery cycle — use arrow keys" tabIndex={0} data-animate ref={wrapRef}>
              <svg className="ring-svg" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <linearGradient id="dg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#25D79B" />
                    <stop offset="1" stopColor="#3B7DE0" />
                  </linearGradient>
                </defs>
                <circle className="ring-track" cx="50" cy="50" r="38" />
                <circle className="ring-arc" cx="50" cy="50" r="38" strokeDasharray="3 236" transform="rotate(-90 50 50)" ref={ringArcRef} />
              </svg>
              <div className="rotor" id="rotor" ref={rotorRef} />
              <div className="cycle-core">
                <span className="cc-num" id="ccNum" ref={ccNumRef}>Stage 01 / 06</span>
                <span className="cc-name" id="ccName" ref={ccNameRef}>Discover</span>
              </div>
            </div>
            <div className="cycle-panel" data-animate>
              <div aria-live="polite">
                <div className="cp-step" id="cpStep" ref={cpStepRef}>Stage 01 — Discover</div>
                <h3 className="cp-title" id="cpTitle" ref={cpTitleRef}>Discover</h3>
                <p className="cp-body" id="cpBody" ref={cpBodyRef}>
                  Turn business goals, user needs, and domain context into a clear problem to solve.
                </p>
              </div>
              <div className="cp-outcome">
                <span className="lab">Outcome</span>
                <span className="val" id="cpOut" ref={cpOutRef}>Prioritised requirement definition</span>
              </div>
              <div className="cp-controls">
                <button className="circ-btn" id="prevBtn" type="button" aria-label="Previous stage" ref={prevRef}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className="circ-btn" id="nextBtn" type="button" aria-label="Next stage" ref={nextRef}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
                </button>
                <span className="cp-hint"><span className="scrollcue">↓</span> Scroll to move through the cycle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
