---
name: Kevin Chen Portfolio
description: A light, typographically-led record of engineering projects across robotics, mathematics, research, and games.
colors:
  ground: "#f6f5f3"
  ground-raised: "#ffffff"
  ground-sunken: "#ece9e6"
  ground-inverse: "#003554"
  ink: "#16181c"
  ink-secondary: "#4e5259"
  ink-tertiary: "#6d7178"
  ink-inverse: "#f7f7f6"
  rule: "#e2e2df"
  rule-strong: "#cbcbc6"
  accent-blue-dark: "#003554"
  accent-blue-light: "#00a8e8"
  link: "#003554"
  link-hover: "#002942"
  division-robotics: "#b03b2e"
  division-research: "#2f5f8f"
  division-math: "#6a5192"
  division-games: "#2d7a5f"
typography:
  display:
    fontFamily: "Fraunces Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.6vw + 1.15rem, 5.1rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.016em"
  headline:
    fontFamily: "Fraunces Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.15rem, 3.4vw + 1.35rem, 3.6rem)"
    fontWeight: 520
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  title:
    fontFamily: "IBM Plex Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1vw + 1.1rem, 1.75rem)"
    fontWeight: 520
    lineHeight: 1.2
    letterSpacing: "-0.008em"
  body:
    fontFamily: "IBM Plex Sans Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.07em"
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
photo lands, and to improve the moment one does. Two accents carry the identity:
a dark blue that does the structural work — links, focus, the primary action,
the reel stage — and a light blue that only ever marks, the way the old
material role did: the nav bar's active/hover underline and the border on an
annotation. Neither accent tints a card any longer; every card is a plain
1px-rule container, its identity carried by its photo and type rather than a
top border.

The home page is a greeting, an About Me section, then the four divisions. It
carries no credential row, no thesis statement, and no selected-work list — the
project pages carry those claims, attached to the work that earned them — but
Kevin's own short bio now runs directly beneath the hero, in his own words
rather than a project-page fact.

Four division hues exist for wayfinding in the 404 page's list of divisions —
tinting a small border, never a filled region. Everywhere else, wayfinding by
division hue has been retired: every project card, on every division page,
carries the same dark-blue identity, and the nav bar's own active/hover mark is
a fixed light blue regardless of which division it points to.

The notebook is literal in two places and nowhere else: line figures sketched in
the margins are worked-out problems rather than decoration, and a
light-blue-topped annotation block carries contribution scope the way a margin note
would. What the system deliberately does not take from the notebook is
untidiness — nothing is skewed, torn, taped, or set in a handwriting face.

There was a third: a faint graph-paper ground under the whole page, and the same
ruling inside every empty media slot. **It has been removed everywhere and must
not come back.** A low-contrast grid behind a whole layout is generic texture
rather than an idea — it is decoration applied *to* a design instead of a
decision *in* one, and it is one of the most recognisable tells of a page that
was assembled rather than composed. The site sits on plain stock now. Empty
media slots are a flat sunken field tinted 7% from Blue Dark, which is the same
tonal move the system already uses to separate a section, at the scale of a
picture. The notebook survives in the figures and the annotation, which earn it
by carrying real content.

**Benchmark.** The craft bar is `lucas-boyle.com` and `stevenf7.github.io`. One
behaviour is a deliberate divergence: the first ships its content at zero opacity
until a scroll-reveal fires, so a visitor who lands and does not scroll sees a
blank page. Here, motion never gates content — the settle animation floors at
0.55 opacity, is applied only by script, and is skipped under reduced motion.

**Key Characteristics:**

- Light ground, near-black ink, cool neutral rules; no dark mode
- Ruled lists as the primary structure; cards only as selectors
- One spacing rhythm across every surface, more space above a heading than below
- Dark blue carries structure; light blue is material, never type
- Monospace strictly for real data — years, languages, ranks, counts
- Plain stock beneath everything; no page-wide texture, pattern, or grid
- Marginal line figures drawn from Kevin's own problems, never stock engineering art
- Every media-bearing surface is designed to be complete with no media present
- Motion never hides content, on any surface, for any duration

## Colors

A neutral, near-white reading surface — no warm cream, no off-white with a
yellow cast — carrying exactly two accents, both blue: a dark, structural blue
and a light, material blue. One muted-hue set remains, confined to a single
piece of chrome, for wayfinding only.

### Primary

