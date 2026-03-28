# The Woodlands Law Firm Website

The official website for The Woodlands Law Firm — a civil litigation and estate planning firm serving Montgomery County and Harris County, Texas.

**URL:** [https://woodlands.law](https://woodlands.law)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 5 with SSG (Static Site Generation)
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI)
- **Routing:** React Router DOM v6
- **Blog:** WordPress REST API integration
- **Hosting:** HostGator (static files via FTP)

## Development

```bash
npm install
npm run dev
```

## Build

The build generates pre-rendered static HTML for all 60+ routes:

```bash
npm run build
```

This runs three stages:
1. `build:client` — Vite client bundle (JS/CSS)
2. `build:server` — Vite SSR bundle for pre-rendering
3. `build:prerender` — Generates static HTML for every route

Output goes to `dist/client/`.

## Deployment

Pushes to `main` trigger GitHub Actions which builds and deploys to HostGator via FTP.
