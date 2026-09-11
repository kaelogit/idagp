import type { Metadata } from 'next';
import {
  absoluteSiteUrl,
  LOGO_PATH,
  LOGO_URL,
  PROGRAM_NAME,
  SHORT_NAME,
  SITE_URL,
} from '@/lib/site';

export const DEFAULT_TITLE = 'IDA Grant Program — Official Site, Not a Loan';
export const DEFAULT_DESCRIPTION =
  'Official IDA application website. One-time awards through the IDA Grant Program, in cooperation with the World Bank Group. Open to all adults 18+. No income cap.';

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
  const documentTitle = options.title ?? DEFAULT_TITLE;

  return {
    title: options.title ?? { default: DEFAULT_TITLE, template: '%s' },
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
      title: documentTitle,
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
      title: documentTitle,
      description,
      images: [LOGO_URL],
    },
    robots: options.noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
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
