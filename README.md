# My World

A modern, responsive website built with Astro and TypeScript, featuring articles, resume, and interactive components.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## Features

- Static site generation with Astro
- TypeScript support
- Responsive design
- Interactive components (RobotAssembler, FloatingRobot, etc.)
- Article management system
- Resume section with experience tree
- Tailwind CSS for styling

## Project Structure

```
.
├── src/
│   ├── assets/              # Static assets (images, icons, etc.)
│   ├── components/          # Reusable React components
│   │   ├── ArticleCard.tsx
│   │   ├── ExperienceTree.tsx
│   │   ├── FloatingRobot.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── RobotAssembler.tsx
│   │   ├── StudentRobot.tsx
│   │   └── articles/        # Article-related components
│   ├── content/             # Content files (MDX, markdown, etc.)
│   │   └── articles/        # Articles content
│   ├── data/                # Data files (JSON, TS, etc.)
│   │   ├── articles.ts
│   │   └── profile.ts
│   ├── layouts/             # Layout components
│   │   └── Layout.astro
│   ├── pages/               # Page components (Astro)
│   │   ├── index.astro
│   │   ├── resume.astro
│   │   └── articles/
│   │       └── [slug].astro
│   └── styles/              # CSS files
├── public/                  # Static public assets
├── package.json             # Project dependencies and scripts
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
└── README.md                # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mathisschmidt/my-world.git
```

2. Navigate to the project directory:
```bash
cd my-world
```

3. Install dependencies:
```bash
npm install
```

## Usage

### Development Server

To start the development server:
```bash
npm run dev
```

### Build for Production

To build the project for production:
```bash
npm run build
```

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Technologies

- [Astro](https://astro.build/) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [Node.js](https://nodejs.org/) - Runtime environment
