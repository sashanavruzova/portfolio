# Sasha Navruzova - Portfolio Website

A modern, responsive portfolio website built with [Astro](https://astro.build) and Tailwind CSS. This website showcases Sasha Navruzova's work as an iOS Engineer and Indie Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by modern portfolio websites
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Astro for optimal performance
- **SEO Optimized**: Proper meta tags and structured content
- **EU Compliant**: GDPR-compliant privacy policy and terms of use
- **Easy to Maintain**: Component-based architecture for easy updates

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Deployment**: GitHub Pages
- **Fonts**: Inter (Google Fonts)

## 📱 Apps Showcased

Currently featuring:
- **Verbly - Learn Hebrew**: A language learning app for Hebrew verbs

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── favicon.svg        # Website favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.astro   # Navigation header
│   │   ├── Hero.astro     # Hero section
│   │   ├── AppCard.astro  # Individual app display
│   │   ├── AppsSection.astro # Apps showcase section
│   │   └── Footer.astro   # Footer component
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout component
│   └── pages/             # Page components
│       ├── index.astro    # Homepage
│       ├── terms.astro    # Terms of use
│       └── privacy.astro  # Privacy policy
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Customization

### Adding New Apps

To add a new app to the portfolio:

1. Open `src/components/AppsSection.astro`
2. Add a new app object to the `apps` array:

```javascript
{
  name: "Your App Name",
  description: "App description here...",
  icon: "🚀",
  appStoreUrl: "https://apps.apple.com/...",
  category: "Category",
  price: "Free",
  rating: 5.0,
  downloads: "1K+"
}
```

### Updating Profile Information

- **Hero Section**: Edit `src/components/Hero.astro`
- **Contact Information**: Update email addresses in components
- **Profile Image**: Replace `public/profile.jpg` with your image

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.mjs`
- Component styles in individual `.astro` files
- Global styles in `src/layouts/Layout.astro`

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. Create a GitHub Action workflow (see below)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 📄 Legal Pages

The website includes:
- **Terms of Use**: EU-compliant terms of service
- **Privacy Policy**: GDPR-compliant privacy policy

These pages are automatically generated and include proper legal language for European Union compliance.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Code Style

- Use consistent indentation (2 spaces)
- Follow Astro component patterns
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels

## 📞 Contact

For questions or support:
- **Email**: alnavruzova@gmail.com
- **Location**: Berlin, Germany

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sasha Navruzova
