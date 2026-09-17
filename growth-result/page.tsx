import { ArrowRight, BriefcaseBusiness, Compass, Heart, Sparkles } from "lucide-react"
import { CtaButton } from "../shared/cta-button"
import { Footer } from "../shared/footer"
import { Header } from "../shared/header"
import { Section } from "../shared/section"
import { brandStyles, sharedStyles } from "../shared/tokens"

type Focus = "productivity" | "mindset" | "career" | "business"

const RESULT_CONTENT: Record<Focus, {
  label: string
  title: string
  intro: string
  icon: typeof Compass
  signs: string[]
  actions: string[]
  next: string
}> = {
  productivity: {
    label: "Your Growth Focus · Productivity",
    title: "Create more clarity around what matters.",
    intro: "Your answers point toward productivity as a useful place to begin. The goal is not to fill every hour. It is to make your time, attention, and energy work for the things that matter.",
    icon: Compass,
    signs: [
      "Too many priorities can make even simple work feel heavy.",
      "A clear system can reduce the effort spent deciding what to do next.",
      "Small, repeatable routines often create more progress than a perfect plan.",
    ],
    actions: [
      "Choose one priority for today.",
      "Remove one task that does not need your attention.",
      "Create a simple routine you can repeat tomorrow.",
    ],
    next: "Start with one practical system for getting focused and staying consistent.",
  },
  mindset: {
    label: "Your Growth Focus · Mindset",
    title: "Build the mindset that helps you keep moving.",
    intro: "Your answers point toward mindset as a useful place to begin. Growth is not about feeling ready all the time. It is about building habits of thought that help you act, learn, and keep going.",
    icon: Heart,
    signs: [
      "Knowing what to do is different from believing you can keep doing it.",
      "Consistency becomes easier when your expectations are realistic.",
      "Small wins can create evidence that makes the next step easier.",
    ],
    actions: [
      "Pick one behavior you want to strengthen.",
      "Make the first version small enough to repeat.",
      "Notice progress instead of waiting for perfection.",
    ],
    next: "Start with one practical guide for turning intention into a repeatable habit.",
  },
  career: {
    label: "Your Growth Focus · Career",
    title: "Turn uncertainty into a clearer next move.",
    intro: "Your answers point toward career as a useful place to begin. You do not need every answer today. A good next step can give you information, confidence, and a better direction.",
    icon: BriefcaseBusiness,
    signs: [
      "Too many possible paths can make choosing feel harder.",
      "A useful decision framework can separate signal from noise.",
      "Action can create clarity that thinking alone cannot provide.",
    ],
    actions: [
      "Write down the decision you are actually trying to make.",
      "List the two or three factors that matter most.",
      "Take one low-risk action that gives you new information.",
    ],
    next: "Start with a practical framework for making a clearer career decision.",
  },
  business: {
    label: "Your Growth Focus · Business",
    title: "Turn your ideas into a simple plan.",
    intro: "Your answers point toward business as a useful place to begin. You do not need to solve everything at once. A clear problem, a focused offer, and the next action can create momentum.",
    icon: Sparkles,
    signs: [
      "Good ideas become easier to execute when they have a clear priority.",
      "A simple plan makes it easier to see what should happen next.",
      "Progress comes from testing and learning, not waiting for certainty.",
    ],
    actions: [
      "Choose one problem you want to solve.",
      "Define the next result you want to create.",
      "Take one action that puts the idea in front of a real person.",
    ],
    next: "Start with a practical business framework you can turn into action.",
  },
}

function getFocus(): Focus {
  const value = new URLSearchParams(window.location.search).get("focus")
  if (value === "mindset" || value === "career" || value === "business") return value
  return "productivity"
}

