import { createMetadata } from '@/lib/metadata';
import { GRANT_PROGRAMS } from '@/data/programs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, programsItemListJsonLd } from '@/lib/jsonld';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'IDA Grant Programs — Medical, Home, School, Business',
  description:
    'Choose medical bills, buying a home, starting a business, school, teachers, retired teachers, or seniors. Every IDA award is a grant, not a loan.',
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      <JsonLd data={programsItemListJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
        ])}
      />
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">Programs</p>
          <h1 className="mt-3 text-4xl">IDA grant categories</h1>
          <p className="mt-4 leading-relaxed text-[var(--gp-muted)]">
            Choose the category that matches your request. Every award is a grant, not a loan.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl">
          {GRANT_PROGRAMS.map((p, i) => (
            <article key={p.slug} className="border-t border-[var(--gp-line)] py-10">
              <p className="text-xs font-semibold tracking-widest text-[var(--gp-blue)]">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-2 text-2xl">{p.title}</h2>
              <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">{p.who}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">{p.details}</p>
              <Link
                href={`/programs/${p.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-[var(--gp-blue)]"
              >
                About this program
              </Link>
            </article>
          ))}
          <Link href="/apply" className="btn-primary mt-4">
            Apply for a program
          </Link>
        </div>
      </section>
    </div>
  );
}
