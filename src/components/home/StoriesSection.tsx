'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Quote } from 'lucide-react';
import { recipientStories } from '@/data/stories';

export function StoriesSection() {
  const [index, setIndex] = useState(0);
  const story = recipientStories[index];

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % recipientStories.length), 14000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container-page max-w-4xl">
        <p className="section-label">Recipient letters</p>
        <h2 className="mt-3 text-3xl md:text-4xl">People IDA has already helped</h2>
        <div className="mt-10 border border-[var(--gp-line)] p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--gp-line)] pb-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
                {story.category}
              </p>
              <h3 className="mt-2 text-xl">{story.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-[var(--gp-muted)]">
                <MapPin className="h-3.5 w-3.5" />
                {story.location}
              </p>
            </div>
            <p className="bg-[var(--gp-paper)] px-4 py-2 text-lg font-bold text-[var(--gp-navy)]">
              {story.amount}
            </p>
          </div>
          <Quote className="mt-6 h-6 w-6 text-[var(--gp-blue)]" />
          <p className="mt-3 text-lg font-medium text-[var(--gp-navy)]">{story.quote}</p>
          {story.story.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
              {p}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-1.5">
              {recipientStories.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Story ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 ${i === index ? 'bg-[var(--gp-blue)]' : 'bg-[var(--gp-line)]'}`}
                />
              ))}
            </div>
            <Link href="/impact" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--gp-blue)]">
              All stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
