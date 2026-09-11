import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { RESPONSE_HOURS } from '@/lib/site';

export function ApplyCtaSection() {
  return (
    <section className="bg-[var(--gp-blue)] py-16">
      <div className="container-page text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to apply for an IDA grant?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/90">
          One form on the official site. A coordinator is assigned to your file and replies by email
          within {RESPONSE_HOURS} hours.
        </p>
        <Link
          href="/apply"
          className="mt-8 inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--gp-navy)] hover:bg-[var(--gp-paper)]"
        >
          Apply now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
