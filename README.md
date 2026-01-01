# New Year Wish 2026

[![Deploy to GitHub Pages](https://github.com/Nirmalkoswatta/New-year-wish/actions/workflows/deploy.yml/badge.svg)](https://github.com/Nirmalkoswatta/New-year-wish/actions/workflows/deploy.yml)

A luminous New Year greeting built with React, Framer Motion, and Vite. The site opens with a gentle loading experience, transitions into a celebratory hero message, and closes with a warm family blessing.

## Live Preview

The published site is available at https://nirmalkoswatta.github.io/New-year-wish/

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build command emits the static site to the `docs` directory so GitHub Pages can serve it.

## Deployment

Every push to `main` triggers the [Deploy to GitHub Pages workflow](https://github.com/Nirmalkoswatta/New-year-wish/actions/workflows/deploy.yml). The workflow runs `npm run build` with GitHub Pages configuration and publishes the contents of `docs` via `actions/deploy-pages`.

### Vercel Hosting

The repository includes a `vercel.json` configuration so the site can be deployed as a static project on Vercel:

1. Import the repository into [Vercel](https://vercel.com/new) using your GitHub account.
2. When prompted, keep the default build command (`npm run build`) and set the output directory to `docs` (already specified in `vercel.json`).
3. Deploy. Vercel will serve the production build at the generated domain with the correct root paths.
