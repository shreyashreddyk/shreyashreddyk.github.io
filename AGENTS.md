# AGENTS.md

## Project Reference
- Site: `https://shreyashreddyk.github.io`
- Stack: React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router with `HashRouter`, `lucide-react`
- Hosting target: static GitHub Pages user site

## Operating Rules
- Run `npm install` if dependencies are missing before other validation steps.
- Run `npm run lint`, `npm run build`, and `npm run preview` when relevant, especially after major UI or content changes.
- Run `npm run typecheck` when touching TypeScript-heavy paths or app structure.
- Keep the site static and GitHub Pages compatible.
- Use `HashRouter` for in-app routing.
- Keep Vite `base` set to `/` because this repo deploys as a GitHub Pages user site.

## Content and Privacy
- Never commit files from `inputs/`.
- Never commit or publish raw files from `portfolio/`.
- Never publish raw resume PDFs or transcript PDFs unless explicitly instructed.
- Commit only summarized, public-safe content into `src/data/*.ts`.
- Use data-driven content in `src/data`.
- Prefer truthful, evidence-backed resume language.
- Do not invent metrics, employers, titles, dates, awards, or project outcomes.
- Use Google XYZ bullet style where evidence supports it: achieved X, measured by Y, by doing Z.
- Use “built X to do Y using Z” when no quantified metric is available.

## Accessibility and UX
- Use semantic HTML landmarks and headings.
- Preserve keyboard navigation and visible focus states.
- Add `aria-label`s where they improve clarity.
- Support reduced-motion users.
- Keep animations polished but not fragile.
- Do not introduce Three.js or WebGL unless explicitly requested.
- After every major visual change, run lint/build and self-review for mobile, tablet, and desktop layouts.

## Design Guardrails
- Preserve the editorial-tech visual direction already established unless the user requests a redesign.
- Keep Framer Motion restrained and purposeful.
- Avoid adding fragile dependencies or runtime API integrations for content that can live statically in `src/data`.

## Validation and Git
- Do not commit unless checks pass.
- Before any commit, verify that no private PDFs, transcripts, or raw source docs are staged.

## Portfolio content rules

This portfolio is for technical recruiting. Prioritize clarity, credibility, and evidence.

### Project writing
- Every public GitHub repo owned by `shreyashreddyk` should appear on the Projects page.
- Stronger projects may be featured, but weaker or older projects must still appear in the archive.
- Every project must link directly to its GitHub repository.
- Prefer README screenshots, diagrams, reports, or generated plots as project covers.
- If no image exists, create a tasteful generated SVG cover. Do not use random external images.
- Write bullets in Google XYZ format when supported by evidence.
- Never invent metrics. If no metric exists, use impact-style wording without numbers.
- Mention tools, models, databases, pipelines, evaluation methods, and system design choices when supported by repo evidence.

### Public safety
- Do not commit anything under `inputs/`.
- Do not publish raw transcripts.
- Do not publish student IDs, PIDs, addresses, or scanned transcript pages.
- Do not publish a full resume unless a sanitized public resume is explicitly placed in `public/resume.pdf`.

### UI rules
- The site should feel fluid, premium, and polished.
- Avoid fragile animation complexity.
- No Three.js/WebGL unless explicitly requested.
- Use responsive layouts.
- Support `prefers-reduced-motion`.
- Use semantic HTML and accessible focus states.

### Checks
Before final response or commit:
- `npm run lint`
- `npm run build`
- inspect for broken links/images
- verify no private files were committed