# HTML standard

## Page shape

Every page is a root-level `.html` file with this skeleton (see [partials/page-template.html](../partials/page-template.html)):

```html
<head>
    <meta charset="utf-8">
    <title>Page name - Lee Groenewegen</title>
    <meta name="description" content="One sentence, under ~160 characters.">
    <!-- build:head --> <!-- /build:head -->
</head>
<body>
    <!-- build:header --> <!-- /build:header -->
    <main id="main-content"> … </main>
    <!-- build:footer --> <!-- /build:footer -->
</body>
```

- **Never edit inside a `build:*` region.** The build overwrites it. Change [partials/](../partials/) or [site.config.json](../site.config.json) instead.
- `<title>` and `<meta name="description">` are hand-written and required. The build reuses them for Open Graph tags and [docs/SITE.md](../docs/SITE.md).
- Create pages with `npm run new -- <slug> "<Title>"`, not by copying another page.
- Old URLs never 404. When renaming or removing a page, add it to `redirects` in `site.config.json`.

## Components

Build pages from the existing blocks in [main.css](../main.css). Don't invent new markup patterns.

| Block | Markup |
|---|---|
| Hero | `section.page-hero` (`--compact` on inner pages) > `.wrapper` > `p.label`, `h1`, `p.lead`, optional `.btn-row` |
| Section, two-column | `section.section` > `.wrapper.section__grid` > `.section__head` (`p.label` + `h2`) + `.section__body` |
| Section, intro + content | `section.section` > `.wrapper` > `.section__intro` (div with `p.label` + `h2`, optional `p`) + content |
| Alternate background | add `section--tint`. Alternate it; don't put two tinted sections in a row |
| Cards | `.cells` (or `.cells--2`) > `.cell` > `h3`/`h4` + `p` or `ul` |
| List rows | `.rows` > `.row` (or `a.row` for links) > `p.row__meta` (`strong` + text) + `div` (`h3`, `p.row__sub`, `p`/`ul`, `ul.tags`) |
| Key/value list | `dl.facts` > `div` > `dt` + `dd` |
| Quote | `blockquote.pull` with optional `cite` |
| Closing CTA | `section.cta` > `.wrapper` > `h2`, `p`, `.btn-row` with `a.btn`. Last section in `main` |
| Buttons | `a.btn` (primary), `a.btn.btn--ghost` (secondary), `--small`. Arrow: `<span aria-hidden="true">→</span>` |
| Highlight | `span.accent` (brand red). At most one phrase per page |

## Rules

- One `h1` per page. Heading levels never skip (`h2` → `h3`).
- Labels (`p.label`) are plain words: "What I do". No numbers, §, ⬩ or brackets.
- No inline `style` attributes and no inline `<script>`. All behaviour lives in [assets/site.js](../assets/site.js).
- Internal links are relative (`about.html`). External links get `rel="noopener"`.
- Images need meaningful `alt` text, or `alt=""` if decorative, plus `width` and `height`.
- Escape `&` as `&amp;` in text and attributes.
