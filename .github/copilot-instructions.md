# Copilot workspace instructions

Personal website of Lee Groenewegen: static HTML on GitHub Pages, no framework, no dependencies. Read [AGENTS.md](../AGENTS.md) for scope, workflow and limits.

## Source authority

When you need context, check in this order:

1. Lee's request in the current chat: **authoritative scope**
2. [standards/](../standards/): the rules (content, html, css, javascript, validation)
3. [.ai/project-context.yaml](../.ai/project-context.yaml): positioning, verified facts, approval gates
4. [docs/SITE.md](../docs/SITE.md): generated map of pages and sections
5. Existing pages and `main.css`: what's actually built

Per-file-type rules auto-attach from [.github/instructions/](instructions/). They mirror `standards/`, and `standards/` wins if they differ.

## Rules that matter most

- **Never edit inside `<!-- build:* -->` regions.** Edit `partials/` or `site.config.json`, then run `npm run build`.
- **Don't invent facts** (metrics, clients, dates, testimonials). List new claims for Lee to confirm.
- **Positioning:** Shopify Plus technical and transformation leader, not a developer for hire. Lee is employed, so calls to action invite connection and never sell services.
- Reuse existing components and CSS tokens. Brand red (`--red`) is for accents only.
- Complete what's asked; mention related improvements without making them.

## Before handoff

Run `npm run build && npm run check` and the remaining checks in [standards/validation.md](../standards/validation.md). The `/self-check` prompt ([.github/prompts/self-check.prompt.md](prompts/self-check.prompt.md)) reviews your diff.

## Don't

- Push, merge or deploy. Merging to `master` publishes the site
- Add dependencies, frameworks, analytics or third-party scripts
- Change fonts, colours or the logo without being asked
