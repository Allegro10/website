# New page prompt

Use to add a page. Works in Claude (`/new-page`) and Copilot chat (`/new-page`).

```
Create a new page for this site: [what the page is for].

1. Ask me for anything you need first: the slug, the title, whether it goes in the menu (and its label), and the facts the page should contain. Don't invent facts.
2. Run `npm run new -- <slug> "<Title>"` (add `--nav "<Label>"` if it goes in the menu).
3. Replace every TODO in the new file: the title, the meta description (one sentence, under ~160 characters), the hero label, lead and sections.
4. Build the page only from the components in standards/html.md, following standards/content.md for copy. End with a .cta section unless it's a contact or utility page.
5. Run `npm run build && npm run check`, then the rest of standards/validation.md.
6. Hand off: what you created, checks passed or failed, and every factual claim for me to confirm.
```
