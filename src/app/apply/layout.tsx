import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { APPLY_FAQS } from '@/data/apply-form';
import { buildFaqPageJsonLd } from '@/data/faq';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = createMetadata({
  title: 'Apply for an IDA Grant — Not a Loan',
  description:
    'Apply on this official website only. One form. Grants are not loans. Receipt from IDA Applications, then a coordinator assigned to your file contacts you by email within 24 hours.',
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
