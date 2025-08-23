# GitHub Pages Deployment Guide

This site is configured for automatic deployment to GitHub Pages. Here's how it works:

## Automatic Deployment

1. **Push to main branch** - Any push to the `main` branch triggers automatic deployment
2. **GitHub Actions** - The `.github/workflows/deploy.yml` workflow handles the build and deployment
3. **Live site** - Your site will be available at `https://ornate-bonzai.github.io/ornate-bonzai/`

## Setup Steps

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically deploy on the next push

### 2. Update Repository Name (if needed)
If your repository name is different from `ornate-bonzai`, update the base path in:
- `vite.config.ts` - Change the base path
- `src/App.tsx` - Update the basename
- `.github/workflows/deploy.yml` - Optionally update references

### 3. Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (test GitHub Pages build locally)
npm run build && npm run preview
```

## Production Build Features

- **Optimized assets** - Images, CSS, and JS are minified and optimized
- **Code splitting** - Vendor libraries are split into separate chunks
- **SPA routing** - Client-side routing works correctly on GitHub Pages
- **SEO optimized** - Meta tags and structured data included

## Troubleshooting

### Routes not working
- Ensure the 404.html file is in the public folder
- Check that the basename in BrowserRouter matches your repository name

### Assets not loading
- Verify the base path in vite.config.ts matches your repository name
- Check that all asset imports use relative paths

### Build fails
- Ensure all dependencies are listed in package.json
- Check for TypeScript errors: `npm run type-check`
- Verify Node.js version compatibility (18+)

## Performance

The site is optimized for performance with:
- **Lazy loading** for images and components
- **Modern image formats** with fallbacks
- **Efficient bundling** with Vite
- **Minimal JavaScript** for fast loading
- **Responsive design** for all devices

Your site should achieve excellent Lighthouse scores across all metrics!