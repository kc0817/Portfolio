---
name: Kevin Chen Portfolio
description: A light, typographically-led record of engineering projects across robotics, mathematics, research, and games.
colors:
  ground: "#f6f5f3"
  ground-raised: "#ffffff"
  ground-sunken: "#ece9e6"
  ground-inverse: "#25395a"
  ink: "#16181c"
  ink-secondary: "#4e5259"
  ink-tertiary: "#6d7178"
  ink-inverse: "#f7f7f6"
  rule: "#e2e2df"
  rule-strong: "#cbcbc6"
  accent-navy: "#25395a"
  accent-navy-deep: "#16233a"
  accent-orange: "#d9762f"
  accent-orange-deep: "#a8531f"
  link: "#25395a"
  link-hover: "#16233a"
  division-robotics: "#b03b2e"
  division-research: "#2f5f8f"
  division-math: "#6a5192"
  division-games: "#2d7a5f"
typography:
  display:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw + 1.25rem, 5.5rem)"
    fontWeight: 680
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 3.6vw + 1.4rem, 3.75rem)"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "-0.038em"
  title:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1vw + 1.1rem, 1.75rem)"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4rem"
  s-9: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.ground-inverse}"
    textColor: "{colors.ink-inverse}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  card-selector:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.md}"
    padding: "1rem"
  aside-annotation:
    backgroundColor: "{colors.ground-sunken}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
---

# Design System: Kevin Chen Portfolio

## Overview

**Creative North Star: "The Working Notebook"**

This is the record an engineer keeps while building: ruled entries, real
measurements, annotations in the margin where something needs saying. It is not a
gallery and not a brochure. The reader is usually skimming — a recruiter with a
minute, a faculty member reading harder — so the page's job is to let evidence be
found fast and then reward someone who slows down.

The system is light by decision rather than by convention. Its use scene is a
phone in an office and a laptop at a desk, both under room light, both reading
rather than monitoring; a dark ground would have served neither. Division pages
lead with a photo-forward card grid — the work is largely still uncaptured on
camera, so the media slot is designed to be honest and complete before a single
photo lands, and to improve the moment one does. Two
accents carry the identity: a deep navy that does the structural work — links,
focus, the primary action, the reel stage — and a burnt orange that only ever
marks, the way the old material role did: a rule above a lede, the underline on
an active link outside a division, the border on an annotation, the result that
has been verified.

The home page is deliberately short — a greeting, then the four divisions. It
carries no descriptor line, no credential row, no thesis statement, and no
selected-work list, because Kevin's instruction was that the work should do the
introducing. Claims live on the project pages, attached to what earned them.

Four division hues exist for wayfinding in the site's chrome — the nav, the
404 page — tinting a mark or a small border, never a filled region. A
division's own page commits to one of the two core accents instead, per the
One-Accent-Per-Division-Page Rule.

The notebook is literal in three places and nowhere else: the page sits on
graph-paper stock that fades out as you scroll into long reading; line figures
sketched in the margins are worked-out problems rather than decoration; and an
orange-topped annotation block carries contribution scope the way a margin note
would. What the system deliberately does not take from the notebook is
untidiness — nothing is skewed, torn, taped, or set in a handwriting face.

**Benchmark.** The craft bar is `lucas-boyle.com` and `stevenf7.github.io`. One
behaviour is a deliberate divergence: the first ships its content at zero opacity
until a scroll-reveal fires, so a visitor who lands and does not scroll sees a
blank page. Here, motion never gates content — the settle animation floors at
0.55 opacity, is applied only by script, and is skipped under reduced motion.

**Key Characteristics:**

- Light ground, near-black ink, cool neutral rules; no dark mode
- Ruled lists as the primary structure; cards only as selectors
- One spacing rhythm across every surface, more space above a heading than below
- Navy carries structure; orange is material, never type
- Monospace strictly for real data — years, languages, ranks, counts
- Graph-paper stock beneath everything, masked away before it can disturb reading
- Marginal line figures drawn from Kevin's own problems, never stock engineering art
- Every media-bearing surface is designed to be complete with no media present
- Motion never hides content, on any surface, for any duration

