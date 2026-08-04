# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, chosen by the user from an offered set. Content-first with MDX so each project writeup is a file the user edits directly, near-zero client JS by default, static output that deploys to GitHub Pages without a server.

Deploy target: **GitHub Pages**, confirmed. Repo is `github.com/kc0817/Portfolio`, so the served URL is `https://kc0817.github.io/Portfolio` and `base` must be `/Portfolio`. The site must be fully static — no SSR, no server endpoints, no runtime secrets. `site` and `base` live only in `astro.config.mjs`, and every internal link resolves through one helper, so moving to a custom domain later is a two-line change.

Custom domain: undecided.

## Users

Three confirmed audiences, ordered by how much the design must serve them:

1. **Recruiters and hiring managers** evaluating Kevin for internships. They arrive from a resume link, LinkedIn, or an application field, skim in under a minute, often on a phone. They are deciding whether he can actually build and ship, and whether to spend more time. They need: what was built, what it does, what he personally did, and what technology was involved — legible without reading paragraphs.

2. **Graduate admissions committees and research faculty** evaluating research capability. They read more slowly and more skeptically, and they discount claims without method. They need methodology, what was measured, the actual result, and honest scoping of Kevin's own contribution.

3. **General professional contacts** — peers, FIRST community, club and conference contacts — for whom this is Kevin's canonical link.

These audiences want incompatible things from the same page: the recruiter wants compression, the faculty reader wants depth. Both must be served by layering depth in the same content, never by averaging to one compromised middle.

## Product Purpose

A personal project portfolio presenting Kevin Chen's STEM work professionally. Success is a visitor from any audience quickly and accurately understanding what he has built and what he is capable of, then being able to reach him or dig deeper without friction.

Secondary success: he keeps it updated. Adding a project must be a single content file with no layout surgery.

## Positioning

**Kevin builds the hard layer other people import.** This is the differentiating claim, and it is supported by evidence rather than asserted:

- In **CMU CS Academy** — an environment with no 3D library, no UI library, no physics library — he built a 3D graphics engine, a Doom-style raycaster, a rigid-body physics engine with SAT polygon collision, 3D inverse kinematics for procedural locomotion, and a graphing calculator with a regex tokenizer and recursive-descent parser producing an AST.
- In **FIRST Tech Challenge**, he wrote autonomous path following, trajectory simulation, and system-identification tooling for teams that won a state championship and ranked #1 in RP after the World Championship.
- In **computational biology**, he contributed to an SSD + LSTM vision pipeline with closed-loop camera feedback.

The through-line is consistent across games, robots, and lab instrumentation: when a capability did not exist, he implemented it from first principles. A neighboring portfolio of framework-assembly work cannot truthfully copy this claim.

Design obligation: the breadth spans graphics, robotics, and computational biology, and breadth presented carelessly reads as scatter. The site must make range read as one coherent engineer whose common thread is depth of implementation.

## Operating Context

- Primary entry is a link from a resume, application form, or LinkedIn — rarely an intentional homepage visit.
- Substantial mobile traffic. Recruiters open links on phones.
- Visitors often arrive at a single project page from a direct link. Every project page must stand alone and cannot assume the visitor saw the intro.
- **Most projects have live, playable demos** hosted on CMU CS Academy and itch.io. This is unusually strong evidence — a visitor can run the raycaster in one click. Outbound demo clicks are a success, not a leak, and the design should drive them.
- Competition robotics code is normally private during a season; the absence of a public repo for a FIRST project is expected, not a gap.
- Kevin is an undergraduate. Material comes from high-school-era personal builds, FIRST competition teams, and a collaborative research project — not employment at scale.

## Capabilities and Constraints

- Static site. No backend, database, or authenticated areas.
- Content authored as MDX in the repository. Kevin is technical; editing files directly is preferred over a CMS.
- Must build and deploy via GitHub Actions to Pages.
- Contact mechanism: email is confirmed available; a form would require a third party and is not required.
- **Career framing: undergraduate, expected graduation 2029.** Present trajectory, initiative, and demonstrated depth. Do not imply professional seniority, years of industry experience, or team leadership beyond the confirmed FIRST software lead role.
- **Kevin writes the project prose himself.** The build must therefore ship real structure, real metadata, and real links, with prose slots clearly marked as his to fill. Long-form copy must not be fabricated and presented as his voice.

## Brand Commitments

No prior visual identity, logo, palette, typography, or voice guide existed.

Standing preferences Kevin established during the build, which constrain future visual work:

