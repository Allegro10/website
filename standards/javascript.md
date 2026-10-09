# JavaScript standard

The site has **one** script: [assets/site.js](../assets/site.js), loaded with `defer` from the `build:head` region on every page. Its responsibilities:

1. Mobile navigation toggle (`.nav-toggle` / `#site-nav`)
2. Scroll reveal (adds `.reveal` / `.is-visible` to off-screen content)
3. Print buttons (`[data-print]`)

## Rules

- Progressive enhancement only. Every page must be fully readable and navigable with JavaScript off.
- No frameworks, libraries, bundlers or third-party scripts (analytics included) without Lee's approval.
- No inline `<script>` or `on*=` attributes in pages. Hook behaviour to classes or `data-*` attributes.
- Guard every feature: check that elements exist before binding, and feature-detect APIs (`'IntersectionObserver' in window`).
- Respect `prefers-reduced-motion` for anything animated.
- Strict equality (`===`), `const`/`let` only, no globals beyond the module scope, no `console.log`.
- Keep it small. If the file grows past ~100 lines, raise it before adding more.

## Build script

[scripts/build.mjs](../scripts/build.mjs) is Node ≥ 18 with **no dependencies**. Keep it that way. Its header comment documents its commands. If you change what it does, update that comment and [CLAUDE.md](../CLAUDE.md).
