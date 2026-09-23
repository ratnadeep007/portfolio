# Ratnadeep Bhattacharyya Portfolio

Personal portfolio for Ratnadeep Bhattacharyya, a full-stack AI engineer working across agentic AI, product interfaces, distributed backend systems, and cloud infrastructure.

Live site: [theskylab.in](https://theskylab.in/)

## Stack

- Astro 5
- TypeScript
- GSAP with ScrollTrigger
- Plain CSS
- pnpm

## Local development

Requirements:

- Node.js 22 or newer
- pnpm 11 or newer

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

Dependency build scripts for `esbuild`, `sharp`, and `workerd` are explicitly approved in `pnpm-workspace.yaml`.

## Production build

```bash
pnpm build
pnpm preview
```

The static production output is written to `dist/`.

## Cloudflare deployment

The repository is configured as an assets-only Cloudflare Worker. `wrangler.jsonc` publishes the generated `dist/` directory without adding a server-rendered Astro adapter.

Cloudflare build settings:

```text
Build command: pnpm build
Deploy command: npx wrangler deploy
PNPM_VERSION: 11.12.0
```

Wrangler is pinned as a development dependency so CI does not install or configure it interactively during deployment.

## Project structure

```text
public/
  Ratnadeep Bhattacharyya Resume.pdf  Public resume download
src/
  pages/
    index.astro                Portfolio content, layout, styles, and motion
astro.config.mjs              Astro configuration
pnpm-workspace.yaml            Dependency build approvals
wrangler.jsonc                 Cloudflare static asset deployment
```

## Updating the resume

Keep the public resume file synchronized with the source file:

```text
Ratnadeep Bhattacharyya Resume.pdf
public/Ratnadeep Bhattacharyya Resume.pdf
```

The portfolio links to `/Ratnadeep%20Bhattacharyya%20Resume.pdf`. Run `pnpm build` after replacing the public file so the updated resume is copied into `dist/`.

## Validation

```bash
pnpm build
```

The build script runs `astro check` before producing the static site.
