## Tensor Factory Website — Implementation Plan (for review)

Doc owner: Founders @ Tensor Factory  
Source PRD: `Plans/tensor_factory_website_prd_tensorfactory.md`  
Doc status: Draft for review (v0.1)  
Last updated: 20 Oct 2025

---

### Goals (from PRD, summarized)
- Build a fast, accessible, static-first corporate website with minimal JS and strong EU-grade privacy/security.  
- Pages: Home, About, Our Work, Responsible AI, Trust & Compliance, Careers, Newsroom, Contact, Legal Notice (Imprint), Privacy, Cookie Policy.  
- KPIs: Lighthouse ≥ 95 across categories, Mobile LCP ≤ 1.8s, CLS ≤ 0.1, INP ≤ 200ms, JS ≤ 80KB sitewide (0KB on static pages where possible), CSS ≤ 35KB (gzip).

---

### Phase 0 — Foundation & Decisions
Objectives: Confirm stack choices, repo hygiene, and guardrails before design/build.

- Key decisions (present options, pick one):
  - Framework: Astro (recommended for partial hydration and 0-JS pages) vs. Eleventy (excellent static, minimal tooling).  
  - Styling: Vanilla CSS with PostCSS (recommended for ≤35KB goal) vs. Tailwind (only if aggressively purged to ≤35KB gzip).  
  - Contact channel: email alias only (no backend/forms in v1).  
  - Analytics: Lightweight, privacy-preserving, cookieless-capable (e.g., self-hosted or vendor with cookieless mode).  
  - Hosting/Servers: Use Tensor Factory's existing hosting and servers as origin (EU); optional CDN/front proxy if available (Brotli, HTTP/2/3).  

- Tasks:
  - Initialize repo, code style (Prettier), linting (HTML/Markdown/CSS), basic CI (build + link check).  
  - Performance budgets/baselines in CI (Lighthouse CI or equivalent, budgets from PRD §13).  
  - Security headers template and CSP policy scaffold (per PRD §14).  
  - Document existing hosting/server environment (EU location, deploy method, access controls), and any existing CDN/reverse proxy capabilities.  

- Deliverables: Decision log, repo scaffolding, CI baseline, budgets config, headers/CSP draft.  
- Acceptance: All decisions logged; CI green; budgets enforced; no framework bloat warnings.
- Est. time: 0.5–1.5 days

---

### Phase 1 — Design System (Tokens, Components, Accessibility)
Objectives: Establish minimal, accessible design language with strong semantics and zero/low JS.

- Tasks:
  - Tokens: color (grayscale + 1 accent), spacing scale, typography (system stack or locally hosted Inter), radii, shadows.  
  - Core CSS architecture: component + utilities layer; critical CSS inlined; single minified CSS ≤ 35KB gzip.  
  - Components: Header, Footer, Section header, Card, CTA button, Grid, Form elements, Cookie banner scaffold, Skip-to-content link, Focus states.  
  - Accessibility: Landmark roles, color contrast ≥ 4.5:1, keyboard navigation, visible focus, reduced motion respect.  

- Deliverables: `styles/` with tokens, components; accessible HTML component examples; contrast checks.  
- Acceptance: CSS gzip ≤ 35KB; all components keyboard/screen-reader friendly; no client JS required.  
- Est. time: 1–2 days

---

### Phase 2 — Templates & Navigation
Objectives: Create base page templates and site-wide navigation/footer.

- Tasks:
  - Base layout with metadata slots (title, description, canonical, OG/Twitter).  
  - Header/nav with ≤7 items; responsive; no JS for basic interactions.  
  - Footer with required links (Contact, Legal Notice, Privacy, Cookie Policy, Accessibility, Supplier/Vendor).  
  - 404/500 lightweight branded pages.  

- Deliverables: Layout templates, `Header`, `Footer`, `Error` pages.  
- Acceptance: Mobile-first; no layout shift; links reachable via keyboard; nav visible/usable at common breakpoints.  
- Est. time: 0.5–1 day

---

### Phase 3 — Content Pages (Static, 0-JS)
Objectives: Implement all static content pages with semantic HTML and performance budgets.

