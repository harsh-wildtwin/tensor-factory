# Styles Guide

This directory defines the design system for Tensor Factory's website using vanilla CSS with design tokens.

Contents:
- `tokens.css`: CSS variables for colors, spacing, typography, radii, shadows, sizing.
- `base.css`: reset, typography, accessibility utilities (`.sr-only`, `.skip-link`, `.focus-ring`), layout helpers (`.stack`, `.cluster`, `.grid`).
- `components.css`: buttons, cards, section headers, header/footer primitives, alerts.

Usage:
- Include `base.css` and `components.css` in pages; they import `tokens.css`.
- Compose with utilities: `.container`, `.grid`, `.grid-2`, `.cluster`, `.stack`.
- Buttons: `.btn .btn-primary` or `.btn .btn-secondary`.
- Cards: wrap content in `.card` with optional heading/paragraph.

Accessibility:
- Use `.skip-link` as the first focusable element linking to `#content`.
- Prefer `:focus-visible` for focus styling; `.focus-ring` available if needed.
- Maintain color contrast ≥ 4.5:1 for text and interactive elements.

Performance:
- Keep CSS changes minimal; aim total gzip ≤ 35KB. Critical CSS can be inlined at build.

Notes:
- Accent color is `--color-accent-600` (`#2563eb`). If brand adjusts, update tokens only.
- External links should include `rel="noopener"`.

## Contrast Guide (AA targets)
- Text on white (`--color-bg`):
  - Body: `--color-text` (`--color-neutral-900`) — AA ✅
  - Muted: `--color-text-muted` (`--color-neutral-600`) — AA ✅
  - Links: `--color-accent-600` on white — AA ✅
- Buttons:
  - Primary: white text on `--color-accent-600` — AA ✅ (hover: `--color-accent-700`)
- Borders: `--color-border` on white — for dividers/UI chrome (not text), acceptable.

If adding new colors, verify contrast ≥ 4.5:1 for normal text and ≥ 3:1 for large text.


