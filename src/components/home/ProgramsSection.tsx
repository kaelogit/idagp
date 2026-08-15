import Link from 'next/link';
import {
  HeartPulse,
  Home,
  Briefcase,
  GraduationCap,
  BookOpen,
  Landmark,
  Users,
} from 'lucide-react';
import { GRANT_PROGRAMS } from '@/data/programs';

const icons = [HeartPulse, Home, Briefcase, GraduationCap, BookOpen, Landmark, Users, Users];

export function ProgramsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <p className="section-label">Programs</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
          Who IDA grants are for
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
          Medical bills. Buying a home. Salespeople starting a business. School. Teachers. Retired
          teachers. Seniors. If you are looking for financial assistance, start here.
        </p>
        <div className="mt-10 grid gap-px bg-[var(--gp-line)] sm:grid-cols-2 lg:grid-cols-3">
          {GRANT_PROGRAMS.map((p, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <Link key={p.slug} href={`/programs/${p.slug}`} className="bg-white p-8 hover:bg-[var(--gp-paper)]">
                <Icon className="h-6 w-6 text-[var(--gp-blue)]" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{p.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
