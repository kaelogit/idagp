import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function DonateSection() {
  return (
    <section className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-20 md:py-24">
      <div className="container-page max-w-3xl">
        <p className="section-label">Donate</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Be part of the good work</h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--gp-muted)] md:text-lg">
          IDA awards one-time grants every day for medical care, housing, business, education, and
          more. People and companies who believe in that work donate so more awards can go out.
          If that is you, we would be honored to have you with us.
        </p>
        <Link href="/donate" className="btn-navy mt-8">
          Donate
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
