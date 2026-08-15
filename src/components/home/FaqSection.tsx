'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const preview = faqItems.slice(0, 5);

  return (
    <section className="bg-white py-20">
      <div className="container-page max-w-3xl">
        <p className="section-label">FAQ</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Common questions</h2>
        <div className="mt-8">
          {preview.map((item, idx) => (
            <div key={item.question} className="border-t border-[var(--gp-line)]">
              <button
                type="button"
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-[var(--gp-navy)]"
              >
                {item.question}
                <ChevronDown className={`h-4 w-4 shrink-0 ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              <p
                className={`pb-5 text-sm leading-relaxed text-[var(--gp-muted)] ${
                  open === idx ? '' : 'hidden'
                }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <Link href="/faq" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gp-blue)]">
          View all questions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
