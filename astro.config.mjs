import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tensorfactory.net',
  base: '/',
  output: 'static',
  server: { host: true },
});


