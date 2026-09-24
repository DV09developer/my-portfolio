"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"

const socials = [
  { label: "GitHub", href: "https://github.com/DV09developer", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyesh-voriya-810a52227/", icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com/@LearnCode-s2t", icon: YoutubeIcon },
  { label: "Email", href: "mailto:divyeshvoriya3@gmail.com", icon: Mail },
]

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setStatus("loading")
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),

      // Honeypot field
      website: formData.get("website"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to send your message."
        )
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("error")

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-6">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-mono text-primary">
            <span>06</span>
            <span className="h-px w-12 bg-border" aria-hidden="true" />
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something</h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hi? My inbox is always open. I&apos;ll do my best to get back to
            you as soon as possible.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <s.icon className="size-4" />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
          >
            {/* Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
            </div>
            {/* Honeypot - hidden from normal users */}
            <div
              className="absolute left-[-9999px]"
              aria-hidden="true"
            >
              <label htmlFor="website">
                Website
              </label>

              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={5000}
                required
                placeholder="Tell me about your project..."
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Success message */}
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                <CheckCircle2 className="size-4 shrink-0" />

                <span>
                  Message sent successfully. Thanks for reaching out!
                </span>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                <AlertCircle className="size-4 shrink-0" />

                <span>{error}</span>
              </div>
            )}


            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileTap={
                status !== "loading"
                  ? { scale: 0.98 }
                  : undefined
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" && "Sending..."}

              {status === "success" && "Message sent!"}

              {status === "error" && "Try again"}

              {status === "idle" && "Send message"}

              {status === "idle" && (
                <Send className="size-4" />
              )}

              {status === "error" && (
                <Send className="size-4" />
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  )
}
