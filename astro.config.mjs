import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://stocksentry.bot',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind()],
  build: {
    format: 'file'
  }
});
