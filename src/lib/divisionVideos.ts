import type { Category } from '../content.config';
import { url } from './site';

/**
 * One demo clip per division, in two cuts of the same footage. Videos live in
 * `public/media/` rather than `src/assets/` because Astro's asset pipeline
 * processes images, not video — these ship byte-for-byte as encoded.
 *
 * The two cuts exist because the two slots want different framing. The home
 * page's division tile is a card, so it gets `card`: a centre-cropped square
 * that fills the tile at any tile aspect without the subject drifting out of
 * frame. The big slot at the top of the division page is the place to actually
 * watch the thing, so it gets `full`: the original framing, uncropped, with
 * its real dimensions carried alongside so the slot can take the clip's own
 * aspect ratio instead of cropping it into a fixed one.
 *
 * Both cuts are silent (audio is stripped at encode time — these autoplay, and
 * an autoplaying clip has no business making noise) and both carry a poster
 * still, which is what shows before the first frame decodes and what stands in
 * when a visitor has asked for reduced motion.
 *
 * To re-encode after replacing a source: centre-crop to square at 720x720 for
 * `-card.mp4`, cap width at 1280 for `-full.mp4`, h264 / yuv420p / faststart /
 * no audio for both, and grab a matching frame as `-card.jpg` / `-full.jpg`.
 */
export interface DivisionVideo {
  card: { src: string; poster: string };
  full: { src: string; poster: string; width: number; height: number };
}

/** Real pixel dimensions of each `-full.mp4`, so the page never guesses. */
const FULL_SIZE: Record<Category, { width: number; height: number }> = {
  robotics: { width: 1280, height: 720 },
  research: { width: 640, height: 480 },
  math: { width: 1280, height: 720 },
  games: { width: 1280, height: 720 },
};

function cuts(slug: Category): DivisionVideo {
  const { width, height } = FULL_SIZE[slug];
  return {
    card: {
      src: url(`/media/${slug}-card.mp4`),
      poster: url(`/media/${slug}-card.jpg`),
    },
    full: {
      src: url(`/media/${slug}-full.mp4`),
      poster: url(`/media/${slug}-full.jpg`),
      width,
      height,
    },
  };
}

export const DIVISION_VIDEO: Record<Category, DivisionVideo> = {
  robotics: cuts('robotics'),
  research: cuts('research'),
  math: cuts('math'),
  games: cuts('games'),
};

/** What each clip shows, for the accessible name on the video element. */
export const DIVISION_VIDEO_ALT: Record<Category, string> = {
  robotics:
    'Field simulation of the 8393 robot lining up and taking a shot, with the projectile arc drawn live.',
  research:
    'Overhead footage of a mouse with the tracking algorithm marking head and tail points frame by frame.',
  math: 'A 3D Rubik’s cube built from scratch, rotating about its coordinate axes.',
  games: 'A hand-written Pac-Man clone in play, with ghosts pathfinding after Pac-Man.',
};
