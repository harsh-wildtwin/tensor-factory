# Product Requirements Document (PRD)

**Product**: tensorfactory.net — Corporate site for Tensor Factory Sàrl‑s (Luxembourg)

**Owner**: Founders @ Tensor Factory  
**Doc Status**: v1.0 (Draft for build)  
**Last Updated**: 20 Oct 2025 (Europe/Luxembourg)

---

## 1) Purpose & Positioning

Tensor Factory is the neutral parent company behind a portfolio of AI consumer products. The website must:

- Present Tensor Factory as a clean, credible, EU‑based product studio.  
- Avoid any adult/NSFW wording, imagery, or implications.  
- Provide trust signals for hiring, partners, payment providers, regulators, and press.  
- Be blazing fast, lightweight, and accessible (WCAG 2.2 AA).

---

## 2) Primary Users & Jobs‑To‑Be‑Done

**A) Prospective Employees**  
JTBD: Verify legitimacy, values, tech focus; discover open roles; apply discreetly.

**B) Payment Providers / Banks / Risk Vendors**  
JTBD: Validate governance, security posture, compliance programs; contact team.

**C) Investors (angels, family offices, seed funds)**  
JTBD: Understand thesis, team, and governance; request a deck (under NDA).

**D) Regulators / Authorities (EU/Luxembourg)**  
JTBD: Find legal identity, contacts, privacy/cookie notices, responsible AI statement.

**E) Press / Analysts / Vendors**  
JTBD: Access boilerplate, media contact, brand assets, procurement contact.

---

## 3) Success Metrics (KPIs)

- **Performance**:  
  - Mobile LCP ≤ 1.8s (p75), CLS ≤ 0.1, INP ≤ 200ms, TTFB ≤ 300ms.  
  - Total JS ≤ 80KB (gzip) across the whole site; **0KB JS** on content‑only pages where possible.  
- **Accessibility**: Lighthouse/axe score ≥ 95; WCAG 2.2 AA compliance.  
- **SEO**: Core pages indexed; Organization rich result eligibility; branded queries show knowledge panel elements.  
- **Trust signals**: Partner inquiries ≥ N/mo; candidate applications ≥ N/mo (to set post‑launch).  
- **Reliability**: ≥ 99.9% monthly availability.

---

## 4) Scope & Non‑Goals

**In scope**  
- Static corporate site with no backend; Contact via published email alias.  
- Content pages: Home, About, Our Work, Responsible AI, Trust & Compliance, Careers, Newsroom, Contact, Legal Notice (Imprint), Privacy, Cookie Policy.  
- Basic schema.org structured data (Organization, WebSite; optional JobPosting when roles are open).  
- EU‑grade privacy/cookie compliance and simple analytics.

**Out of scope (v1)**  
- Any mention of downstream products’ verticals or adult content.  
- Blog/CMS beyond the above pages.  
- Multi‑language (v1 English only; i18n-ready).  
- Logged‑in areas, job boards/ATS integrations (optional hooks only).

---

## 5) Information Architecture & Navigation

**Top Nav (≤ 7 items)**  
1. Home  
2. About  
3. Our Work  
4. Responsible AI  
5. Trust & Compliance  
6. Careers  
7. Newsroom  

**Footer**: Contact · Legal Notice (Imprint) · Privacy · Cookie Policy · Accessibility · Supplier/Vendor

---

## 6) Page‑by‑Page Requirements

### 6.1 Home
**Goal**: Instantly convey who we are; route users to Careers and Partner contact.

**Hero**  
- H1: “Tensor Factory is a product studio building privacy‑first AI consumer platforms.”  
- Subhead: “We design and scale synthetic‑media experiences with safety, consent, and creator economics at the core.”  
- CTAs: Primary “Careers”; Secondary “Partner with us”.

**What We Do (3 Cards)**  
- Synthetic Media R&D — “Personalization, guardrails, provenance.”  
- UGC Monetization Infrastructure — “Subscriptions, payouts, risk controls.”  
- Platform Operations — “Trust & safety, governance, integrations.”

**Principles Strip**: Privacy by design · Consent‑first · Safety at scale · EU‑ready governance.

**Logos/Press Mentions**: Placeholder row (optional, hidden until available).

**Footer**: Company identity basics; links to legal pages.

**SEO**: Title ≤ 60 chars; meta description ≤ 160 chars; canonical.

**Perf**: No JS required on this page; static SVGs; single hero image (optional) as AVIF/WebP ≤ 80KB.

**Acceptance**: Above KPIs; CTAs visible above the fold on mobile.

---

### 6.2 About
**Goal**: Establish credibility, explain focus, list leadership, display corporate details.

