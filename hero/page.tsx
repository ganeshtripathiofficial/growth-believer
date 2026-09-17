import { ArrowRight, Check, Compass, BriefcaseBusiness, Heart, Sparkles } from "lucide-react"
import { CtaButton } from "../shared/cta-button"
import { Footer } from "../shared/footer"
import { Header } from "../shared/header"
import { Section } from "../shared/section"
import { brandStyles, sharedStyles } from "../shared/tokens"

const areas = [
  { icon: Compass, title: "Productivity", body: "Plan your time, focus on what matters, and get more done without making life harder." },
  { icon: Sparkles, title: "Mindset", body: "Build better habits, make clearer choices, and keep moving when progress feels slow." },
  { icon: BriefcaseBusiness, title: "Career", body: "Make smarter career moves, improve your skills, and turn uncertainty into a clear next step." },
  { icon: ArrowRight, title: "Business", body: "Find practical ideas for starting, improving, and growing work that creates real value." },
  { icon: Heart, title: "Life", body: "Handle everyday challenges with simple tools that help you live with more clarity and intention." },
]

const products = [
  ["Priority Hour", "A simple guide to protect your most important hour from digital distractions."],
  ["Growth Assessment", "A quick way to see where you are now and where your next step could be."],
  ["Practical Guides", "Focused resources built around real problems, useful decisions, and everyday growth."],
]

