"use server"

import { z } from "zod"
import { site } from "@/lib/site"

export type ContactState = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  company: z.string().trim().optional().default(""),
  role: z.string().trim().optional().default(""),
  link: z.string().trim().url("Enter a valid URL (including https://).").or(z.literal("")).optional().default(""),
  achieve: z.string().trim().min(10, "Tell us a little more about what you want to achieve."),
  stage: z.string().trim().optional().default(""),
})

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // honeypot — bots fill hidden fields; silently accept without sending
  if ((formData.get("website_hp") as string)?.length) {
    return { ok: true, message: "Thank you. We have received your message and will get back to you." }
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role"),
    link: formData.get("link"),
    achieve: formData.get("achieve"),
    stage: formData.get("stage"),
  })

  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0])
      if (!errors[key]) errors[key] = issue.message
    }
    return { ok: false, message: "Please fix the highlighted fields.", errors }
  }

  const d = parsed.data
  const subject = `New enquiry — ${d.name}${d.company ? ` (${d.company})` : ""}`
  const text = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    d.company ? `Company: ${d.company}` : null,
    d.role ? `Role: ${d.role}` : null,
    d.link ? `Link: ${d.link}` : null,
    d.stage ? `Stage: ${d.stage}` : null,
    "",
    "What they want to achieve:",
    d.achieve,
  ]
    .filter((l) => l !== null)
    .join("\n")

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env

  // SMTP not configured yet — accept the submission so the form works in demo,
  // and record it server-side. Wire real delivery by setting the env vars.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.info("[contact] SMTP not configured — submission received:\n" + text)
    return {
      ok: true,
      message: "Thank you. We have received your message and will review the context before getting back to you.",
    }
  }

  try {
    const nodemailer = (await import("nodemailer")).default
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"${site.name} Website" <${SMTP_USER}>`,
      to: CONTACT_TO || site.email,
      replyTo: `"${d.name}" <${d.email}>`,
      subject,
      text,
    })

    return {
      ok: true,
      message: "Thank you. We have received your message and will review the context before getting back to you.",
    }
  } catch (err) {
    console.error("[contact] send failed:", err)
    return {
      ok: false,
      message: "Something went wrong sending your message. Please email us directly at " + site.email + ".",
    }
  }
}
