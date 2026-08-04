---
name: Kevin Chen Portfolio
description: A light, typographically-led single-page record of engineering projects across robotics, research, and mathematics.
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
rather than monitoring; a dark ground would have served neither. The work is
shown as photo-forward cards — and is largely still uncaptured on camera, so the
media slot is designed to be honest and complete before a single photo lands,
and to improve the moment one does. Two accents carry the identity: a dark blue
that does the structural work — links, focus, the primary action — and a light
blue that only ever marks: the nav bar's active/hover underline and the border
on an annotation. Neither accent tints a card; every card is a plain 1px-rule
container, its identity carried by its picture and type rather than a top border.

**The site is one page.** It was four topic pages plus a home page that pointed
at them, and the collapse is the defining structural fact about this system now.
The home page is a greeting, About Me, the portfolio, and Explore More; below it
sit six project pages and nothing else. The project list was cut from fifteen to
six to make that possible, which is the trade the whole architecture rests on: a
page a visitor can take in beats a site they have to navigate, and a curated six
beats a complete fifteen. Games was retired outright.

Because the divisions no longer have pages, they are the portfolio's three ruled
entries — FIRST Robotics, Research, Math Explorations — each opening with its
name and its one-line blurb before showing its cards. Those blurbs used to head
a page each, which makes the portfolio the only place that copy now lives; the
robotics one in particular carries a credential line no card states on its own.

Division hues are gone. Four muted wayfinding colours survived the previous
revision in one place, the 404 page's list of divisions; that list is now two
in-page links, so there was nothing left to code and reintroducing a hue per
division would be decoration in search of a job. Two blues carry the system.

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
blank page. Here, motion never gates content: `settle` floors at 0.55 opacity, both
entries are armed only by script, reduced motion skips them, and a 1.5s failsafe
releases anything still hidden if the observer never reports. See The
Never-Hide-Content Rule.

**Key Characteristics:**

- Light ground, near-black ink, cool neutral rules; no dark mode
- One page, three named sections, six project pages beneath it — no topic pages
- Ruled entries as the primary structure; cards only as selectors
- One spacing rhythm across every surface, more space above a heading than below
- Dark blue carries structure; light blue is material, never type
- Monospace strictly for real data — years, languages, ranks, counts
- Plain stock beneath everything; no page-wide texture, pattern, or grid
- Marginal line figures drawn from Kevin's own problems, never stock engineering art
- Every media-bearing surface is designed to be complete with no media present
- Motion never hides content, on any surface, for any duration — and where it is
  held back waiting on an observer, a timer guarantees the release

## Colors

A neutral, near-white reading surface — no warm cream, no off-white with a
yellow cast — carrying exactly two accents, both blue: a dark, structural blue
and a light, material blue. Nothing else. The muted division-hue set that used to
survive on one piece of chrome has been removed; see Tertiary.

### Primary

- **Blue Dark** (`#003554`): the structural accent. Every interactive link,
  the focus ring, the primary button fill (the live-demo call to action), and
  a card's title-band scrim all resolve to this one colour. 11.8:1 on
  ground — safe at any text size.
  Its hover/pressed state is the same colour mixed 22% toward black; there is
  no separate named token for it.

### Secondary

- **Blue Light** (`#00a8e8`): the material accent, used only as a rule, a
  border, or a highlight — never as type on the light ground. It borders the
  contribution annotation, marks the nav bar's current/hover underline, and
  carries the text selection highlight. It cannot hold
  4.5:1 (or even the 3:1 large-text floor) against ground, so it never sets
  type there — it is used as light-on-dark type only where the ground behind
  it is already dark (the photo hero's scrim, a card's title band), where it
  clears 4.7:1 or better.

### Tertiary

