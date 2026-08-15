import Link from 'next/link';
import { GRANT_PROGRAMS } from '@/data/programs';

export function EligibilitySection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <p className="section-label">Eligibility</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">Who IDA grants are for</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
          Adults 18 or older may apply for themselves. IDA awards grants to individuals each and
          every day across a variety of groups. Choose the closest category — completeness matters
          more than a perfect label.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GRANT_PROGRAMS.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="border border-[var(--gp-line)] p-5 hover:border-[var(--gp-blue)]"
            >
              <h3 className="text-base">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{p.who}</p>
            </Link>
          ))}
        </div>
        <Link href="/eligibility" className="btn-outline mt-8">
          Full eligibility
        </Link>
      </div>
    </section>
  );
}