**Sections**  
- Boilerplate paragraph (Luxembourg‑based product studio; AI consumer platforms, UGC monetization infrastructure).  
- Leadership bios (name, role, 2–3 line bio; portrait optional).  
- Focus areas: AI consumer platforms · synthetic media · UGC monetization · risk‑aware payments.  
- Corporate details placeholder (Registered name: Tensor Factory Sàrl‑s; RCS/VAT numbers — add once issued; registered office address).

**SEO/Schema**: Organization JSON‑LD on this page.

**Perf**: Lazy‑load portraits; serve as AVIF/WebP, ≤ 60KB each.

---

### 6.3 Our Work
**Goal**: Communicate studio model and portfolio without sensitive verticals.

**Sections**  
- Studio model explainer (incubate & operate AI consumer products).  
- Portfolio slots (e.g., WildTwin: “an AI‑native creator subscription product”). Keep copy general; link off‑site; no screenshots of content.  
- Research highlights: personalization, LoRA tooling, content safety filters (1–2 sentences each).

**Acceptance**: No adult/NSFW terminology; external links open in new tab with `rel="noopener"`.

---

### 6.4 Responsible AI
**Goal**: Publish commitments and transparency posture.

**Sections**  
- Commitments: transparency for synthetic content; privacy by design; consent; continuous red‑teaming; watermarking/provenance where feasible.  
- EU AI governance posture: track & align with applicable transparency requirements; model & dataset summaries at portfolio level when appropriate.  
- Safety layering: pre‑/post‑generation guardrails; abuse reporting channel (link to Security/Contact).

**Acceptance**: Plain‑language, non‑marketing tone; link to privacy/cookie pages.

---

### 6.5 Trust & Compliance
**Goal**: Give partners/regulators a one‑stop snapshot.

**Sections**  
- Data protection summary (controller = Tensor Factory Sàrl‑s; DPO or privacy contact; data request email/form).  
- Security: brief controls overview (encryption in transit/at rest, vendor due diligence stance, incident response alias security@…).  
- Risk & payments: high‑level overview of KYB/KYC, sanctions/PEP screening, chargeback controls (no adult/NSFW language).  
- Policies index: Acceptable Use (parent‑level), Privacy, Cookie Policy, Platform Integrity statement.  
- Vulnerability disclosure: link to Security contact; scope statement and non‑monetary thanks page (optional).

**Acceptance**: Clear contacts; no promotional copy.

---

### 6.6 Careers
**Goal**: Attract candidates; reassure on discretion.

**Sections**  
- EVP: “Work on frontier AI consumer platforms with privacy‑by‑design.”  
- Discretion note: “Public‑facing materials reference the parent entity.”  
- Roles: simple cards with email apply (no ATS in v1).  
- Benefits: short bullet list.  
- Optional: DEI statement.

**Acceptance**: Email apply generates a confirmation page; optional JobPosting JSON‑LD rendered when roles > 0.

---

### 6.7 Newsroom
**Goal**: Boilerplate, assets, and media contact.

**Sections**  
- 75–100 word boilerplate; downloadable one‑pager PDF; logo pack (SVG/PNG).  
- Leadership headshots (if approved).  
- Media contact alias.

**Acceptance**: Assets versioned; no external CDNs beyond site’s own.

---

### 6.8 Contact
**Goal**: Provide a clear email contact without any form or backend.

**Content**  
- Display the contact alias (e.g., `hello@tensorfactory.net`) and brief response window note (no SLA).  
- Optionally list topic hints (Partnerships/Payments, Investors, Media, General, Security) as copy, not inputs.  
- Include the same contact email in Legal Notice and Footer.

**Acceptance**: Contact email visible and accessible; no network requests when interacting; page remains static.

---

### 6.9 Legal Notice (Imprint)
**Goal**: Display required identity & contact details.

**Content**  
- Company name & form: Tensor Factory Sàrl‑s.  
- Registered office address.  
- RCS number, VAT number (when assigned).  
- Contact email (and phone if desired).  
- Publication director/representative (optional field).  
- Hosting provider identity & contact.

**Acceptance**: Linked from footer; readable at ≤ 3 clicks from anywhere.

---

### 6.10 Privacy Policy (GDPR‑grade)
**Sections**  
- Controller identity; purposes; legal bases; retention; rights; contact/DPO; vendors; international transfers; children’s data statement; complaint route.  
- Analytics section (privacy‑preserving, aggregated, no cross‑site tracking).  
- Data subject request instructions.

**Acceptance**: Clear, plain language; linked everywhere via footer; last‑updated date.

---

### 6.11 Cookie Policy + Consent
**Sections**  
- Categorization: Essential vs. Non‑essential (analytics/marketing).  
- Banner: explicit opt‑in for non‑essential; reject‑all = first‑class; granular controls; consent log (local, 6–12 months).  
- No non‑essential scripts before consent; ability to withdraw consent.

