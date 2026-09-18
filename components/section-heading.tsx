import { Reveal } from "@/components/reveal"

interface SectionHeadingProps {
  index: string
  title: string
  description?: string
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex flex-col gap-3">
      <div className="flex items-center gap-3 text-sm font-mono text-primary">
        <span>{index}</span>
        <span className="h-px w-12 bg-border" aria-hidden="true" />
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
