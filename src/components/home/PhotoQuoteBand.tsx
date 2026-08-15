import Image from 'next/image';
import Link from 'next/link';

export function PhotoQuoteBand() {
  return (
    <section className="relative overflow-hidden py-28 text-white">
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,34,68,0.92) 0%, rgba(0,34,68,0.7) 55%, rgba(0,159,218,0.35) 100%)',
        }}
      />
      <div className="container-page relative max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gp-blue)] uppercase">
          From a recipient letter
        </p>
        <blockquote className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
          “Asking did not cost me my dignity. It gave some of it back.”
        </blockquote>
        <p className="mt-4 text-sm text-white/70">Ruth P. · Ohio · Senior grant · $48,000</p>
        <Link href="/impact" className="mt-8 inline-block text-sm font-semibold text-white underline-offset-4 hover:underline">
          Read more letters
        </Link>
      </div>
    </section>
  );
}
