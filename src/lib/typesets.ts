/**
 * Three candidate type systems for the portfolio, built as full alternatives
 * rather than font swaps: each one sets its own families, role weights,
 * tracking, leading, and display scale in `src/styles/typesets.css`, keyed to
 * `[data-typeset]` on the document element.
 *
 * The incumbent — Archivo for everything, JetBrains Mono for reported values —
 * is the baseline all three are arguing against. Only the `/type-lab` route
 * loads them; the live site is untouched until one is chosen.
 */

export interface Typeset {
  id: string;
  /** Short name, set in that variant's own display face on the lab page. */
  name: string;
  /** What the set is trying to buy, in one line. */
  claim: string;
  roles: {
    display: string;
    body: string;
    data: string;
  };
  /** Why this pairing, argued against the product's two hardest readers. */
  rationale: string;
  /** The honest cost. Every set has one. */
  tradeoff: string;
}

export const TYPESETS: Typeset[] = [
  {
    id: 'ledger',
    name: 'Ledger',
    claim: 'The record gets a masthead.',
    roles: {
      display: 'Newsreader — optical-sized serif',
      body: 'Archivo — unchanged',
      data: 'JetBrains Mono — unchanged',
    },
    rationale:
      'The smallest change that buys the most: only the voice-carrying tier moves. A serif with real optical sizing puts a published, edited register on the name and the section headings — the register a graduate reader is already calibrated to — while every word of running prose and every reported value stays exactly where it is. Convention over invention, executed one tier up.',
    tradeoff:
      'Two families where one did the job. The serif has to earn its 40 KB, and at phone widths the hero contrast between serif display and grotesque body is subtler than it looks at 1440.',
  },
  {
    id: 'instrument',
    name: 'Instrument',
    claim: 'Nothing in the letterforms; everything in the measurements.',
    roles: {
      display: 'Inter Tight — condensed neo-grotesque',
      body: 'Inter — optical-sized',
      data: 'Geist Mono',
    },
    rationale:
      'The most disciplined of the three, and the one that reads as a working instrument. Inter Tight compresses the hero without shouting; Inter at body size is the most legible screen face made, with automatic optical sizing doing the work Archivo asks tracking to do. Geist Mono is narrower than JetBrains, so a rank or a language sits tighter against the value it labels.',
    tradeoff:
      'It is the safe answer. Inter is the most-used interface face on the web, so the page gains precision and loses whatever fingerprint Archivo was giving it. Nothing here would make anyone remember the site.',
  },
  {
    id: 'specimen',
    name: 'Specimen',
    claim: 'Someone with taste built this, and they signed it.',
    roles: {
      display: 'Fraunces — variable soft/wonk old-style',
      body: 'IBM Plex Sans',
      data: 'IBM Plex Mono',
    },
    rationale:
      'The one with a point of view. Fraunces has a genuinely authored face — flared stems, a wonky leg on the R, optical sizing that opens up at display and tightens at reading — so the hero stops being a name in a nice sans and starts being a mark. Plex underneath is the engineering-documentation lineage: humanist, unfussy, and a real superfamily, so the sans and the mono share skeletons and the reported values sit in the prose instead of on top of it.',
    tradeoff:
      'The loudest, and the one most likely to date. Fraunces at the wrong weight or the wrong wonk reads as a coffee brand, so the display settings here are deliberately restrained — and it still asks Kevin to be comfortable with a page that has an opinion before you read a word of it.',
  },
];

export const TYPESET_IDS = TYPESETS.map((t) => t.id);

export const TYPESET_BY_ID = Object.fromEntries(
  TYPESETS.map((t) => [t.id, t]),
) as Record<string, Typeset>;