**There is no tertiary set.** Four muted division hues — Competition Red,
Measured Blue, Derivation Violet, Playfield Green — were narrowed over successive
revisions until they held exactly one surface, the 404 page's list of division
links, as a small left border. The division pages are gone and that list is now
two in-page section links, so the hues have been removed from `tokens.css`
entirely rather than kept for a surface that no longer exists.

Do not reintroduce them. A hue per division was wayfinding for a four-page site;
on one page the sections are three ruled entries a visitor scrolls past in order,
and colour-coding them would be labelling a thing that is not ambiguous.

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

**The Two-Blues Rule.** The system has exactly two accents and no third family.
The Wayfinding-Only Rule that used to sit here governed a division hue tinting a
small border; both the rule and the hues are gone with the pages that needed them.
A new colour is a change to this document, not a local decision.

**The Blue-Means-Clickable Rule.** Blue Dark appears on interactive text,
focus, and the primary action, and nothing else. No decorative use, ever.

**One accent per role, everywhere.** Every project card carries the same
identity — media tint and type-safe credentials — with no per-division variation
and no top-border accent. The nav bar's active/hover underline is Blue Light
wherever it appears, and it now reports which section is being read rather than
which page is open. There is no page-level accent assignment to track:
`PAGE_ACCENT`, `accentVars()`, and the `--cat` custom property they set are all
gone, along with the `--cat-*` tokens themselves.

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
  -0.016em): the name in the hero. One per page.
- **Headline** (Fraunces, 520, `clamp(2.15rem, 3.4vw + 1.35rem, 3.6rem)`,
  -0.01em): project titles and section headings — `h1` and `h2`, the two tiers
  that take the display face.
- **Title** (Plex Sans, 520, `clamp(1.375rem, 1vw + 1.1rem, 1.75rem)`,
  -0.008em): `h3`/`h4` — division names and card titles. These stay on
  the sans: at this size a section is being *labelled*, not voiced, and a third
  serif tier would blunt the two above it.
- **Body** (Plex Sans, 400, 1.0625rem, 1.68): all prose. Plex Sans runs open and
  slightly narrow, so it takes more leading and a shorter line than the
  grotesque did — measure held to 66ch; summaries to 62ch; footer and
  empty-state copy to roughly 34–52ch.
- **Label** (Plex Mono, 500, 0.75rem, 0.07em, uppercase): years, languages,
  ranks, counts, field labels. Tracking comes in from 0.08em
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
carry their own weight. The one exception in the build is the division name above a
project title, which is a working link back to that division's section on the home
page — a destination, not a decoration.

## Layout

A single `78rem` page container with a fluid gutter (`clamp(1.25rem, 5vw, 3rem)`),
and a `42rem` prose container for reading-only pages. Long-form bodies cap at
`68rem` with a `15rem` metadata rail that becomes sticky at `58rem` and above,
separated by a hairline rather than a panel.

Section rhythm is one fluid value, `clamp(3.5rem, 7vw, 7rem)`, used for every
major vertical break so the whole site breathes at one rate. Spacing steps run
`0.25rem` to `6rem`. Headings always take more space above than below.

Breakpoints are content-driven rather than device-driven, and several are
*measured* rather than chosen — the comment at each one records what it was
measured against, so it can be re-measured when the content changes:

- `22rem` — drop the wordmark's subtitle
- `30rem` — the header becomes two rows. Measured: one row needs 423px of content
  to hold the wordmark, the graduation year, and three section labels without
  crushing "Kevin Chen" onto two lines. It was `32rem` when the nav held four
  division links; it must move again if a fourth section is added. Kept in step
  between `SiteHeader.astro` and the `--header-h` override in `tokens.css`.
- `34rem` — portfolio rows go to two columns
- `46rem` — About Me goes two-column; neighbour links pair up
- `58rem` — long-form gains its sticky metadata rail
- `64rem` — a portfolio row takes its own column count, which in practice means
  Math Explorations goes to three. Measured: `272rem`-era `minmax(17rem, 1fr)` set
  272px as this system's card floor, and three columns clear it at `64rem` but not
  at `52rem`, where they came out 244px with the title band eating two-fifths of
  each card.

