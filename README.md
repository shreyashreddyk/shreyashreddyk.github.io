# shreyashreddyk.github.io

Personal portfolio site for Shreyash Kondakindi, built as a static GitHub Pages user site with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and `HashRouter`.

## Stack
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router with `HashRouter`
- `lucide-react`

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Quality Checks

Run linting:

```bash
npm run lint
```

Run type checking:

```bash
npm run typecheck
```

Build the production bundle:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/       Static visual assets committed with the site
  components/   Reusable UI building blocks
  data/         Typed public-facing content and project metadata
  lib/          Shared helpers, route metadata, and motion utilities
  pages/        Route-level page components
  styles/       Global styles and Tailwind entrypoint
```

## Content Editing

All public-facing copy is data-driven and lives in `src/data`.

- Update biography, skills, and contact info in `src/data/profile.ts`
- Update education entries in `src/data/education.ts`
- Update work experience in `src/data/work.ts`
- Keep content public-safe, evidence-backed, and suitable for a public recruiting portfolio
- Do not commit raw resume PDFs, transcript PDFs, or private source documents

## Project Data Updates

Project metadata lives in `src/data/projects.ts`.

- Keep every public GitHub repository represented on the Projects page or archive
- Link each entry directly to its GitHub repository
- Prefer evidence-backed bullets that mention tools, models, data sources, evaluation methods, and system design choices when supported
- Use committed screenshots, diagrams, generated plots, or local SVG covers for project visuals

## Add a New Project

1. Add a new project object in `src/data/projects.ts`.
2. Include the repository URL, summary, tech stack, and evidence-backed bullets.
3. Add or reference a committed cover asset. If the repo has no public image, create a local SVG cover in `src/assets/project-covers/`.
4. Decide whether the project should be featured or remain in the archive based on portfolio strength.
5. Run `npm run lint` and `npm run build` to confirm the site still passes checks.

## GitHub Pages Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

- Pushes to `main` trigger a production build
- The workflow installs dependencies with `npm ci`
- The workflow builds the site with `npm run build`
- The workflow uploads the `dist/` artifact to GitHub Pages
- Deployment uses `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`
- Routing uses `HashRouter`, so refreshes remain GitHub Pages safe
- Vite `base` stays `/` because this is a user site at `https://shreyashreddyk.github.io`

## Notes

- This site is intentionally static
- No backend, SSR, or private API keys belong in the frontend
- Before committing, run `npm run lint`, `npm run typecheck`, and `npm run build`
