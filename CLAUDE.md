# leegroenewegen.co.uk — Claude instructions

Read [AGENTS.md](AGENTS.md) first. It covers scope, workflow, what you can and can't do, and when to stop and ask. This file adds Claude-specific notes and a quick reference.

## Start here

1. [docs/SITE.md](docs/SITE.md): generated map of every page and its sections
2. [standards/](standards/): the rules (content, html, css, javascript, validation)
3. [.ai/project-context.yaml](.ai/project-context.yaml): owner, positioning, verified facts, approval gates

## Commands

```sh
npm run build                                   # sync build regions into all pages + regenerate docs/SITE.md
npm run check                                   # fail on stale files, broken page links or broken doc links
npm run new -- <slug> "<Title>" --nav "<Label>" # scaffold a page (--nav adds it to the menu)
npm run serve                                   # preview at http://localhost:8000
```

Slash commands: `/self-check` (review your diff before handoff) and `/new-page` (guided page creation). They live in [.claude/commands/](.claude/commands/) and run the shared prompts in [prompts/](prompts/).

## Repository map

| Path | Role |
|---|---|
| `site.config.json` | Site details, menu order, CTA button, redirects. **The menu is edited here only** |
| `partials/` | Shared `head`, `header`, `footer`, plus `redirect` and `page-template` |
| `*.html` (root) | Pages. Hand-edit everything outside `build:*` regions |
| `main.css` | All styles. Tokens in `:root` |
| `assets/site.js` | The only script: mobile nav, scroll reveal, print |
| `logo.svg` | LG monogram, also the favicon |
| `scripts/build.mjs` | Build + checks, no dependencies |
| `docs/SITE.md` | Generated. Never edit |
| `docs/decisions/` | Records of significant decisions |
| `standards/`, `prompts/`, `.github/`, `.claude/`, `.ai/` | Agent scaffold (not published) |

## The three things that most often go wrong

1. **Editing inside `<!-- build:* -->` regions.** The build silently overwrites them. Edit `partials/` or `site.config.json`.
2. **Inventing or inflating facts.** Use only [cv.html](cv.html), [.ai/project-context.yaml](.ai/project-context.yaml) or what Lee says. List every new claim in your handoff.
3. **Writing as a developer for hire.** Lee is positioned as a Shopify Plus technical and transformation leader. See [standards/content.md](standards/content.md).

## Claude-specific notes

- Use the `run` skill or `npm run serve` plus a browser screenshot to check visual changes at desktop and mobile widths.
- Don't commit or push unless Lee asks. Merging to `master` deploys the live site.