- Pages & specifics:
  - Home: hero (H1 + subhead + CTAs), 3 cards, principles strip, optional logos row (hidden), footer basics.  
  - About: boilerplate, leadership bios (lazy images AVIF/WebP ≤ 60KB), corporate details placeholder, Organization JSON-LD.  
  - Our Work: studio explainer, portfolio slots (general copy, external links with `rel="noopener"`), research highlights.  
  - Responsible AI: commitments, governance posture, safety layering, links to privacy/cookie.  
  - Trust & Compliance: data protection summary, security overview, risk & payments, policies index, vuln disclosure link.  
  - Legal Notice (Imprint): company identity, address, RCS/VAT (pending if not issued), host identity.  
  - Privacy Policy: GDPR-grade structure per PRD; last-updated field.  
  - Cookie Policy: categories, live inventory placeholder, consent withdrawal instructions.  
  - Newsroom: boilerplate, assets placeholders (PDF/logo packs), media contact.  

- Deliverables: All static pages implemented, content placeholders where unknown, responsive images with width/height and `loading="lazy"`, `decoding="async"`.  
- Acceptance: Lighthouse ≥ 95 on content-only pages; 0KB client JS; images ≤ 80KB hero/≤ 60KB bios; HTML gzip ≤ 60KB.  
- Est. time: 2–4 days

---

### Phase 4 — Careers (Roles + Optional JobPosting JSON-LD)
Objectives: Present EVP, discretion note, role cards, benefits list; enable email apply.

- Tasks:
  - Roles section with email apply (no ATS v1); confirmation page.  
  - Render JobPosting JSON-LD only when roles > 0.  
  - Optional DEI statement.  

- Deliverables: `Careers` page with conditional JSON-LD; confirmation/success template.  
- Acceptance: Email apply flows to alias; confirmation page loads; JSON-LD validates when roles present.  
- Est. time: 0.5–1 day

---

### Phase 5 — Contact (Static, no backend)
Objectives: Provide a single contact email address (aliases optional) with no server-side processing; keep the entire site static-only.

- Tasks:
  - Replace the Contact page form with static copy and a `mailto:` link to the designated alias (e.g., `hello@tensorfactory.net`).  
  - Add or confirm the contact email is visible in `Footer` and `Legal Notice` as appropriate.  
  - Update Organization JSON-LD contactPoint email if present.  
  - Remove any API routes and the form success page from the codebase.  

- Deliverables: Static Contact page with email link; no dynamic routes; no backend.  
- Acceptance: Email link renders on Contact page; no network requests made on submit; production build remains `output: 'static'`.  
- Est. time: 0.5 day

---

### Phase 6 — Cookie Consent & Analytics
Objectives: Implement EU-grade consent with explicit opt-in for non-essential; integrate privacy-preserving analytics in cookieless mode or gated by consent.

- Tasks:
  - Cookie banner: opt-in, reject-all first-class, granular toggles, consent log (local 6–12 months), withdraw control.  
  - Defer/disable non-essential scripts until consent given.  
  - Analytics: configure cookieless if possible; otherwise bind to consent state.  

- Deliverables: Banner UI, consent state management (server-first where feasible), analytics wiring.  
- Acceptance: No non-essential loads pre-consent; banner works on first page view; policy shows live inventory.  
- Est. time: 1–2 days

---

### Phase 7 — SEO & Structured Data
Objectives: Implement metadata, Open Graph/Twitter, `robots.txt`, `sitemap.xml`, and JSON-LD (Organization, WebSite, conditional JobPosting).

- Tasks:
  - Unique titles ≤ 60 chars, meta descriptions ≤ 160; canonical link tags.  
  - Static OG image (1200×630 ≤ 80KB); Twitter card.  
  - JSON-LD snippets adapted from PRD.  
  - Generate `sitemap.xml`, `robots.txt`.  

- Deliverables: SEO helpers, static OG asset(s), JSON-LD blocks, sitemap/robots automation.  
- Acceptance: Rich Results Test passes; metadata populated on all pages.  
- Est. time: 0.5–1 day

