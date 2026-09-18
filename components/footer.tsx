export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Divyesh Voriya. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">Built with Next.js, Tailwind &amp; Framer Motion</p>
      </div>
    </footer>
  )
}
