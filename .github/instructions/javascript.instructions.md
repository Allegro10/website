---
applyTo: "**/*.js,**/*.mjs"
---

# JavaScript instructions

The authoritative rules are in [standards/javascript.md](../../standards/javascript.md). If they differ, the standard wins.

- `assets/site.js` is the only browser script. Progressive enhancement: pages must work with JS off.
- No frameworks, libraries, analytics or third-party scripts. `scripts/build.mjs` stays dependency-free.
- No inline scripts or `on*=` attributes. Hook behaviour to classes or `data-*` attributes.
- Check elements exist before binding, and feature-detect APIs. Respect `prefers-reduced-motion`.
- `===` only, `const`/`let` only, no globals, no `console.log` in the browser script.
