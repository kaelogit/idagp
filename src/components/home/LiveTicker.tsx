'use client';

import { useEffect, useState } from 'react';
import { recentAwards } from '@/data/stories';

export function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % recentAwards.length), 4200);
    return () => clearInterval(t);
  }, []);

  const item = recentAwards[index];

  return (
    <div className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-2.5">
      <div className="container-page text-center text-sm text-[var(--gp-muted)]">
        <span className="mr-2 text-[10px] font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
          Awarded today
        </span>
        <span className="font-semibold text-[var(--gp-navy)]">{item.name}</span>
        {' '}
        in {item.location} received a {item.category.toLowerCase()} grant of{' '}
        <span className="font-semibold text-[var(--gp-blue)]">{item.amount}</span>
        <span className="hidden sm:inline"> — IDA grants are not loans</span>
      </div>
    </div>
  );
}
