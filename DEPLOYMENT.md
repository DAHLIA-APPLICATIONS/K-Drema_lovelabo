# K-Drama Love Labo - Deployment Guide

## Quick Start

This application is ready to deploy to Vercel, Netlify, or any other Next.js hosting platform.

## Vercel Deployment (Recommended)

### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Method 2: Using GitHub

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

## Environment Variables

No environment variables are required for the MVP version. The app runs entirely client-side with localStorage.

For future database integration, you will need:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Build Configuration

The project is configured with:
- Node.js 20.x (recommended)
- Build command: `npm run build`
- Output directory: `.next`
- Development command: `npm run dev`

## Netlify Deployment

Create a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Then deploy:
```bash
netlify deploy --prod
```

## Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Pre-deployment Checklist

- [x] All dependencies installed
- [x] Build completes successfully
- [x] No TypeScript errors
- [x] All pages render correctly
- [x] LocalStorage works for state persistence
- [x] TTS functionality works in browser
- [x] Responsive design works on mobile

## Performance Optimization

The app is already optimized with:
- Code splitting
- Static page generation where possible
- Optimized images configuration
- Minimal bundle size

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Troubleshooting

### Build fails
- Clear `.next` directory: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 20.x)

### TTS not working
- Ensure HTTPS is enabled (required for Web Speech API)
- Check browser compatibility
- Test with different voices in browser settings

### State not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again
- Check for any console errors

## Monitoring

After deployment, monitor:
- Page load times
- Error rates
- User engagement metrics
- Browser console for errors

## Support

For issues or questions:
- Check README.md
- Review src/docs/roadmap.md
- Open an issue on GitHub
