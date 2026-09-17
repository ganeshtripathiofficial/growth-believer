import { ArrowRight, BriefcaseBusiness, Compass, Heart, Sparkles, Target } from "lucide-react"
import { CtaButton } from "../shared/cta-button"
import { Footer } from "../shared/footer"
import { Header } from "../shared/header"
import { Section } from "../shared/section"
import { brandStyles, sharedStyles } from "../shared/tokens"

const products = [
  { title: "The Focus & Consistency Guide", body: "Build a simple daily system, protect your attention, and make progress easier to repeat.", href: "/sales#focus-guide" },
  { title: "The Career Clarity Guide", body: "Turn a difficult career decision into a clear set of questions, options, and next actions.", href: "/sales#career-guide" },
  { title: "The Business Action Guide", body: "Move from a good idea to a focused offer, a simple plan, and your next real-world test.", href: "/sales#business-guide" },
]

const areas = [
  [Compass, "Productivity", "Focus your time, reduce distraction, and build systems you can repeat."],
  [Sparkles, "Mindset", "Build better habits, make clearer choices, and keep moving when progress feels slow."],
  [BriefcaseBusiness, "Career", "Make career decisions with a clearer framework and practical next actions."],
  [Target, "Business", "Turn ideas into focused plans, useful offers, and action."],
  [Heart, "Life", "Handle everyday challenges with more clarity, intention, and practical tools."],
] as const

