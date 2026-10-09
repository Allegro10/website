# leegroenewegen.co.uk

Personal site of Lee Groenewegen. Static HTML on GitHub Pages; pushing to `master` publishes it.

- `npm run build`: sync the shared head, header and footer into every page, and regenerate [docs/SITE.md](docs/SITE.md)
- `npm run check`: verify nothing is stale and no page or doc links are broken (CI runs this)
- `npm run new -- <slug> "<Title>" --nav "<Label>"`: scaffold a page
- `npm run serve`: local preview on port 8000

How it works and the rules for changing it:
- [AGENTS.md](AGENTS.md): workflow for any AI agent (and a good overview for humans)
- [CLAUDE.md](CLAUDE.md) and [.github/copilot-instructions.md](.github/copilot-instructions.md): tool-specific entry points
- [standards/](standards/): content, HTML, CSS, JavaScript and validation rules (the single source of truth)
- [docs/decisions/](docs/decisions/): why things are the way they are
