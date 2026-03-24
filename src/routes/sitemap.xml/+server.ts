import type { RequestHandler } from './$types';

const SITE = 'https://thinklikeabrilliant.com';

const pages = [
	{ path: '/', priority: '1.0', changefreq: 'monthly' },
	{ path: '/brilliant', priority: '0.8', changefreq: 'monthly' },
	{ path: '/fool', priority: '0.8', changefreq: 'monthly' }
];

export const GET: RequestHandler = () => {
	const urls = pages
		.map(
			({ path, priority, changefreq }) => `
  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
		)
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
