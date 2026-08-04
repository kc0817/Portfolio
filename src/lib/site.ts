import type { Category } from '../content.config';

/**
 * Every fact about Kevin lives here. Nothing in this file is inferred — it is
 * what he confirmed during setup, and the résumé slot stays null until the
 * updated PDF exists rather than shipping a link to a 404.
 */
export const SITE = {
  name: 'Kevin Chen',
  descriptor: 'Purdue CS undergrad exploring robotics and computer science',
  school: 'Purdue University',
  gradYear: 2029,
  email: 'kevinjkchen17@gmail.com',
  github: 'https://github.com/kc0817',
  linkedin: 'https://www.linkedin.com/in/kevin-chen229463/',
  /** Set to '/resume.pdf' once the updated file is in `public/`. */
  resume: null as string | null,
} as const;

/**
 * Division metadata. `blurb` is the one line that introduces a category page,
 * and it describes what the work has in common rather than selling it.
 */
export const CATEGORY_META: Record<
  Category,
  { label: string; short: string; blurb: string }
> = {
  robotics: {
    label: 'Robotics',
    short: 'Robotics',
    blurb:
      'Competition robot code for FIRST Tech Challenge teams: autonomous routines, path following, trajectory simulation, and the tuning tools that make them repeatable.',
  },
  research: {
    label: 'Research',
    short: 'Research',
    blurb:
      'Computational work on real research problems, where the software has to hold up to measurement rather than just run.',
  },
  math: {
    label: 'Math Explorations',
    short: 'Math',
    blurb:
      'Engines and simulations built from the mathematics up, in an environment that supplied no graphics, physics, or interface libraries to lean on.',
  },
  games: {
    label: 'Games',
    short: 'Games',
    blurb:
      'Games written from scratch, where the interesting part was always the system underneath: collision, pathfinding, animation timing.',
  },
};

/** Resolve a path against Astro's configured base so links survive a domain move. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

export const LINK_LABELS: Record<string, string> = {
  demo: 'Play the demo',
  repo: 'Source',
  video: 'Watch',
  paper: 'Read the writeup',
  site: 'Visit',
};
