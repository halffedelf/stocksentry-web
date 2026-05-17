import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://stocksentry.bot',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edge: false, // Ensure we are using Serverless, not Edge
  }),
  integrations: [tailwind()],
  build: {
    // format: 'file'
  }
});