export default function HeroPage() {
  return (
    <main className="me-page" id="top">
      <style>{brandStyles + sharedStyles + styles}</style>

      <Header
        links={[
          { label: "What we solve", href: "#problems" },
          { label: "Growth areas", href: "#areas" },
          { label: "Products", href: "#products" },
        ]}
        loginHref="/lead-magnet"
        cta={{ label: "Start your growth journey", href: "/lead-magnet" }}
      />

      <Section className="me-hero">
        <div className="me-wrap">
          <div className="me-mark" aria-hidden="true">
            <span>GB</span>
          </div>

          <p className="me-eyebrow">Growth Believer</p>

          <h1>
            You don’t need more information. You need the right direction.
          </h1>

          <p className="me-deck">
            Practical digital resources designed to help you solve everyday
            problems, build better habits, and keep moving forward.
          </p>

          <CtaButton href="/lead-magnet" variant="violet">
            START YOUR GROWTH JOURNEY
          </CtaButton>

          <p className="me-note">
            Less noise. More clarity. One useful next step.
          </p>
        </div>
      </Section>

      <Section id="problems" className="me-intro">
        <div className="me-wrap me-two-col">
          <div>
            <p className="me-eyebrow">What Growth Believer is</p>
            <h2>A place for practical growth, not endless advice.</h2>
          </div>
          <div className="me-copy">
            <p>Growth Believer creates simple digital resources for people who want to make progress in real life.</p>
            <p>Instead of giving you more things to read, each resource is built to help you understand a problem, make a decision, and take action.</p>
          </div>
        </div>
      </Section>

      <Section className="me-problems">
        <div className="me-wrap">
          <div className="me-section-heading">
            <p className="me-eyebrow">Problems we help solve</p>
            <h2>When you know you want to grow, but you need a clearer next step.</h2>
            <p>Our resources focus on the everyday problems that can quietly hold you back.</p>
          </div>

          <div className="me-problem-grid">
            {[
              "I have too much to do and not enough focus.",
              "I know what I should do, but I struggle to start.",
              "I feel stuck and need a practical direction.",
              "I want to grow, but most advice feels too broad.",
              "I need a simple system I can actually use.",
            ].map((item) => (
              <article key={item}>
                <Check aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="areas" className="me-areas">
        <div className="me-wrap">
          <div className="me-section-heading">
            <p className="me-eyebrow">Where growth happens</p>
            <h2>Practical help for the parts of life that matter.</h2>
          </div>

          <div className="me-area-grid">
            {areas.map(({ icon: Icon, title, body }) => (
              <article key={title} id={title.toLowerCase()}>
                <span className="me-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="products" className="me-products">
        <div className="me-wrap">
          <div className="me-section-heading">
            <p className="me-eyebrow">Featured products</p>
            <h2>Small resources for meaningful progress.</h2>
            <p>Focused guides and tools made to solve one problem well.</p>
          </div>

          <div className="me-product-grid">
            {products.map(([title, body], index) => (
              <article key={title}>
                <span className="me-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="assessment" className="me-assessment">
        <div className="me-wrap">
          <div className="me-assessment-card">
            <div>
              <p className="me-eyebrow">Free Growth Assessment</p>
              <h2>Find the area that deserves your attention next.</h2>
              <p>Start with a simple assessment. Get a clearer view of where you are and what kind of resource may help you move forward.</p>
            </div>

            <CtaButton href="#top" variant="light">
              START YOUR GROWTH JOURNEY
              <ArrowRight aria-hidden="true" />
            </CtaButton>
          </div>
        </div>
      </Section>

      <Section id="faq" className="me-faq">
        <div className="me-wrap">
          <p className="me-eyebrow">A simple approach</p>
          <h2>Start with one useful next step.</h2>
          <p>Growth Believer is designed to keep things practical: identify a problem, choose a useful resource, and take action.</p>
        </div>
      </Section>

      <Section className="me-final">
        <div className="me-wrap">
          <p className="me-eyebrow">Keep moving forward</p>
          <h2>You don't need to figure everything out today.</h2>
          <p>Find the right direction, take the next useful step, and grow from there.</p>
        </div>
      </Section>

      <Footer
        columns={[
          { heading: "Explore", links: ["What we solve", "Growth areas", "Products"] },
          { heading: "Resources", links: ["Growth Assessment", "Guides"] },
          { heading: "Growth", links: ["Productivity", "Mindset", "Career"] },
        ]}
        detail="Practical resources for making progress in real life."
      />
    </main>
  )
}

const styles = `
.me-hero{padding:clamp(4.75rem,3rem + 7vw,8.5rem) 0 var(--me-section);background:radial-gradient(60% 75% at 70% 0,#332d82,transparent 70%),var(--me-bg);text-align:center}
.me-hero .me-wrap{max-width:62rem}
.me-mark{display:grid;place-items:center;width:5rem;height:5rem;margin:auto;border:1px solid #c5c1ff;border-radius:1.25rem;background:linear-gradient(145deg,#b5b0ff,#4f47c7);color:#18162d;font-size:1rem;font-weight:700;letter-spacing:-.04em;box-shadow:0 18px 38px -18px #000}
.me-hero .me-eyebrow{margin-top:1.5rem}
.me-hero h1{max-width:17ch;margin:1rem auto 0;font-size:clamp(2.45rem,1.3rem + 4.6vw,4.5rem);font-weight:600;letter-spacing:-.045em;line-height:1.03}
.me-deck{max-width:55ch;margin:1.35rem auto 0;color:var(--me-muted);font-size:1.075rem;line-height:1.65}
.me-hero .me-btn{margin-top:2rem}
.me-note{margin-top:1rem;color:var(--me-quiet);font-size:.75rem}
.me-intro{padding:var(--me-section) 0;background:var(--me-bg-deep)}
.me-two-col{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(2rem,1rem + 6vw,6rem);align-items:start}
.me-two-col h2,.me-section-heading h2,.me-assessment h2,.me-final h2{margin-top:.75rem;font-size:clamp(1.8rem,1.15rem + 2.5vw,2.7rem);font-weight:580;letter-spacing:-.035em;line-height:1.1}
.me-copy{display:grid;gap:1rem}
.me-copy p,.me-section-heading>p:not(.me-eyebrow),.me-final>div>p:not(.me-eyebrow){color:var(--me-muted);font-size:1rem;line-height:1.7}
.me-problems,.me-areas,.me-products{padding:var(--me-section) 0}
.me-problems{background:var(--me-bg)}
.me-problem-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:.75rem;margin-top:2.25rem}
.me-problem-grid article{min-height:10rem;padding:1.25rem;border:1px solid var(--me-line);border-radius:var(--me-r-lg);background:var(--me-surface)}
.me-problem-grid svg{width:1.1rem;height:1.1rem;color:var(--me-mint);stroke-width:3}
.me-problem-grid p{margin-top:1.25rem;color:var(--me-ink-2);font-size:.9rem;line-height:1.55}
.me-areas{background:var(--me-bg-deep)}
.me-area-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;margin-top:2.5rem}
.me-area-grid article{padding:1.5rem;border:1px solid var(--me-line);border-radius:var(--me-r-lg);background:var(--me-surface)}
.me-icon{display:grid;place-items:center;width:2.25rem;height:2.25rem;border:1px solid #aaa5ff;border-radius:.75rem;background:#29255e;color:var(--me-violet-2)}
.me-icon svg{width:1.1rem;height:1.1rem}
.me-area-grid h3{margin-top:1.2rem;font-size:1.05rem;font-weight:600}
.me-area-grid p{margin-top:.5rem;color:var(--me-muted);font-size:.88rem;line-height:1.6}
.me-products{background:var(--me-bg)}
.me-product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2.5rem}
.me-product-grid article{padding:1.75rem;border:1px solid var(--me-line);border-radius:var(--me-r-lg);background:var(--me-surface)}
.me-number{color:var(--me-violet-2);font-size:.7rem;font-weight:650;letter-spacing:.16em}
.me-product-grid h3{margin-top:1.5rem;font-size:1.2rem;font-weight:600}
.me-product-grid p{margin-top:.65rem;color:var(--me-muted);line-height:1.65}
.me-assessment{padding:0 var(--me-gut) var(--me-section)}
.me-assessment-card{display:flex;align-items:center;justify-content:space-between;gap:2rem;width:min(100%,68rem);margin:auto;padding:clamp(2rem,1.2rem + 3vw,3.25rem);border:1px solid #aaa5ff;border-radius:var(--me-r-xl);background:#28245d}
.me-assessment-card>div{max-width:48rem}
.me-assessment-card h2{margin-top:.65rem}
.me-assessment-card p:not(.me-eyebrow){max-width:54ch;margin-top:.9rem;color:#e2e1ff;line-height:1.65}
.me-assessment-card .me-btn{flex:none}
.me-faq{padding:var(--me-section) 0;background:var(--me-bg-deep);border-top:1px solid var(--me-line);border-bottom:1px solid var(--me-line)}
.me-faq .me-wrap{max-width:52rem}
.me-faq h2{margin-top:.75rem;font-size:clamp(1.8rem,1.15rem + 2.5vw,2.7rem);font-weight:580;letter-spacing:-.035em;line-height:1.1}
.me-faq p:last-child{max-width:55ch;margin-top:1rem;color:var(--me-muted);line-height:1.7}
.me-final{padding:0 0 var(--me-section);text-align:center}
.me-final>div{max-width:52rem}
.me-final h2{max-width:20ch;margin-inline:auto}
.me-final>div>p:last-child{max-width:46ch;margin:1rem auto 0}
.me-final .me-eyebrow{margin:0}
@media(max-width:58rem){.me-problem-grid,.me-area-grid{grid-template-columns:repeat(2,1fr)}.me-area-grid article:last-child{grid-column:1/-1}.me-assessment-card{align-items:flex-start;flex-direction:column}}
@media(max-width:48rem){.me-two-col,.me-product-grid{grid-template-columns:1fr}.me-problem-grid,.me-area-grid{grid-template-columns:1fr}.me-area-grid article:last-child{grid-column:auto}}
@media(max-width:30rem){.me-hero h1{font-size:2.35rem}.me-hero .me-btn{width:100%}}
`
