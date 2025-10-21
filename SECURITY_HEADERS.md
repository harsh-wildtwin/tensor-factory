# Security Headers & CSP

This site targets the following security headers per PRD §14:

- Content-Security-Policy:
  - default-src 'self'; img-src 'self' data:; font-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'
  - Adjust if analytics is enabled.
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: disable sensors, camera, mic, geolocation, etc. (set at server/proxy)
- X-Content-Type-Options: nosniff (server/proxy)
- X-Frame-Options: DENY (server/proxy)
- Strict-Transport-Security (HSTS): preload (server/proxy)

Note: Some headers must be configured at the origin or CDN/proxy level in production. The meta http-equiv CSP in src/layouts/BaseLayout.astro is a dev fallback and should be enforced by the server in production.