---

### Phase 8 — Security Headers & CSP
Objectives: Enforce strict headers per PRD §14 and validate externally.

- Tasks:
  - Configure HSTS (preload), X-Content-Type-Options, Referrer-Policy, Permissions-Policy (minimal), X-Frame-Options DENY.  
  - CSP: `default-src 'self'; img-src 'self' data:; font-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self';` (adjust if analytics).  
  - Add SRI for any third-party assets (if any).  

- Deliverables: Headers config (framework/host), CSP policy documented with exceptions.  
- Acceptance: Mozilla Observatory ≥ B+; no CSP violations in console under normal flows.  
- Est. time: 0.5 day

---

### Phase 9 — Performance & Accessibility QA
Objectives: Validate budgets and a11y before launch; fix regressions.

- Tasks:
  - Lighthouse runs (mobile/desktop) against budgets; ensure LCP/CLS/INP targets.  
  - Axe/Pa11y accessibility checks; manual keyboard/screen-reader spot checks.  
  - Synthetic checks from EU for LCP/TTFB; image/CDN config review.  

- Deliverables: QA report with issues and fixes; CI thresholds locked.  
- Acceptance: Lighthouse ≥ 95; budgets met; issues closed.  
- Est. time: 0.5–1.5 days

---

### Phase 10 — GitHub Pages Deployment & Custom Domain
Objectives: Deploy to GitHub Pages with custom domain tensorfactory.net, configure DNS, and ensure SSL.

- Tasks:
  - Set up GitHub Actions workflow for automatic deployment on push to main.
  - Configure custom domain tensorfactory.net in GitHub Pages settings.
  - Add public/CNAME file with tensorfactory.net.
  - Configure DNS in GoDaddy:
    - A records for @ pointing to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
    - CNAME record for www pointing to harsh-wildtwin.github.io
  - Enable Enforce HTTPS in GitHub Pages settings.
  - Verify all pages load correctly under custom domain.

- Deliverables: Live site at https://tensorfactory.net, automated deployment pipeline, SSL certificate.
- Acceptance: Site accessible via custom domain, all pages working, HTTPS enforced, DNS propagation complete.
- Est. time: 0.5–1 day

---

---

### Phase 11 — Legal Review & Launch
Objectives: Finalize legal content and go live.

- Tasks:
  - Legal review of Legal Notice, Privacy, Cookie Policy; RCS/VAT fields populated or marked "pending".  
  - Final copy checks for brand safety; portfolio link separation validated.  
  - Domain/DNS, SSL, HSTS preload submit (if desired).  

- Deliverables: Approved legal pages, production domain live.  
- Acceptance: PRD §18 acceptance criteria satisfied; post-launch checklist complete.  
- Est. time: 0.5–1 day (review timeline may vary)

---

## Implementation Status

### ✅ Completed Phases
- **Phase 0**: Foundation & Decisions (Astro, vanilla CSS, static-first approach)
- **Phase 1**: Design System (tokens, components, accessibility)
- **Phase 2**: Templates & Navigation (base layout, header, footer, 404/500)
- **Phase 3**: Content Pages (all static pages implemented)
- **Phase 4**: Careers (roles section with email apply)
- **Phase 5**: Contact (static page with mailto link)
- **Phase 6**: Cookie Consent & Analytics (banner implemented)
- **Phase 7**: SEO & Structured Data (metadata, sitemap, JSON-LD)
- **Phase 8**: Security Headers & CSP (headers configured)
- **Phase 9**: Performance & Accessibility QA (Lighthouse targets met)
- **Phase 10**: GitHub Pages Deployment & Custom Domain (✅ COMPLETED)

### 🚀 Current Status
- **Live site**: https://tensorfactory.net
- **Deployment**: Automated via GitHub Actions
- **Custom domain**: Configured and working
- **SSL**: Automatic HTTPS via GitHub Pages
- **DNS**: GoDaddy configured with GitHub Pages IPs

### 📋 Remaining Tasks
- **Phase 11**: Legal Review & Launch (pending legal review of policies)