- **Blue Dark** (`#003554`): the structural accent. Every interactive link,
  the focus ring, the primary button fill (the live-demo call to action), and
  the demo reel stage's ground all resolve to this one colour. 11.8:1 on
  ground — safe at any text size.
  Its hover/pressed state is the same colour mixed 22% toward black; there is
  no separate named token for it.

### Secondary

- **Blue Light** (`#00a8e8`): the material accent, used only as a rule, a
  border, or a highlight — never as type on the light ground. It borders the
  contribution annotation, marks the nav bar's active/hover underline on
  every page regardless of division, and carries the text selection
  highlight. It cannot hold
  4.5:1 (or even the 3:1 large-text floor) against ground, so it never sets
  type there — it is used as light-on-dark type only where the ground behind
  it is already dark (the photo hero's scrim, a dark-blue tile), where it
  clears 4.7:1 or better.

### Tertiary

Four muted division hues — Competition Red, Measured Blue, Derivation Violet,
Playfield Green — survive in exactly one place: the 404 page's list of
divisions, as a small left border. They no longer appear on the nav bar, on a
project card, or on a division's own page — see the Named Rules below.

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

**The Light-Blue-Is-Material Rule.** Blue Light is a rule, a border, or a
highlight — never a letterform on the light ground. At the sizes this system
sets type, `#00a8e8` cannot hold 3:1 against ground, so if light-blue text is
wanted on the page ground, the answer is Blue Dark or a different idea. The one
exception is type set directly on a dark surface (the photo hero's scrim, a
dark-blue tile), where Blue Light is the one that reads and Blue Dark would
disappear.

**The Wayfinding-Only Rule.** A division hue — confined to the 404 page's list
of divisions — may tint a small border or label at full strength, and nothing
more. It no longer tints a card, a media area, or the nav bar; those surfaces
are uniformly the two core accents now.

**The Blue-Means-Clickable Rule.** Blue Dark appears on interactive text,
focus, and the primary action, and nothing else. No decorative use, ever.

**One accent per role, everywhere.** Every project card, on every division
page, carries the same identity — media tint and type-safe credentials —
with no per-division variation and no top-border accent. The nav bar's
active/hover underline is Blue Light on every page, independent of division.
There is no longer a page-level accent assignment to track: `PAGE_ACCENT` and
`accentVars()` in `lib/site.ts`, and the `--cat` custom property they set,
have been removed along with the division-hue wayfinding they used to carry
onto cards.

## Typography

**Display Font:** Fraunces Variable (with Iowan Old Style, Georgia, serif)
**Body Font:** IBM Plex Sans Variable (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, monospace)

**Character:** Three faces, two lineages. Plex Sans and Plex Mono are one
superfamily, so running prose and reported values share skeletons and a mono
value sits *in* a sentence rather than on top of it — the engineering-
documentation register, humanist and unfussy, doing the informational work.
Above them Fraunces carries the voice: an authored old-style with flared stems,
a wonky leg, and a real optical-size axis, so the name in the hero and the
section headings are a mark rather than a name in a nice sans. The previous
system — one grotesque doing everything — was deliberately plain, and the
trade was legibility for anonymity; this pairing keeps the plainness where a
recruiter is skimming and spends the character where the page introduces
itself.

Chosen from three complete candidate systems built at `/type-lab` (Ledger:
Newsreader + Archivo; Instrument: Inter Tight + Inter + Geist Mono; Specimen,
this one). The two rejected sets are still renderable there, as the record of
what the decision was made against.

### Fraunces settings

The display face is set with `font-variation-settings: 'SOFT' 18, 'WONK' 1` —
pulled most of the way toward sharp, with the wonk on. Soft-and-straight is
this face's coffee-brand cut; sharp-and-wonky is the one that reads as an
engineer's own mark. The `opsz` axis is deliberately *not* pinned, so
`font-optical-sizing: auto` gives the hero the high-contrast cut and a section
heading the sturdier one from the same file.

Fraunces carries far more visual mass per unit of weight than a grotesque, and
its brackets and flared stems collide under grotesque tracking. Both
corrections are in the tokens: the display weights drop (680 → 500) and every
display tracking value relaxes to roughly a quarter of what Archivo took. Its
tall x-height and wide fit mean the two display *sizes* come down as well, and
still read larger.

### Hierarchy

- **Display** (Fraunces, 500, `clamp(2.6rem, 5.6vw + 1.15rem, 5.1rem)`, 0.94,
  -0.016em): the name in the hero and division titles. One per page.
- **Headline** (Fraunces, 520, `clamp(2.15rem, 3.4vw + 1.35rem, 3.6rem)`,
  -0.01em): project titles and section headings — `h1` and `h2`, the two tiers
  that take the display face.
- **Title** (Plex Sans, 520, `clamp(1.375rem, 1vw + 1.1rem, 1.75rem)`,
  -0.008em): `h3`/`h4`, list entry titles, division tile labels. These stay on
  the sans: at this size a section is being *labelled*, not voiced, and a third
  serif tier would blunt the two above it.
- **Body** (Plex Sans, 400, 1.0625rem, 1.68): all prose. Plex Sans runs open and
  slightly narrow, so it takes more leading and a shorter line than the
  grotesque did — measure held to 66ch; summaries to 62ch; footer and
  empty-state copy to roughly 34–52ch.
- **Label** (Plex Mono, 500, 0.75rem, 0.07em, uppercase): years, languages,
  ranks, counts, division names, field labels. Tracking comes in from 0.08em
  because Plex Mono is drawn wider than JetBrains was.

### Named Rules

**The Serif-Is-The-Voice Rule.** Fraunces appears on exactly two tiers — the
hero name and `h1`/`h2` — and nowhere else. It is not a body face, not a label
face, and not a button face. If a third thing wants to be set in it, the answer
is that the page has too many voices, not that the rule should bend.

**The Mono-Means-Measured Rule.** IBM Plex Mono appears only where a real value
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

**The Drawing-In Rule.** A card does not rise when you point at it. Its two
vertical edges draw inward by `--card-hover-inset` (10% of the card's own
width per side, so 20% narrower in total), and slide back out on release. The
height never changes; this is a change of width, not a shrink. Both card
surfaces — the project card and the home division tile — share the one token
and move identically.

The hover lift it replaced was the generic gesture every card grid on the web
performs, and it said nothing about this card in particular. Drawing in reads
as the card gathering itself toward the thing you are about to open, and it
re-crops the photograph while it moves, so the surface is doing something
rather than translating.

Implementation, which is load-bearing: the link is a bare positioning context
and a `__frame` child carries every visible property, with the frame's own
`left` and `right` animated. The grid cell therefore never changes size and no
neighbour ever moves. It is a layout animation rather than a transform on
purpose — `scaleX` would squash the photograph and the title, and a clip would
sever the side borders instead of moving them — and the cost stays inside one
card's subtree. Entry runs at `--dur-mid`, exit at `--dur-fast`, so release is
quicker than engagement. Under `prefers-reduced-motion` the edges hold still
and the shadow alone carries the state, because the global reduced-motion rule
only collapses duration and would otherwise land this as an instant jump.

**The Never-Hide-Content Rule.** No animation may start from `opacity: 0`, and no
content may depend on script or scroll to become readable. The `settle` entry
animation floors at 0.55 opacity, is applied only by JavaScript, is never applied
to the first section on screen, and does nothing under `prefers-reduced-motion`.

## Shapes

Small radii throughout: 3px for inline targets, 6px for cards, buttons, and
annotations, 10px for the reel stage and full-bleed imagery. Nothing is pill-
shaped and nothing is a circle. Borders are 1px hairlines everywhere, including
every card; the one heavier stroke left in the system is the 2px light-blue
rule above the contribution annotation, a structural mark rather than
decoration.

## Components

### Buttons

- **Shape:** gently rounded (6px), never pill.
- **Primary:** dark-blue ground (`#003554`), inverse text, `0.75rem 1.5rem`.
  One per page head, always the live demo.
- **Secondary:** raised white on a strong-rule border, ink text, same padding.
- **Hover / Focus:** border darkens to tertiary ink, Lifted shadow, a 1px rise.
  Focus is a 2px Blue Dark ring at 2px offset.

### Cards / Containers

Two card shapes, at two radii. Selectors are the smaller, inline shape; the
project card is the one place a card is page structure.

- **Selector card — Corner Style:** 6px. **Background:** raised white.
  **Border:** 1px rule. **Selected:** border and background tint from the
  division hue (5% mix), ink-strength title, Resting shadow.
- **Project card — Corner Style:** 10px, matching the reel/division-grid
  tiles. **Border:** 1px rule on every side, no top-border accent, fixed on
  every card regardless of division. **Media area:** 4:3, a flat sunken field
  washed 7% from Blue Dark when no poster is set. **Hover:** the two vertical
  edges draw inward (see The Drawing-In Rule below), plus Lifted shadow.
- **Internal Padding:** `1rem` for selectors, `1.5rem` for annotations and
  neighbour links, `1.5rem` for a project card's text block below its photo.

### Navigation

Small (0.8125rem), 520-weight, secondary ink. The active and hovered state is a
2px underline that scales out from the left over 260ms — Blue Light on every
page, regardless of division. Two rows below `32rem`, with all
four destinations visible; there is no drawer. There is no longer a fifth,
non-division link — the About page and its nav entry have been retired in
favour of the home page's own About Me section.

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
same flat Blue-Dark-washed sunken field the project card uses, at a larger
size.

Research is a deliberate exception: it has exactly one project, so
`/research` renders that project's own page in full — its own photo, title,
and Overview — rather than a division-level intro pointing at a one-item
list. `/projects/omr-project` does not exist as a separate URL for this
reason; see the note in `projects/[...id].astro`.

### Project Card (signature)

The system's primary structure on a division page, superseding an earlier
ruled-list version. A photo owns the top and the bulk of the card; title and a
three-line-clamped summary sit below it. Every card is a plain 1px-rule
container on every division — there is no top-border accent and no
per-division wayfinding hue; identity comes from the photo and type alone.
With no poster set, the media slot is a flat sunken field tinted 7% from Blue
Dark rather than an empty or broken-looking box, so the card is designed to
be complete before a photo exists and richer the moment one is dropped into
frontmatter. The whole card is one link; hovering it draws its two vertical
edges inward — see The Drawing-In Rule under Elevation & Depth.

Division pages render projects in an auto-filling grid (`minmax(17rem, 1fr)`)
below their Page Intro by default. Robotics is the one hand-curated exception:
a "Robot Gallery" label over a five-slot photo gallery, then the two
competition seasons paired 50/50, then three subsystem cards in a row — the
ordering lives in `RoboticsShowcase.astro`, keyed to project slugs rather
than the generic weight sort.

Every project page repeats the same photo the visitor clicked through from
its card, larger, at the top of its own page — see Page Intro above.

### About Me (signature)

Sits between the hero and the division grid, home page only. Two columns above
`46rem` — Kevin's own bio on the left, a contained photo (`MediaSlot`) on the
right — stacking to text-above-photo below it. The photo uses the same flat
Blue-Dark-washed placeholder as every other media slot until
`src/assets/about.*` exists. This is the one place on the home page carrying
first-person, self-descriptive prose; the rest of the page still lets the
divisions and projects do the introducing.

### Division Grid (signature)

Four rounded-rectangle tiles in a 2x2 grid (one column below `36rem`), each a
plain link straight into its division. Every tile names the topic, not a
project — the division label and its one-line blurb, centred rather than
left-anchored so they read as a caption for the whole tile — so the section
stays accurate as projects are added, removed, or reordered within a division.
There is no separate call-to-action line; the label and blurb are the whole
tile's content. Every tile shares one dark-blue ground with no top-border
accent; this is the one surface in the system that deliberately drops the
tertiary division hues, because it is the visitor's first read of the whole
site and the structural accent should be unmistakable before they have picked
a division. There is no active state and no script: every tile is a real link
doing its whole job unconditionally.

Behind the text sits that division's photo (`MediaSlot`, sourced from
`DIVISION_IMAGE` — see the Page Intro entry below), with a bottom-heavy
dark-blue scrim over it for legibility whether the photo exists yet or not.
The same photo reappears, larger, at the top of that division's own page.

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

A sunken-paper block with a 2px light-blue top border, carrying the contribution scope
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

- **Don't** set type in Blue Light (`#00a8e8`) on the page ground; it cannot
  hold contrast there. Use Blue Dark, or set it only on a dark surface.
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
- **Don't** put a graph-paper ground, dot grid, blueprint ruling, or any other
  repeating pattern behind a page, a section, or a media slot. This was tried
  and removed; it is texture standing in for an idea. Separation comes from a
  tonal band or a hairline.
- **Don't** add stock engineering decoration — gears, circuit traces, blueprints.
  The figures earn their place by being his own problems.
- **Don't** place a marginal figure over a column that carries text.
- **Don't** invent a competitive result, date, role, or metric. Only the two
  recorded FIRST credentials are verified; everything else is Kevin's to supply.
