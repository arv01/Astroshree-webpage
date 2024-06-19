// generateSitemap.tsx

import fs from 'fs';
import { join } from 'path';

const siteUrl = 'https://www.astroshree.live';
const pages = [
  '/',
  '/free-kundali',
  '/kundali-matching',
  '/horoscope/todays',
  '/horoscope/weekly',
  '/chat-with-astrologer',
  '/all-blog'
]; // Add pages to include in the sitemap

const generateSitemap = () => {
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((page) => `
      <url>
        <loc>${siteUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `).join('')}
  </urlset>
  `;

  fs.writeFileSync(join(__dirname, '../../public/sitemap.xml'), sitemap);
};

generateSitemap();
