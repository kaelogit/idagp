'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FileText, Mail, BadgeCheck } from 'lucide-react';
import { applicantContactWithin } from '@/lib/site';

const steps = [
  {
    n: '1',
    title: 'Submit your application',
    body: 'Complete the secure form. Choose a category and tell us, in your own words, why you are applying.',
    icon: FileText,
  },
  {
    n: '2',
    title: 'Personal review',
    body: `Our coordinator reads every file. ${applicantContactWithin()}`,
    icon: Mail,
  },
  {
    n: '3',
    title: 'Grant decision',
    body: 'Selected applicants receive next steps by email. Awards are reviewed individually and are not guaranteed.',
    icon: BadgeCheck,
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[var(--gp-paper)] py-20">
      <div className="container-page">
        <p className="section-label">Process</p>
        <h2 className="mt-3 text-3xl md:text-4xl">How an IDA grant works</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center bg-[var(--gp-navy)] text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-widest text-[var(--gp-blue)]">
                  STEP {s.n}
                </p>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{s.body}</p>
              </div>
            );
          })}
        </div>
        <Link href="/how-it-works" className="btn-outline mt-10">
          Full process
        </Link>
      </div>
    </section>
  );
}
