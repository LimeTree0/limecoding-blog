# Blog Design Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply the supplied Figma design to the existing Astro blog and commit independently reviewable changes.

**Architecture:** Keep Astro layouts, scoped CSS, and the existing posts collection. Render real MDX data, reuse the current header/layout, and download the original Figma SVG assets. Add browser JavaScript only for interactions such as code copying.

**Tech Stack:** Existing Astro, MDX, TypeScript, CSS; no new application framework.

**Spec:** Figma `ZIOm3EmlKgInZAW7jZlJZn`, page `3:55`; desktop home `11:116`, article `11:299`, mobile home `11:366`, mobile article `14:369`. The user requested shared styles, header/home, then article styling, with search and graph implementation deferred.

## Global Constraints

- Preserve the user's existing home-page work and both MDX articles.
- Work on the existing `feat/blog-design` branch and make Korean Conventional Commits.
- Use the Figma palette, Noto Sans KR, Noto Serif KR, and JetBrains Mono.
- Keep design illustration assets local and unchanged. Never use full-screen screenshots as implementation assets.
- Use actual post metadata instead of fictional titles, dates, counts, or reading times.
- Search and graph remain deferred; unavailable actions must not lead to broken routes.

## Review Focus

- Long Korean titles and code lines must not cause page overflow at 390px or 320px.
- Draft posts must remain excluded from lists and generated routes.
- Table-of-contents links must target rendered MDX heading IDs.
- Code copying must preserve whitespace and report clipboard failures honestly.
- Local illustrations must load at the correct design positions and fonts must load successfully.

## Task 1: Shared presentation

- [x] Update `src/styles/global.css`, `src/components/SiteHeader.astro`, and `src/layouts/BaseLayout.astro`; add a shared footer.
- [x] Use design tokens for palette, content widths, typography and spacing; retain keyboard focus and add a skip link.
- [x] Verify build, font loading, header/footer, and narrow-screen layout.
- [x] Commit: `feat: Figma 공통 스타일과 헤더 푸터 적용`.

## Task 2: Home and article listing

- [x] Implement original hero artwork, reusable post list items, and the responsive home layout using real posts.
- [x] Connect article navigation and topic links to a real article index; retain the existing title, tags, summary and date data.
- [x] Adapt the reading-path slot to the two existing linked articles, with working links. Keep graph/search explicitly unavailable.
- [x] Verify local assets, mobile/desktop appearance, and all post links; build and commit: `feat(home): 시안 기반 홈과 글 목록 구현`.

## Task 3: Article reading

- [x] Style `src/pages/posts/[...id].astro` and MDX typography, tables, blockquotes, images, and code blocks.
- [x] Render a sticky desktop TOC and a mobile contents panel from MDX headings; implement accessible code-copy feedback.
- [x] Verify both articles, heading navigation, code copying, clipboard rejection, image layout and overflow; build.
- [x] Update scope/decision records to match the user's confirmed order; commit: `feat(post): 글 상세 스타일과 목차 코드 복사 구현`.

## Progress

- Baseline build: passed, 3 static pages. Existing home diff saved locally before editing.
- User declined Code Connect mapping; existing Astro components will be adapted directly.
- Task 1 complete: build and browser checks passed at 1440, 390 and 320px; Google Fonts loaded. Commit `09e9979`.
- Task 2 verification: article index initially returned 404 (expected failing check); now index, topic filter and browser Back pass. Home verified at 1440, 768, 390 and 320px, all seven visible illustration layers load with design geometry.
- Scope adaptation: real sample posts replace Figma example text; search/graph controls are disabled and labeled as pending. The intro link targets the existing home introduction. The reading-path card follows the two existing linked MDX articles.

- Task 2 complete: commit `97b10a1`; real MDX titles/tags/dates and original illustration assets retained.
- Task 3 complete: build generates four static pages; both articles checked at 1440, 768, 390 and 320px. Heading targets, real clipboard copying, rejected clipboard feedback, horizontal code scrolling, large image containment and no-JavaScript reading passed against the production preview.
- Final review: independent source review identified small-text contrast and mobile TOC DOM order. Browser reproduction showed 3.80:1 / incorrect order before correction, and 4.71:1 / correct order afterward. Both fixed; full home/article browser checks rerun successfully.
- Final visual comparison: desktop/mobile screenshots inspected against Figma; actual article content changes page heights. All three font families loaded. No search or graph implementation, no remote publication.
- Verification uses temporary Playwright tooling under ignored `node_modules/.cache/`; no application dependencies were added. Browser checks were run with Microsoft Edge; other browser engines were not checked.
