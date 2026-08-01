import type { ImageMetadata } from 'astro';
import type { Category } from '../content.config';

/**
 * One representative photo per division, resolved once at build time the
 * same way the hero portrait is (see `portrait.ts`) — present or not, nothing
 * downstream has to guess. The home page's division tile and that division's
 * topic page share this exact asset, so dropping one file in updates both.
 *
 * To add one: drop a file at `src/assets/division-<name>.{jpg,jpeg,png,webp,avif}`.
 */
const robotics = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/division-robotics.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);
const research = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/division-research.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);
const math = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/division-math.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);
const games = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/division-games.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export const DIVISION_IMAGE: Record<Category, ImageMetadata | null> = {
  robotics: Object.values(robotics)[0]?.default ?? null,
  research: Object.values(research)[0]?.default ?? null,
  math: Object.values(math)[0]?.default ?? null,
  games: Object.values(games)[0]?.default ?? null,
};
