import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "20+", label: "Projects shipped" },
  { value: "10+", label: "Happy collaborators" },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-6">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a MERN Stack Developer focused on building fast, scalable, accessible, and polished web applications. I enjoy turning complex problems into intuitive digital experiences using. <span className="text-foreground">React.js,</span>{" "}
            <span className="text-foreground">Express.js,</span>{" "}
            <span className="text-foreground">MongoDB,</span>{" "}and{" "}
            <span className="text-foreground">Node.js.</span>
          </p>
          <p>
            My work sits at the intersection of design and engineering. I care about creating seamless user experiences while building clean, maintainable, and scalable architectures behind them. From crafting responsive interfaces and reusable React components to designing <span className="text-foreground">RESTful APIs</span>, <span className="text-foreground">managing databases</span>, and implementing robust backend logic, I enjoy working across the entire development stack.
            {/* My work sits at the intersection of design and engineering — I care as much about a smooth interaction as I
            do about a maintainable component architecture. Lately I&apos;ve been expanding my range into full-stack
            development with the <span className="text-foreground">MERN stack</span>, building APIs and data layers to
            complement the interfaces I love to build. */}
          </p>
          <p>
            I&apos;m passionate about performance, clean code, and continuous learning. I&apos;m always exploring modern tools, best practices, and emerging technologies to build better products and improve the way I develop.
          </p>
          <p>
            When I&apos;m not building applications, you&apos;ll find me sharing what I learn on YouTube, experimenting with new technologies, and exploring the ever-evolving web development ecosystem.
            {/* shipping, you&apos;ll find me sharing what I learn on YouTube and exploring the latest in
            the frontend ecosystem. */}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2 grid grid-cols-3 gap-4 md:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
              <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
