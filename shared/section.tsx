import type { ReactNode } from "react"
export function Section({ id, className = "", children, label }: { id?: string; className?: string; children: ReactNode; label?: string }) {
  return <section id={id} className={className} aria-label={label}>{children}</section>
}
