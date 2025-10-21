# tensor-factory

Static site built with Astro. Deployed via GitHub Pages.

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

## Deploy to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy.yml` that publishes `dist/` to GitHub Pages.

Steps to enable:

1. Push the `main` branch to GitHub.
2. In GitHub → Repository Settings → Pages:
   - Set Source to "GitHub Actions".
3. Ensure the workflow runs successfully on push. It will:
   - Install deps with `npm ci`
   - Build with `npm run build`
   - Upload `dist/` as artifact and deploy to Pages

### Project vs org/user site
- For a project site, the published URL will be `https://<owner>.github.io/<repo>`.
- For an org/user site, use a repo named `<owner>.github.io`.

Reference: GitHub Pages docs: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

### Custom domain (optional)

If you have a custom domain, configure it in GitHub → Settings → Pages → Custom domain.

Optionally, add a `public/CNAME` file with your domain (e.g., `tensorfactory.net`) so it persists across deployments.

```text
public/CNAME
```

DNS:
- Add an `A` record to GitHub Pages IPs or a `CNAME` to `<owner>.github.io` per GitHub docs.

