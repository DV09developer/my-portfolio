import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const roles = [
  {
    period: "2025 — Present",
    title: "Frontend Developer",
    company: "Potenz Technology",
    description:
      "Build scalable, responsive web applications with React.js and Next.js. Collaborate with designers to ship pixel-perfect, accessible interfaces and reusable component systems.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2023 — Present",
    title: "React Developer",
    company: "Freelance & Contract",
    description:
      "Developed feature-rich dashboards and marketing sites. Improved performance with code-splitting and modern data fetching patterns, reducing load times across the product.",
    tags: ["React", "Redux", "REST APIs", "Framer Motion"],
  },
  // {
  //   period: "2021 — 2022",
  //   title: "Web Developer Intern",
  //   company: "Startup Lab",
  //   description:
  //     "Started my journey building responsive landing pages and learning component-driven development. Contributed to UI fixes and shipped my first production features.",
  //   tags: ["JavaScript", "HTML/CSS", "Git", "Figma"],
  // },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-6">
      <SectionHeading index="02" title="Experience" description="A timeline of roles where I've grown as a developer." />

      <div className="flex flex-col">
        {roles.map((role, i) => (
          <Reveal key={role.title} delay={i * 0.08}>
            <div className="group grid gap-3 border-t border-border py-8 md:grid-cols-[180px_1fr]">
              <div className="font-mono text-sm text-muted-foreground">{role.period}</div>
              <div>
                <h3 className="text-lg font-medium">
                  {role.title} <span className="text-primary">· {role.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{role.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
