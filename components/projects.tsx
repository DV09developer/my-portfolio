"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A real-time expense analytics dashboard with interactive charts and filtering. Built for speed with server components and incremental data fetching.",
    image: "/projects/expense-tracker.png",
    tags: ["Express.js", "Next.js", "TypeScript", "Tailwind"],
    live: "https://expense-tracker-tau-virid-97.vercel.app/",
    repo: "https://github.com/DV09developer/ExpenseTracker",
  },
  {
    title: "forge-auth",
    description:
      "A lightweight authentication toolkit for Node.js: secure password hashing, JWT access/refresh tokens, and Express middleware — as small, independent building blocks. No database, no user model, no login routes, no opinions. You stay in control of your app; this just handles the parts that are easy to get wrong.",
    image: "/projects/node.jpg",
    tags: ["Node.js", "JWT", "bcrypt"],
    live: "https://www.npmjs.com/package/forge-auth",
    repo: "https://github.com/DV09developer/forge-auth",
  },
  // {
  //   title: "TaskFlow",
  //   description:
  //     "A collaborative task manager with drag-and-drop boards, real-time updates, and a full MERN backend powering authentication and data.",
  //   image: "/projects/task-manager.png",
  //   tags: ["MERN", "MongoDB", "Express"],
  //   live: "#",
  //   repo: "#",
  // },
  // {
  //   title: "Lumen Landing",
  //   description:
  //     "A high-converting SaaS marketing site with rich scroll animations, a design system, and a CMS-driven blog.",
  //   image: "/projects/saas-landing.png",
  //   tags: ["Next.js", "Framer Motion", "CMS"],
  //   live: "#",
  //   repo: "#",
  // },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-6">
      <SectionHeading
        index="04"
        title="Projects"
        description="A selection of things I've designed and built recently."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20"
          >
            <div className="relative aspect-16/10 overflow-hidden border-b border-border">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} preview`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.repo}
                    aria-label={`${project.title} source code`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                  <a
                    href={project.live}
                    aria-label={`${project.title} live site`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
