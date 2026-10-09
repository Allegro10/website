# Validation

Run these before every handoff, and report each as pass/fail.

| # | Check | How | Fix |
|---|---|---|---|
| 1 | Build regions in sync | `npm run build` then `npm run check` | Re-run `npm run build`. Never hand-edit regions |
| 2 | Internal links resolve | `npm run check` (fails with "Broken local links") | Fix the `href`, or add a redirect in `site.config.json` |
| 3 | Docs links resolve | `npm run check` (fails with "Broken doc links") | Fix the relative link in the Markdown file |
| 4 | Visual check, desktop | `npm run serve`, open the changed pages at ~1366px wide | Compare against the components in [html.md](html.md) |
| 5 | Visual check, mobile | Same at ~390px. Open and close the menu | Respect the breakpoints in [css.md](css.md) |
| 6 | Reduced motion | DevTools → Rendering → emulate `prefers-reduced-motion: reduce` | Nothing should animate, and all content should be visible |
| 7 | Content | Re-read new copy against [content.md](content.md) | List every new factual claim for Lee to confirm |

CI runs check 1–3 on every pull request ([.github/workflows/check.yml](../.github/workflows/check.yml)).

If you can't run a check (no browser, for example), say so in the handoff rather than marking it as passed.
