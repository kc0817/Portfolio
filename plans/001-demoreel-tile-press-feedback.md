# 001 — Add press feedback to DemoReel division tiles

- **Status**: TODO
- **Commit**: 9922a7d
- **Severity**: MEDIUM
- **Category**: Missed opportunity (Physicality & origin / Purpose & frequency)
- **Estimated scope**: 1 file, ~5 lines of CSS

## Problem

The four division tiles in the home page's "Project Overview" section are the
page's primary calls to action, but they have no `:active` state anywhere —
in fact no element in this codebase has a `:active` state (repo-wide grep for
`:active` returns zero matches). Feedback is `:hover`/`:focus-visible` only,
which never fires on touch, so tapping a tile on a phone gives no visual
confirmation the press registered before the page navigates.

Current code, `src/components/DemoReel.astro:82-99`:

```css
/* src/components/DemoReel.astro:82 — current */
.tile {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: flex-end;
  border-radius: var(--radius-lg);
  overflow: hidden;
  padding: clamp(var(--s-5), 3vw, var(--s-7));
  min-height: 14rem;
  color: var(--ink-inverse);
  text-decoration: none;
  box-shadow: var(--shadow-lg);
  border-top: 3px solid var(--accent-blue-light);
  background: var(--ground-inverse);
  transition:
    transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-fast) var(--ease-out);
}
```

```css
/* src/components/DemoReel.astro:126 — current */
.tile:hover,
.tile:focus-visible {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md), 0 0 0 1px color-mix(in srgb, var(--accent-blue-light) 45%, transparent);
}
```

There is no `.tile:active` rule at all.

## Target

Add a press state that scales the tile down slightly on `:active`, using the
`transition` already declared on `.tile` (no new transition property needed —
`transform` is already listed there at `var(--dur-fast)` / `var(--ease-out)`,
which is 140ms / `cubic-bezier(0.16, 1, 0.3, 1)` — inside the
100–160ms press-feedback budget from `AUDIT.md`).

```css
/* target — insert immediately after the existing .tile:hover, .tile:focus-visible rule */
.tile:active {
  transform: scale(0.97);
}
```

Because `.tile:hover` sets `translateY(-2px)` and `:active` sets `scale(0.97)`,
a mouse user who presses while hovering needs both effects to combine rather
than one clobbering the other. Use this combined rule instead of a bare
`.tile:active`:

```css
/* target — final form */
.tile:hover,
.tile:focus-visible {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md), 0 0 0 1px color-mix(in srgb, var(--accent-blue-light) 45%, transparent);
}

.tile:active {
  transform: translateY(-2px) scale(0.97);
}
```

This way: hover alone lifts, press-while-hovering lifts and compresses, and a
touch tap (no hover) goes straight from resting to `scale(0.97)` — still a
visible press cue with no lift, since touch never fires `:hover`.

## Repo conventions to follow

- Duration/easing tokens live in `src/styles/tokens.css:114-118`: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`, `--dur-fast: 140ms`. Do not invent a new token — reuse these, which the `.tile` transition already references.
- Scale-based press feedback exemplar: none exists yet in this repo (this is the first `:active` rule) — the value (`0.97`) and property (`transform` only, no new transition) come directly from `AUDIT.md`'s press-feedback guidance: "`transform: scale(0.97)` on `:active` with `transition: transform 160ms ease-out`. Keep it subtle (0.95–0.98)." This repo's existing `--dur-fast` (140ms) is close enough to stay inside that budget without introducing a parallel duration value.
- `src/components/DemoReel.astro:171-178` (`.tile__cta svg` hover nudge) is the repo's existing pattern for scoping a new interactive rule right next to the state rule it extends — follow that placement: put `.tile:active` directly after `.tile:hover, .tile:focus-visible`.

## Steps

1. In `src/components/DemoReel.astro`, locate the existing rule at line 126:
   ```css
   .tile:hover,
   .tile:focus-visible {
     transform: translateY(-2px);
     box-shadow: var(--shadow-md), 0 0 0 1px color-mix(in srgb, var(--accent-blue-light) 45%, transparent);
   }
   ```
2. Immediately after that rule's closing `}` (before the `.tile:focus-visible { outline-color: ... }` rule that currently follows it), insert:
   ```css
   .tile:active {
     transform: translateY(-2px) scale(0.97);
   }
   ```
3. Do not add a new `transition` declaration — `.tile` already transitions `transform` at `var(--dur-fast) var(--ease-out)` (line 96-98), which covers this new state automatically.

## Boundaries

- Do NOT touch any other component (`ProjectCard.astro`, `SiteHeader.astro`, `SiteFooter.astro`) — this plan is scoped to `DemoReel.astro` only, even though the same `:active` gap exists elsewhere in the codebase.
- Do NOT change markup/structure — this is a pure CSS addition.
- Do NOT add a new duration or easing token; reuse `var(--dur-fast)` / `var(--ease-out)` via the existing `.tile` transition.
- Do NOT modify the `.tile:hover, .tile:focus-visible` rule's box-shadow behavior — only add the new `:active` rule after it.
- If `src/components/DemoReel.astro:82-131` doesn't match the code excerpts above (drift since commit `9922a7d`), STOP and report instead of improvising.

## Verification

- **Mechanical**: run `npm run build` (or the project's configured build command) and confirm it completes with no errors. This is a static Astro site — no runtime typecheck is required for a CSS-only change, but confirm no CSS syntax errors are reported.
- **Feel check**: open the home page, scroll to the "Project Overview" grid, and:
  - Click and hold on a tile with a mouse: it should lift (`translateY(-2px)`) on hover, then visibly compress (`scale(0.97)`) the moment the mouse button goes down, without the lift disappearing.
  - On a touch device (or Chrome DevTools device toolbar with touch emulation), tap and hold a tile: it should compress to `scale(0.97)` with no lift, since `:hover` never fires on touch.
  - In DevTools' Animations/Rendering panel, throttle or slow-motion the interaction and confirm the compress/release both animate over roughly 140ms with an ease-out curve — no instant snap, no overshoot.
  - Toggle `prefers-reduced-motion` (DevTools Rendering panel → "Emulate CSS media feature prefers-reduced-motion: reduce") and confirm the `:active` scale is suppressed per the site's global reduced-motion reset (`global.css:22-33` forces `transition-duration: 0.01ms !important` site-wide) — this is expected and correct, since press feedback is a `transform` transition like any other on this site and isn't one of the site's explicitly-carved-out exceptions (`.hero__hello`/`.hero__name`).
- **Done when**: `.tile:active { transform: translateY(-2px) scale(0.97); }` exists in `src/components/DemoReel.astro` immediately after the existing `.tile:hover, .tile:focus-visible` rule, no new transition/duration/easing values were introduced, and the feel-check steps above pass on both mouse and touch input.
