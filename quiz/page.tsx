import React from "react"
import { ArrowRight } from "lucide-react"
import { CtaButton } from "../shared/cta-button"
import { Footer } from "../shared/footer"
import { Header } from "../shared/header"
import { Section } from "../shared/section"
import { brandStyles, sharedStyles } from "../shared/tokens"

const GROWTH_RESULT_ROUTE = "/growth-result"

const questions = [
  {
    title: "What would make the biggest difference right now?",
    options: [
      "Getting more focused and organized",
      "Building better habits and confidence",
      "Making a clearer career or work decision",
      "Finding a practical way to grow my business",
    ],
  },
  {
    title: "What usually gets in your way?",
    options: [
      "Too many things competing for my attention",
      "I know what to do, but struggle to stay consistent",
      "I am unsure which direction to take",
      "I have ideas, but need a simple plan to act on them",
    ],
  },
  {
    title: "What kind of help would you use first?",
    options: [
      "A simple system I can follow",
      "A guide that helps me change one habit",
      "A clear framework for making a decision",
      "A step-by-step plan I can put into action",
    ],
  },
] as const

function getFocus(answers: string[]) {
  const counts = [0, 0, 0, 0]
  answers.forEach((answer) => {
    questions.forEach((question) => {
      const index = question.options.indexOf(answer as never)
      if (index >= 0) counts[index] += 1
    })
  })
  return ["productivity", "mindset", "career", "business"][counts.indexOf(Math.max(...counts))]
}

