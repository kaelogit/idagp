import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { GRANT_PROGRAMS } from '@/data/programs';
import { recipientStories } from '@/data/stories';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GRANT_PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = GRANT_PROGRAMS.find((p) => p.slug === slug);
  if (!program) return createMetadata({ title: 'Program', path: '/programs' });
  return createMetadata({
    title: `${program.title} — IDA Grant Program`,
    description: `${program.summary} Official IDA Grant Program category.`,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = GRANT_PROGRAMS.find((p) => p.slug === slug);
  if (!program) notFound();

  const related = recipientStories
    .filter((s) => s.category.toLowerCase().includes(program.title.split(' ')[0].toLowerCase()) || s.category === program.title)
    .slice(0, 3);

  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-12 text-white">
        <div className="container-page max-w-3xl">
          <p className="section-label">Program</p>
          <h1 className="mt-3 text-4xl text-white">{program.title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{program.who}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-6">
          <p className="text-sm leading-relaxed text-[var(--gp-muted)]">{program.details}</p>
          <p className="text-sm leading-relaxed text-[var(--gp-muted)]">
            If you are selected, you do not repay the award. Applying does not guarantee funds.
            Write plainly. Completeness matters more than perfect wording.
          </p>
          {related.length > 0 ? (
            <div className="border-t border-[var(--gp-line)] pt-8">
              <h2 className="text-xl">Letters in this category</h2>
              <ul className="mt-4 space-y-4">
                {related.map((s) => (
                  <li key={s.name}>
                    <p className="font-semibold text-[var(--gp-navy)]">
                      {s.name} · {s.amount}
                    </p>
                    <p className="text-sm text-[var(--gp-muted)]">“{s.quote}”</p>
                  </li>
                ))}
              </ul>
              <Link href="/impact" className="mt-4 inline-block text-sm font-semibold text-[var(--gp-blue)]">
                All stories
              </Link>
            </div>
          ) : null}
          <Link href="/apply" className="btn-primary inline-flex">
            Apply for {program.title.toLowerCase()}
          </Link>
        </div>
      </section>
    </div>
  );
}
