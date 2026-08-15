import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HELP_AREAS_SHORT, ORG_BLURB, SHORT_NAME } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--gp-navy)] text-white">
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(0,34,68,0.94) 0%, rgba(0,34,68,0.78) 50%, rgba(0,159,218,0.38) 100%)',
        }}
      />
      <div className="container-page relative grid min-h-[82vh] items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          <p className="section-label text-[var(--gp-blue)]">
            {SHORT_NAME} · International Development Association
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold text-white md:text-5xl lg:text-[3.15rem]">
            Billions in IDA grants. Awarded to people, every day.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {ORG_BLURB} {HELP_AREAS_SHORT}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary">
              Apply for a grant
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/impact"
              className="border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Read recipient stories
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[var(--gp-blue)]" />
              Grants, not loans
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--gp-blue)]" />
              Official site: idagrantprogram.com
            </span>
          </div>
        </div>
        <div className="hidden border border-white/15 bg-white/5 p-8 lg:block">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gp-blue)] uppercase">
            This year
          </p>
          <p className="mt-4 text-5xl font-bold text-white">Billions</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            in IDA grant money issued to individuals and groups — awards every day, grants not loans.
          </p>
          <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm text-white/80">
            <p>Medical bills · Buying a home</p>
            <p>Starting a business · Going to school</p>
            <p>Teachers · Retired teachers · Seniors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
