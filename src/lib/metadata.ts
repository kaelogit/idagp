import type { Metadata } from 'next';
import { absoluteSiteUrl, FULL_NAME, PROGRAM_NAME, SHORT_NAME, SITE_URL } from '@/lib/site';

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
    openGraph: {
      title,
      description,
      url,
      siteName: PROGRAM_NAME,
      locale: 'en_US',
      type: 'website',
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
