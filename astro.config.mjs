import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.rodriguezlandscapingservice.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|gracias)\/?$/.test(page),
    }),
  ],
});
