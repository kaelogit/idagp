'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">FAQ</p>
          <h1 className="mt-3 text-4xl">Questions about IDA grants</h1>
        </div>
      </section>
      <section className="container-page max-w-3xl py-12">
        {faqItems.map((item, idx) => (
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
        <div className="flex flex-wrap gap-3 pt-8">
          <Link href="/verify" className="btn-outline">
            Verify a contact
          </Link>
          <Link href="/apply" className="btn-primary">
            Apply now
          </Link>
        </div>
      </section>
    </div>
  );
}
