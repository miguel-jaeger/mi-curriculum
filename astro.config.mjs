import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  site: isVercel ? 'https://curriculum-vitae-xi-nine.vercel.app' : 'https://miguel-jaeger.github.io',
  base: isVercel ? '/' : '/mi-curriculum',
  integrations: [mdx(), sitemap()]
});