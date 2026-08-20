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

Dependency build scripts for `esbuild` and `sharp` are explicitly approved in `pnpm-workspace.yaml`.

## Production build

```bash
pnpm build
pnpm preview
```

The static production output is written to `dist/`.

## Project structure

```text
public/
  Ratnadeep Bhattacharyya.pdf  Public resume download
src/
  pages/
    index.astro                Portfolio content, layout, styles, and motion
astro.config.mjs              Astro configuration
pnpm-workspace.yaml            Dependency build approvals
```

## Updating the resume

Replace both resume files so the source and public download remain synchronized:

```text
Ratnadeep Bhattacharyya.pdf
public/Ratnadeep Bhattacharyya.pdf
```

The portfolio links to `/Ratnadeep%20Bhattacharyya.pdf`. Run `pnpm build` after replacing the public file so the updated resume is copied into `dist/`.

## Validation

```bash
pnpm build
```

The build script runs `astro check` before producing the static site.
