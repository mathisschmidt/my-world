export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    id: 'getting-started-with-astro',
    title: 'Getting Started with Astro',
    description: 'Learn how to build blazing fast websites with Astro framework',
    date: '2025-09-15',
    tags: ['Astro', 'JavaScript', 'Web Development'],
    content: `
# Getting Started with Astro

Astro is a modern static site generator that delivers lightning-fast performance...

## Why Astro?

- Zero JavaScript by default
- Component islands architecture
- Framework agnostic

## Getting Started

\`\`\`bash
npm create astro@latest
\`\`\`
    `,
  },
  {
    id: 'react-best-practices',
    title: 'React Best Practices in 2025',
    description: 'Modern patterns and practices for building React applications',
    date: '2025-08-20',
    tags: ['React', 'TypeScript', 'Best Practices'],
    content: `
# React Best Practices in 2025

Discover the latest patterns and practices for React development...

## Key Practices

1. Use TypeScript for type safety
2. Embrace server components
3. Optimize performance with React.memo
    `,
  },
  {
    id: 'my-side-project-journey',
    title: 'Building My First SaaS: A Journey',
    description: 'Lessons learned from building and launching a side project',
    date: '2025-07-10',
    tags: ['Side Project', 'Startup', 'Learning'],
    content: `
# Building My First SaaS: A Journey

Here's what I learned building my first SaaS application...

## The Idea

It started with a simple problem I wanted to solve...
    `,
  },
];
