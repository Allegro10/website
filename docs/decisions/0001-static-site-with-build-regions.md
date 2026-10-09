# 0001 — Static HTML with build regions

**Status:** accepted · **Date:** 2026-10-09

## Context

The site is hosted on GitHub Pages. Each page carried its own copy of the menu, so menus drifted out of sync. The redesign repositions Lee as a Shopify Plus leader, and the site should be easy for AI agents to maintain safely.

## Decision

- Keep plain HTML pages served as-is: no framework, no static site generator, no dependencies.
- Shared markup (head, header, footer) lives in `partials/` and is copied into marked `<!-- build:* -->` regions by `scripts/build.mjs`. The menu is defined once in `site.config.json`.
- The build regenerates `docs/SITE.md` and checks page and doc links, so documentation can't drift from the site.
- Rules live once in `standards/`. Tool-specific files (`CLAUDE.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `.github/instructions/`) point to them, following the structure of fusefabric's engineering scaffold, reduced to a single stack.

## Consequences

- Pages stay readable and editable in any editor, and GitHub Pages needs no build step. The built output is committed.
- Anyone editing must run `npm run build`. CI (`npm run check`) catches it if they forget.
- Hand edits inside build regions are lost; the standards and agent instructions say so prominently.
