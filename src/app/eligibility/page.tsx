import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { GRANT_PROGRAMS } from '@/data/programs';
import { HELP_AREAS_SHORT, ORG_BLURB, ELIGIBILITY_OPEN } from '@/lib/site';

export const metadata = createMetadata({
  title: 'Who Can Apply for an IDA Grant',
  description:
    'Adults 18 or older may apply. No income cap or means test. IDA grants support medical care, housing, business, school, teachers, and seniors. ',
  path: '/eligibility',
});

export default function EligibilityPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-12 text-white">
        <div className="container-page max-w-3xl">
          <p className="section-label">Eligibility</p>
          <h1 className="mt-3 text-4xl text-white">Who can apply</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{ORG_BLURB}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-8 text-sm leading-relaxed text-[var(--gp-muted)]">
          <p>
            {ELIGIBILITY_OPEN} You may apply for yourself. Each person submits their own
            application. {HELP_AREAS_SHORT}
          </p>
          <h2 className="text-2xl text-[var(--gp-blue)]">Groups IDA reviews every day</h2>
          <ul className="space-y-4">
            {GRANT_PROGRAMS.map((p) => (
              <li key={p.slug} className="border-t border-[var(--gp-line)] pt-4">
                <Link href={`/programs/${p.slug}`} className="font-semibold text-[var(--gp-navy)]">
                  {p.title}
                </Link>
                <p className="mt-1">{p.who}</p>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl text-[var(--gp-blue)]">What selection does not create</h2>
          <p>
            Selection does not create monthly payments to IDA.
            Applying does not create debt. Not every complete application is selected — billions in
            grants still means each file is reviewed on its own.
          </p>
          <Link href="/apply" className="btn-primary inline-flex">
            Apply for a grant
          </Link>
        </div>
      </section>
    </div>
  );
}
