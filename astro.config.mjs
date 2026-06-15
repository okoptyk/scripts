import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://okoptyk.github.io',
  base: '/scripts',
  build: { format: 'directory' },
  trailingSlash: 'always',
});