One header-height token, `--header-h`, drives the sticky bar, the photo hero's
overlap, and anchor scroll offset together — it is never written as a literal.

The project card is additionally a **container query container**, so its title and
title band size against the card rather than the viewport. That is not a
refinement of the above; it is a different axis. The same card is 560px wide in a
two-up row and 288px in a three-up row *at one viewport width*, so no viewport
breakpoint can serve both.

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
  unused. It carried the demo reel stage, the one element that was genuinely a
  screen; the reel is gone and no surface has earned this depth since. Kept as a
  token so the scale still reads as a scale, not as a licence to reach for it.

**The Flat-At-Rest Rule.** Surfaces are flat until something happens to them, with
no exception left standing.

**The Drawing-In Rule.** A card does not rise when you point at it. Its two
vertical edges draw inward by `--card-hover-inset` (10% of the card's own
width per side, so 20% narrower in total), and slide back out on release. The
height never changes; this is a change of width, not a shrink. There is one card
surface now, so the token has one consumer — but it stays a token, because the
gesture is the system's and not the component's.

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

**The Never-Hide-Content Rule.** No content may depend on script or scroll to become
readable. `settle` — the gentler of the two entries — floors at 0.55 opacity, is
applied only by JavaScript, is never applied to the first block on screen, and does
nothing under `prefers-reduced-motion`.

`rise` is the authored entrance, and it *does* start from `opacity: 0`, which is why
it is fenced. Three guarantees, in order of how much they are relied on:

1. The hiding is applied **by script only** (`is-armed`), so no JavaScript, no
   `IntersectionObserver`, or reduced motion all leave the block rendered final.
2. Every unconditional use runs on load and always finishes — the hero, which has no
   scroll gate at all.
3. **A 1.5s failsafe.** If not one observer callback has arrived in that window, the
   observer exists but is not delivering — a tab that is not compositing frames, a
   starved embedding — and everything armed is unarmed *without* animating. This was
   added when the portfolio grew from one armed block to five: guarantees 1 and 2 do
   not cover "the API is present and silent", and under that condition the entire
   portfolio was invisible. Unarming rather than settling is deliberate; five blocks
   animating at once because a timer fired would be a worse arrival than none.

**One attribute, on the block that moves.** `data-rise` marks the moving element and
the observer watches it directly. This replaced a two-attribute form — `data-rise` on
the section, `data-rise-target` on an inner wrapper — that existed only because the
observer could see nothing but `main > section` and had to be pointed inward. That
split could not express three sibling divisions inside one section, each rising as it
is reached: the CSS used a descendant selector, so nesting one marked block inside
another made the outer hide the inner and hold it hidden. A section that contains
risers takes no `settle` of its own; its parts carry the arrival.

## Shapes

Small radii throughout: 3px for inline targets, 6px for cards, buttons, and
annotations, 10px for the project card and full-bleed imagery. Nothing is pill-
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
  **Border:** 1px rule. **Selected:** border and background tint from Blue Dark
  (5% mix), ink-strength title, Resting shadow.
- **Project card — Corner Style:** 10px. **Border:** 1px rule on every side, no
  top-border accent, fixed on every card. **Media area:** 4:3 — the whole card — a
  flat sunken field washed 7% from Blue Dark when no media is set. **Title:** on a
  scrim band at the bottom, not below the picture and not on a full-card wash.
  **Hover:** the two vertical edges draw inward (see The Drawing-In Rule below),
  plus Lifted shadow.
- **Marquee tile — Corner Style:** 6px, 1:1, 1px rule, Resting shadow. Square so it
  cannot be mistaken for a project card.
- **Internal Padding:** `1rem` for selectors, `1.5rem` for annotations and
  neighbour links. The project card's title band scales its own padding with the
  card (`clamp(--s-3, 4.5cqi, --s-5)`) rather than taking a fixed step.