- **Convention over invention.** Offered a set of distinct visual worlds, he chose the category standard — the conventional developer portfolio — executed at full craft. This is a durable preference, not a one-off: propose refinement within the convention rather than a replacement world.
- **Light only.** No dark mode. The reading scene, not category habit, decided it.
- **Creative North Star: "The Working Notebook."** Chosen by Kevin. Realised as marginal line figures of his own problems and structural margin annotation — never as skew, tearing, tape, or handwriting faces. **Graph-paper stock was the third realisation and Kevin removed it**, on the grounds that a faint grid behind a whole page reads as generic AI-generated texture rather than a decision; it is gone from the page ground and from every media placeholder, and no repeating background pattern replaces it.
- **Typography: Fraunces + IBM Plex Sans + IBM Plex Mono**, chosen by Kevin from three complete candidate systems built side by side at `/type-lab`. Fraunces is confined to the hero name and `h1`/`h2`; Plex Sans carries everything read; Plex Mono carries reported values. This supersedes the original Archivo + JetBrains Mono pairing.
- **Craft benchmark:** `lucas-boyle.com` and `stevenf7.github.io`, supplied by Kevin as the level to match. One behaviour is a deliberate divergence, recorded in DESIGN.md: content is never hidden pending a scroll reveal.
- **Structural pins from Kevin, honoured verbatim:** a full-bleed portrait hero overlaid with "Hello everyone, I'm Kevin Chen"; below it, an About Me section (his own bio, left column, with a placeholder photo on the right); below that, under the heading "Explore My Work", a 2x2 grid of four rounded-rectangle tiles — one per division, each naming the division's topic rather than a specific project, and each a direct single-click link into that division; and four divisions — Robotics, Research, Math Explorations, Games.
- **The home page carries Kevin's own bio, and nothing else self-descriptive.** Kevin removed the credential row, the thesis statement, and the selected-work list, and this remains standing — but he later asked for a short first-person About Me section directly beneath the hero (2nd-year CS undergrad at Purdue, current internship at Accord Financial Solutions, volunteer robotics teaching), superseding the earlier "greeting and four divisions, nothing else" pin. Beyond that one section, still do not reintroduce a descriptor line or other summarising copy; claims about the *work* still belong on project pages, attached to what earned them. The standalone `/about` page was removed along with its nav link — the home page's About Me section is now the one place that content lives.
- **Page Intro, on every division page and every project page.** A contained photo (never full-bleed), then the title, then an Overview paragraph — the division's `blurb` or the project's `summary`, not new invented copy. Division pages carry this straight into their project grid (robotics keeps its gallery-then-pair-then-trio arrangement below it); project pages carry it straight into their existing credentials, actions, contribution scope, and body — none of that was removed, only moved below the new opening.
- **Research merges with its one project.** `/research` renders AutoOMR's own page directly rather than a division listing pointing at a separate project page; `/projects/omr-project` does not exist as its own URL. If research ever gets a second project, give that decision fresh thought rather than assuming the merge still applies.
- **Offboard Shooting is not Kevin's work.** He did not design it, and it was removed from the site. Do not restore it without a contribution note from him.

Confirmed identity facts:

- **Name:** Kevin Chen
- **Descriptor:** Purdue CS undergrad exploring robotics and computer science
- **School:** Purdue University, expected graduation 2029
- **Email:** kevinjkchen17@gmail.com
- **GitHub:** https://github.com/kc0817
- **LinkedIn:** https://www.linkedin.com/in/kevin-chen229463/
- **Résumé:** being updated; Kevin will supply the PDF later. Build a slot for it that degrades cleanly while absent.
- **Current role:** Frontend Software Developer intern at Accord Financial Solutions, working to modernize legacy tax software so Accord can offer tax refund and tax advance services for US citizens during the 2027 tax season.
- **Volunteer teaching:** runs a 3-week robotics programming class for 10 middle and high school students, supporting local FIRST teams.

## Evidence on Hand

### Personal projects — `github.com/kc0817`

