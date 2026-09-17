import { ArrowRight, Check, Download, ShieldCheck } from "lucide-react"
import { Footer, type FooterColumn } from "../shared/footer"
import { Header } from "../shared/header"
import { Section } from "../shared/section"
import { brandStyles, sharedStyles } from "../shared/tokens"

const QUIZ_ROUTE = "/preview/funnel/midnight-echo/quiz"

const columns: FooterColumn[] = [
  { heading: "Resource", links: ["The guide", "What’s inside"] },
  { heading: "Growth", links: ["Productivity", "Mindset", "Career"] },
  { heading: "Next", links: ["Growth Assessment"] },
]

const included = [
  "A simple way to identify what is slowing you down",
  "Practical prompts to turn a problem into a next step",
  "A focused checklist you can use right away",
  "A clear path from reflection to action",
]

export default function LeadMagnetPage() {
  return (
    <main className="me-page" id="top">
      <style>{brandStyles + sharedStyles + styles}</style>

      <Header
        links={[
          { label: "The resource", href: "#resource" },
          { label: "What’s inside", href: "#included" },
          { label: "Next step", href: "#next-step" },
        ]}
        loginHref={QUIZ_ROUTE}
        cta={{ label: "Take the assessment", href: QUIZ_ROUTE }}
      />

      <Section className="me-lm-hero" label="Free Growth Believer resource">
        <div className="me-wrap me-lm-grid">
          <div>
            <p className="me-eyebrow">Free Growth Believer resource</p>
            <h1>A simple guide to help you find your next useful step.</h1>
            <p className="me-lm-deck">
              Get a practical resource for turning everyday problems into
              clearer actions. No noise. Just a place to start.
            </p>

            <div className="me-lm-points" aria-label="Resource benefits">
              <div><Download aria-hidden="true" /><span>Free resource</span></div>
              <div><ShieldCheck aria-hidden="true" /><span>No payment details</span></div>
            </div>
          </div>

          <form
            id="resource"
            className="me-lm-form"
            action={QUIZ_ROUTE}
            method="get"
          >
            <div>
              <p className="me-form-kicker">Get the free guide</p>
              <p className="me-form-copy">
                Enter your details and continue to the Growth Assessment.
              </p>
            </div>

            <label htmlFor="lm-name">Your name</label>
            <input
              id="lm-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="lm-email">Email address</label>
            <input
              id="lm-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />

            <button type="submit">
              Continue to the assessment
              <ArrowRight aria-hidden="true" />
            </button>

            <small>
              Your details are sent with the form to the Quiz Page route.
            </small>
          </form>
        </div>
      </Section>

      <Section id="included" className="me-lm-included" label="What is included">
        <div className="me-wrap">
          <div className="me-section-heading">
            <p className="me-eyebrow">What’s inside</p>
            <h2>Built to be useful, not overwhelming.</h2>
            <p>
              Use the guide to make one problem clearer and decide what to do
              next.
            </p>
          </div>

          <div className="me-lm-list">
            {included.map((item) => (
              <article key={item}>
                <span><Check aria-hidden="true" /></span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="next-step" className="me-lm-next" label="Next step">
        <div className="me-wrap">
          <div className="me-lm-next-card">
            <div>
              <p className="me-eyebrow">Your next step</p>
              <h2>Want a clearer starting point?</h2>
              <p>
                Continue to the short Growth Assessment and use your answers to
                explore the area that needs your attention.
              </p>
            </div>

            <a className="me-btn me-btn-violet" href={QUIZ_ROUTE}>
              Take the assessment
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>

      <Section id="faq" className="me-lm-faq" label="Resource information">
        <div className="me-wrap">
          <p className="me-eyebrow">Good to know</p>
          <h2>Start small.</h2>
          <p>
            You do not need to solve everything at once. The goal of this
            resource is to help you identify one useful next step.
          </p>
        </div>
      </Section>

      <Footer
        columns={columns}
        detail="Practical digital resources for making progress in real life."
      />
    </main>
  )
}

const styles = `
.me-lm-hero{
  padding:clamp(4.5rem,2rem + 7vw,7.5rem) 0 var(--me-section);
  background:
    radial-gradient(60% 90% at 78% 0,#332d82,transparent 68%),
    var(--me-bg-deep)
}
.me-lm-grid{
  display:grid;
  grid-template-columns:minmax(0,1.05fr) minmax(19rem,.75fr);
  gap:clamp(2.5rem,2rem + 6vw,6rem);
  align-items:center
}
.me-lm-hero h1{
  max-width:16ch;
  margin-top:1rem;
  font-size:clamp(2.35rem,1.25rem + 4.2vw,4.2rem);
  font-weight:600;
  letter-spacing:-.045em;
  line-height:1.04
}
.me-lm-deck{
  max-width:52ch;
  margin-top:1.25rem;
  color:var(--me-muted);
  font-size:1.06rem;
  line-height:1.65
}
.me-lm-points{
  display:flex;
  flex-wrap:wrap;
  gap:.65rem;
  margin-top:1.5rem
}
.me-lm-points div{
  display:inline-flex;
  align-items:center;
  gap:.45rem;
  min-height:2.35rem;
  padding:.45rem .75rem;
  border:1px solid var(--me-line);
  border-radius:999px;
  background:var(--me-surface);
  color:var(--me-ink-2);
  font-size:.78rem
}
.me-lm-points svg{
  width:1rem;
  height:1rem;
  color:var(--me-violet-2)
}
.me-lm-form{
  display:grid;
  gap:.55rem;
  padding:clamp(1.4rem,1rem + 1vw,1.9rem);
  border:1px solid var(--me-line-2);
  border-radius:var(--me-r-lg);
  background:var(--me-surface);
  box-shadow:0 24px 60px -38px #000
}
.me-form-kicker{
  color:var(--me-ink);
  font-size:1.15rem;
  font-weight:650
}
.me-form-copy{
  margin-top:.3rem;
  color:var(--me-muted);
  font-size:.84rem;
  line-height:1.55
}
.me-lm-form label{
  margin-top:.35rem;
  color:var(--me-ink-2);
  font-size:.82rem;
  font-weight:600
}
.me-lm-form input{
  width:100%;
  height:3rem;
  padding:0 .85rem;
  border:1px solid var(--me-line-2);
  border-radius:.5rem;
  outline:none;
  background:#29292f;
  color:var(--me-ink);
  font:inherit;
  font-size:.95rem
}
.me-lm-form input::placeholder{color:var(--me-quiet)}
.me-lm-form input:focus{
  border-color:var(--me-violet-2);
  box-shadow:0 0 0 3px #4b4690
}
.me-lm-form button{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:.5rem;
  min-height:3rem;
  margin-top:.6rem;
  padding:.75rem 1rem;
  border:1px solid #c5c1ff;
  border-radius:var(--me-r-sm);
  background:linear-gradient(180deg,#4f47c7,#37308f);
  color:#fff;
  font:inherit;
  font-size:.88rem;
  font-weight:650;
  cursor:pointer;
  box-shadow:0 10px 26px -14px #000
}
.me-lm-form button:hover{transform:translateY(-2px)}
.me-lm-form button svg{width:1rem;height:1rem}
.me-lm-form small{
  color:var(--me-muted);
  font-size:.7rem;
  line-height:1.5
}
.me-lm-included{
  padding:var(--me-section) 0;
  background:var(--me-bg)
}
.me-lm-list{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:1rem;
  margin-top:2.5rem
}
.me-lm-list article{
  display:flex;
  gap:.9rem;
  align-items:flex-start;
  padding:1.35rem;
  border:1px solid var(--me-line);
  border-radius:var(--me-r-lg);
  background:var(--me-surface)
}
.me-lm-list span{
  display:grid;
  place-items:center;
  flex:none;
  width:1.9rem;
  height:1.9rem;
  border:1px solid var(--me-mint);
  border-radius:50%;
  background:#214438;
  color:var(--me-mint)
}
.me-lm-list svg{width:1rem;height:1rem;stroke-width:3}
.me-lm-list p{
  color:var(--me-ink-2);
  font-size:.94rem;
  line-height:1.55
}
.me-lm-next{
  padding:0 var(--me-gut) var(--me-section);
  background:var(--me-bg)
}
.me-lm-next-card{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:2rem;
  width:min(100%,68rem);
  margin:auto;
  padding:clamp(2rem,1.2rem + 3vw,3.25rem);
  border:1px solid #aaa5ff;
  border-radius:var(--me-r-xl);
  background:#28245d
}
.me-lm-next-card h2,.me-lm-faq h2{
  margin-top:.65rem;
  font-size:clamp(1.8rem,1.15rem + 2.5vw,2.7rem);
  font-weight:580;
  letter-spacing:-.035em;
  line-height:1.1
}
.me-lm-next-card p:not(.me-eyebrow){
  max-width:52ch;
  margin-top:.85rem;
  color:#e2e1ff;
  line-height:1.65
}
.me-lm-next-card .me-btn{flex:none}
.me-lm-faq{
  padding:0 0 var(--me-section);
  background:var(--me-bg)
}
.me-lm-faq .me-wrap{max-width:68rem}
.me-lm-faq>div>p:last-child{
  max-width:52ch;
  margin-top:.85rem;
  color:var(--me-muted);
  line-height:1.7
}
@media(max-width:48rem){
  .me-lm-grid{grid-template-columns:1fr}
  .me-lm-list{grid-template-columns:1fr}
  .me-lm-form{max-width:38rem}
  .me-lm-next-card{
    align-items:flex-start;
    flex-direction:column
  }
}
@media(max-width:30rem){
  .me-lm-hero h1{font-size:2.3rem}
  .me-lm-points{display:grid}
  .me-lm-points div{width:max-content}
  .me-lm-form button{width:100%}
}
`
