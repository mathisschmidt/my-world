// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';
import remarkProjectDocs from './src/plugins/remark-project-docs.mjs';

// Projects included as git submodules in projects/ (their markdown is imported by articles)
const projects = {
  'projects/technology_watch': { repo: 'mathisschmidt/technology_watch', branch: 'main' },
};

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  markdown: {
    remarkPlugins: [[remarkProjectDocs, { projects }]],
  },
  output: 'static',
});
