import type { Metadata } from 'next';
import {
  absoluteSiteUrl,
  FULL_NAME,
  LOGO_PATH,
  LOGO_URL,
  PROGRAM_NAME,
  SHORT_NAME,
  SITE_URL,
} from '@/lib/site';

export const DEFAULT_TITLE = 'Apply for an IDA Grant';
export const DEFAULT_DESCRIPTION =
  'Internal Development Associate (IDA) issues billions of dollars in grant money each year. Awards are not loans. Apply for help with medical bills, a home, school, business, teaching, or senior support.';

export function pageUrl(path = '/'): string {
  return absoluteSiteUrl(path || '/');
}

export function createMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const description = options.description ?? DEFAULT_DESCRIPTION;
  const path = options.path ?? '/';
  const url = pageUrl(path);
  const title = options.title
    ? `${options.title} | ${SHORT_NAME}`
    : `${PROGRAM_NAME} — ${FULL_NAME}`;

  return {
    title: options.title ?? { default: title, template: `%s | ${SHORT_NAME}` },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        { url: LOGO_PATH, type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
      title,
      description,
      url,
      siteName: PROGRAM_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: LOGO_URL,
          secureUrl: LOGO_URL,
          width: 1295,
          height: 1215,
          alt: `${SHORT_NAME} Grant Program`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [LOGO_URL],
    },
    robots: options.noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export const PUBLIC_ROUTES = [
  '/',
  '/programs',
  '/eligibility',
  '/awards',
  '/how-it-works',
  '/apply',
  '/about',
  '/impact',
  '/faq',
  '/verify',
  '/security',
  '/contact',
  '/privacy',
  '/terms',
] as const;
