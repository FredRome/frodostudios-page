# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static output to dist/
npm run preview  # Preview the built site locally
```

## Architecture

Single-page Astro site with Tailwind CSS. Fully static (`output: "static"`, no server-side rendering).

**Key files:**
- `src/pages/index.astro` — The entire page (hero, games section, about, footer). All content lives here.
- `src/layouts/Layout.astro` — HTML shell: meta tags, Google Fonts (Fredoka + Inter), body wrapper.
- `tailwind.config.mjs` — Custom fonts (`font-display` = Fredoka, `font-body` = Inter), custom `space-*` dark palette, and `float`/`twinkle` keyframe animations.

## Design System

- **Background palette:** `space-950` (#070810) → `space-900` (#0A0B14) → `space-800` (#0F1120)
- **Primary accent:** violet (`violet-400/500/600`)
- **Headings:** `font-display` (Fredoka) — use for all titles and the studio wordmark
- **Body text:** `font-body` (Inter)
- **Card pattern:** `bg-space-800` with `border` using per-game accent color at `/30` opacity, `hover:scale-[1.02]` lift

## Game Cards

The three games are defined as a typed array in `index.astro`. Each game object controls its card's gradient header, badge color, border, and glow independently. To add or update a game, edit the `games` array — no separate component file needed.

## Deployment

Cloudflare Pages — connect the repo and set build command `npm run build`, output directory `dist`. No adapter needed (static output).
