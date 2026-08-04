// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: the project is served from a subpath unless a custom domain is
// added later. Both values live here alone so switching to a custom domain is a
// two-line change (set `site` to the domain, set `base` to '/') with no edits
// anywhere else — every internal link is built through `src/lib/url.ts`.
const SITE = 'https://kc0817.github.io';
const BASE = '/Portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  server: {
    port: Number(process.env.PORT) || 4325,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
    // /type-lab is the internal typography comparison, not a page of the site.
    // It already carries `noindex`; this keeps it out of the sitemap too.
    sitemap({ filter: (page) => !page.includes('/type-lab') }),
  ],
  build: {
    // Emit `/projects/foo/index.html` so links work without server rewrites.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Sharp runs at build time; Pages serves the derived files statically.
    responsiveStyles: true,
  },
});