### Navigation

Small (0.8125rem), 520-weight, secondary ink. The active and hovered state is a
2px underline that scales out from the left over 260ms — Blue Light always. Two
rows below `30rem`, with all three destinations visible; there is no drawer,
because most arrivals are one-minute skims on a phone and a hidden nav costs more
than 2rem of header does.

**Three in-page destinations, not pages.** About, Portfolio, and Explore More are
the home page's three sections. `SECTIONS` in `lib/site.ts` is the single list;
the header renders it, the scroll-spy reads the same ids back off the document,
and `index.astro` composes the matching components in the same order — so a link
and its landing point cannot drift apart.

The hrefs are decided at build time, not in the browser: bare fragments (`#about`)
on the home page so a click scrolls, absolute (`/#about`) everywhere else so a
click navigates home and lands correctly. `sectionUrl()` builds the absolute form
and is also what a project page's division eyebrow uses (`/#robotics`).

**The mark reports position.** With four page-based links the browser gave the
current state away free via `aria-current="page"`; three in-page links have to earn
it, so an IntersectionObserver marks whichever section occupies the band between
the header's lower edge and 55% down the viewport. A band rather than a point is
what stops the mark flickering at a handover; when two sections share the band the
upper one wins, because the one being scrolled away from is the one still being
read. In the hero and in the footer nothing is current and the mark clears —
inventing a nearest section there would be a claim the scroll position does not
support. Entirely progressive: without the script the links still work.

### Page Intro (signature)

The first thing on a project page: a contained picture — `MediaSlot`, never
full-bleed, capped around `46rem` and centred, so it reads as a framed picture
rather than another hero — then the title, then an Overview section holding the
project's `summary`. Nothing new is invented for it. The Overview paragraph runs
the full row width, unconstrained by a prose measure, unlike the picture above it.
The title carries a small division-name eyebrow above it linking back to that
division's section on the home page — the one eyebrow the system permits, because
it is a working destination, not decoration. With no picture set, `MediaSlot` falls
back to the same flat Blue-Dark-washed sunken field the project card uses, at a
larger size.

**A still, never a clip.** The slot shows a picture and does not play. The clip
belongs to the card the visitor hovered to get here; motion on arrival would be
demanding attention rather than answering it. This is why the media layer
distinguishes a `Cut` (clip plus poster, for cards) from a `Still` (poster only,
for this slot) — pairing this slot with an `mp4` would declare a file nothing ever
requests.

**Bars are cropped, not lived with.** Several captures carry black pillars baked
into the encode. Each declares its picture box in `projectMedia.ts` and the frame
takes the *picture's* aspect, scaling and offsetting the image so the bars fall
outside `overflow: hidden`. Nothing of the picture is lost and none of the black
survives. Measure the box by walking in from each edge while the row or column is
uniformly near-black, then inset 3px per side — JPEG ringing leaves a dark
transition column that shows as a grey hairline once the frame scales down.

The Research exception recorded here previously — `/research` rendering AutoOMR's
page in full, so `/projects/omr-project` did not exist — is gone with the division
pages. AutoOMR is `/projects/autoomr`, a project page like the other five.

### Project Card (signature)

**The one card in the system.** It had a near-twin — the home page's division
tile — and when the tiles went away this absorbed the thing the tile did better:
its scrim. The picture is the whole card, 4:3, and the title overlays it at the
bottom, centred, on a **band** rather than a full-card gradient. The band exists to
carry the title, so it is only as tall as the title needs; a wash over the whole
card was found to be dimming the very thing the card is there to show, which
matters more now that every card on the home page plays footage. Its `padding-block`
is symmetric on purpose — that is what centres the title, so the band's height
derives from the text rather than from a number that stops being right when a title
wraps.

