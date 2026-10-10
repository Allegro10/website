# GitHub Copilot code review instructions

Copy the prompt below into **GitHub repo → Settings → Copilot → Code review → Custom instructions**.

---

## Prompt

```
This repository is a static personal website (HTML, one CSS file, one JS file, a dependency-free Node build). Rules are in standards/.

Analyse the change for:

1. Correctness – Does it do what the PR describes? Were build regions (<!-- build:* -->) edited by hand rather than via partials/ or site.config.json? Is docs/SITE.md out of sync (CI's npm run check will catch this)?

2. Content accuracy – Flag any new factual claim (metrics, clients, dates, team sizes, outcomes) not already in cv.html or .ai/project-context.yaml. Flag statements about availability, rates or contracts, sales-style calls to action (the owner is employed, so CTAs must invite connection, not sell services), and newly named clients; these need the owner's approval. Flag copy that positions the owner as a developer for hire rather than a Shopify Plus technical/transformation leader. Flag hype words, emoji and American spelling.

3. Accessibility – One h1 per page, no skipped heading levels, alt text and dimensions on images, visible focus, sufficient contrast, and nothing that only works with a mouse. Content must remain visible with JavaScript off and with prefers-reduced-motion.

4. Consistency – Uses existing components and CSS tokens (standards/html.md, standards/css.md). Brand red (--red) only as an accent. No inline styles or scripts. No new fonts or colours.

5. Performance – No new third-party scripts, frameworks or heavy images. Fonts stay as they are. Animations use opacity/transform only.

6. Maintainability – Will the change survive the next npm run build? Is anything duplicated that belongs in a partial or token?

Return:
- A brief summary of overall quality.
- Line-specific, actionable feedback.
- Blockers that must be fixed before merging (merging to master deploys the live site).
```

---

## Notes

- Blockers should block the PR. Everything else is a suggestion.
- Copilot can't see the rendered site. Flag anything that needs a visual check.
