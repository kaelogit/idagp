import Link from 'next/link';
import { Ban, Check } from 'lucide-react';

const grant = [
  'One-time grant funding you do not repay',
  'Awarded to individuals every day',
  'Medical, home, school, business, teachers, seniors',
  'Apply on this website. Follow-up by email',
];

const notLoan = [
  'No monthly payments to IDA',
  'Applying does not create debt',
  'Not a mortgage, student loan, or business loan',
  'If someone offers you an “IDA loan,” verify first',
];

export function WhyGrantSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <p className="section-label">Important</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">What an IDA award means</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
          International Development Association works in cooperation with the World Bank Group. Each
          year we issue billions of dollars in IDA grant money as one-time awards. If you are
          selected, you do not pay it back.
        </p>
        <div className="mt-10 grid gap-px bg-[var(--gp-line)] md:grid-cols-2">
          <div className="bg-[var(--gp-paper)] p-8 md:p-10">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gp-blue)]">
              <Check className="h-4 w-4" />
              What an IDA grant is
            </p>
            <ul className="mt-5 space-y-3">
              {grant.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--gp-navy)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 md:p-10">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gp-navy)]">
              <Ban className="h-4 w-4" />
              What it is not
            </p>
            <ul className="mt-5 space-y-3">
              {notLoan.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--gp-muted)]">
                  <Ban className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-line)]" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/eligibility" className="btn-outline mt-8">
          See who can apply
        </Link>
      </div>
    </section>
  );
}
