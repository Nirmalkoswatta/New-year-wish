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
