// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const excludedRoutes = new Set([
  '/consultation/',
  '/business-areas/oem-odm/',
  '/services/oem-odm/',
  '/services/kbeauty-oem-odm/'
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://korea-in.com',

  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
        return !excludedRoutes.has(normalizedPath);
      }
    })
  ],

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  }
});
