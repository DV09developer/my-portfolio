import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const groups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend (MERN)",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication", "Mongoose"],
  },
  {
    title: "Tooling",
    items: ["Git & GitHub", "Vite", "Webpack", "Figma", "Vercel", "Postman"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-6">
      <SectionHeading
        index="03"
        title="Skills"
        description="The tools and technologies I reach for to build modern web applications."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-mono uppercase tracking-wider text-primary">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
