import { ArrowUp } from "lucide-react"
import { Logo } from "./logo"

export type FooterColumn = { heading: string; links: string[] }

const hrefFor = (label: string) => {
  const map: Record<string, string> = {
    "What we solve": "#problems",
    "Growth areas": "#areas",
    Products: "#products",
    "Growth Assessment": "#assessment",
    Guides: "#faq",
    Productivity: "#productivity",
    Mindset: "#mindset",
    Career: "#career",
    Business: "#business",
    Life: "#life",
    "Terms of service": "#top",
    "Privacy policy": "#top",
  }
  return map[label] ?? "#top"
}

export function Footer({ columns, detail }: { columns: FooterColumn[]; detail: string }) {
  return (
    <footer className="me-footer">
      <div className="me-wrap">
        <div className="me-footer-top">
          <div className="me-footer-brand">
            <Logo />
            <p>{detail}</p>
            <a className="me-footer-jump" href="#top">
              Back to top<ArrowUp aria-hidden />
            </a>
          </div>
          <div className="me-footer-cols">
            {columns.map(({ heading, links }) => (
              <section key={heading}>
                <h2>{heading}</h2>
                <ul>
                  {links.map((link) => (
                    <li key={link}>
                      <a href={hrefFor(link)}>{link}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
        <div className="me-footer-bottom">
          <span>© 2026 Growth Believer. All rights reserved.</span>
          <span className="me-footer-legal">
            <a href="#top">Terms of service</a>
            <a href="#top">Privacy policy</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
