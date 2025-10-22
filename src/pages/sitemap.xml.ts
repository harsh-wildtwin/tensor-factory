import type { APIRoute } from 'astro';

export const prerender = true;

const pages = [
  '/',
  '/about',
  '/responsible-ai',
  '/trust-compliance',
  '/careers',
  '/newsroom',
  '/contact',
  '/legal-notice',
  '/privacy',
  '/cookies',
  '/accessibility',
  
];

export const GET: APIRoute = ({ site }) => {
  const base = String(site || 'https://tensorfactory.net');
  const urls = pages.map((p) => `<url><loc>${base}${p}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};


