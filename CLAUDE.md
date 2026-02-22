# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal developer portfolio site ([jrobertson.io](https://jrobertson.io)) built with Next.js 15 App Router. Plain JavaScript (no TypeScript).

## Commands

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Production build (Turbopack)
npm run start    # Serve production build
npm run lint     # ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

- **Routing:** Static file-based routes under `app/`. Project detail pages are explicit directories (`app/projects/social-network-api/page.jsx`), not dynamic `[slug]` routes.
- **Data:** All data is static. Project metadata lives in `data/projects.js` as a plain array — no server-side data fetching.
- **Components:** Mix of Server Components (default) and Client Components (`'use client'`). Animation components (`Reveal`, `Stagger`, `RotatingWord`) and interactive components (`header`, `interiorHeader`, `contact-section`, `skills-swiper`) are client components.
- **Two headers:** `header.jsx` (dark bg) for the home page; `interiorHeader.jsx` (light bg) for project pages and 404. Nearly identical structure.
- **Styling:** Tailwind CSS v4 with `@import 'tailwindcss'` syntax. Brand colors defined as CSS custom properties in `globals.css` and bridged to Tailwind via `@theme inline`. Font is Electrolize loaded via `next/font/google`.
- **Animations:** Framer Motion — `Stagger` staggers children, `Reveal` does scroll-triggered fade-up (respects `prefers-reduced-motion`), `RotatingWord` cycles hero text.
- **Contact form:** Uses EmailJS with hardcoded credentials in `contact-section.jsx`.
- **Path alias:** `@/*` maps to project root (`jsconfig.json`).
- **Deployment:** Vercel, auto-deploys from `main`.
