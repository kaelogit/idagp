import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageJsonLd, faqItems } from '@/data/faq';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = createMetadata({
  title: 'IDA grant FAQ',
  description:
    'IDA grant FAQ — grants are not loans. Who can apply, medical bills, home, school, teachers, seniors, how to apply, and how you are contacted.',
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
