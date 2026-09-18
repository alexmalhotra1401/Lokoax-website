# LOKOAX Marketing Website

Next.js App Router implementation of the LOKOAX marketing website and authentication UI.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

The project is configured with `output: 'export'`, so a successful build creates a static `out/` directory that can be deployed to Netlify, Vercel, GitHub Pages-compatible static hosting, or a conventional web server.

## Authentication

The login/sign-up/verification screens are connected as a front-end prototype only. Replace the handlers in `components/AuthForms.js` with your real Supabase/Firebase/API authentication calls when credentials are available.

## Pricing

Current plan amounts are UI values inherited from the approved marketing concept. Update them in `components/PricingCards.js` before production if pricing changes.

## Replace the current GitHub repo from VS Code

1. Clone `https://github.com/alexmalhotra1401/Lokoax-website.git`.
2. Remove the old static HTML/CSS files from the repo root.
3. Copy all files from this Next.js project into the repo root.
4. In the VS Code terminal run:

```bash
npm install
npm run dev
```

5. When ready to push:

```bash
git add .
git commit -m "Rebuild LOKOAX website in Next.js"
git push origin main
```

## Recommended deployment

Vercel is the simplest deployment target for a Next.js repository. This project also uses static export, so `npm run build` creates an `out/` folder that can be served by standard static hosting.
