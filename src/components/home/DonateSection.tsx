import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function DonateSection() {
  return (
    <section data-nosnippet className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-20 md:py-24">
      <div className="container-page max-w-3xl">
        <p className="section-label">Donate</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Want to give to the grant program?</h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--gp-muted)] md:text-lg">
          Gifts have their own page, separate from applications. That is where you tell us you want
          to help more grants go out.
        </p>
        <Link href="/donate" className="btn-navy mt-8">
          Donate to the IDA Grant Program
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
