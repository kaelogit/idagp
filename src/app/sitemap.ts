import type { MetadataRoute } from 'next';
import { pageUrl, PUBLIC_ROUTES } from '@/lib/metadata';
import { GRANT_PROGRAMS } from '@/data/programs';

const PRIORITY: Record<string, number> = {
  '/': 1,
  '/apply': 0.95,
  '/faq': 0.9,
  '/verify': 0.9,
  '/programs': 0.85,
  '/how-it-works': 0.8,
  '/eligibility': 0.8,
  '/awards': 0.75,
  '/impact': 0.75,
  '/about': 0.7,
  '/contact': 0.7,
  '/security': 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...PUBLIC_ROUTES, ...GRANT_PROGRAMS.map((p) => `/programs/${p.slug}`)];
  return paths.map((path) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency:
      path === '/' || path === '/apply' || path === '/faq' || path === '/verify'
        ? 'weekly'
        : 'monthly',
    priority: PRIORITY[path] ?? (path.startsWith('/programs/') ? 0.75 : 0.6),
  }));
}
