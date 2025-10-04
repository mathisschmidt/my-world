# Portfolio Website

A modern, clean portfolio website built with Astro, React, TypeScript, and Tailwind CSS featuring robot-themed animations.

## Features

- Modern, responsive design
- Animated robot mascot that follows mouse movement
- Resume page with smooth section transitions
- Articles system for blog posts and technical writing
- Easy content management through data files
- Automatic deployment via GitHub Actions

## Project Structure

```
/
├── src/
│   ├── components/       # React and Astro components
│   ├── data/            # Content data files
│   │   ├── articles.ts  # Article definitions
│   │   └── profile.ts   # Profile, education, experience, skills
│   ├── layouts/         # Page layouts
│   └── pages/           # Page routes
├── public/              # Static assets
└── .github/
    └── workflows/       # GitHub Actions
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

## Customization

### Personal Information

Edit `src/data/profile.ts` to update:
- Name, title, bio, email
- Social links (GitHub, GitLab, LinkedIn, Twitter)
- Education history
- Work experience
- Technical and soft skills

### Articles

Add new articles to `src/data/articles.ts`. Each article needs:
- Unique ID (used in URL)
- Title and description
- Publication date
- Tags
- Content (supports markdown formatting)

### Styling

Customize colors in `tailwind.config.mjs`:
- `primary`: Main brand color
- `secondary`: Accent color
- `accent`: Highlight color

## Deployment

### Automatic Deployment with GitHub Actions

1. Run the server setup script on your target server:

```bash
./setup-server.sh /var/www/portfolio
```

2. Configure GitHub repository secrets:
   - `SERVER_HOST`: Your server IP or domain
   - `SERVER_USERNAME`: SSH username
   - `SERVER_SSH_KEY`: SSH private key (entire content)
   - `SERVER_TARGET_PATH`: Deployment path (e.g., `/var/www/portfolio`)

3. Push to `master` or `main` branch to trigger automatic deployment

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` directory to your web server
3. Configure your web server to serve static files

## Technologies

- **Astro**: Static site generator
- **React**: Interactive components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **GitHub Actions**: Automated deployment
