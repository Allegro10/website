---
applyTo: "**/*.css"
---

# CSS instructions

The authoritative rules are in [standards/css.md](../../standards/css.md). If they differ, the standard wins.

- One stylesheet: `main.css`. Add rules under the matching commented heading.
- Use the `:root` tokens (`--ink`, `--muted`, `--rule`, `--red`, `--font-display`, `--space`…). No hardcoded values that have a token.
- Brand red is for accents only, never large areas or body text.
- BEM-style classes (`.block__element--modifier`). No element+class selectors, no IDs.
- Font sizes in `rem`/`em`/`clamp()`. No `transition: all`.
- `!important` only in print and reduced-motion overrides.
- New motion goes in the Motion section: subtle, and disabled under `prefers-reduced-motion`.
