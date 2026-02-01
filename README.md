# 🚀 Modern Portfolio Website

A blazing-fast, modern portfolio website built with **Astro**, **React**, **TypeScript**, and **Tailwind CSS**. Features a clean design, animated robot elements, and automatic deployment via GitHub Actions.

## ✨ Features

- 🎨 **Modern Design**: Clean, responsive interface with dark theme and gradient accents
- 🤖 **Interactive Robot Animations**: Cool robot elements that respond to mouse movement
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Blazing Fast**: Built with Astro for optimal performance
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML structure
- 📝 **Article System**: Easy-to-manage blog/article system with markdown support
- 🎯 **Smooth Animations**: CSS and SVG animations for engaging user experience
- 🚀 **Auto-Deploy**: GitHub Actions workflow for seamless deployment
- 🔒 **Security Ready**: Nginx configuration with security headers

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static Site Generator
- **[React](https://reactjs.org/)** - UI Components
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD
- **[Nginx](https://nginx.org/)** - Web Server

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ArticleCard.tsx     # Article preview cards
│   ├── FloatingRobot.tsx   # Animated robot for homepage
│   ├── ResumeSection.tsx   # Resume section wrapper
├── data/               # Data files
│   ├── articles.ts         # Articles content
│   └── profile.ts          # Personal information
├── layouts/            # Layout components
│   └── Layout.astro        # Main layout
├── pages/              # Page routes
│   ├── articles/           # Article pages
│   │   └── [id].astro         # Dynamic article routes
│   ├── articles.astro      # Articles listing
│   ├── index.astro         # Homepage
│   └── resume.astro        # Resume page
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd proto-web-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build artifacts
- `npm run lint` - Run Astro check

## 📝 Customization

### 1. Personal Information

Update your personal details in `src/data/profile.ts`:

```typescript
export const profile: Profile = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  email: 'your.email@example.com',
  links: {
    github: 'https://github.com/yourusername',
    gitlab: 'https://gitlab.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
```

### 2. Experience & Education

Update your work experience and education in the same file:

```typescript
export const experience: Experience[] = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more experiences...
];
```

### 3. Adding Articles

Add new articles to `src/data/articles.ts`:

```typescript
{
  id: 'your-article-slug',
  title: 'Your Article Title',
  description: 'Brief description...',
  date: '2025-01-15',
  tags: ['JavaScript', 'Web Development'],
  content: `
# Your Article Title

Your article content in markdown format...

## Section 1

Content here...
  `,
}
```

### 4. Styling

The project uses Tailwind CSS. Customize colors and animations in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
    },
    // Add custom animations, fonts, etc.
  },
}
```

## 🚀 Deployment

### Automatic Deployment with GitHub Actions

1. **Set up a server** (Ubuntu/Debian recommended)
   ```bash
   # Run the setup script on your server
   ./setup-server.sh /var/www/portfolio yourdomain.com
   ```

2. **Configure GitHub Secrets**

   Go to your GitHub repository → Settings → Secrets and Variables → Actions

   Add these secrets:
   - `SERVER_HOST`: Your server IP or domain
   - `SERVER_USER`: SSH username (usually `ubuntu` or `root`)
   - `SSH_PRIVATE_KEY`: Your SSH private key
   - `SERVER_PATH`: `/var/www/portfolio` (or your chosen path)

3. **Deploy**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

   The GitHub Action will automatically build and deploy your site!

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder** to your web server

### SSL Certificate (Recommended)

After deployment, secure your site with SSL:

```bash
sudo certbot --nginx -d yourdomain.com
```

## 🎨 Customization Guide

### Colors & Branding

The site uses a modern color palette with cyan, blue, and purple gradients. You can customize these in the Tailwind config or by updating the CSS custom properties.

### Robot Animations

The robot animations are built with SVG and can be customized in:
- `FloatingRobot.tsx` - Homepage robot

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the `Layout` component for consistent styling
3. Add navigation links in `Layout.astro`

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ performance
- 🎯 **Core Web Vitals**: Optimized
- 📱 **Mobile Friendly**: 100% responsive
- ♿ **Accessible**: Semantic HTML and ARIA labels

## 🛡️ Security Features

- Security headers in Nginx config
- HTTPS ready with Let's Encrypt
- Content Security Policy
- XSS protection
- Input sanitization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](../../issues)
2. Review the Astro [documentation](https://docs.astro.build/)
3. Join the [Astro Discord](https://astro.build/chat)

## 🎉 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ and lots of ☕

**Happy coding!** 🚀