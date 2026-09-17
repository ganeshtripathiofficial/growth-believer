import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
export function CtaButton({ href, children, variant = "light", className = "" }: { href: string; children: ReactNode; variant?: "light" | "violet" | "ghost"; className?: string }) {
  return <a href={href} className={`me-btn me-btn-${variant} ${className}`}>{children}<ArrowRight aria-hidden /></a>
}