export default function QuizPage() {
  const [step, setStep] = React.useState(0)
  const [answers, setAnswers] = React.useState<string[]>([])
  const done = answers.length === questions.length
  const focus = done ? getFocus(answers) : ""

  const choose = (answer: string) => {
    const next = [...answers, answer]
    setAnswers(next)
    if (step < questions.length - 1) setStep(step + 1)
  }

  return (
    <main className="me-page" id="top">
      <style>{brandStyles + sharedStyles + styles}</style>
      <Header
        links={[
          { label: "How it works", href: "#how-it-works" },
          { label: "The questions", href: "#quiz" },
          { label: "Why it helps", href: "#why" },
        ]}
        loginHref="#quiz"
        cta={{ label: "Start the quiz", href: "#quiz" }}
      />

      <Section id="quiz" className="gb-quiz-hero">
        <div className="me-wrap gb-quiz-wrap">
          <p className="me-eyebrow">Free Growth Assessment</p>
          <h1>Find the area of growth that needs you most right now.</h1>
          <p className="gb-quiz-deck">
            Answer three simple questions. There are no right or wrong answers.
            Your responses help point you toward a useful next step.
          </p>

          <div className="gb-progress" aria-label={`Question ${Math.min(step + 1, 3)} of 3`}>
            <span style={{ width: `${done ? 100 : ((step + 1) / questions.length) * 100}%` }} />
          </div>

          {!done ? (
            <article className="gb-question" aria-live="polite">
              <p className="gb-count">QUESTION {String(step + 1).padStart(2, "0")} / 03</p>
              <h2>{questions[step].title}</h2>
              <div className="gb-options">
                {questions[step].options.map((option) => (
                  <button type="button" key={option} onClick={() => choose(option)}>
                    <span>{option}</span>
                    <ArrowRight aria-hidden="true" />
                  </button>
                ))}
              </div>
            </article>
          ) : (
            <article className="gb-result" aria-live="polite">
              <p className="me-eyebrow">Assessment complete</p>
              <h2>Your growth result is ready.</h2>
              <p>We have used your answers to identify the area that may deserve your attention next.</p>
              <CtaButton href={`${GROWTH_RESULT_ROUTE}?focus=${focus}`} variant="violet">
                SEE MY GROWTH RESULT
              </CtaButton>
            </article>
          )}
        </div>
      </Section>

      <Section id="how-it-works" className="gb-steps">
        <div className="me-wrap">
          <div className="me-section-heading">
            <p className="me-eyebrow">How it works</p>
            <h2>Three questions. One clearer direction.</h2>
            <p>The assessment is short on purpose. It helps you notice what is getting in the way and choose a useful place to begin.</p>
          </div>
          <div className="gb-step-grid">
            {[
              ["01", "Answer honestly", "Choose the option that feels closest to where you are today."],
              ["02", "See your focus", "Your answers point toward one area that may need more attention."],
              ["03", "Take one step", "Use the result as a starting point, not a label."],
            ].map(([number, title, body]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="why" className="gb-why">
        <div className="me-wrap gb-why-card">
          <div>
            <p className="me-eyebrow">Why Growth Believer</p>
            <h2>Less noise. More clarity. A useful next step.</h2>
            <p>Growth Believer creates practical digital resources around real problems, so you can move from thinking about change to taking action.</p>
          </div>
          <a className="me-btn me-btn-ghost" href="#quiz">Retake the quiz</a>
        </div>
      </Section>

      <Footer
        columns={[
          { heading: "Assessment", links: ["The questions", "How it works"] },
          { heading: "Growth", links: ["Productivity", "Mindset", "Career", "Business"] },
          { heading: "Next", links: ["Growth Result"] },
        ]}
        detail="Practical digital resources for making progress in real life."
      />
    </main>
  )
}

const styles = `
.gb-quiz-hero{padding:clamp(4.5rem,2rem + 7vw,7.5rem) 0 var(--me-section);background:radial-gradient(60% 90% at 78% 0,#332d82,transparent 68%),var(--me-bg-deep)}
.gb-quiz-wrap{max-width:52rem;text-align:center}.gb-quiz-hero h1{max-width:17ch;margin:1rem auto 0;font-size:clamp(2.35rem,1.2rem + 4.2vw,4.2rem);font-weight:600;letter-spacing:-.045em;line-height:1.04}.gb-quiz-deck{max-width:52ch;margin:1.25rem auto 0;color:var(--me-muted);font-size:1.06rem;line-height:1.65}
.gb-progress{height:.5rem;max-width:30rem;margin:2.5rem auto 0;border:1px solid var(--me-line);border-radius:999px;background:var(--me-surface)}.gb-progress span{display:block;height:100%;border-radius:inherit;background:var(--me-violet);transition:width .3s var(--me-ease)}
.gb-question,.gb-result{max-width:42rem;margin:2rem auto 0;padding:clamp(1.5rem,1rem + 3vw,2.5rem);border:1px solid var(--me-line-2);border-radius:var(--me-r-xl);background:var(--me-surface);text-align:left}.gb-count{color:var(--me-violet-2);font-size:.7rem;font-weight:650;letter-spacing:.15em}.gb-question h2,.gb-result h2{margin-top:.75rem;font-size:clamp(1.55rem,1rem + 2vw,2.1rem);font-weight:580;letter-spacing:-.03em;line-height:1.15}
.gb-options{display:grid;gap:.75rem;margin-top:1.75rem}.gb-options button{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:3.75rem;gap:1rem;padding:1rem 1.125rem;border:1px solid var(--me-line);border-radius:var(--me-r-md);background:var(--me-surface-3);color:var(--me-ink);font:inherit;font-size:1rem;font-weight:550;line-height:1.4;text-align:left;cursor:pointer;transition:border-color .2s var(--me-ease),transform .2s var(--me-ease)}.gb-options button:hover{border-color:var(--me-violet-2);transform:translateY(-1px)}.gb-options button svg{flex:none;width:1.05rem;color:var(--me-violet-2)}
.gb-result{text-align:center}.gb-result>p:not(.me-eyebrow){max-width:44ch;margin:1rem auto 0;color:var(--me-muted);line-height:1.65}.gb-result .me-btn{margin-top:1.5rem}.gb-steps{padding:var(--me-section) 0}.gb-step-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem}.gb-step-grid article{padding:1.5rem;border:1px solid var(--me-line);border-radius:var(--me-r-lg);background:var(--me-surface)}.gb-step-grid span{color:var(--me-violet-2);font-size:.75rem;font-weight:650}.gb-step-grid h3{margin-top:1rem;font-size:1.125rem;font-weight:600}.gb-step-grid p{margin-top:.5rem;color:var(--me-muted);line-height:1.6}
.gb-why{padding:0 0 var(--me-section)}.gb-why-card{display:flex;align-items:end;justify-content:space-between;gap:2rem;padding:clamp(1.5rem,1rem + 2vw,2.5rem);border:1px solid var(--me-line);border-radius:var(--me-r-xl);background:var(--me-surface-2)}.gb-why-card h2{max-width:22ch;margin-top:1rem;font-size:clamp(1.75rem,1.15rem + 2.3vw,2.5rem);font-weight:580;letter-spacing:-.03em;line-height:1.1}.gb-why-card p:not(.me-eyebrow){max-width:50ch;margin-top:1rem;color:var(--me-muted);line-height:1.62}
@media(max-width:48rem){.gb-step-grid{grid-template-columns:1fr}.gb-why-card{align-items:flex-start;flex-direction:column}}
`
