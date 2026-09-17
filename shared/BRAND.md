# Growth Believer — Brand brief

Growth Believer is a practical digital-resource brand. The site helps people solve everyday problems, build better habits, make clearer decisions, and keep moving forward.

## Offer

- **Brand:** Growth Believer
- **Promise:** Practical digital resources for making progress in real life.
- **Core areas:** Productivity, Mindset, Career, Business, and Life.
- **Primary offer:** Focused digital guides and tools designed around one problem at a time.
- **Example guide price:** ₹499 one-time. Treat this as the MVP product price unless a later approved product brief replaces it.
- **Audience:** People who want useful, actionable help without information overload.
- **Proof:** Do not invent testimonials, customer counts, case studies, certifications, or outcome statistics.
- **Voice:** Quietly confident, practical, clear, encouraging, and specific. Avoid hype, fake urgency, unsupported claims, and generic filler.

## Page architecture

The MVP funnel is:

Homepage → Hero → Lead Magnet → Quiz → Growth Result → Sales → Order Form → Thank You

The Homepage also routes to Storefront, individual product details, and Sales.

## Visual system

Keep the existing shared visual tokens as the implementation system. The visual tokens are an internal styling system only. Use the dark, premium system with violet accents, high-contrast typography, generous spacing, rounded cards, and restrained motion.

Use the exact font stack already defined in `shared/tokens.ts`: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

## Shared components

- `Logo({ href?, name? })`: the Growth Believer wordmark.
- `Header({ links, loginHref, cta })`: primary navigation.
- `Footer({ columns, detail })`: shared footer.
- `CtaButton({ href, children, variant?, className? })`: real navigation links only.
- `Section({ id?, className?, children, label? })`: semantic section wrapper.

Avoid placeholder `#` CTAs when an existing funnel route is available. Do not claim that the MVP processes payments unless a real payment integration has been added.
