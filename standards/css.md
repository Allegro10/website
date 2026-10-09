# CSS standard

All styles live in one file, [main.css](../main.css), organised under commented headings: Base, Buttons, Header & navigation, Sections, Cards, Rows, Definition list, Pull quote, CTA, Footer, Motion, Print. Add new rules under the matching heading.

## Tokens

Use the `:root` custom properties for every colour, font and the main spacing values. Don't hardcode a value that has a token.

| Token | Use |
|---|---|
| `--bg`, `--bg-tint` | Page and tinted-section backgrounds |
| `--ink`, `--ink-soft`, `--muted` | Headings, body text, secondary text |
| `--rule` | Hairlines and borders |
| `--red`, `--red-dark` | Brand red. **Accents only** |
| `--font-display` | Martel Sans 800: headings, logo, row titles, quotes |
| `--font-sans` | Inter: everything else |
| `--wrap`, `--gutter`, `--space` | Content width, side padding, section rhythm |

## Brand

- Black on white, with one brand red (`#e3012f`, also in [logo.svg](../logo.svg)).
- Red is for accents: label bars, list markers, the active-nav underline, one `.accent` phrase, the CTA button, card hover. Never use it for large areas or body text.
- Square corners on buttons and blocks. Pills only for `.tags`.
- Don't add new fonts or colours without Lee's approval.

## Naming and syntax

- BEM-style classes: `.block`, `.block__element`, `.block--modifier`. Lowercase with hyphens.
- Style classes, not element+class combos (`div.cell`) or IDs.
- Font sizes in `rem`, `em` or `clamp()`, never `px`.
- No `transition: all`. Name the properties.
- `!important` only inside `@media print` and `prefers-reduced-motion` overrides.
- Mobile breakpoints in use: 860px (nav, section grid), 760px (footer), 700px (rows), 520px (facts). Reuse these.

## Motion

- Every animation must be subtle (opacity plus ≤ 20px movement, ≤ 700ms) and live in the **Motion** section.
- Everything must be disabled under `@media (prefers-reduced-motion: reduce)`. The existing block covers new rules automatically if they use `animation` or `transition`.
- Content must stay visible if JavaScript fails. Only `assets/site.js` adds `.reveal`, and only to off-screen elements.
