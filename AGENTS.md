# Repository Guidelines

## Project Context

Limecoding is a personal technology blog for reading articles, exploring related knowledge, and revisiting accumulated content. The user also values the experience of building with React directly.

Read these documents before starting work:

1. [Concept](docs/concept.md): purpose and product direction
2. [Features](docs/features.md): proposed initial scope and future ideas
3. [Decisions](docs/decisions.md): confirmed directions, proposals, and open questions
4. [Contributing](CONTRIBUTING.md): development, verification, and Git conventions

Commit messages follow Conventional Commits 1.0.0, and the workflow is based on GitHub flow. Follow `CONTRIBUTING.md` for Korean commit descriptions, branch names, pull requests, and merge rules.

## Current Setup

- The Astro project lives at the repository root, with React and MDX integrations configured.
- `src/pages/` contains pages, `public/` contains static assets, and `docs/` contains planning documents and decision records.
- Use npm and `package-lock.json`. Check `package.json` for Node.js requirements and package versions.
- TypeScript extends `astro/tsconfigs/strict` in `tsconfig.json`.
- Content storage, deployment, testing, and linting tools remain undecided. The MDX integration does not imply an agreed content workflow.

## Decision and Implementation Principles

- Distinguish explicit user direction from AI proposals. Silence does not turn a proposal into an approved decision.
- When documentation differs from implementation, inspect the actual files and configuration and explain the discrepancy.
- Check existing code and requirements before choosing unresolved technologies or features. Discuss significant scope changes with the user.
- Prioritize reading and navigation in the initial version. Do not preemptively add graph or AI features, servers, databases, or administration systems that are not currently needed.
- Inspect actual Figma screens or original design references before implementing designs. Do not infer colors, typography, or spacing from planning documents alone.
- Follow the existing style of each edited file. Keep unrelated refactoring and whole-file formatting out of the requested change.

## Development and Verification

Run commands from the repository root. Check the current scripts in `package.json` before executing them.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from the lock file |
| `npm run dev -- --background` | Start the development server in background mode |
| `npm run astro -- dev status` | Check development server status |
| `npm run astro -- dev logs` | Read development server logs |
| `npm run astro -- dev stop` | Stop the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the build output |

- For code or configuration changes, run the build and verification appropriate to the changed behavior. Check UI changes in a browser.
- Test, lint, format-check scripts, and automated pre-commit checks are not currently configured. Do not run nonexistent commands or report a successful build as passing tests or a separate type check.
- For documentation changes, review the content and referenced paths and run `git diff --check`.
- Report what changed, which checks ran, and anything that could not be verified.
- Do not commit secrets or generated directories such as `node_modules/`, `dist/`, and `.astro/`.

## Documentation Maintenance

- Record agreed major decisions and their reasons in `docs/decisions.md`. Do not treat routine edits or every work item as a decision.
- Distinguish user-confirmed decisions from implementation facts observed in the repository. Do not invent reasons for choices.
- Update `docs/features.md` when feature scope changes. Mark proposals, confirmed decisions, and revisions clearly, and explain changes to earlier decisions.
- Document frameworks, packages, and deployment environments after verifying the actual choices and configuration.
- Include any related documentation updated as part of the request in the completion report.

## Official Astro Documentation

Use the [official Astro documentation](https://docs.astro.build) to verify implementation guidance. Consult the relevant guides when working on these topics:

- [Pages, routing, and middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [React and other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
