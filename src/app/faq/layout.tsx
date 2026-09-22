import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageJsonLd, faqItems } from '@/data/faq';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = createMetadata({
  title: 'IDA Grant FAQ — Who Can Apply',
  description:
    'Adults 18+ may apply for medical bills, a home, school, business, teachers, and seniors. See how you are contacted and how to verify a message.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildFaqPageJsonLd(faqItems)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ])}
      />
      {children}
    </>
  );
}