## Colors

A neutral, near-white reading surface — no warm cream, no off-white with a
yellow cast — carrying two accents: a structural navy and a material orange.
Four muted hues remain for wayfinding only.

### Primary

- **Navy** (`#25395a`): the structural accent. Every interactive link, the
  focus ring, the primary button fill (the live-demo call to action), and the
  demo reel stage's ground all resolve to this one colour. 10.6:1 on ground —
  safe at any text size.
- **Navy Deep** (`#16233a`): the hover/pressed state for anything navy.

### Secondary

- **Orange** (`#d9762f`): the material accent, used only as a rule, a border,
  or a highlight — never as type. It rules above the About lede, borders the
  contribution annotation, marks the active nav underline outside a division,
  and carries the text selection highlight. It cannot hold 4.5:1 against
  ground at type sizes, which is why it never sets type directly.
- **Orange Deep** (`#a8531f`): the type-safe orange, reserved for verified
  competitive results (`#1 in RP after World Championship`) and the underline
  that appears when a contact link is hovered. 4.9:1 on ground.

### Tertiary

The four division hues. Site chrome outside a division's own page still uses
them — the nav's active-division mark, the 404 page's list of divisions — as
a hover mark or a small border. Neither the home page's Division Grid (Navy
and Orange only, so the core identity reads before a division is chosen) nor
a division's own page (which commits to one accent per the
One-Accent-Per-Division-Page Rule below) uses them anymore.

- **Competition Red** (`#b03b2e`): Robotics
- **Measured Blue** (`#2f5f8f`): Research
- **Derivation Violet** (`#6a5192`): Math Explorations
- **Playfield Green** (`#2d7a5f`): Games

### Neutral

- **Ground** (`#f6f5f3`): the page ground for every surface. Neutral, not warm
  — no cream, no off-white with a yellow cast.
- **Raised White** (`#ffffff`): selector cards and buttons sitting above the page.
- **Sunken** (`#ece9e6`): tonal bands that separate sections — the
  contribution annotation, gallery placeholder slots, the footer — doing the
  work a border would otherwise do.
- **Ink** (`#16181c`): all primary text. Stays black across the whole system;
  it does not shift toward either accent. 15.8:1 on ground.
- **Secondary Ink** (`#4e5259`): supporting prose and summaries. 7.9:1.
- **Tertiary Ink** (`#6d7178`): labels and metadata. 5.1:1 — the floor, and the
  reason nothing lighter is permitted at body size.
- **Rule** (`#e2e2df`) and **Strong Rule** (`#cbcbc6`): hairlines between list
  entries, and the visible border on interactive surfaces.

### Named Rules

**The Orange-Is-Material Rule.** Orange is a rule, a border, or a highlight —
never a letterform. At the sizes this system sets type, `#d9762f` cannot hold
4.5:1 against ground, so if orange text is wanted the answer is Orange Deep or a
different idea.

**The Wayfinding-Only Rule.** A division hue may tint a rule, a marker, a border,
or a small label at full strength. It may also tint a card's background or media
area as a faint wash — 5–8% mixed into a neutral, the same treatment a selected
selector card already used — but never past that into a saturated or opaque
fill. If a surface needs a ground that is not neutral and no division applies,
it uses a tonal neutral instead.

**The Navy-Means-Clickable Rule.** Navy appears on interactive text, focus, and
the primary action, and nothing else. No decorative use, ever.

