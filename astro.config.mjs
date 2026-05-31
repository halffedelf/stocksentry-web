import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stocksentry.bot',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edge: false, // Ensure we are using Serverless, not Edge
  }),
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/api'),
    }),
  ],
  build: {
    // format: 'file'
  }
});
