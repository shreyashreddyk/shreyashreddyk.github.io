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

## Content Updates

All public content lives in `src/data`.

- Update biography, skills, and contact info in `src/data/profile.ts`
- Update featured and archive projects in `src/data/projects.ts`
- Keep content public-safe and evidence-backed
- Do not commit raw resume PDFs, transcript PDFs, or private source documents

## GitHub Pages Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

- Pushes to `main` trigger a production build
- The workflow uploads the `dist/` artifact to GitHub Pages
- Routing uses `HashRouter`, so refreshes remain GitHub Pages safe
- Vite `base` stays `/` because this is a user site at `https://shreyashreddyk.github.io`

## Notes

- This site is intentionally static
- No backend, SSR, or private API keys belong in the frontend
- Before committing, run `npm run lint`, `npm run typecheck`, and `npm run build`
