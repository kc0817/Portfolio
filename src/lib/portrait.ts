import type { ImageMetadata } from 'astro';

/**
 * Kevin's hero portrait, resolved once at build time and shared, because two
 * things depend on whether it exists: the hero's composition and whether the
 * header drops its bottom rule to ride on the photo. Detecting it in one place
 * keeps those two from disagreeing.
 *
 * To add it: drop the file at `src/assets/hero.jpg` (or .png/.webp/.avif).
 */
const found = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/hero.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export const PORTRAIT: ImageMetadata | null = Object.values(found)[0]?.default ?? null;
