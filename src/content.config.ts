import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The three divisions Kevin's work sorts into. Order here is the order their
 * sections appear down the home page, so it is deliberate: the two carrying
 * competitive credentials and research lead.
 *
 * Games was a fourth. It was retired when the site collapsed onto a single page —
 * the cut was Kevin's, on the grounds that a curated page beats a complete one.
 * Removing it from this list is what removes it from the schema, so a project file
 * can no longer claim the category by accident.
 */
export const CATEGORIES = ['robotics', 'research', 'math'] as const;
export type Category = (typeof CATEGORIES)[number];

const category = z.enum(CATEGORIES);

/**
 * A link off the project page. `kind` drives the label and icon, so a demo
 * never renders looking like a repo. `note` exists for the honest cases —
 * a repo that is private during a competition season, for instance.
 */
const link = z.object({
  kind: z.enum(['demo', 'repo', 'video', 'paper', 'site']),
  href: z.string().url(),
  label: z.string().optional(),
  note: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category,

      /**
       * One sentence, present tense, no marketing. Shown in the index and as
       * the project page's standfirst — it is the only copy many visitors read.
       */
      summary: z.string(),

      /**
       * Sort key within a category. Higher wins. Reserved for genuine
       * standouts so the index has an honest hierarchy rather than nine equals.
       */
      weight: z.number().default(0),

      /** Human-readable, e.g. "Spring 2025" or "2024–2026". Never invented. */
      period: z.string().optional(),

      /** Programming languages used. Rendered as plain text, not badges. */
      languages: z.array(z.string()).default([]),

      /** Frameworks, libraries, and other tools built with. Rendered as plain text, not badges. */
      tools: z.array(z.string()).default([]),

      /**
       * Verified competitive results only. Anything here is a factual claim
       * that must be traceable to a repo description or an official record.
       */
      credentials: z.array(z.string()).default([]),

      /**
       * Kevin's own contribution, required on anything he did not build alone.
       * The schema enforces the honest-scoping principle rather than trusting
       * it to get remembered per file.
       */
      role: z.string().optional(),

      /** Set when the repository belongs to someone else or to a team. */
      collaborative: z
        .object({
          owner: z.string(),
          ownerUrl: z.string().url().optional(),
        })
        .optional(),

      /**
       * Stated once, plainly, then dropped. Two projects were written on a
       * school device and the source did not survive graduation; the playable
       * demo is the evidence and it leads.
       */
      sourceLost: z.boolean().default(false),

      links: z.array(link).default([]),

      /**
       * Optional throughout. Every surface is designed to be complete with no
       * media at all, because Kevin's files are not organised yet.
       */
      poster: image().optional(),
      posterAlt: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),

      /** Excluded from the site without deleting the file. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
