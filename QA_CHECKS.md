# QA Checklist (Performance, Accessibility, SEO)

### Performance
- Lighthouse ≥ 95 (mobile/desktop) for Performance/Accessibility/Best Practices/SEO
- LCP ≤ 1.8s (p75), CLS ≤ 0.1, INP ≤ 200ms
- JS ≤ 80KB gzip site-wide; 0KB on static pages where feasible
- CSS ≤ 35KB gzip, single stylesheet; critical CSS inlined
- Images: AVIF/WebP, hero ≤ 80KB, bios ≤ 60KB, with width/height and decoding="async"

### Accessibility
- WCAG 2.2 AA; keyboard navigation; focus visible; skip link works
- Semantic landmarks; form labels/errors; contrast ≥ 4.5:1
- Axe/Pa11y scans clean; manual screen reader spot checks

### SEO/Content
- Titles ≤ 60 chars; meta ≤ 160; canonical present
- Open Graph/Twitter ready; sitemap.xml and robots.txt present
- JSON-LD validates (Organization, WebSite; JobPosting when applicable)

### Security
- CSP effective; Mozilla Observatory ≥ B+
- No non-essential scripts before consent; cookie banner behaves correctly


