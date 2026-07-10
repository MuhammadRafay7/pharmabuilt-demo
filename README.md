# PharmaBuilt Partners

Marketing site for the **PharmaBuilt Partner Program** — a supplement program for
healthcare practitioners offering a branded storefront, evidence-based protocols,
and recurring, high-margin revenue with no inventory or fulfillment overhead.

🔗 **Live:** [pharmabuilt-demo.vercel.app](https://pharmabuilt-demo.vercel.app)

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [lucide-react](https://lucide.dev/) icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the local dev server        |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Project structure

```
app/                 App Router pages
  page.tsx           Home
  earnings/          Earnings calculator + profit-growth chart
  how-it-works/      Program steps + FAQ
  contact/           Contact form + scheduling
components/          Reusable UI (Navbar, Footer, charts, CTAs, …)
lib/site.ts          Central config: nav links, external URLs, partner list
public/brand/        Logo and brand assets
```

## Pages

- **Home** — hero, how-it-works timeline, benefits, partner carousel, podcast.
- **Earnings** — interactive calculator and profit-growth chart based on the
  Practice Revenue Model (30% recurring profit on every subscription).
- **How It Works** — four-step program overview and FAQ.
- **Contact** — enquiry form and a link to book a 15-minute intro call.

## Deployment

Deployed on [Vercel](https://vercel.com/). Every push to `main` triggers a
production deployment.