export default function GrowthResultPage() {
  const focus = getFocus()
  const result = RESULT_CONTENT[focus]
  const Icon = result.icon

  return (
    <main className="me-page" id="top">
      <style>{brandStyles + sharedStyles + styles}</style>
      <Header
        links={[
          { label: "Your result", href: "#result" },
          { label: "What to do next", href: "#next" },
          { label: "Why Growth Believer", href: "#why" },
        ]}
        loginHref="/quiz"
        cta={{ label: "Retake the quiz", href: "/quiz" }}
      />

      <Section id="result" className="gb-result-hero">
        <div className="me-wrap gb-result-wrap">
          <div className="gb-result-icon" aria-hidden="true"><Icon /></div>
          <p className="me-eyebrow">{result.label}</p>
          <h1>{result.title}</h1>
          <p className="gb-result-intro">{result.intro}</p>
          <div className="gb-result-note">
            <Sparkles aria-hidden="true" />
            <span>Your result is a starting point, not a label.</span>
          </div>
        </div>
      </Section>

      <Section id="next" className="gb-result-body">
        <div className="me-wrap">
          <div className="me-section-heading">
            <p className="me-eyebrow">What this can look like</p>
            <h2>A useful place to put your attention.</h2>
            <p>Use your result to choose one small area to work on. You do not need to change everything at once.</p>
          </div>
          <div className="gb-result-grid">
            <article className="gb-result-card">
              <p className="gb-card-number">01</p>
              <h3>What may be getting in the way</h3>
              <ul>{result.signs.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
            </article>
            <article className="gb-result-card gb-result-card-accent">
              <p className="gb-card-number">02</p>
              <h3>Three actions to try</h3>
              <ul>{result.actions.map((item) => <li key={item}><span>→</span>{item}</li>)}</ul>
            </article>
          </div>

          <article className="gb-resource-card">
            <div>
              <p className="me-eyebrow">Recommended Resource</p>
              <h3>The Focus & Consistency Guide</h3>
              <p>A practical digital guide for turning scattered attention into a simple system you can repeat each day.</p>
            </div>
            <span className="gb-resource-tag">For your Productivity result</span>
          </article>
        </div>
      </Section>

      <Section className="gb-next-step">
        <div className="me-wrap">
          <div className="gb-next-card">
            <div>
              <p className="me-eyebrow">Your next step</p>
              <h2>{result.next}</h2>
              <p>Growth Believer creates practical digital resources designed to help you move from knowing to doing.</p>
            </div>
            <CtaButton href="/sales" variant="violet">EXPLORE GROWTH RESOURCES <ArrowRight aria-hidden="true" /></CtaButton>
          </div>
        </div>
      </Section>

      <Section id="why" className="gb-result-why">
        <div className="me-wrap gb-result-why-inner">
          <p className="me-eyebrow">Why Growth Believer</p>
          <h2>Less noise. More clarity. One useful next step.</h2>
          <p>We create practical digital resources around real problems in productivity, mindset, career, business, and life.</p>
          <a className="me-btn me-btn-ghost" href="/quiz">Retake the growth assessment</a>
        </div>
      </Section>

      <Footer
        columns={[
          { heading: "Result", links: ["Your result", "What to do next"] },
          { heading: "Growth", links: ["Productivity", "Mindset", "Career", "Business"] },
          { heading: "Next", links: ["Growth Assessment", "Guides"] },
        ]}
        detail="Practical digital resources for making progress in real life."
      />
    </main>
  )
}

const styles = `
.gb-result-hero{padding:clamp(5rem,2.5rem + 8vw,9rem) 0 clamp(4rem,2rem + 6vw,7rem);background:radial-gradient(65% 95% at 78% 0,#3b358e,transparent 68%),var(--me-bg-deep)}
.gb-result-wrap{max-width:54rem;text-align:center}.gb-result-icon{display:grid;place-items:center;width:3.5rem;height:3.5rem;margin:0 auto 1.5rem;border:1px solid var(--me-line-2);border-radius:1rem;background:var(--me-surface);color:var(--me-violet-2);box-shadow:0 18px 50px -28px #000}.gb-result-icon svg{width:1.5rem;height:1.5rem}.gb-result-hero h1{max-width:15ch;margin:1rem auto 0;font-size:clamp(2.4rem,1.25rem + 4.5vw,4.6rem);font-weight:600;letter-spacing:-.05em;line-height:1.02}.gb-result-intro{max-width:58ch;margin:1.5rem auto 0;color:var(--me-muted);font-size:1.08rem;line-height:1.7}.gb-result-note{display:inline-flex;align-items:center;gap:.55rem;margin-top:1.75rem;padding:.65rem 1rem;border:1px solid var(--me-line);border-radius:999px;background:rgba(39,39,44,.75);color:var(--me-ink-2);font-size:.82rem}.gb-result-note svg{width:1rem;color:var(--me-violet-2)}
.gb-result-body{padding:var(--me-section) 0}.gb-result-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:2rem}.gb-result-card{padding:clamp(1.5rem,1rem + 2vw,2.25rem);border:1px solid var(--me-line);border-radius:var(--me-r-xl);background:var(--me-surface)}.gb-result-card-accent{background:linear-gradient(145deg,#24233a,#1c1c1f)}.gb-card-number{color:var(--me-violet-2);font-size:.7rem;font-weight:650;letter-spacing:.15em}.gb-result-card h3{margin-top:.8rem;font-size:1.25rem;font-weight:600;letter-spacing:-.02em}.gb-result-card ul{display:grid;gap:.85rem;margin-top:1.5rem}.gb-result-card li{display:grid;grid-template-columns:1.2rem 1fr;gap:.65rem;color:var(--me-muted);font-size:.95rem;line-height:1.55}.gb-result-card li span{color:var(--me-violet-2);font-weight:700}
.gb-resource-card{display:flex;align-items:center;justify-content:space-between;gap:2rem;margin-top:1rem;padding:clamp(1.5rem,1rem + 2vw,2.25rem);border:1px solid var(--me-violet-2);border-radius:var(--me-r-xl);background:linear-gradient(145deg,#272541,#1c1c1f)}.gb-resource-card h3{margin-top:.8rem;font-size:clamp(1.25rem,1rem + 1vw,1.55rem);font-weight:600;letter-spacing:-.02em}.gb-resource-card p:not(.me-eyebrow){max-width:55ch;margin-top:.7rem;color:var(--me-muted);line-height:1.6}.gb-resource-tag{flex:none;padding:.55rem .8rem;border:1px solid var(--me-line);border-radius:999px;color:var(--me-ink-2);font-size:.75rem;font-weight:600}
.gb-next-step{padding:0 0 var(--me-section)}.gb-next-card{display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:clamp(1.5rem,1rem + 2vw,2.5rem);border:1px solid #8f8aa8;border-radius:var(--me-r-xl);background:linear-gradient(145deg,#2b2945,#1d1d21)}.gb-next-card h2{max-width:25ch;margin-top:1rem;font-size:clamp(1.65rem,1.1rem + 2.2vw,2.45rem);font-weight:580;letter-spacing:-.035em;line-height:1.12}.gb-next-card p:not(.me-eyebrow){max-width:52ch;margin-top:1rem;color:var(--me-muted);line-height:1.6}.gb-next-card .me-btn{flex:none}
.gb-result-why{padding:0 0 var(--me-section)}.gb-result-why-inner{padding:clamp(2rem,1.25rem + 3vw,3.25rem);border:1px solid var(--me-line);border-radius:var(--me-r-xl);background:var(--me-surface-2)}.gb-result-why h2{max-width:22ch;margin-top:1rem;font-size:clamp(1.8rem,1.2rem + 2.4vw,2.6rem);font-weight:580;letter-spacing:-.035em;line-height:1.1}.gb-result-why p:not(.me-eyebrow){max-width:55ch;margin-top:1rem;color:var(--me-muted)}.gb-result-why .me-btn{margin-top:1.5rem}
@media(max-width:48rem){.gb-result-grid{grid-template-columns:1fr}.gb-resource-card{align-items:flex-start;flex-direction:column}.gb-next-card{align-items:flex-start;flex-direction:column}.gb-next-card .me-btn{width:100%}}
@media(max-width:30rem){.gb-result-note{border-radius:var(--me-r-md);text-align:left}}
`
