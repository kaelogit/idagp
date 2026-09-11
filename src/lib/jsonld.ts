import { GRANT_PROGRAMS } from '@/data/programs';
import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  absoluteSiteUrl,
  CONTACT_EMAIL,
  COORDINATOR_EMAIL,
  COORDINATOR_NAME,
  FULL_NAME,
  LOGO_URL,
  PROGRAM_NAME,
  SHORT_NAME,
  SITE_URL,
} from '@/lib/site';

function pageUrl(path = '/') {
  return absoluteSiteUrl(path || '/');
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: FULL_NAME,
    alternateName: [SHORT_NAME, PROGRAM_NAME],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 1295,
      height: 1215,
    },
    image: LOGO_URL,
    email: CONTACT_EMAIL,
    description:
      'International Development Association works in cooperation with the World Bank Group, issuing IDA grant awards to individuals through the official IDA Grant Program.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: CONTACT_EMAIL,
        url: pageUrl('/verify'),
      },
      {
        '@type': 'ContactPoint',
        contactType: 'applications',
        name: APPLY_FROM_NAME,
        email: APPLY_FROM_EMAIL,
        url: pageUrl('/apply'),
      },
      {
        '@type': 'ContactPoint',
        contactType: 'grant coordinator',
        name: COORDINATOR_NAME,
        email: COORDINATOR_EMAIL,
        url: pageUrl('/contact'),
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: PROGRAM_NAME,
    url: SITE_URL,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-US',
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function webPageJsonLd(options: {
  name: string;
  path: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.name,
    url: pageUrl(options.path),
    description: options.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': ORGANIZATION_ID },
  };
}

export function programsItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'IDA grant categories',
    itemListElement: GRANT_PROGRAMS.map((program, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: program.title,
      url: pageUrl(`/programs/${program.slug}`),
    })),
  };
}
