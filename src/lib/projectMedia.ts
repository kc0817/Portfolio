import { url } from './site';

/**
 * Every demo clip and still on the site, keyed by the project it belongs to.
 *
 * This module replaced three that came before it — `divisionVideos.ts`,
 * `projectVideos.ts`, and `divisionImages.ts` — and the collapse is the point.
 * Media used to be keyed two ways at once: by division, because the home page
 * showed four division tiles and each division page led with a division still,
 * and by project, because project cards had started growing clips of their own.
 * The division pages are gone. A clip now has exactly one subject, the project,
 * and exactly one place to be declared.
 *
 * Videos live in `public/media/` rather than `src/assets/` because Astro's asset
 * pipeline processes images, not video — these ship byte-for-byte as encoded.
 * Every clip is silent (audio is stripped at encode time; these autoplay, and an
 * autoplaying clip has no business making noise) and every one carries a poster
 * cut from its own frame 0, which is what shows before the first frame decodes,
 * what the card rests on between hovers, and what stands in for a visitor who
 * has asked for reduced motion.
 *
 * A project with no entry here is not broken: its card and its page both fall
 * back to `MediaSlot`'s designed empty state. Adding footage is a one-entry
 * change and nothing downstream has to be touched.
 */

/** The picture's box inside an encode, in image pixels. See `content` below. */
export interface ContentBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

/** A playable clip and the poster that stands in for it. Cards take these. */
export interface Cut {
  src: string;
  poster: string;
  width: number;
  height: number;
}

/**
 * A picture with no clip behind it. The project page's opening slot takes one of
 * these, because that slot deliberately shows a still and never plays — so pairing
 * it with an `mp4` would be declaring a file that nothing requests, and (as this
 * module briefly did) naming one that does not exist.
 */
export interface Still {
  poster: string;
  width: number;
  height: number;
  /**
   * Where the actual picture sits inside the file, set only where it carries black
   * bars around it. `PageIntro` crops to this box, so the frame takes the shape of
   * what is worth looking at and none of the bar survives.
   *
   * To measure: walk in from each edge while the row or column is uniformly
   * near-black, then confirm against the picture itself. Take a few pixels more than
   * the measurement gives — JPEG ringing leaves a dark transition column at each
   * boundary, and the frame scales the image down, so a seam one source pixel wide
   * still shows as a grey hairline. Every box below is the measured content inset by
   * 3px on each side.
   *
   * Black in a file is not automatically a bar. Look at the picture before adding a
   * box for it.
   */
  content?: ContentBox;
}

export interface ProjectMedia {
  /**
   * The card cut: exact 4:3, matching the card's own aspect, so `object-fit: cover`
   * has nothing left to crop. Framed on the subject rather than centre-cropped, and
   * cut so that no on-screen chrome (a legend, a button row, a keybinding hint) is
   * left half-visible at an edge.
   *
   * Frame 0 is the card's resting picture, so the cut starts at a moment where the
   * subject is actually in frame and reads on its own — not necessarily at the start
   * of the source.
   */
  card: Cut;
  /**
   * The uncropped still for the top of the project's own page, where the framing the
   * thing was captured in matters more than fitting a card. Omitted when the card cut
   * is already the full framing — `heroOf` derives one from the card in that case, so
   * three of the five projects with footage need only one file.
   */
  hero?: Still;
  /** What the clip shows, for the accessible name on the video element. */
  alt: string;
  /**
   * The same picture in the visitor's terms, captioned under it on the project
   * page — Kevin's own words for what he built, where `alt` is the same picture
   * described for someone who cannot see it. Both exist because they are
   * different jobs.
   */
  caption?: string;
}

function cut(slug: string, width: number, height: number): Cut {
  return {
    src: url(`/media/${slug}-card.mp4`),
    poster: url(`/media/${slug}-card.jpg`),
    width,
    height,
  };
}

function still(
  slug: string,
  width: number,
  height: number,
  content?: ContentBox,
): Still {
  return {
    poster: url(`/media/${slug}-full.jpg`),
    width,
    height,
    ...(content ? { content } : {}),
  };
}

