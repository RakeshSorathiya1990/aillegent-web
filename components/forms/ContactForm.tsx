"use client"

import { useActionState } from "react"
import Select from "@/components/ui/select"
import { submitContact, type ContactState } from "@/app/contact/actions"

const initialState: ContactState = { ok: false, message: "" }

const STAGES = [
  "New idea / Quick MVP",
  "Startup growth",
  "Existing product improvement",
  "Enterprise production support",
  "AI implementation",
  "Cloud, quality, or cost optimisation",
]

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const err = state.errors || {}

  return (
    <div className="form-card" data-animate>
      <form action={formAction} noValidate>
        {/* honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hp-field"
        />

        <div className="field-row">
          <div className="field">
            <label htmlFor="name">Name <span className="req">*</span></label>
            <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!err.name} />
            {err.name && <span className="field-err">{err.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="email">Work email <span className="req">*</span></label>
            <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!err.email} />
            {err.email && <span className="field-err">{err.email}</span>}
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <input id="role" name="role" type="text" autoComplete="organization-title" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="link">Website or product link (optional)</label>
          <input id="link" name="link" type="url" inputMode="url" placeholder="https://" aria-invalid={!!err.link} />
          {err.link && <span className="field-err">{err.link}</span>}
        </div>

        <div className="field">
          <label htmlFor="achieve">What are you trying to achieve? <span className="req">*</span></label>
          <textarea id="achieve" name="achieve" required aria-invalid={!!err.achieve} />
          {err.achieve && <span className="field-err">{err.achieve}</span>}
        </div>

        <div className="field">
          <label id="stage-label">What stage are you in?</label>
          <Select name="stage" options={STAGES} placeholder="Select a stage…" ariaLabelledby="stage-label" />
        </div>

        <button type="submit" className="btn btn-primary btn-lg" disabled={pending}>
          {pending ? "Sending…" : "Start the conversation"} <span className="arw">→</span>
        </button>

        {state.message && (
          <div className={`form-msg show${state.ok ? " ok" : " error"}`} role="status" aria-live="polite">
            {state.message}
          </div>
        )}
      </form>
    </div>
  )
}
