"use client"

import { useEffect, useId, useRef, useState, type CSSProperties } from "react"
import { createPortal } from "react-dom"

type SelectProps = {
  name: string
  options: string[]
  placeholder?: string
  defaultValue?: string
  ariaLabelledby?: string
}

/** Custom, fully-accessible dropdown (no native <select>).
 *  The menu is portaled to <body> with fixed positioning so it can never be
 *  trapped by a parent stacking context (e.g. an animated card) or covered by the footer. */
export default function Select({ name, options, placeholder = "Select…", defaultValue = "", ariaLabelledby }: SelectProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [active, setActive] = useState(0)
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({})
  const rootRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const listId = useId()

  useEffect(() => setMounted(true), [])

  const computePosition = () => {
    const rect = btnRef.current?.getBoundingClientRect()
    if (!rect) return
    const gap = 8
    const below = window.innerHeight - rect.bottom - 16
    const above = rect.top - 16
    const useUp = below < 240 && above > below
    const maxH = Math.max(168, Math.min(320, useUp ? above : below))
    const base: CSSProperties = {
      position: "fixed",
      left: rect.left,
      width: rect.width,
      maxHeight: maxH,
      right: "auto",
    }
    setMenuStyle(
      useUp
        ? { ...base, bottom: window.innerHeight - rect.top + gap, top: "auto" }
        : { ...base, top: rect.bottom + gap, bottom: "auto" },
    )
  }

  const openMenu = () => {
    computePosition()
    setActive(value ? Math.max(0, options.indexOf(value)) : 0)
    setOpen(true)
  }

  // outside click closes (menu is portaled, so check both root and menu)
  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node
      if (rootRef.current?.contains(t) || menuRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [open])

  // keep the menu glued to the control while scrolling / resizing
  useEffect(() => {
    if (!open) return
    const onMove = () => computePosition()
    window.addEventListener("resize", onMove)
    window.addEventListener("scroll", onMove, true)
    return () => {
      window.removeEventListener("resize", onMove)
      window.removeEventListener("scroll", onMove, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // keep active option in view
  useEffect(() => {
    if (!open || !menuRef.current) return
    const el = menuRef.current.children[active] as HTMLElement | undefined
    el?.scrollIntoView({ block: "nearest" })
  }, [open, active])

  const choose = (opt: string) => {
    setValue(opt)
    setOpen(false)
    btnRef.current?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        openMenu()
      }
      return
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setActive((i) => Math.min(options.length - 1, i + 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setActive((i) => Math.max(0, i - 1))
        break
      case "Home":
        e.preventDefault()
        setActive(0)
        break
      case "End":
        e.preventDefault()
        setActive(options.length - 1)
        break
      case "Enter":
      case " ":
        e.preventDefault()
        choose(options[active])
        break
      case "Escape":
        e.preventDefault()
        setOpen(false)
        break
      case "Tab":
        setOpen(false)
        break
    }
  }

  const menu = (
    <ul
      className="select-menu"
      role="listbox"
      id={listId}
      ref={menuRef}
      tabIndex={-1}
      style={menuStyle}
    >
      {options.map((opt, i) => (
        <li
          key={opt}
          role="option"
          aria-selected={value === opt}
          className={`select-opt${i === active ? " active" : ""}${value === opt ? " selected" : ""}`}
          onMouseEnter={() => setActive(i)}
          onClick={() => choose(opt)}
        >
          {opt}
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`select${open ? " open" : ""}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        ref={btnRef}
        className={`select-btn${value ? "" : " is-placeholder"}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={ariaLabelledby}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
      >
        <span>{value || placeholder}</span>
        <svg className="select-caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && mounted ? createPortal(menu, document.body) : null}
    </div>
  )
}
