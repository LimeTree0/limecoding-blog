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

- [ ] Update `src/styles/global.css`, `src/components/SiteHeader.astro`, and `src/layouts/BaseLayout.astro`; add a shared footer.
- [ ] Use design tokens for palette, content widths, typography and spacing; retain keyboard focus and add a skip link.
- [ ] Verify build, font loading, header/footer, and narrow-screen layout.
- [ ] Commit: `feat: Figma 공통 스타일과 헤더 푸터 적용`.

## Task 2: Home and article listing

- [ ] Implement original hero artwork, reusable post list items, and the responsive home layout using real posts.
- [ ] Connect article navigation and topic links to a real article index; retain the existing title, tags, summary and date data.
- [ ] Adapt the reading-path slot to the two existing linked articles, with working links. Keep graph/search explicitly unavailable.
- [ ] Verify local assets, mobile/desktop appearance, and all post links; build and commit: `feat(home): 시안 기반 홈과 글 목록 구현`.

## Task 3: Article reading

- [ ] Style `src/pages/posts/[...id].astro` and MDX typography, tables, blockquotes, images, and code blocks.
- [ ] Render a sticky desktop TOC and a mobile contents panel from MDX headings; implement accessible code-copy feedback.
- [ ] Verify both articles, heading navigation, code copying, clipboard rejection, image layout and overflow; build.
- [ ] Update scope/decision records to match the user's confirmed order; commit: `feat(post): 글 상세 스타일과 목차 코드 복사 구현`.

## Progress

- Baseline build: passed, 3 static pages. Existing home diff saved locally before editing.
- User declined Code Connect mapping; existing Astro components will be adapted directly.