Every card is a plain 1px-rule container — no top-border accent, no per-division
hue; identity comes from the picture and the type alone. With no media set, the
slot is a flat sunken field tinted 7% from Blue Dark rather than an empty or
broken-looking box, so the card is complete before a picture exists and richer the
moment one lands. The whole card is one link; hovering it draws its two vertical
edges inward — see The Drawing-In Rule under Elevation & Depth.

**The card sizes its own type.** `container-type: inline-size`, with the title at
`clamp(--text-base, 5.5cqi, --text-lg)` and the band's padding scaled the same way.
5.5cqi is the rate at which the longest title in the set holds one line at every
card width the layout produces, while still reaching `--text-lg` on a full-width
card — so nothing renders smaller than it used to. Both bounds are ramp steps. A
plain `font-size: var(--text-lg)` precedes each container-unit declaration as the
fallback where container units are unsupported.

**Rows are hand-arranged, not weight-sorted.** The auto-filling
`minmax(17rem, 1fr)` grid, `MathProjectGrid`'s span layout, and
`RoboticsShowcase`'s curated pair-and-trio are all gone; `Portfolio.astro` lists
the slugs per row instead. A row of two and a row of three are compositions, and
which project leads one is an editorial call rather than a number in frontmatter.
`weight` survives and still orders the prev/next links on project pages, so the two
must agree — reorder a row and reorder the weights with it.

That makes adding a project two edits, the content file and the row. The build
throws on a slug with no project, and warns on a published project listed in no
row — a card silently absent from the only page that lists it is the failure mode
worth being noisy about.

Robotics' "Robot Gallery" — a label over five empty dashed photo slots — is also
gone. No photograph was ever dropped into it, and five placeholder boxes on a page
being deliberately slimmed are scaffolding, not content.

### About Me (signature)

Sits between the hero and the portfolio. Two columns above `46rem` — Kevin's own
bio on the left, a contained photo (`MediaSlot`) on the right — stacking to
text-above-photo below it. The photo uses the same flat Blue-Dark-washed placeholder
as every other media slot until `src/assets/about.*` exists.

Carries `id="about"`, the first of the nav's three destinations. It is one of two
places on the page with first-person prose — the other is Explore More's note; the
projects still do the rest of the introducing.

### Portfolio Sections (signature)

*Replaces the Division Grid — four dark-blue 2x2 tiles that linked out to the four
topic pages. There is nowhere to link out to, so the work is here.*

One `<h2>` — "Explore My Work" — over three ruled entries, one per division. Each
entry is: a hairline rule spanning the full width, then the division name, then its
blurb, then its cards. Stacked in that order at every width, so the eye runs
title → description → work in a straight line. (It was briefly two columns, name in
a 15rem rail with the blurb alongside; stacked is better, because the rule then
spans the whole entry and nothing steps sideways and back.) Entries are separated by
`--s-9`.

The division name is an `<h3>` on **IBM Plex Sans at `--text-xl`**, not Fraunces.
Fraunces is reserved for the two page-level tiers and this is the third — a division
inside a section, not a voice of its own. Its standing comes from the size and the
rule above it. Card titles are `<h4>` beneath it; the outline is what a screen reader
navigates, and the visual size is unaffected.

Blurbs are held to `68ch` even though the column is full width: a line running the
whole `78rem` page is past the point where the eye reliably finds the next one.

Row counts are per-division and declared in `Portfolio.astro` — robotics 2, research
2, math 3. **Research holds two columns for its single card on purpose:** the empty
second column is what makes AutoOMR's card exactly as wide as a robotics card
(measured: both 560px at the same x), so the one-item row reads as the same measure
as the row above rather than as a card that happens to be a different size.

Each entry's `id` is its category, so it is linkable as `/#robotics` — a near-echo of
the `/robotics` URL it replaced, and what a project page's eyebrow points back at.

### Explore More (signature)

