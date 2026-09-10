'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { recipientStories } from '@/data/stories';

const filters = ['All', ...Array.from(new Set(recipientStories.map((s) => s.category)))];

export default function ImpactPage() {
  const [filter, setFilter] = useState('All');
  const list = useMemo(
    () => (filter === 'All' ? recipientStories : recipientStories.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-12 text-white">
        <div className="container-page max-w-3xl">
          <p className="section-label">Stories</p>
          <h1 className="mt-3 text-4xl text-white">Letters from people IDA has helped</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Recipient accounts in their own words. Applicants come from every income level — these
            stories reflect a range of goals and situations. Amounts are grants, not loans.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-page max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold ${
                  filter === f
                    ? 'bg-[var(--gp-navy)] text-white'
                    : 'border border-[var(--gp-line)] text-[var(--gp-muted)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="space-y-12">
            {list.map((s) => (
              <article key={s.name} className="border-t border-[var(--gp-line)] pt-10">
                <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
                  {s.category} · {s.amount}
                </p>
                <h2 className="mt-2 text-2xl">{s.name}</h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-[var(--gp-muted)]">
                  <MapPin className="h-3.5 w-3.5" />
                  {s.location}
                </p>
                <p className="mt-4 text-base font-medium text-[var(--gp-navy)]">“{s.quote}”</p>
                {s.story.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <Link href="/apply" className="btn-primary mt-12">
            Apply for a grant
          </Link>
        </div>
      </section>
    </div>
  );
}