| Project | Evidence | Notes |
|---|---|---|
| 3D Rendered Rubik's Cube | Python, [live demo](https://academy.cs.cmu.edu/sharing/antiqueWhiteCamel100435) | 3D graphics engine from scratch, 2x2 cube sim layered on top. **Top-3 feature.** |
| 2D Physics Engine | [live demo](https://kc0817.itch.io/2d-physics-sim) | SAT polygon collision, emergent rolling from friction, energy/momentum graphs, telemetry UI, parameterized gravity/restitution/friction. AP Physics 1 & 2 final. Source lost. |
| Procedurally Animated Spider | [live demo](https://kc0817.itch.io/3d-procedurally-animated-spider) | 3D inverse kinematics leg control, custom foot-latching algorithm, modified floodfill pathfinding constrained to ground-adjacent tiles, Java Swing GUI. Source lost. |
| Raycaster | Python, [live demo](https://academy.cs.cmu.edu/sharing/honeydewGoat4892) | Doom-style 3D renderer. |
| Kevmos Graphing Calculator | Python, [live demo](https://academy.cs.cmu.edu/sharing/steelBlueTiger728363) | Regex tokenizer, recursive-descent parser to AST, hand-built UI widgets (no UI library available), interactive function visualization. |
| Perlin Noise Terrain Generator | Python, [live demo](https://academy.cs.cmu.edu/sharing/slateGraySheep007178) | Procedural generation from scratch, customizable octaves and color mapping. |
| Pac-Man | Python, [live demo](https://academy.cs.cmu.edu/sharing/fireBrickAnt693219) | Grid collisions, pseudo-random ghost pathfinding, custom animation system and character art. Early work. |
| Snake | Python, [live demo](https://academy.cs.cmu.edu/sharing/slateBluePuppy620871) | Early work. |
| bracket-generator | JavaScript, [live](https://kc0817.github.io/bracket-generator/) | Tournament bracket generation replacing a manual process. |

`kc0817/reinforcement-learning` is empty and is excluded.

### FIRST robotics — `github.com/BrainStem-FIRST`

Kevin's confirmed roles across seasons: **lead software developer, autonomous/pathing, and subsystem programmer.** Roles varied by season; per-season attribution must come from him before publishing role claims on individual projects.

| Repo | Description / credential |
|---|---|
| `8393-2026-Decode-v1` | FTC 8393 robot code — **#1 in RP after World Championship, PA State Champion** |
| `22312-into-the-deep-v1.5` | FTC 22312 robot code — **#1 Autonomous in PA** |
| `8393BigFishCode` | Custom path follower for autonomous pathing. Evidence still stands, but Kevin removed its card from the robotics page in favor of Swerve Drive and Vertical Spindexing Algorithm — restore it if he wants it back. |
| `OffboardShooting` | TypeScript trajectory simulator and SysId tuning, frame-by-frame video analysis overlaid on simulation |
| `8393RedTeamCode` | PedroPathing + Panels integration. On the site this card is now titled "Sinusoidal Motion Profiler" per Kevin's request; the summary is a TODO until he confirms the profiler lives in this repo and describes it. |

Four additional repos Kevin named — Decode v1.5, Decode v2, Reefscape, Rebuilt Comp Bot — are currently private. **He will make them public**, so the build should link them; if any remains private at launch, the link is omitted rather than broken.

Two more robotics entries exist on the site with no repo, period, stack, or credential yet — **Swerve Drive** and **Vertical Spindexing Algorithm** — added at Kevin's request to the robotics showcase. Nothing about them is invented; each ships as a title with a TODO summary until Kevin supplies the real detail.

### Computational biology

`Justin16Chen/OMRProject` — *"V2 of AutoOMR: fully integrated camera feedback, SSD and LSTM pipeline, and custom GUI and control interface."* Java, ~76 MB, active through March 2026. **Owned by a collaborator, not Kevin.** This is a contribution, and the site must say so. **Top-3 feature**, pending Kevin's description of his specific contribution.

### Media

Kevin has photos and video scattered across a phone and two computers, not yet organized. He supplies them incrementally, so every surface must look intentional and complete with **zero images present**, and improve — not merely tolerate — when real media is dropped in. Placeholder image boxes and broken-image states are unacceptable in the shipped default.

**Supplied so far:** the hero photograph, from the 2024–25 FTC Pennsylvania state championship pits — team 22312 around their robot on a pit table, talking with a judge. The photographer is credited in the source filename as "brobert"; if the site ever displays a photo credit, that is the attribution to use. Still outstanding: a project photo (`poster` in frontmatter) for every project card and project page — none has one yet, so every one ships in its designed no-photo state; a representative photo per division (drop a file at `src/assets/division-<robotics|research|math|games>.*` — see `divisionImages.ts`), shown on that division's home-page tile and again at the top of its own page; and five team/robot photos for the robotics page's gallery row. The home page no longer carries per-project demo recordings — the "Explore My Work" grid names each division's topic rather than a specific project. It also still needs a real photo of Kevin for the About Me section (drop a file at `src/assets/about.*` — see `aboutPhoto.ts`); it ships in its designed no-photo state until then.

### Must not be fabricated

Project outcomes, metrics, competition placements beyond the two credentials recorded above, dates, coursework, GPA, advisors, publications, awards, testimonials, or Kevin's specific per-season robotics contributions. Where a fact is unknown, omit it.

## Product Principles

1. **Compression and depth, layered — not averaged.** The recruiter's skim and the faculty reader's scrutiny are both first-class, served at different depths of the same content.
2. **Depth of implementation is the claim.** Every project surface should make visible what was built from nothing. "No libraries available" is the recurring, verifiable fact that makes the work impressive.
3. **The demo is the evidence.** Nearly everything is playable in one click. Drive that click harder than a repo link.
4. **Range reads as capability.** Graphics, robotics, and computational biology must read as one engineer with a common method, never as an unsorted pile.
5. **Honest scoping.** Team and collaborator projects state Kevin's own contribution. No claim outruns evidence. Lost source is stated plainly once, without apology, with the demo leading.
6. **Adding a project is one file.** Maintenance cost is a design requirement.

## Accessibility & Inclusion

No user-specific requirement established. Standard obligation: WCAG 2.2 AA — real text over text-in-images, keyboard-operable navigation, visible focus, honest heading order, alt text on every image, captions or transcripts for video, respect for `prefers-reduced-motion`, and full function without JavaScript wherever the static build allows.
