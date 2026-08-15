import './globals.css';
import { ReactNode } from 'react';
import type { Viewport } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { createMetadata } from '@/lib/metadata';
import { CONTACT_EMAIL, FULL_NAME, PROGRAM_NAME, SHORT_NAME, SITE_URL } from '@/lib/site';

export const metadata = createMetadata({ path: '/' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: FULL_NAME,
  alternateName: [SHORT_NAME, PROGRAM_NAME],
  url: SITE_URL,
  email: CONTACT_EMAIL,
  description:
    'Private grant foundation issuing IDA grants to individuals. Awards are not loans.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: CONTACT_EMAIL,
    url: `${SITE_URL}/verify`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
