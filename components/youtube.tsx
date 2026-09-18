"use client"

import { motion } from "motion/react"
import { Play } from "lucide-react"
import { YoutubeIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const videos = [
  {
    title: "Build a Next.js 16 App from Scratch",
    meta: "24:18 · 12K views",
    thumbnail: "/youtube/nextjs-tutorial.png",
    link: "https://www.youtube.com/@LearnCode-s2t"
  },
  {
    title: "Mastering React Server Components",
    meta: "18:42 · 8.5K views",
    thumbnail: "/youtube/react-server-components.png",
    link: "https://www.youtube.com/@LearnCode-s2t"
  },
  {
    title: "Smooth Animations with Framer Motion",
    meta: "15:30 · 21K views",
    thumbnail: "/youtube/framer-motion.png",
    link: "https://www.youtube.com/@LearnCode-s2t"
  },
]

export function Youtube() {
  return (
    <section id="youtube" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-6">
      <SectionHeading
        index="05"
        title="YouTube"
        description="I share tutorials and deep dives on frontend development. Subscribe to follow along."
      />

      <Reveal className="mb-8">
        <a
          href="https://www.youtube.com/@LearnCode-s2t"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <YoutubeIcon className="size-4" />
          Subscribe on YouTube
        </a>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video, i) => (
          <motion.a
            key={video.title}
            href={video.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={`${video.title} thumbnail`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-background/30 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="grid size-12 place-items-center rounded-full bg-foreground text-background">
                  <Play className="size-5 translate-x-0.5 fill-current" />
                </span>
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-pretty font-medium leading-snug transition-colors group-hover:text-primary">
                {video.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{video.meta}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
