import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { APPLY_FAQS } from '@/data/apply-form';
import { buildFaqPageJsonLd } from '@/data/faq';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = createMetadata({
  title: 'Apply for an IDA Grant',
  description:
    'Apply for an IDA grant from International Development Association. Grants are not loans. Medical bills, home, school, business, teachers, and seniors.',
  path: '/apply',
});

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={buildFaqPageJsonLd(
          APPLY_FAQS.map((item) => ({ question: item.q, answer: item.a })),
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Apply', path: '/apply' },
        ])}
      />
      {children}
    </>
  );
}
