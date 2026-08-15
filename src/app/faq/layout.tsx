import { createMetadata } from '@/lib/metadata';
import { buildFaqPageJsonLd, faqItems } from '@/data/faq';

export const metadata = createMetadata({
  title: 'FAQ',
  description:
    'IDA grant FAQ — not a loan, who can apply, medical bills, home, school, teachers, seniors, how to apply and how you are contacted.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPageJsonLd(faqItems)) }}
      />
      {children}
    </>
  );
}