export const PROJECT_MEDIA: Record<string, ProjectMedia> = {
  /**
   * Cut from the 1280x720 capture, whose picture sits at x=52..1228 behind black
   * pillars. 960x720 is the tightest full-height 4:3 that fits inside that
   * picture, so the card gets the whole field, the arc, and the scoring
   * structure with no bar and no second crop.
   */
  'ballistic-physics-solver': {
    card: cut('ballistic-physics-solver', 960, 720),
    hero: still('ballistic-physics-solver', 1280, 720, {
      left: 52,
      top: 0,
      width: 1176,
      height: 720,
    }),
    alt: 'Field simulation of the 8393 robot lining up and taking a shot, with the projectile arc drawn live.',
    caption:
      'Custom sim visualizing 3D trajectory and pose data to test physics ballistic solver',
  },

  /**
   * Cut from a 1080x1920 phone capture: a full-width 1080x810 window at y=430,
   * scaled to 960x720. Exact 4:3 with no bars, so one cut serves the card and the
   * page. Runs 1s–4.5s of the source: the first second is the camera still
   * settling, and the poster is frame 0, so it would have been the card's resting
   * picture. It ends where the robot drives out of frame — the source keeps rolling
   * on an empty field for another three seconds, and a hover loop that spends half
   * its length with no subject in it is a loop of nothing.
   */
  'vision-piece-collection': {
    card: cut('vision-piece-collection', 960, 720),
    alt: 'The 22312 robot lining up over the sample field and collecting blocks under Limelight vision.',
    caption:
      'Limelight-guided collection under test — the robot locating a sample and picking it up on its own',
  },

  /** 640x480 is exact 4:3 with no bars, so this one cut is both slots too. */
  autoomr: {
    card: cut('autoomr', 640, 480),
    alt: 'Overhead footage of a mouse with the tracking algorithm marking head and tail points frame by frame.',
    caption:
      'Integration trial run - testing neural network framerate and accuracy in classifying OMR',
  },

};

/**
 * The Explore More strip's seven slots, left to right.
 *
 * These are not projects and never get a page — they are the offcuts the portfolio
 * deliberately leaves out, shown as a drifting strip of thumbnails. So they live
 * here as bare clips rather than in `PROJECT_MEDIA`: no slug, no route, nothing to
 * look them up by. A `null` slot renders `MediaSlot`'s designed empty field.
 *
 * The `title` is the one piece of prose a slot gets. It is hidden at rest and fades
 * in under the tile the pointer is on, which is the whole reason these carry a name
 * at all: the strip pauses under the pointer, so a thumbnail that catches the eye can
 * be held still, watched, and — now — identified. It stays hidden otherwise because
 * seven captions drifting past would be a list, and this section is explicitly not
 * offering a list to read.
 *
 * To add a slot, drop `public/media/more-<name>-card.mp4` plus a `-card.jpg` poster
 * cut from its frame 0, then add a line below:
 *
 *     moreCut('kevmos', 'Kevmos', 'Kevmos in play, the ghosts closing in on two sides.'),
 *
 * Use `moreStill` where there is no clip, only a picture — same tile, same hover
 * label, no video element.
 *
 * **Cut these square.** The tile is 1:1 and stays 1:1 — hovering stops the drift and
 * plays the clip, and nothing about the frame changes. So the square is the whole of
 * what anyone ever sees, and a landscape clip dropped in here loses the sides to
 * `object-fit: cover` with no way to get them back. Centre-crop to square at encode
 * time and frame the subject inside it, exactly as a project card is cut to its own
 * 4:3, rather than leaving the crop to the browser.
 *
 * Three of the slots below — the cube, the spider, and the collision engine — are the
 * Math Explorations projects, moved here when that division was cut. They are the only
 * entries recut from an existing 4:3 project card instead of an original capture, which
 * is why each carries a note about what its square window costs: with no wider source to
 * go back to, the crop is a choice between things already in the frame rather than a
 * free one.
 *
 * (An earlier version of the strip widened the tile to 16:9 on hover, which is why
 * this note used to say the opposite and ask for landscape. That effect is gone.)
 */
export interface MoreItem {
  /** The label that fades in beneath the tile while it is pointed at. */
  title: string;
  /** The resting picture, and for a clip its frame 0. Absent on a slot with
   *  no footage yet, which falls through to the placeholder instead. */
  poster?: string;
  /** Absent on a slot that is a still and never had a clip behind it. */
  src?: string;
  alt: string;
}

export function moreCut(name: string, title: string, alt: string): MoreItem {
  return {
    title,
    src: url(`/media/more-${name}-card.mp4`),
    poster: url(`/media/more-${name}-card.jpg`),
    alt,
  };
}

export function moreStill(name: string, title: string, alt: string): MoreItem {
  return {
    title,
    poster: url(`/media/more-${name}-card.jpg`),
    alt,
  };
}

