import type { MetadataRoute } from 'next';
import { pageUrl, PUBLIC_ROUTES } from '@/lib/metadata';
import { GRANT_PROGRAMS } from '@/data/programs';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...PUBLIC_ROUTES, ...GRANT_PROGRAMS.map((p) => `/programs/${p.slug}`)];
  return paths.map((path) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency: path === '/' || path === '/apply' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/apply' ? 0.9 : 0.7,
  }));
}
