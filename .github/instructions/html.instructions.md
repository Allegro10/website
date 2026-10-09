---
applyTo: "**/*.html"
---

# HTML instructions

The authoritative rules are in [standards/html.md](../../standards/html.md) and [standards/content.md](../../standards/content.md). This file exists so Copilot auto-attaches the essentials when a page is in context. If they differ, `standards/` wins.

- Never edit inside `<!-- build:head|header|footer -->` regions. Change `partials/` or `site.config.json`, then `npm run build`.
- Don't edit `support.html` or `portfolio.html`; they're generated redirect stubs.
- Every page needs a hand-written `<title>` and `<meta name="description">` above `build:head`.
- Build from existing components: `.page-hero`, `.section` / `.section__grid` / `.section__intro`, `.cells`, `.rows`, `.facts`, `.pull`, `.cta`, `.btn`.
- One `h1`. No skipped heading levels. Labels (`p.label`) are plain words, with no numbers or symbols.
- No inline `style` or `<script>`. External links get `rel="noopener"`.
- Copy: British English, no hype words, no emoji. Never invent facts; list new claims for Lee.
