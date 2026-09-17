import { ChevronDown } from "lucide-react"
import { Logo } from "./logo"

export type HeaderLink = { label: string; href: string; menu?: boolean }
export function Header({ links, loginHref, cta }: { links: HeaderLink[]; loginHref: string; cta: { label: string; href: string } }) {
  return <header className="me-header"><nav className="me-nav" aria-label="Main navigation"><Logo /> <ul className="me-nav-links">{links.map((link) => <li key={link.label}><a href={link.href}>{link.label}{link.menu && <ChevronDown aria-hidden />}</a></li>)}</ul><div className="me-nav-actions"><a className="me-login" href={loginHref}>Login</a><a className="me-signup" href={cta.href}>{cta.label}</a></div></nav></header>
}
