# Self-check prompt

Use before handing off or raising a PR. Works in Claude (`/self-check`) and Copilot chat (`/self-check`).

---

## Branch / diff check

```
Review the changes on my current branch (git diff master...HEAD plus uncommitted changes).

For each changed file, check:

1. Scope: does the change match what was asked? Flag anything out of scope.
2. Build: were any <!-- build:* --> regions, redirect stubs or docs/SITE.md edited by hand? Does `npm run check` pass?
3. Content (standards/content.md): list every new factual claim and whether it's backed by cv.html or .ai/project-context.yaml. Flag approval-gated items, hype words, emoji, American spelling, and developer-for-hire positioning.
4. Structure (standards/html.md): existing components only, one h1, no skipped headings, no inline style or script, rel="noopener" on external links.
5. Styles (standards/css.md): tokens used, red only as an accent, rem font sizes, motion inside the Motion section and disabled for reduced motion.
6. Script (standards/javascript.md): progressive enhancement, guarded, no dependencies.
7. Docs: if structure or conventions changed, are CLAUDE.md, AGENTS.md or standards/ updated? Is a decision record needed in docs/decisions/?

Return:
- A one-paragraph summary and whether it's ready.
- Pass/fail for each check in standards/validation.md you could run.
- Claims needing Lee's confirmation.
- Anything that must be fixed first.
```

---

## Single file check

```
Review [file]. Apply checks 2–6 above to this file only, and return line-specific feedback plus anything that must be fixed.
```
