// Remark plugin for markdown files fetched from a project repository (projects/<name>/).
// Those files are written for GitHub, so when they are rendered inside an article:
//  - relative links/images are rewritten to point to the GitHub repository
//    (images to raw.githubusercontent.com, links to github.com/.../blob/<branch>/),
//  - the document title (first "# Title") is removed: the article already has one.
import { visit } from 'unist-util-visit';
import path from 'node:path';

const ABSOLUTE = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\/)/i;

export default function remarkProjectDocs({ projects = {} } = {}) {
  return (tree, file) => {
    const filePath = file.path || file.history?.[0];
    if (!filePath) return;

    const entry = Object.entries(projects).find(([dir]) =>
      path.resolve(filePath).startsWith(path.resolve(dir) + path.sep)
    );
    if (!entry) return;

    const [dir, { repo, branch = 'main' }] = entry;
    // Directory of the markdown file, relative to the project root (for nested docs)
    const relDir = path.relative(path.resolve(dir), path.dirname(path.resolve(filePath)));
    const resolve = (url, raw) => {
      if (!url || ABSOLUTE.test(url)) return url;
      const target = path.posix.join(relDir.split(path.sep).join('/'), url);
      return raw
        ? `https://raw.githubusercontent.com/${repo}/${branch}/${target}`
        : `https://github.com/${repo}/blob/${branch}/${target}`;
    };

    let titleRemoved = false;
    visit(tree, (node, index, parent) => {
      if (node.type === 'heading' && node.depth === 1 && !titleRemoved && parent) {
        titleRemoved = true;
        parent.children.splice(index, 1);
        return index; // revisit the node now at this index
      }
      if (node.type === 'image' || node.type === 'definition') node.url = resolve(node.url, node.type === 'image');
      else if (node.type === 'link') node.url = resolve(node.url, false);
      else if (node.type === 'html') {
        node.value = node.value
          .replace(/(<img\b[^>]*\bsrc=")([^"]+)"/gi, (_, pre, url) => `${pre}${resolve(url, true)}"`)
          .replace(/(<a\b[^>]*\bhref=")([^"]+)"/gi, (_, pre, url) => `${pre}${resolve(url, false)}"`);
      }
    });
  };
}