export default function Homepage() {
  return (
    <main className="me-page gb-home" id="top">
      <style>{brandStyles + sharedStyles + styles}</style>
      <Header
        links={[{ label: "Start here", href: "/hero" }, { label: "Growth areas", href: "#areas" }, { label: "Storefront", href: "/storefront" }]}
        loginHref="/quiz"
        cta={{ label: "Start growing", href: "/hero" }}
      />

      <Section className="gb-home-hero">
        <div className="me-wrap gb-home-hero-grid">
          <div>
            <p className="me-eyebrow">Growth Believer</p>
            <h1>Less noise. More clarity. One useful next step.</h1>
            <p>Practical digital resources to help you solve everyday problems, build better habits, and keep moving forward.</p>
            <div className="gb-home-actions">
              <CtaButton href="/hero" variant="violet">START YOUR GROWTH JOURNEY</CtaButton>
              <a href="/storefront" className="gb-text-link">Explore resources <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="gb-home-panel">
            <span>Start with one question</span>
            <strong>What part of your life needs a clearer next move?</strong>
            <div><b>01</b><p>Productivity</p><b>02</b><p>Mindset</p><b>03</b><p>Career</p><b>04</b><p>Business</p></div>
          </aside>
        </div>
      </Section>

      <Section id="areas" className="gb-home-areas">
        <div className="me-wrap">
          <div className="me-section-heading"><p className="me-eyebrow">Where we help</p><h2>Growth is personal. The next step can be practical.</h2><p>Choose the area that feels most useful right now. You do not need to improve everything at once.</p></div>
          <div className="gb-area-grid">{areas.map(([Icon, title, body]) => <article key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </Section>

      <Section className="gb-home-path">
        <div className="me-wrap">
          <div className="gb-path-card">
            <div><p className="me-eyebrow">A simple path</p><h2>Understand the problem. Choose the tool. Take the next step.</h2><p>Growth Believer keeps each resource focused so you can use what helps and leave the rest.</p></div>
            <div className="gb-path-steps"><span>01 <b>Understand</b></span><span>02 <b>Choose</b></span><span>03 <b>Act</b></span></div>
          </div>
        </div>
      </Section>

      <Section id="products" className="gb-home-products">
        <div className="me-wrap">
          <div className="me-section-heading"><p className="me-eyebrow">Featured resources</p><h2>Small guides for meaningful progress.</h2><p>Focused digital products built around real problems, useful decisions, and action.</p></div>
          <div className="gb-product-grid">{products.map((product, index) => <a key={product.title} href={product.href}><span>0{index + 1}</span><h3>{product.title}</h3><p>{product.body}</p><b>View product <ArrowRight aria-hidden="true" /></b></a>)}</div>
          <div className="gb-store-link"><a href="/storefront">View the full storefront <ArrowRight aria-hidden="true" /></a></div>
        </div>
      </Section>

      <Section id="assessment" className="gb-home-assessment">
        <div className="me-wrap"><div className="gb-assessment-card"><div><p className="me-eyebrow">Free Growth Assessment</p><h2>Not sure where to start?</h2><p>Answer three short questions and get a personalized growth focus with practical next steps.</p></div><CtaButton href="/quiz" variant="light">TAKE THE ASSESSMENT</CtaButton></div></div>
      </Section>

      <Section className="gb-home-final">
        <div className="me-wrap"><p className="me-eyebrow">Growth Believer</p><h2>You do not need a perfect plan. You need a direction you can act on.</h2><p>Start small. Make the next step clear. Keep moving.</p><CtaButton href="/hero" variant="violet">START YOUR GROWTH JOURNEY</CtaButton></div>
      </Section>

      <Footer columns={[{ heading: "Explore", links: ["What we solve", "Growth areas", "Products"] }, { heading: "Resources", links: ["Growth Assessment", "Guides"] }, { heading: "Growth", links: ["Productivity", "Mindset", "Career", "Business"] }]} detail="Practical digital resources for making progress in real life." />
    </main>
  )
}

const styles = `
.gb-home-hero{padding:clamp(5rem,3rem + 7vw,9rem) 0 var(--me-section);background:radial-gradient(60% 90% at 82% 0,#3a348f,transparent 68%),var(--me-bg-deep)}
.gb-home-hero-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(18rem,.7fr);gap:clamp(2rem,5vw,6rem);align-items:center}.gb-home-hero h1{max-width:14ch;margin-top:1rem;font-size:clamp(2.7rem,1.35rem + 4.8vw,5rem);font-weight:600;letter-spacing:-.055em;line-height:1.01}.gb-home-hero>div>div>p:not(.me-eyebrow){max-width:54ch;margin-top:1.4rem;color:var(--me-muted);font-size:1.1rem;line-height:1.68}.gb-home-actions{display:flex;flex-wrap:wrap;align-items:center;gap:1.25rem;margin-top:2rem}.gb-text-link,.gb-product-grid b,.gb-store-link a{display:inline-flex;align-items:center;gap:.45rem;color:var(--me-violet-2);font-size:.875rem;font-weight:650}.gb-home-panel{padding:2rem;border:1px solid #aaa5ff;border-radius:var(--me-r-xl);background:linear-gradient(145deg,#2d296d,#1b1b24);box-shadow:0 30px 60px -35px #000}.gb-home-panel>span{color:#dfddff;font-size:.7rem;font-weight:650;letter-spacing:.16em;text-transform:uppercase}.gb-home-panel strong{display:block;margin-top:1.25rem;font-size:clamp(1.5rem,1.1rem + 1.7vw,2.15rem);font-weight:570;letter-spacing:-.04em;line-height:1.13}.gb-home-panel div{display:grid;grid-template-columns:2rem 1fr;gap:.65rem .75rem;margin-top:2rem;padding-top:1.25rem;border-top:1px solid #aaa5ff}.gb-home-panel b{color:var(--me-violet-2);font-size:.72rem}.gb-home-panel p{color:var(--me-ink-2);font-size:.85rem}
.gb-home-areas,.gb-home-products{padding:var(--me-section) 0}.gb-home-areas{background:var(--me-bg)}.gb-area-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;margin-top:2.5rem}.gb-area-grid article{padding:1.35rem;border:1px solid var(--me-line);border-radius:var(--me-r-lg);background:var(--me-surface)}.gb-area-grid span{display:grid;place-items:center;width:2.25rem;height:2.25rem;border:1px solid #aaa5ff;border-radius:.75rem;background:#29255e;color:var(--me-violet-2)}.gb-area-grid span svg{width:1.1rem}.gb-area-grid h3{margin-top:1.2rem;font-size:1rem;font-weight:620}.gb-area-grid p{margin-top:.5rem;color:var(--me-muted);font-size:.84rem;line-height:1.6}
.gb-home-path{padding:0 var(--me-gut) var(--me-section);background:var(--me-bg)}.gb-path-card{display:grid;grid-template-columns:1fr .8fr;gap:2rem;padding:clamp(1.75rem,1rem + 2vw,2.75rem);border:1px solid var(--me-line);border-radius:var(--me-r-xl);background:var(--me-surface-2)}.gb-path-card h2{max-width:19ch;margin-top:.8rem;font-size:clamp(1.8rem,1.15rem + 2.3vw,2.7rem);font-weight:580;letter-spacing:-.035em;line-height:1.1}.gb-path-card p:not(.me-eyebrow){max-width:50ch;margin-top:1rem;color:var(--me-muted);line-height:1.65}.gb-path-steps{display:grid;align-content:center;gap:.75rem}.gb-path-steps span{display:flex;gap:1rem;padding:.9rem 1rem;border-bottom:1px solid var(--me-line);color:var(--me-violet-2);font-size:.72rem;font-weight:650}.gb-path-steps b{color:var(--me-ink-2);font-size:.9rem}
.gb-home-products{background:var(--me-bg-deep)}.gb-product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2.5rem}.gb-product-grid a{display:flex;flex-direction:column;min-height:18rem;padding:1.5rem;border:1px solid var(--me-line);border-radius:var(--me-r-lg);background:var(--me-surface);transition:transform .25s var(--me-ease),border-color .25s var(--me-ease)}.gb-product-grid a:hover{transform:translateY(-3px);border-color:var(--me-violet-2)}.gb-product-grid span{color:var(--me-violet-2);font-size:.7rem;font-weight:650;letter-spacing:.15em}.gb-product-grid h3{margin-top:1.4rem;font-size:1.2rem;font-weight:620;line-height:1.25}.gb-product-grid p{margin-top:.65rem;color:var(--me-muted);font-size:.9rem;line-height:1.6}.gb-product-grid b{margin-top:auto;padding-top:1.4rem}.gb-store-link{margin-top:1.5rem;text-align:right}
.gb-home-assessment{padding:0 var(--me-gut) var(--me-section);background:var(--me-bg-deep)}.gb-assessment-card{display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:clamp(2rem,1.25rem + 3vw,3.25rem);border:1px solid #aaa5ff;border-radius:var(--me-r-xl);background:#28245d}.gb-assessment-card h2{margin-top:.7rem;font-size:clamp(1.9rem,1.15rem + 2.6vw,2.8rem);font-weight:580;letter-spacing:-.035em;line-height:1.1}.gb-assessment-card p:not(.me-eyebrow){max-width:52ch;margin-top:.9rem;color:#e2e1ff;line-height:1.65}.gb-assessment-card .me-btn{flex:none}.gb-home-final{padding:0 0 var(--me-section);text-align:center;background:var(--me-bg-deep)}.gb-home-final h2{max-width:20ch;margin:.8rem auto 0;font-size:clamp(2rem,1.15rem + 2.8vw,3.1rem);font-weight:580;letter-spacing:-.04em;line-height:1.08}.gb-home-final p:not(.me-eyebrow){max-width:45ch;margin:1rem auto 0;color:var(--me-muted);line-height:1.65}.gb-home-final .me-btn{margin-top:1.6rem}
@media(max-width:58rem){.gb-area-grid{grid-template-columns:repeat(2,1fr)}.gb-area-grid article:last-child{grid-column:1/-1}}@media(max-width:48rem){.gb-home-hero-grid,.gb-path-card{grid-template-columns:1fr}.gb-product-grid{grid-template-columns:1fr}.gb-area-grid{grid-template-columns:1fr}.gb-area-grid article:last-child{grid-column:auto}.gb-assessment-card{align-items:flex-start;flex-direction:column}.gb-assessment-card .me-btn{width:100%}}@media(max-width:30rem){.gb-home-actions{align-items:stretch;flex-direction:column}.gb-home-actions .me-btn{width:100%}.gb-home-hero h1{font-size:2.4rem}}
`
