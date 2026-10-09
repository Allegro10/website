# Agent instructions

Instructions for any AI agent working in this repository: Claude, GitHub Copilot, Cursor, Codex and others.

Tool-specific entry points:
- [CLAUDE.md](CLAUDE.md) for Claude / Claude Code
- [.github/copilot-instructions.md](.github/copilot-instructions.md) for GitHub Copilot

Rules live in [standards/](standards/), the single source of truth. Copilot auto-attaches short mirrors of them from [.github/instructions/](.github/instructions/). Project facts and approval gates are in [.ai/project-context.yaml](.ai/project-context.yaml). The current site map is generated in [docs/SITE.md](docs/SITE.md).

---

## What this repo is

The personal website of Lee Groenewegen ([leegroenewegen.co.uk](https://leegroenewegen.co.uk)): static HTML on GitHub Pages, deployed by pushing to `master`. It's a single stack, single repo, with no framework and no dependencies. A small Node build ([scripts/build.mjs](scripts/build.mjs)) copies the shared head, header and footer into every page and regenerates the docs.

## What an agent can do

- Edit pages, styles, the shared script, partials, config and docs
- Run `npm run build`, `npm run check` and `npm run serve`
- Draft copy, following [standards/content.md](standards/content.md)
- Create pages with `npm run new`

## What an agent cannot do

- Push, merge or deploy. **Merging to `master` publishes the live site**; that's Lee's call
- Invent facts, or publish anything listed under "Needs Lee's explicit approval" in [standards/content.md](standards/content.md)
- Add dependencies, frameworks, third-party scripts or tracking
- Hand-edit `build:*` regions, generated redirect stubs (`support.html`, `portfolio.html`) or [docs/SITE.md](docs/SITE.md)

---

## Workflow

### Starting a task
1. Work out the scope: what's asked, and what isn't.
2. Read [docs/SITE.md](docs/SITE.md) to see which pages are affected.
3. Read the relevant standard: [content](standards/content.md), [html](standards/html.md), [css](standards/css.md) or [javascript](standards/javascript.md).

### During implementation
- Stay in scope. Mention adjacent improvements; don't make them.
- Reuse existing components and tokens before adding new ones.
- Flag design or structural decisions (new component, new page type, new colour) rather than making them silently. Record significant ones in [docs/decisions/](docs/decisions/).

### After implementation (mandatory)
1. Run every check in [standards/validation.md](standards/validation.md) and report each as pass/fail.
2. Write a handoff summary: what changed, checks run, **new factual claims needing Lee's confirmation**, and anything flagged but not done.

### When to stop and ask
- The request is ambiguous, or conflicts with a standard
- Copy needs a fact you don't have
- The change needs an approval listed in [standards/content.md](standards/content.md)
- The change would alter the brand (fonts, colours, logo) or the site structure

---

## Task types

| Task | Output | Prompt |
|---|---|---|
| Content update | Edited copy + handoff listing new claims | — |
| New page | Page from the template, nav entry if asked, copy following the content standard | [prompts/new-page.md](prompts/new-page.md) |
| Self-check | Review of the current diff before a PR | [prompts/self-check.md](prompts/self-check.md) |
| Design change | CSS change using tokens + a decision record if significant | — |
