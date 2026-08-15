'use client';

import { useEffect, useRef, useState } from 'react';

function Stat({
  value,
  suffix,
  prefix = '',
  label,
  visible,
  delay,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  visible: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!visible || done.current) return;
    done.current = true;
    const timer = setTimeout(() => {
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, value, delay]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-[var(--gp-blue)] md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-16">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        <Stat value={24} suffix="h" label="First email reply" visible={visible} delay={0} />
        <div className="text-center">
          <p className="text-4xl font-bold text-[var(--gp-blue)] md:text-5xl">$B+</p>
          <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">Grant money issued each year</p>
        </div>
        <Stat value={8} suffix="" label="Assistance categories" visible={visible} delay={150} />
        <div className="text-center">
          <p className="text-4xl font-bold text-[var(--gp-blue)] md:text-5xl">Daily</p>
          <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">Awards to individuals</p>
        </div>
      </div>
    </section>
  );
}
