"use client"

import { useEffect, useId, useRef, useState } from "react"

type SelectProps = {
  name: string
  options: string[]
  placeholder?: string
  defaultValue?: string
  ariaLabelledby?: string
}

/** Custom, fully-accessible dropdown (no native <select>). Feeds the form via a hidden input. */
export default function Select({ name, options, placeholder = "Select…", defaultValue = "", ariaLabelledby }: SelectProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const listId = useId()

  // close on outside click
  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [open])

  // keep active option in view
  useEffect(() => {
    if (!open || !listRef.current) return
    const el = listRef.current.children[active] as HTMLElement | undefined
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
        setActive(value ? Math.max(0, options.indexOf(value)) : 0)
        setOpen(true)
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
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
      >
        <span>{value || placeholder}</span>
        <svg className="select-caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="select-menu" role="listbox" id={listId} ref={listRef} tabIndex={-1}>
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
      )}
    </div>
  )
}
