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
 * The two in-page destinations the nav points at. Ids rather than paths, because
 * both live on the home page now — there is nowhere else to go. `SiteHeader`
 * turns these into bare fragments on the home page (so they scroll) and absolute
 * links anywhere else (so they navigate), and its scroll-spy reads the same ids
 * back off the document, so the nav and the sections cannot drift apart.
 */
export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Portfolio' },
  { id: 'more', label: 'Explore More' },
] as const;

/**
 * Division metadata. `blurb` is the one line that introduces a division, and it
 * describes what the work has in common rather than selling it.
 *
 * These used to head a page each. With the topic pages gone they head the two
 * sections of the home page's portfolio instead — which makes them the only place
 * this copy exists, so nothing here is surplus: the robotics blurb in particular
 * carries the credential line (#1 in PA, six software awards) that no project card
 * states on its own.
 *
 * `short` is what the old nav used for its four division links. Nothing reads it
 * now that the nav is About and Portfolio, but it stays because it is the honest
 * abbreviation of each label and the next surface that needs one will want it.
 */
export const CATEGORY_META: Record<
  Category,
  { label: string; short: string; blurb: string }
> = {
  robotics: {
    label: 'FIRST Robotics',
    short: 'Robotics',
    blurb:
      'From 2024-2026, I programmed custom robots in both FTC and FRC as the lead software developer in the BrainSTEM organization. By adopting industry standard robotics algorithms, BrainSTEM is ranked #1 in PA for autonomous navigation while winning 6 software-specific awards.',
  },
  research: {
    label: 'Research',
    short: 'Research',
    blurb:
      'For summer 2024, I was a student researcher at UPMC Hillman Academy and returned summer 2025 to work with Dr. Shaohua Pi (my mentor), and Justin Chen (my lab partner) in the University of Pittsburgh Department of Ophthalmology.',
  },
};

/** Resolve a path against Astro's configured base so links survive a domain move. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/**
 * An absolute link to a section of the home page — the form to use from any page
 * that is not the home page, since a bare fragment there would just look for the
 * id in the wrong document.
 *
 * Takes any id on the home page, not only the two in `SECTIONS`: the project pages'
 * eyebrows point at a division (`/#robotics`), which is a section of the portfolio
 * rather than a nav destination.
 *
 * The header is the one caller that does not always want this — on the home page it
 * emits the bare fragment instead, so the link scrolls rather than reloading.
 */
export function sectionUrl(id: string): string {
  return `${url('/').replace(/\/$/, '')}/#${id}`;
}

export const LINK_LABELS: Record<string, string> = {
  demo: 'Play the demo',
  repo: 'Source',
  video: 'Watch',
  paper: 'Read the writeup',
  site: 'Visit',
};
