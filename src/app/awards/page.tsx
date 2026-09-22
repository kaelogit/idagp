import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { recentAwards } from '@/data/stories';

export const metadata = createMetadata({
  title: 'Recent IDA Grants Awarded to Individuals',
  description:
    'See recent IDA grants for medical bills, housing, business, school, teachers, and seniors. Awards go to individuals every day.',
  path: '/awards',
});

export default function AwardsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-4xl">
          <p className="section-label">Awards</p>
          <h1 className="mt-3 text-4xl">Recent IDA grants</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
            Grants are awarded to individuals each and every day. Amounts below are grants — not
            loans. Names are shortened to protect privacy.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-page max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--gp-line)] text-xs tracking-wider text-[var(--gp-blue)] uppercase">
                  <th className="py-3 pr-4 font-semibold">Recipient</th>
                  <th className="py-3 pr-4 font-semibold">Location</th>
                  <th className="py-3 pr-4 font-semibold">Category</th>
                  <th className="py-3 font-semibold">Grant</th>
                </tr>
              </thead>
              <tbody>
                {recentAwards.map((row) => (
                  <tr key={`${row.name}-${row.amount}`} className="border-b border-[var(--gp-line)]">
                    <td className="py-3.5 pr-4 font-medium text-[var(--gp-navy)]">{row.name}</td>
                    <td className="py-3.5 pr-4 text-[var(--gp-muted)]">{row.location}</td>
                    <td className="py-3.5 pr-4 text-[var(--gp-muted)]">{row.category}</td>
                    <td className="py-3.5 font-semibold text-[var(--gp-blue)]">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/impact" className="btn-outline">
              Read letters
            </Link>
            <Link href="/apply" className="btn-primary">
              Apply for a grant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
