# EINS System — Design System

EINS System (아인스 시스템) is a B2B/B2C hardware-distribution brand. Its web presence is an **information-first marketing & catalog site for desktop processors (CPUs)**: technical-spec-driven product comparison, recommended-PC build guides, and purchase guidance. The tone harmonizes with Intel-style official tech branding while reading as a trustworthy Korean B2B information site — readability of spec data and comparison tables comes first; decoration is minimized.

> "EINS" = German for *one* — the brand positions itself as the single trusted source for processor selection. The wordmark pairs a `1` glyph with the EINS logotype.

## Source material

This design system was built **from a written brand brief only** — no codebase, Figma file, or existing assets were attached. All tokens, components, copy, and the logotype are original interpretations of the brief. If you have the real brand kit (logo files, fonts, product photography, existing site code/Figma), share it and this system can be repointed to the genuine assets.

**Open items flagged to the user** (see CAVEATS at the bottom of the work summary):
- Fonts are loaded from CDN, not self-hosted (Pretendard + JetBrains Mono).
- The EINS wordmark is an original placeholder logotype, not a supplied brand logo.
- Iconography uses Lucide (CDN) as a substitute for an unknown house icon set.

---

## CONTENT FUNDAMENTALS

**Language.** Korean-first (`ko`), with English used as accent typography. Body copy, labels, product names, and CTAs are Korean. English appears only as **uppercase, wide-tracked display labels** — eyebrows and tier badges (`PERFORMANCE REDEFINED`, `DESKTOP PROCESSOR CATALOG`, `PERFORMANCE FLAGSHIP`, `VALUE PERFORMANCE`).

**Voice & person.** Informational and confident, not chatty. Addresses the reader with polite Korean imperatives/declaratives (해요체/합쇼체 mix leaning formal): "…선택하세요", "…제공합니다". No first-person "we" marketing fluff; the product and the numbers do the talking. No exclamation-heavy hype.

**Casing.** Korean runs in natural case. English display text is **ALL CAPS with wide tracking** (0.14–0.22em). Model/SKU codes are uppercase mono (`BX80684I9285K`). Units stay lowercase/standard (`GHz`, `MHz`, `W`, `MB`).

**Numbers are the hero.** Spec figures get oversized, black-weight, tabular treatment: `900MHz`, `+4`, `15%↑`, `5.7 GHz`. Deltas use `↑`/`↓` arrows and are color-coded (green gain / red loss). Prices are bold (`₩689,000`).

**Visual shorthand allowed:** star ratings `★★★★☆`, recommendation arrows `→`, the "추천 PC #1" rank tag, and the `★ 추천` marker on comparison columns. Keep symbols terse and functional.

**Emoji:** none. The brand does not use emoji. Use Lucide line icons or the approved unicode symbols (★ → ↑ ↓ ·) instead.

**Sample copy.**
- Eyebrow: `PERFORMANCE REDEFINED`
- Headline: `성능의 재정의`
- Lead: `최신 공정과 하이브리드 아키텍처로 게이밍부터 콘텐츠 제작까지, 모든 작업에서 한 단계 높은 성능을 제공합니다.`
- Tag: `추천 PC #1`
- CTA: `제품 보기 →` / `견적 보기 →` / `비교하기`
- Disclaimer: `※ 가격 및 사양은 공급사 사정에 따라 변동될 수 있습니다.`

---

## VISUAL FOUNDATIONS

**Overall vibe.** Dark, premium, technical. Deep navy canvas with electric cyan accents — a "spec sheet that feels engineered." High contrast between heavy large Korean titles and light clean body text.

**Color.**
- Base is a deep-navy scale (`#060f1f` → `#0a1628` page → `#0d2137` panel → `#122a45` section bar). The hero uses a navy→teal diagonal gradient (`--grad-hero`).
- Accent is cyan/teal: `#00bcd4` (primary), `#4dd0e1` (soft), `#00e5ff` (bright highlight for tags & key figures), `#0097a7` (pressed).
- Two text worlds: white (`#ffffff`) + muted blue-greys on dark; near-black navy (`#0f1d30`) + greys on white cards.
- Status: success `#2ecf8f`, warning `#ffb300`, danger `#ff5a5f`, star `#ffc24b`. Used sparingly.