The offcuts, and the page admitting it has them. A heading, a paragraph naming the
two places the rest of the work actually lives (GitHub, itch.io), then a strip of
seven square placeholders drifting past.

**A marquee, not a carousel.** No arrows, no dots, no controls. Controls would imply
the contents are worth navigating item by item, which is a promise this section
explicitly does not make — the two links are the destinations. A strip that drifts
says "there is more of this", which is the whole message, and needs no chrome to say
it.

**Square tiles, deliberately unlike the 4:3 cards above.** A different shape is what
stops seven thumbnails reading as a fourth row of projects. Tiles are not links: a
placeholder that looks clickable and goes nowhere is worse than one that does not.

#### Hover does two things, and neither is to the tile

Pointing at the strip **stops the drift** and **plays the clip under the pointer**. That
is the entire interaction. The tile itself does not move, grow, or change shape.

This was briefly more. The tile grew and widened to 16:9 while its neighbours parted to
make room, and the clip played into the space that opened — a real focal moment, and it
was cut on purpose. The section's job is to say *there is more of this* and then get out
of the way of the two links above it, and a tile that rearranges the row around itself
was doing more work than that message needs. What answers the pointer now is the content
responding — the strip holding still, the clip starting — rather than the layout
performing.

The consequence for the clips is worth stating, because it is the reverse of what the
expansion wanted: **cut them square.** The 1:1 tile is the whole of what anyone ever
sees, so a landscape clip loses its sides to `object-fit: cover` with no hover left to
reveal them. Centre-crop at encode time and frame the subject inside the square, the way
a project card is cut to its own 4:3.

Mechanics worth keeping if this is ever rebuilt:

- The track is rendered twice and translated `-50%`, so one copy lands exactly where
  the other began and the loop needs no JavaScript holding position. Verified by
  asserting half the track's width equals seven tiles plus seven gaps — the trailing
  `padding-inline-end` is load-bearing, because fourteen tiles have only thirteen gaps
  between them and without a fourteenth the halfway point lands half a gap short and
  the loop visibly jumps.
- **One list, fourteen siblings.** Both copies are `<li>`s of a single `<ul>` rather than
  two lists. That was load-bearing while the parting existed (sibling selectors cannot
  reach across two lists, and the visible window straddles the loop seam most of the
  time); it stays because it is simply less markup for the same result.
- Each duplicate `<li>` is `aria-hidden`, so a screen reader hears seven tiles, not
  fourteen.
- The tile is a plain square: no wrapper, no positioning context, nothing animated on
  it. The `.marquee__frame` child that used to carry the growth is gone with the growth.
- Clips are `preload="none"`. Fourteen video elements' worth of metadata on load buys
  nothing the poster is not already covering.
- Playback is `MediaSlot`'s existing `playOn="hover"`, reached by putting
  `data-video-hover-root` on the tile — no new script. Rest is the poster (frame 0,
  nothing fetched), hover plays, exit pauses **and rewinds to 0**, so the tile returns
  to the same picture it started from.
- Duration is derived, not tasted: `--marquee-n * 7s`, one cycle per copy-width, so
  the drift speed is unchanged by tile count or tile size.
- Full-bleed with a gutter-width gradient mask at both edges. A strip that starts and
  stops at the page gutter reads as a bounded widget; the point is that it continues
  past what you can see.
- `overflow-x: clip`, not `hidden` — `hidden` on an ancestor breaks the sticky header.
- Pauses on `:hover` and `:focus-within`, so a thumbnail that catches the eye can be
  held still and watched — which is also the only reason the clip under it gets a chance
  to play.
- Under `prefers-reduced-motion` the drift is **cancelled outright**, not shortened. The
  global rule collapses durations, which for an infinite linear loop would produce an
  unreadable blur rather than stillness. Nothing else here needs a reduced-motion
  branch, because nothing else moves.

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

