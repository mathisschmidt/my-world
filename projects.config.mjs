// Projects whose markdown is reused by articles.
// Only the listed files are downloaded (scripts/fetch-projects.mjs, run before dev/build)
// into projects/<name>/, which is git-ignored: nothing is copied into this repository.
export const projects = {
  technology_watch: {
    repo: 'mathisschmidt/technology_watch',
    branch: 'main',
    files: ['README.md', 'CLAUDE.md'],
  },
};
