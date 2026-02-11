# Lanter Landing Page

Landing page for [Lanter](https://lanter.dev) - an open-source development tool for converting applications from one programming language to another.

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js 20.x or higher
- npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/lanter-dev/landing-page.git
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

### Automatic Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The GitHub Actions workflow will handle the deployment automatically.

### Custom Domain Setup

The site is configured to use the custom domain `lanter.dev`. The domain is managed through:

1. **CNAME file**: Located in `public/CNAME`
2. **DNS Configuration**: Should point to GitHub Pages:
   - Add an `A` record pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a `CNAME` record pointing to `lanter-dev.github.io`

3. **GitHub Repository Settings**:
   - Go to repository Settings > Pages
   - Ensure "Custom domain" is set to `lanter.dev`
   - Enable "Enforce HTTPS"

## Project Structure

```
landing-page/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                 # Custom domain configuration
│   └── .nojekyll             # Prevents Jekyll processing
├── src/
│   ├── App.tsx               # Main landing page component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles (Tailwind)
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Links

- **Website**: [lanter.dev](https://lanter.dev)
- **GitHub Organization**: [github.com/lanter-dev](https://github.com/lanter-dev)
- **Repository**: [github.com/lanter-dev/landing-page](https://github.com/lanter-dev/landing-page)

## License

This project is open source and available under the MIT License.
