import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sashanavruzova.github.io',
  outDir: './dist',
  build: {
    assets: '_assets'
  }
});