**Acceptance**: Works on first page view; no dark patterns; policy shows live cookie inventory.

---

## 7) Content & Copy (starter text)

**Homepage hero**  
> Tensor Factory is a product studio building privacy‑first AI consumer platforms.  
> We design and scale synthetic‑media experiences with safety, consent, and creator economics at the core.

**About boilerplate**  
> Tensor Factory Sàrl‑s is a Luxembourg‑based product studio focused on AI consumer platforms and UGC monetization infrastructure. We combine applied research in personalization and safety tooling with platform operations and risk‑aware payments to bring responsible synthetic‑media products to market.

**Microcopy standards**  
- Use concise, neutral verbs (build, design, operate).  
- Avoid words: adult, NSFW, porn, OnlyFans‑style.  
- Use: AI consumer platforms, synthetic media, UGC monetization, privacy‑first, consent‑first.

---

## 8) Design System & Accessibility

- **Look & Feel**: Minimal, grayscale + 1 accent color; abstract visuals; no product screenshots.  
- **Typography**: System font stack (no remote fonts) or locally hosted Inter; base 16px; comfortable line‑height.  
- **Components**: Header, Footer, Cards, Section headers, CTA buttons, Form elements, Cookie banner.  
- **Icons**: Inline SVG only.  
- **Accessibility**: WCAG 2.2 AA; color contrast ≥ 4.5:1; focus states; skip‑to‑content; semantic landmarks; form labels & errors; keyboard & screen reader support.

---

## 9) Technical Requirements

**Architecture**  
- Static‑first site (Astro or Eleventy) with partial hydration only where needed (forms).  
- No client‑side JS on purely static pages.  
- Strict CSP; security headers (HSTS, X‑Content‑Type‑Options, Referrer‑Policy, Permissions‑Policy minimal).  
- Image pipeline: AVIF/WebP; `loading="lazy"`; width/height attributes; `decoding="async"`.  
- SVGs inlined; icon sprite optional.  
- CSS: Single minified CSS ≤ 35KB (gzip), critical CSS inlined; no CSS frameworks that bloat (Tailwind allowed only if purged to ≤ 35KB).  
- JS budget: ≤ 80KB gzip total across site; avoid large frameworks; no animations libraries v1.  
- Fonts: system or self‑hosted; no render‑blocking external font calls.

**Hosting & Delivery**  
- CDN with EU POPs; Brotli compression; HTTP/2 or HTTP/3; immutable caching with cache‑busting.  
- Origin in EU; uptime monitoring; status page (optional).  
- Error pages (404/500) light and branded.

**Forms**  
- None in v1; Contact is via displayed email alias only.

**Analytics**  
- Privacy‑preserving analytics (cookieless mode if possible).  
- Defer/disable if user declines cookies when cookies are required.

**Monitoring**  
- Synthetic checks for LCP/TTFB from EU; uptime alerts to ops@.

---

## 10) SEO & Structured Data

- Metadata: unique titles (≤ 60 chars), meta descriptions (≤ 160), canonical links.  
- Open Graph/Twitter cards (static image 1200×630 ≤ 80KB).  
- `robots.txt`, `sitemap.xml`.  
- **JSON‑LD**: Organization on Home or About; WebSite on Home; JobPosting on role detail (when applicable).

