import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://harsh-wildtwin.github.io/tensor-factory',
  base: '/tensor-factory/',
  output: 'static',
  server: { host: true },
});


