# tensor-factory

Static site built with Astro. Deployed via GitHub Pages at **https://tensorfactory.net**.

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deployment

This repo includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages.

### Current setup
- **Live site**: https://tensorfactory.net
- **Custom domain**: Configured via `public/CNAME` and GitHub Pages settings
- **DNS**: GoDaddy A records pointing to GitHub Pages IPs
- **SSL**: Automatic HTTPS via GitHub Pages

### Workflow
The `.github/workflows/main.yml` workflow:
- Triggers on push to `main` branch
- Installs dependencies with `npm ci`
- Builds with `npm run build`
- Deploys `dist/` to GitHub Pages
- Automatically handles custom domain and SSL

### Custom domain configuration
- `public/CNAME` contains `tensorfactory.net`
- GitHub Pages → Settings → Pages → Custom domain: `tensorfactory.net`
- DNS A records in GoDaddy:
  - `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - `www` → `harsh-wildtwin.github.io` (CNAME)

Reference: [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

