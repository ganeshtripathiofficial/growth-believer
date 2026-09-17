import { Sparkles } from "lucide-react"
import { BRAND } from "./tokens"

/** The single wordmark. Editing it changes every page that renders Header or Footer. */
export function Logo({ href = "#top", name = "Growth Believer" }: { href?: string; name?: string }) {
  return <a className="me-logo" href={href}><span className="me-logo-mark" aria-hidden><Sparkles size={15} /></span><span>{name}</span></a>
}