Two of the six figures now describe projects that were cut — a ray fan for the
raycaster, a contour field for Perlin noise. They are kept: they are Kevin's own
worked problems, the contour field still serves Research, and a line figure in a
margin does not claim to be a portfolio entry. Do not draw a seventh to fill a gap.

### Annotation (signature)

A sunken-paper block with a 2px light-blue top border, carrying the contribution scope
on any project Kevin did not build alone. It is the notebook's margin note made
structural, and the schema requires it wherever a project is collaborative.

## Do's and Don'ts

### Do:

- **Do** arrange portfolio rows by hand in `Portfolio.astro`, and keep `weight` in
  agreement with the order you chose.
- **Do** state contribution scope on anything collaborative, in the annotation block.
- **Do** design every media slot to look finished with nothing in it. Kevin's
  photos and recordings arrive incrementally, and a placeholder box is a defect.
- **Do** cut a card clip to exact 4:3 and frame it on the subject, so `object-fit:
  cover` has nothing left to crop. Measure the on-screen chrome and put the window
  where no legend or button row is left half-visible at an edge.
- **Do** start a card cut at a moment where the subject is in frame. Frame 0 is the
  card's resting picture, and a resting card that shows an empty scene is not a
  picture of anything.
- **Do** keep monospace tied to a real reported value.
- **Do** put separation in a tonal band or a hairline before reaching for a shadow.
- **Do** route every internal link through `url()` in `src/lib/site.ts`, and every
  section link through `sectionUrl()`, so the GitHub Pages base path stays a
  two-line change.
- **Do** keep all three section destinations visible on mobile.
- **Do** re-measure a measured breakpoint when the content it was measured against
  changes, and update the comment that records the measurement.
- **Do** draw any new marginal figure from something Kevin actually built, at 1px
  on the 200-unit grid, and place it only where the paper is genuinely empty.

### Don't:

- **Don't** set type in Blue Light (`#00a8e8`) on the page ground; it cannot
  hold contrast there. Use Blue Dark, or set it only on a dark surface.
- **Don't** reintroduce a division hue, or any third colour family.
- **Don't** add a dark mode. Light is a decision about the reading scene, not an
  oversight.
- **Don't** nest a card inside a card.
- **Don't** add topic pages back. Six projects on one page is the architecture, and
  a seventh section or a fourth division is a reason to cut something, not to
  restore a page.
- **Don't** wash a whole card with a scrim. The band carries the title; the rest of
  the card is the picture, and on the home page that picture is playing.
- **Don't** ship a `-full.mp4`. The Page Intro slot shows a still and never plays, so
  an uncropped clip is a file nothing requests.
- **Don't** give the marquee controls, or make its tiles links to a single shared
  destination.
- **Don't** hold content at `opacity: 0` behind an observer without a timer that
  releases it. The Never-Hide-Content rule is not satisfied by "the observer will
  fire" — see Motion below.
- **Don't** add an eyebrow or kicker above a heading.
- **Don't** use a zero-blur or zero-offset shadow; every shadow has both.
- **Don't** write the header height as a literal anywhere — use `--header-h`.
- **Don't** let scroll position decide whether content is legible. Animating from
  `opacity: 0` is permitted for `rise` and only for `rise`, because it is fenced —
  armed by script, released by a failsafe. Any *new* entrance starts from a visible
  floor the way `settle` does; the fence is not a precedent to copy.
- **Don't** put a graph-paper ground, dot grid, blueprint ruling, or any other
  repeating pattern behind a page, a section, or a media slot. This was tried
  and removed; it is texture standing in for an idea. Separation comes from a
  tonal band or a hairline.
- **Don't** add stock engineering decoration — gears, circuit traces, blueprints.
  The figures earn their place by being his own problems.
- **Don't** place a marginal figure over a column that carries text.
- **Don't** invent a competitive result, date, role, or metric. Only the two
  recorded FIRST credentials are verified; everything else is Kevin's to supply.