**Typography.** Pretendard for everything Korean + Latin (Light 300 → Black 900). JetBrains Mono for spec values, SKU codes, and tabular numerics. Strong weight contrast: display/headings are ExtraBold/Black; body is Regular/Light. English display is uppercase + tracked. See `tokens/typography.css`.

**Spacing & layout.** 4px base grid. Content max-width ~1240px with 32px gutters. **Product cards live in a 3-column grid** (`--grid-cols: 3`, 24px gap). Generous section rhythm (~96px). Comparison data is tabular and dense — readability over whitespace there.

**Backgrounds.** Solid deep navy by default; the hero and feature bands use the navy→teal gradient. No photography or hand-drawn illustration is assumed (none supplied). Decorative texture is minimal — at most a faint radial cyan glow behind hero numbers. Avoid busy patterns.

**Cards (two styles).**
1. **White card** — white background, `--radius-md` (12px) corners, 1px `#d4dee8` border, soft neutral shadow (`--shadow-card`), dark text. For products & spec info.
2. **Dark navy panel / badge** — navy gradient fill, 1px navy border, white text, optional cyan glow (`--glow-accent`) when featured/recommended. For tier badges & highlighted builds.

**Borders & dividers.** Hairline 1px. On dark, `#1b3a5c`; on light, `#d4dee8`. Section headers carry a 3px cyan **left edge** as the signature accent. Spec rows are separated by hairline bottom borders.

**Shadows vs glows.** Light cards get a soft, cool-toned drop shadow. The dark world uses **cyan glow** instead of shadow — `--glow-accent` (ring + soft bloom) marks the featured/recommended item. Don't mix heavy shadows into the dark theme.

**Corner radii.** Buttons/badges 8px, cards 12px, large panels 16px, pill tags 999px, tier badges a tight 4px (more "industrial" feel).

**Motion.** Restrained and quick. Hover = 1px–4px lift + shadow/glow intensify, 200ms `ease-out`. Press = settle back / slight darken. No bouncing, no infinite decorative loops. Respect `prefers-reduced-motion`.

**Hover / press states.**
- Primary button: hover lightens cyan to `--accent-soft` + lifts 1px; nothing garish.
- Cards: hover lifts 4px, shadow→hover-shadow (light) or soft glow (dark), border→cyan (dark).
- Links/ghost: hover raises translucent white fill.

**Transparency & blur.** Used lightly — translucent white fills for ghost buttons (`rgba(255,255,255,0.06–0.12)`), translucent cyan for soft tags. No heavy glassmorphism.

**Imagery color vibe (when added).** Cool, dark, high-contrast tech imagery (silicon, heatsinks, blue-lit hardware) would fit. Keep it cool-toned to sit with the navy/cyan palette; avoid warm or pastel imagery.

---

## ICONOGRAPHY

No house icon set was supplied, so the system standardizes on **[Lucide](https://lucide.dev) (CDN)** — clean 1.5–2px stroke line icons that match the precise, technical aesthetic. *(Flagged substitution — replace with the brand's real icon set if one exists.)*

- **Approach:** line (stroke) icons, not filled. Cyan or white on dark; navy/grey on light. Keep stroke weight consistent (~2px) and sizes on the 4px grid (16/20/24).
- **Load:** `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or use inline `<i data-lucide="cpu"></i>`. Common glyphs: `cpu`, `zap`, `gauge`, `layers`, `git-compare`, `shopping-cart`, `chevron-right`, `star`.
- **Unicode symbols** are part of the visual language and used directly (not as a font): `★ ☆` (ratings), `→` (recommendation/CTA arrows), `↑ ↓` (spec deltas), `·` (meta separators).
- **Emoji:** never.
- **Logo:** the EINS wordmark (`1` glyph + `EINS.` logotype) is a CSS/text treatment — see `guidelines/brand-logo.card.html`. No raster logo file is shipped.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry; `@import`s all tokens & fonts. Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downstream use.

**`tokens/`** — `fonts.css` (@font-face: Pretendard, JetBrains Mono), `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`components/core/`** — Button, Badge, Tag, Eyebrow, StatNumber, StarRating, SectionHeader, Card, SpecRow. Card: `core.card.html`.

**`components/product/`** — ProductCard, RecommendationCard, ComparisonTable. Card: `product.card.html`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/website/`** — high-fidelity recreation of the EINS catalog site (homepage hero, catalog grid, comparison, build guide). Entry: `index.html`.

Namespace for mounting components in card/kit HTML: `window.EINSSystemDesignSystem_7f67d2`.
