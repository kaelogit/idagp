import Link from 'next/link';
import { DonateForm } from '@/components/donate/DonateForm';
import { DonateTicker } from '@/components/home/DonateTicker';
import { createMetadata } from '@/lib/metadata';
import { ORG_BLURB, SHORT_NAME, SUPPORT_EMAIL } from '@/lib/site';

export const metadata = createMetadata({
  title: 'Donate to the IDA Grant Program',
  description:
    'Support the IDA Grant Program. Donations help IDA keep awarding one-time grants for medical care, housing, business, education, and more.',
  path: '/donate',
});

const outcomes = [
  {
    title: 'Medical care',
    text: 'Grants that close treatment gaps so people can get care without taking on a medical loan.',
  },
  {
    title: 'Housing and school',
    text: 'One-time awards that help someone buy or keep a home, or finish a program they almost left.',
  },
  {
    title: 'Business and community',
    text: 'Support for owners, educators, seniors, and families who have a clear next step.',
  },
];

export default function DonatePage() {
  return (
    <div className="bg-white">
      <DonateTicker />

      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">Donate</p>
          <h1 className="mt-3 text-4xl">Help us keep awarding grants</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--gp-muted)] md:text-lg">
            If you are here to give, you already understand something simple. This program changes
            lives. Your donation helps the next award go out.
          </p>
        </div>
      </section>

      <section className="container-page max-w-3xl space-y-6 py-16 text-sm leading-relaxed text-[var(--gp-muted)] md:text-base">
        <p className="section-label">The program</p>
        <h2 className="text-3xl text-[var(--gp-navy)]">What IDA does</h2>
        <p>{ORG_BLURB}</p>
        <p>
          Awards are grants, not loans. People apply for medical care, housing, business ventures,
          education, and other clear goals. There is no income cap and no requirement that someone
          be in crisis.
        </p>
        <p>
          Donations from individuals and companies around the world help {SHORT_NAME} do even more.
          We are open to more donations so this work does not slow down. Twenty thousand dollars.
          Two hundred fifty thousand. Five million. Every amount keeps another award moving.
        </p>
        <Link href="/about" className="btn-outline">
          Read about IDA
        </Link>
      </section>

      <section className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-16">
        <div className="container-page">
          <p className="section-label">What your donation continues</p>
          <h2 className="mt-3 text-3xl">This is the work you join</h2>
          <div className="mt-10 grid gap-0 border border-[var(--gp-line)] bg-white md:grid-cols-3">
            {outcomes.map((item, i) => (
              <article
                key={item.title}
                className={`p-8 ${i > 0 ? 'border-t border-[var(--gp-line)] md:border-t-0 md:border-l' : ''}`}
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page max-w-3xl space-y-12 py-16">
        <div>
          <h2 className="text-3xl">Make a donation</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--gp-muted)]">
            Tell us your name, the amount you want to give, and a few words about why this program
            matters to you. Official follow-up comes from {SUPPORT_EMAIL}.
          </p>
          <DonateForm />
        </div>
        <div className="border border-[var(--gp-line)] bg-[var(--gp-paper)] p-8">
          <p className="section-label">Questions</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=I%20want%20to%20donate`}
            className="mt-3 block text-xl font-semibold text-[var(--gp-navy)]"
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">
            Official donation follow-up uses this address only. Apply for a grant stays on the Apply
            page.
          </p>
        </div>
      </section>
    </div>
  );
}
