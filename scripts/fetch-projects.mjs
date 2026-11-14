// Downloads the markdown files listed in projects.config.mjs into projects/<name>/.
// Runs automatically before `npm run dev` and `npm run build`.
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { projects } from '../projects.config.mjs';

let failed = false;
for (const [name, { repo, branch = 'main', files }] of Object.entries(projects)) {
  for (const file of files) {
    const url = `https://raw.githubusercontent.com/${repo}/${branch}/${file}`;
    const dest = path.join('projects', name, file);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await mkdir(path.dirname(dest), { recursive: true });
      await writeFile(dest, await res.text());
      console.log(`fetched ${repo}/${file}`);
    } catch (err) {
      // Offline: keep the copy from a previous fetch if there is one
      const cached = await access(dest).then(() => true, () => false);
      console.warn(`could not fetch ${url} (${err.message})${cached ? ', using the cached copy' : ''}`);
      if (!cached) failed = true;
    }
  }
}
if (failed) process.exit(1);
