"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"

const socials = [
  { label: "GitHub", href: "https://github.com/DV09developer", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyesh-voriya-810a52227/", icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com/@LearnCode-s2t", icon: YoutubeIcon },
  { label: "Email", href: "mailto:divyeshvoriya3@gmail.com", icon: Mail },
]

export function Contact() {
  const [sent, setSent] = useState(false)

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
                rel="noreferrer"
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
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {sent ? "Message sent — thanks!" : "Send message"}
              {!sent && <Send className="size-4" />}
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
