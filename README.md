# Kevin Chen — Portfolio

Astro static site, deployed to GitHub Pages at
**https://kc0817.github.io/Portfolio**

```bash
npm install
npm run dev      # http://localhost:4321/Portfolio
npm run build    # static output in dist/
npm run check    # typecheck (currently 0 errors — keep it there)
```

Pushing to `main` builds and deploys automatically via
`.github/workflows/deploy.yml`. **One-time setup:** in the repository settings,
under Pages, set Source to **GitHub Actions**.

---

## Your to-do list

These are the things only you can supply. Nothing below is broken while it is
missing — every surface is designed to be complete without it — but each one
makes the site better.

### 1. The hero photo — done

`src/assets/hero.jpg` is the FTC PA States pit shot, downscaled to 3200px wide so
the largest served variant is 520kB instead of 1.4MB (a phone gets 43kB).

**To swap it:** replace that file. Any `.jpg`/`.png`/`.webp`/`.avif` named `hero`
is picked up automatically, and deleting it returns the hero to its typographic
state, which is a designed alternative rather than a fallback. Keep new sources
around 3200px wide.

**To change the crop:** `object-position` in `src/components/Hero.astro` — `50% 22%`
on desktop, `56% 26%` under 40rem. The second number is the vertical anchor;
lower keeps more of the top. I biased it to hold the faces and crop the table and
clipboard out of the bottom. **I don't know which person in the photo is you**, so
if you want yourself better centred, nudge the first number: lower moves the crop
left, higher moves it right.

Overlay contrast was measured against the real composited pixels: worst case
4.98:1 on the greeting and 5.88:1 on your name, against a 3:1 requirement. If you
swap in a lighter photo, re-check it — a bright background will break white text.

### 2. The four demo videos

Drop them in **`public/demos/`** with these exact names:

| File | Project |
|---|---|
| `ftc-8393-decode.mp4` | Robotics — FTC 8393 Decode |
| `omr-project.mp4` | Research — AutoOMR |
| `procedural-spider.mp4` | Math Explorations — the spider |
| `pac-man.mp4` | Games — Pac-Man |

They autoplay muted and looped when their division is active, and are skipped
entirely under reduced-motion. Keep them short (10–20s), silent, and compressed —
this is the largest thing on the page, so aim for under 3 MB each.

Until a file exists the panel shows a designed composition instead, and the reel
tightens its frame so there is no empty letterbox.

To change which project leads a division, move `featured: true` in the MDX files.

### 3. Your résumé

Put the PDF at `public/resume.pdf`, then set `resume: '/resume.pdf'` in
`src/lib/site.ts`. The link appears in the footer and the About page note
disappears. Leave it `null` until the file exists — never ship a link to a 404.

### 4. Write the project prose

You said you wanted to write these yourself, so I built the structure and left
the writing to you. Every file in `src/content/projects/` has a comment block
telling you what a reader will want to know about that specific project. Delete
the comment when you've written the section.

**Please handle these first — they are the honest-scoping ones:**

- `omr-project.mdx` — the repo is Justin's. The `role:` field must say what *you*
  contributed. Right now it says TODO, and that text will render on the page.
- `ftc-8393-decode.mdx`, `ftc-22312-into-the-deep.mdx`,
  `big-fish-path-follower.mdx`, `ftc-8393-red-team.mdx` — same: your role per
  season. You told me you were lead software developer, autonomous/pathing, and
  subsystem programmer across different seasons, but not which was which. Fill
  each in or delete the line.

### 5. The four private robotics repos

`_private-seasons.mdx` is a `draft: true` holding file listing Decode v1.5,
Decode v2, Reefscape, and Rebuilt Comp Bot. When you make them public, copy
`ftc-8393-decode.mdx` once per project, fill in the real URL and role, and delete
the holding file. If any stays private that is fine and normal for competition
code — write the entry with no `repo` link; the pages are built for that.

### 6. One decision I made for you

`bracket-generator` is the only project that didn't sort cleanly into your four
divisions — it's a tool, not a game. I filed it under **Games** because
tournaments are its subject. Move it if you disagree.

---

## Adding a new project

Create one `.mdx` file in `src/content/projects/`. That's the whole job — the
division pages, home reel, sitemap, and neighbour links all pick it up.

```yaml
---
title: 'Project name'
category: robotics        # robotics | research | math | games
summary: 'One sentence. No marketing.'
weight: 50                # higher sorts first within the division
period: 'Spring 2026'
stack: ['Python', 'OpenCV']
credentials: []           # verified results only — never aspirational
role: 'What you did'      # required if you didn't build it alone
sourceLost: false
links:
  - kind: demo            # demo | repo | video | paper | site
    href: 'https://...'
    label: 'Play it'
poster: './images/thing.png'   # optional
video: 'thing.mp4'             # optional, in public/demos/
featured: false                # one per division leads the home reel
draft: false
---
```

Set `draft: true` to hide a project without deleting it.

## Design system

`PRODUCT.md` holds product truth — audiences, positioning, what must never be
fabricated. `DESIGN.md` and `.impeccable/design.json` hold the visual system.
Read `DESIGN.md`'s **Do's and Don'ts** before changing anything visual; the rules
in it are the reasons behind decisions that otherwise look arbitrary.

## Moving to a custom domain

Two lines in `astro.config.mjs`: set `SITE` to your domain and `BASE` to `'/'`.
Add a `public/CNAME` file containing the domain. Every internal link resolves
through `url()` in `src/lib/site.ts`, so nothing else needs touching.