**JSON‑LD examples (to adapt):**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tensor Factory Sàrl-s",
  "url": "https://tensorfactory.net/",
  "logo": "https://tensorfactory.net/assets/logo.svg",
  "legalName": "Tensor Factory Sàrl-s",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LU"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "hello@tensorfactory.net"
  }]
}
</script>
```

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://tensorfactory.net/",
  "name": "Tensor Factory",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://tensorfactory.net/search?q={query}",
    "query-input": "required name=query"
  }
}
</script>
```

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Senior Machine Learning Engineer",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {"@type":"Organization","name":"Tensor Factory"},
  "jobLocationType": "TELECOMMUTE",
  "applicantLocationRequirements": {"@type":"Country","name":"EU"},
  "datePosted": "2025-10-20",
  "validThrough": "2025-12-31",
  "description": "Build and ship privacy‑first AI consumer platforms.",
  "directApply": true
}
</script>
```

---

## 11) Privacy, Cookies, Legal & Compliance

- **Privacy Policy**: GDPR‑grade, plain‑language; controller = Tensor Factory Sàrl‑s; DPO or privacy contact; DSAR email; vendor list; transfers; retention.  
- **Cookie Consent**: opt‑in for non‑essential; reject‑all; granular toggles; no non‑essential loads pre‑consent; log consent.  
- **Legal Notice (Imprint)**: company form/name, registered office, RCS, VAT (when available), contact email, host identity.  
- **Responsible AI**: transparency and provenance posture; abuse reporting route.  
- **Security/Disclosure**: security@ alias; scope; safe‑harbor language (no bounties v1).  
- **Disclaimer**: Site provides information about the parent company only; no offer of financial instruments.

> **Note**: This section is implementation guidance, not legal advice. Consult qualified counsel for Luxembourg/EU specifics before launch.

---

## 12) Brand Safety & Content Rules (hard requirements)

- No adult/NSFW words, imagery, or euphemisms.  
- No screenshots of downstream products.  
- Use neutral, professional photography or abstract shapes only.  
- Enforce link separation between parent and portfolio brands.

---

## 13) Performance Budget & QA

- HTML per page ≤ 60KB gzip; CSS ≤ 35KB gzip; JS ≤ 80KB gzip (site‑wide), aim ≤ 0KB on static pages.  
- Images ≤ 80KB each (hero), ≤ 60KB (bios); AVIF/WebP.  
- Lighthouse ≥ 95 Performance/Accessibility/Best Practices/SEO.  
- Pre‑launch tests on 3G Fast, mid‑tier Android, iPhone SE, and desktop.

---

## 14) Security & Headers

- HTTPS only; HSTS preload; TLS 1.2+; redirect HTTP→HTTPS.  
- CSP: `default-src 'self'; img-src 'self' data:; font-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self';` (adjust if analytics).  
- Referrer‑Policy: `strict-origin-when-cross-origin`.  
- Permissions‑Policy: disable sensors, camera, mic, geolocation, etc.  
- X‑Content‑Type‑Options: nosniff; X‑Frame‑Options: DENY.  
- Regular dependency updates; SRI for third‑party assets (if any).

---

## 15) Tech Stack (proposed)

- **Framework**: Astro or Eleventy (static), Tailwind (purged) or vanilla CSS.  
- **Hosting/CDN**: EU region origin + global CDN with EU POPs, Brotli, HTTP/3.  
- **Forms**: Serverless functions in EU; email relay; optional minimal DB (EU).  
- **Analytics**: Lightweight, privacy‑preserving (cookieless mode if possible).

---

## 16) Content Workflow & Governance

- Single content owner; Git‑based workflow with PR reviews.  
- Versioned assets; image optimization on commit.  
- Change log in repo; monthly privacy policy review cadence.

---

## 17) Deliverables & Milestones

- **M1 — Wireframes**: Home, About, Our Work, Responsible AI, Trust & Compliance, Careers, Newsroom, Contact, Legal pages.  
- **M2 — Visual Design**: Tokenized design system, components, responsive specs.  
- **M3 — Build**: Static templates + content; forms; analytics; headers.  
- **M4 — QA**: Accessibility, performance, SEO, legal review.  
- **M5 — Launch**: DNS, CDN, monitoring, status checks, post‑launch analytics.

---

## 18) Acceptance Criteria (Go/No‑Go)

- Meets all KPIs in §3.  
- All pages implemented in §6; footer links present on all pages.  
- Legal pages reviewed by counsel; RCS/VAT fields populated or marked “pending”.  
- Cookie banner behavior verified; no non‑essential scripts fire pre‑consent.  
- Security headers validated (Mozilla Observatory ≥ B+).  
- Sitemap/robots present; JSON‑LD validates in Rich Results Test.  
- No adult/NSFW language or imagery.

---

## 19) Risks & Mitigations

- **Regulatory drift**: Keep Responsible AI and Cookie/Privacy pages versioned; quarterly review.  
- **Brand confusion**: Strict copy reviews; no product screenshots; separate domain for portfolio brands.  
- **Performance regressions**: CI checks for bundle sizes and Lighthouse budgets.  
- **Form abuse**: Honeypot + rate limits; manual review for spam bursts.

---

## 20) Open Questions (log)

- DPO contact: internal vs. external?  
- Hosting provider selection (to document in Legal Notice).  
- Public team portraits v1 or text‑only?

---

## 21) Appendix — Content Checklist

- [ ] Home hero copy approved  
- [ ] About boilerplate approved  
- [ ] Leadership bios approved  
- [ ] Our Work blurbs approved  
- [ ] Responsible AI commitments approved  
- [ ] Trust & Compliance contacts verified  
- [ ] Careers roles & benefits approved  
- [ ] Newsroom assets uploaded  
- [ ] Contact email alias verified  
- [ ] Legal Notice, Privacy, Cookie Policy reviewed by counsel  
- [ ] JSON‑LD validated  
- [ ] Headers tested  
- [ ] Performance budgets met

---

**End of PRD**

