import type { ImageMetadata } from 'astro';

/**
 * Kevin's photo for the home page's About Me section, resolved the same way
 * the hero portrait and division photos are — present or not, `AboutMe.astro`
 * never has to guess.
 *
 * To add it: drop a file at `src/assets/about.{jpg,jpeg,png,webp,avif}`.
 */
const found = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/about.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export const ABOUT_PHOTO: ImageMetadata | null = Object.values(found)[0]?.default ?? null;
