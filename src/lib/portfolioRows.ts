import type { Category } from '../content.config';

/**
 * The single source of truth for how projects are arranged on the home page —
 * and, by extension, the order a visitor moves through them via a project
 * page's prev/next nav. `Portfolio.astro` renders these rows; `[...id].astro`
 * flattens them into one sequence so "next" from the last project in a row
 * carries on into the first project of the next row, across categories.
 *
 * Hand-arranged, not weight-sorted, for the same reason `Portfolio.astro`'s
 * original comment gave: which project leads a row is an editorial call. If
 * you reorder a row here, the portfolio section reorders with it.
 */
export interface PortfolioRow {
  category: Category;
  /** Left to right, as they appear. */
  ids: readonly string[];
}

export const PORTFOLIO_ROWS: readonly PortfolioRow[] = [
  {
    category: 'robotics',
    ids: ['ballistic-physics-solver', 'vision-piece-collection'],
  },
  {
    category: 'research',
    ids: ['autoomr'],
  },
];

/** Every project id, in the flattened order the home page lays them out. */
export const PORTFOLIO_ORDER: readonly string[] = PORTFOLIO_ROWS.flatMap((row) => row.ids);
