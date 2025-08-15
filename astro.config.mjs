import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sashanavruzova.github.io',
  base: '/portfolio',
  outDir: './dist',
  build: {
    assets: '_assets'
  }
});
