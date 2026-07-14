# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server at http://localhost:3000
npm run build    # production build (also the way to typecheck — tsc noEmit runs via next)
npm run start    # serve production build
npm run lint     # next lint (ESLint)
```

There is no test suite. Verify changes with `npm run build` (catches type errors) and by viewing the dev server.

## What this is

Marketing site for the **PharmaBuilt Partner Program** (a supplement program for healthcare
practitioners). Next.js 14 App Router + React 18 + TypeScript + Tailwind + Framer Motion.
Four pages: Home (`app/page.tsx`), How It Works, Earnings, Contact. Deployed on Vercel; every
push to `main` is a production deploy.

## Architecture

- **`lib/site.ts` is the single source of shared content and external links.** Nav links,
  the Calendly booking URL, the podcast embed ID, and `PARTNER_TENANTS` (real tenant
  storefronts) all live here. Change site-wide links/data here, not inline in components.
- **Partner logos are served from a live external CDN**, not this repo. `CDN_BASE`
  (`cdn.corespeedhealth.com`) + the `logo` path in `PARTNER_TENANTS` form the full URL; paths
  mirror the platform's `tenants.logo` column. The real PharmaBuilt brand assets live on that
  platform, not here.
- **Pages compose small components from `components/`.** Client components (`"use client"`)
  are only those needing interactivity or animation: `Navbar`, `ContactForm`,
  `EarningsCalculator`, `ProfitGrowthChart`, `Faq`, `PartnerCarousel`, `Reveal`. Everything
  else is a server component.
- **`Reveal`** is the shared scroll-in animation wrapper (Framer Motion `whileInView`, fires
  once). Use it to animate sections rather than hand-rolling motion per component.
- **Earnings model:** partners earn a flat 30% recurring profit on every subscription.
  `MARGIN_RATE = 0.3` in `components/EarningsCalculator.tsx` drives both the calculator and
  `ProfitGrowthChart`. Keep the copy ("30%") and this constant in sync.

## Styling conventions

- **Theming is HSL CSS variables**, defined in `app/globals.css` `:root` and mapped to Tailwind
  color tokens in `tailwind.config.ts`. Use semantic tokens (`bg-primary`, `text-muted-foreground`,
  `border-border`) and the `brand.blue` / `brand.green` tokens — avoid hard-coded hex/hsl in JSX.
  Brand: navy primary `#1a3d8f`, green accent.
- **`container-page`** (utility in globals.css) is the standard page-width wrapper
  (`max-w-6xl` + responsive padding). **`bg-grid`** is the subtle grid backdrop for hero/CTA
  sections.
- Import with the `@/*` path alias (maps to repo root), e.g. `@/components/Navbar`, `@/lib/site`.
- Fonts: Inter via `next/font`, exposed as `--font-inter` / `font-sans`.