**The One-Accent-Per-Division-Page Rule.** The home page is the one surface
that mixes both accents. Every division page, and every project page within
it, commits to exactly one: Robotics is orange-only, Research is blue-only
(navy), Math Explorations is orange-only, Games is blue-only (navy). None of
the four uses its own tertiary division hue for this within its own page —
that hue is now confined to site chrome outside the page itself (the nav's
active-division mark, the 404 page's list of divisions). Within a division's
page, `--cat` is set once, to that division's committed accent, and
everything that used to read the tertiary hue there (a project card's border,
the credentials list, the contribution annotation's border) reads `--cat`
instead. `PAGE_ACCENT` in `lib/site.ts` is the one place this assignment
lives; `accentVars()` next to it sets both `--cat` and its type-safe partner
`--cat-deep` together.

## Typography

**Display Font:** Archivo Variable (with system-ui, sans-serif)
**Body Font:** Archivo Variable
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, monospace)

**Character:** One grotesque doing everything, tightened hard at display sizes
and left alone at reading sizes, against a mono used only where a value is being
reported. The pairing is plain on purpose: the work is the interesting thing, and
a display face with opinions would be competing with a state championship.

### Hierarchy

- **Display** (680, `clamp(2.75rem, 6vw + 1.25rem, 5.5rem)`, 0.95, -0.04em):
  the name in the hero and division titles. One per page.
- **Headline** (620, `clamp(2.25rem, 3.6vw + 1.4rem, 3.75rem)`, -0.038em):
  project titles.
- **Title** (620, `clamp(1.375rem, 1vw + 1.1rem, 1.75rem)`, -0.018em): section
  headings and list entry titles.
- **Body** (400, 1.0625rem, 1.62): all prose. Measure held to 68ch; summaries to
  62ch; footer and empty-state copy to roughly 34–52ch.
- **Label** (500, 0.75rem, 0.08em, uppercase, mono): years, languages, ranks,
  counts, division names, field labels.

### Named Rules

**The Mono-Means-Measured Rule.** JetBrains Mono appears only where a real value
is reported — a year, a language, a rank, a project count, a field label. It is
never a texture for "technical". If a mono label has no value behind it, it
should be body text.

**The No-Eyebrow Rule.** No kicker or eyebrow line above a heading. Headings
carry their own weight. The one exception in the build is a division name that is
also a working link back to that division — a destination, not a decoration.

## Layout

A single `78rem` page container with a fluid gutter (`clamp(1.25rem, 5vw, 3rem)`),
and a `42rem` prose container for reading-only pages. Long-form bodies cap at
`68rem` with a `15rem` metadata rail that becomes sticky at `58rem` and above,
separated by a hairline rather than a panel.

Section rhythm is one fluid value, `clamp(3.5rem, 7vw, 7rem)`, used for every
major vertical break so the whole site breathes at one rate. Spacing steps run
`0.25rem` to `6rem`. Headings always take more space above than below.

Breakpoints are content-driven rather than device-driven: `22rem` (drop the
wordmark's subtitle), `32rem` (the header becomes two rows), `36rem` (the
home-page division grid becomes two columns), `40rem` (robotics' curated pair
and trio rows go from stacked to side by side; the generic project grid has no
fixed breakpoint of its own, since `auto-fill` reflows continuously), `46rem`
(neighbour links pair up), `58rem` (long-form gains its sticky rail). One
header-height token, `--header-h`, drives the sticky bar, the photo hero's
overlap, and anchor scroll offset together — it is never written as a literal.

**The One-Rhythm Rule.** Every section break uses `--section-y`. A surface that
needs to feel tighter or looser adjusts its internal padding, not the section
rhythm.

## Elevation & Depth

Predominantly tonal. Separation comes from `#ece9e6` bands and hairline rules;
shadow is reserved for surfaces that genuinely sit above the page and for
response to state. Every shadow carries both an offset and a blur, and is tinted
from the ink rather than pure black, so raised things sit on the paper instead of
glowing off it.

### Shadow Vocabulary

- **Resting** (`0 1px 2px rgba(22,24,28,.06), 0 1px 1px rgba(22,24,28,.04)`):
  a selector card or button that has been hovered or selected.
- **Lifted** (`0 4px 12px rgba(22,24,28,.07), 0 1px 3px rgba(22,24,28,.05)`):
  the primary button on hover, and the skip link when focused.
- **Stage** (`0 12px 32px rgba(22,24,28,.1), 0 3px 8px rgba(22,24,28,.05)`):
  the demo reel stage only — the one element that is genuinely a screen.

**The Flat-At-Rest Rule.** Surfaces are flat until something happens to them.
The reel stage is the single exception, because it is a display.

**The Never-Hide-Content Rule.** No animation may start from `opacity: 0`, and no
content may depend on script or scroll to become readable. The `settle` entry
animation floors at 0.55 opacity, is applied only by JavaScript, is never applied
to the first section on screen, and does nothing under `prefers-reduced-motion`.

## Shapes

Small radii throughout: 3px for inline targets, 6px for cards, buttons, and
annotations, 10px for the reel stage and full-bleed imagery. Nothing is pill-
shaped and nothing is a circle. Borders are 1px hairlines; the only heavier
strokes in the system are the 3px division rule at the top of a section head and
the 2–3px orange rule above a lede or annotation, both of which are structural marks rather
than decoration.

## Components

### Buttons

- **Shape:** gently rounded (6px), never pill.
- **Primary:** navy ground (`#25395a`), inverse text, `0.75rem 1.5rem`. One per
  page head, always the live demo.
- **Secondary:** raised white on a strong-rule border, ink text, same padding.
- **Hover / Focus:** border darkens to tertiary ink, Lifted shadow, a 1px rise.
  Focus is a 2px Navy ring at 2px offset.

### Cards / Containers

Two card shapes, at two radii. Selectors are the smaller, inline shape; the
project card is the one place a card is page structure.

- **Selector card — Corner Style:** 6px. **Background:** raised white.
  **Border:** 1px rule. **Selected:** border and background tint from the
  division hue (5% mix), ink-strength title, Resting shadow.
- **Project card — Corner Style:** 10px, matching the reel/division-grid
  tiles. **Border:** 1px rule, 3px top border in the page's committed accent
  (`--cat`). **Media area:** 4:3, graph-paper with a 7% `--cat` wash when no
  poster is set. **Hover:** border and title tint from `--cat`, Lifted
  shadow, a 2px rise.
- **Internal Padding:** `1rem` for selectors, `1.5rem` for annotations and
  neighbour links, `1.5rem` for a project card's text block below its photo.

### Navigation

Small (0.8125rem), 520-weight, secondary ink. The active and hovered state is a
2px underline that scales out from the left over 260ms — orange on pages without
a division, the division hue on pages with one. Two rows below `32rem`, with all
five destinations visible; there is no drawer.

### Page Intro (signature)

The first thing on every division page and every project page: a contained
photo — `MediaSlot`, never full-bleed, capped around `46rem` and centred, so
it reads as a framed picture rather than another hero — then the title, then
an Overview section holding one paragraph (the division's `blurb` or the
project's `summary`; nothing new is invented for it). The Overview paragraph
itself runs the full row width, unconstrained by a prose measure, unlike the
photo above it. A division page's title is just the division name; a project
page's title carries a small division-name eyebrow above it, linking back to
that division — the one eyebrow the system permits, because it is a working
destination, not decoration. With no photo set, `MediaSlot` falls back to the
same graph-paper-and-`--cat`-wash placeholder the project card uses, at a
larger size.

Research is a deliberate exception: it has exactly one project, so
`/research` renders that project's own page in full — its own photo, title,
and Overview — rather than a division-level intro pointing at a one-item
list. `/projects/omr-project` does not exist as a separate URL for this
reason; see the note in `projects/[...id].astro`.

### Project Card (signature)

The system's primary structure on a division page, superseding an earlier
ruled-list version. A photo owns the top and the bulk of the card; title and a
three-line-clamped summary sit below it. A 3px division-hue top border is the
wayfinding mark that used to live on the division page's head band, now
carried by the Page Intro above instead. With no poster set, the media slot
is graph-paper stock tinted 7% from the division rather than an empty or
broken-looking box, so the card is designed to be complete before a photo
exists and richer the moment one is dropped into frontmatter. The whole card
is one link; hover lifts it and tints the border and title from the division
hue.

Division pages render projects in an auto-filling grid (`minmax(17rem, 1fr)`)
below their Page Intro by default. Robotics is the one hand-curated exception:
a "Robot Gallery" label over a five-slot photo gallery, then the two
competition seasons paired 50/50, then three subsystem cards in a row — the
ordering lives in `RoboticsShowcase.astro`, keyed to project slugs rather
than the generic weight sort.

Every project page repeats the same photo the visitor clicked through from
its card, larger, at the top of its own page — see Page Intro above.

### Division Grid (signature)

Four rounded-rectangle tiles in a 2x2 grid (one column below `36rem`), each a
plain link straight into its division. Every tile names the topic, not a
project — the division label and its one-line blurb — so the section stays
accurate as projects are added, removed, or reordered within a division. Every
tile shares one navy ground and one orange top rule; this is the one surface
in the system that deliberately drops the tertiary division hues, because it
is the visitor's first read of the whole site and the two-accent identity
should be unmistakable before they have picked a division. There is no active
state and no script: every tile is a real link doing its whole job
unconditionally.

Behind the text sits that division's photo (`MediaSlot`, sourced from
`DIVISION_IMAGE` — see the Page Intro entry below), with a bottom-heavy navy
scrim over it for legibility whether the photo exists yet or not. The same
photo reappears, larger, at the top of that division's own page.

### Marginalia (signature)

Authored SVG line figures at `rgba(22,24,28,.1)`, 1px stroke on a 200-unit grid,
hung into the outer margin and allowed to run off the page edge. Six exist, each
one of Kevin's own problems: a ray fan (the raycaster), a joint linkage with
solved angles (the spider's IK), a sampled projectile arc (the shooting
simulator), a contour field (Perlin noise), a spline with control handles (the
path follower), and a projected cube mid-turn (the 2×2 renderer).

Placement rule: a figure only ever occupies genuinely empty paper — a Page
Intro (where the contained photo leaves real margin beside it) and the
typographic hero. It is never placed on a section with a metadata column,
where it crossed the text and cost legibility. Figures are `aria-hidden`, removed
below `74rem`, and their host section needs both `overflow-x: clip` (so the
overhang is cut without breaking the sticky header) and `isolation: isolate` (so
a `z-index: -1` figure is not painted behind its own section background).

### Annotation (signature)

A sunken-paper block with a 2px orange top border, carrying the contribution scope
on any project Kevin did not build alone. It is the notebook's margin note made
structural, and the schema requires it wherever a project is collaborative.

## Do's and Don'ts

### Do:

- **Do** use the photo card grid for a division's projects. Robotics is
  hand-curated; every other division is the generic auto-fill grid.
- **Do** state contribution scope on anything collaborative, in the annotation block.
- **Do** design every media slot to look finished with nothing in it. Kevin's
  photos and recordings arrive incrementally, and a placeholder box is a defect.
- **Do** keep monospace tied to a real reported value.
- **Do** put separation in a tonal band or a hairline before reaching for a shadow.
- **Do** route every internal link through `url()` in `src/lib/site.ts`, so the
  GitHub Pages base path stays a two-line change.
- **Do** keep all four division destinations visible on mobile.
- **Do** draw any new marginal figure from something Kevin actually built, at 1px
  on the 200-unit grid, and place it only where the paper is genuinely empty.

### Don't:

- **Don't** set type in Orange (`#d9762f`); it cannot hold contrast. Use Orange Deep.
- **Don't** fill a region with a division hue.
- **Don't** add a dark mode. Light is a decision about the reading scene, not an
  oversight.
- **Don't** nest a card inside a card, on a division page or anywhere else.
- **Don't** add an eyebrow or kicker above a heading.
- **Don't** use a zero-blur or zero-offset shadow; every shadow has both.
- **Don't** write the header height as a literal anywhere — use `--header-h`.
- **Don't** reintroduce a per-project example into the division grid; it names
  topics, not projects.
- **Don't** animate anything from `opacity: 0`, or let scroll position decide
  whether content is legible.
- **Don't** add stock engineering decoration — gears, circuit traces, blueprints.
  The figures earn their place by being his own problems.
- **Don't** place a marginal figure over a column that carries text.
- **Don't** invent a competitive result, date, role, or metric. Only the two
  recorded FIRST credentials are verified; everything else is Kevin's to supply.