export const MARQUEE: (MoreItem | null)[] = [
  /* Cut square from an 846x842 capture — 832x832 inset three or four pixels on each
     side, which is what it takes to lose the window's own pale border. Runs 0–17.8s;
     at t=18 the CMU player draws its chrome back over the view and the source ends on
     black, and neither belongs in a loop. */
  moreCut(
    'raycaster',
    'Raycaster',
    'A first-person view of a grid maze drawn by raycasting, with a minimap tracking the camera as it turns.',
  ),

  /* 838x840, so square costs two pixels of height and nothing else. Runs 2.6s to the
     end of the 32s source — everything except the app's own "What is Perlin Noise?"
     modal, which is a wall of small print over black and would have been the tile's
     resting picture. The cut used to start at 2.5s, but the modal was still hanging
     on for the first three frames after that mark, so the poster (frame 0) rested on
     it anyway; starting 0.1s later lands past the flash, on the terrain itself.
     Nothing else is cut, because the toggling *is* the demo: the
     generator switches between the raw greyscale height field and the biome colouring
     eight times over the clip, and seeing the same terrain in both is what shows that
     the map is read out of the noise rather than drawn. */
  moreCut(
    'perlin-terrain',
    'Perlin Noise Terrain Generator',
    'A procedurally generated map toggling between its raw greyscale Perlin noise and the biome colouring read out of it — water, sand, grass and rock by height.',
  ),

  /* A 1080x1920 phone capture (the file is landscape with a rotation flag; ffmpeg
     applies it, so the crop is against the upright frame). 1080x1080 taken from the
     middle — top and bottom equally — which keeps the field, the robot, and the
     driver station in one square. Runs 3–15s, the stretch where the robot is driving
     rather than being set up. */
  moreCut(
    'swerve-drive',
    'Swerve Drive',
    'A swerve-drive robot translating and spinning at once across a practice field, each wheel steering independently.',
  ),

  /* Recut from the retired project card rather than from the original capture, which
     is not in the repo — 468x468 centred in that 624x468 frame, scaled to 720x720. The
     cube's own bounding box is very nearly square and sits in the middle of the frame,
     so the centre window takes it whole and the 78px lost from each side is the white
     the renderer draws around it. Runs the card's full 13s. */
  moreCut(
    'rubiks-cube',
    '3D Rendered Rubik’s Cube',
    'A 3D Rubik’s cube built from scratch, rotating about its coordinate axes.',
  ),

  /* Also recut from its retired 960x720 card. Cropped at x=30 rather than centred,
     which is the one place a tile here departs from a plain centre crop: the spider
     tracks x=36..744 over the clip, a span of 708 that fits inside 720 with room to
     spare, but only if the window starts near the left edge. Centring it (x=120) would
     have cut the spider off entirely during its approach, which is the part of the clip
     worth watching. The cost is the far right of the terrain and the red marker where it
     drifts past x=750. Runs the card's full 7.7s. */
  moreCut(
    'procedural-spider',
    'Procedurally Animated Spider',
    'A wireframe spider crossing stepped terrain, its legs re-planting one at a time as the ground height changes under it.',
  ),

  /* 740x742, so square costs two pixels of height. Runs the source end to end and rests
     on its own frame 0: the clip is one continuous demonstration — functions typed into
     the panel, the panel sliding away to the plotted curves, back to edit them, out to
     the new curves — and any window smaller than the whole thing cuts that loop
     somewhere in the middle of it. */
  moreCut(
    'graphing-calculator',
    'Custom Graphing Calculator',
    'A graphing calculator built from scratch: equations typed into an input panel, then the panel sliding away to the curves plotted from them.',
  ),

  /* The one tile a square crop genuinely costs something. Recut from the retired
     960x720 card, 720x720 at x=120. The chart strip runs the full width of that frame
     as one continuous panel — there is no gutter between the three charts to cut on, so
     every 720-wide window slices one of them, and this window slices the C4 Energy chart
     at the left edge. x=120 is the measured least-bad: over the trimmed clip the two
     circles span x=156..845, and of the five candidate windows it is the only one that
     keeps both of them in frame throughout (the edge windows drop one for 15 of 41
     sampled frames).

     Trimmed to 6.5s of the card's 8.8s for the same reason. The circles separate
     steadily after the impact, and past that mark the cyan one leaves any square window
     — so the tail is the part of the clip where the tile would be showing one circle and
     a lot of empty floor. What survives is the collision, the separation, and the chart
     panel switching from energy to momentum, which is the whole of what the demo is. */
  moreCut(
    'physics-collision',
    'Physics Collision Engine',
    'Two circles falling and colliding in a 2D rigid-body sim, with live energy charts tracking kinetic and potential energy either side of the impact.',
  ),
];

/** The clip a project's card plays on hover, or null if it has no footage yet. */
export function cardOf(id: string): (Cut & { alt: string }) | null {
  const media = PROJECT_MEDIA[id];
  return media ? { ...media.card, alt: media.alt } : null;
}

/**
 * The still at the top of a project's page, in its uncropped framing. Falls through
 * to the card cut where that cut is already the full picture — the card's poster is
 * a still of exactly the right thing, so there is no second file to ship.
 *
 * A still, not the clip: the page's opening is a framed picture, and motion on
 * arrival would be demanding attention rather than answering it. The clip plays on
 * the card the visitor hovered to get here.
 */
export function heroOf(
  id: string,
): (Still & { alt: string; caption: string | null }) | null {
  const media = PROJECT_MEDIA[id];
  if (!media) return null;
  const { poster, width, height } = media.hero ?? media.card;
  return {
    poster,
    width,
    height,
    ...(media.hero?.content ? { content: media.hero.content } : {}),
    alt: media.alt,
    caption: media.caption ?? null,
  };
}
