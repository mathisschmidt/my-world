// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';
import remarkProjectDocs from './src/plugins/remark-project-docs.mjs';
import { projects as projectsConfig } from './projects.config.mjs';

// Markdown fetched into projects/<name>/ is rendered with links pointing to its repository
const projects = Object.fromEntries(
  Object.entries(projectsConfig).map(([name, cfg]) => [`projects/${name}`, cfg])
);

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  markdown: {
    remarkPlugins: [[remarkProjectDocs, { projects }]],
  },
  output: 'static',
});
