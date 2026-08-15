import type { MetadataRoute } from 'next';
import { pageUrl } from '@/lib/metadata';
import { SITE_DOMAIN } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: pageUrl('/sitemap.xml'),
    host: SITE_DOMAIN,
  };
}
