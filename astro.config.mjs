import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tensorfactory.net',
  output: 'static',
  server: { host: true },
});


