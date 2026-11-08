import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DonateForm } from '@/components/donate/DonateForm';
import { DonateTicker } from '@/components/home/DonateTicker';
import { createMetadata } from '@/lib/metadata';
import {
  ELIGIBILITY_OPEN,
  FULL_NAME,
  HELP_AREAS_SHORT,
  ORG_BLURB,
  SHORT_NAME,
  SUPPORT_EMAIL,
} from '@/lib/site';

export const metadata = createMetadata({
  title: 'Donate to the IDA Grant Program',
  description:
    'Support the IDA Grant Program. Donations help IDA keep awarding one-time grants for medical care, housing, business, education, teachers, seniors, and more.',
  path: '/donate',
});

const impactStats = [
  { value: 'Billions', label: 'In one-time awards issued each year' },
  { value: 'Every day', label: 'Grants awarded to individuals' },
  { value: '8 categories', label: 'Medical, home, business, school, teachers, seniors, and more' },
  { value: '18+', label: 'Open to adults. No income cap. No crisis requirement' },
];

const grantPlaces = [
  {
    title: 'Medical care',
    text: 'Hospital stays, ongoing treatment, prescriptions, specialist visits, and recovery costs that insurance or savings have not fully covered.',
  },
  {
    title: 'Buying a home',
    text: 'Home purchase support, closing costs, property upgrades, and help protecting the home someone already has.',
  },
  {
    title: 'Starting a business',
    text: 'Capital to open, equip, or expand a business: equipment, vehicles, inventory, licensing, leases, and launch costs.',
  },
  {
    title: 'Going to school',
    text: 'Tuition, training, books, tools, and related school costs for adults returning to school or finishing a credential.',
  },
  {
    title: 'Teachers',
    text: 'Classroom materials, certification, and professional development for working educators.',
  },
  {
    title: 'Retired teachers',
    text: 'Living costs, medical care, housing, and personal goals for educators after a career in the classroom.',
  },
  {
    title: 'Seniors',
    text: 'Medical, housing, utilities, and general grant support for older adults and retirees at every income level.',
  },
  {
    title: 'General grants',
    text: 'Clear goals that span more than one category, or do not fit a single label. Completeness matters more than perfect wording.',
  },
];

const outcomes = [
  {
    title: 'Medical care that can continue',
    text: 'One-time grants close treatment gaps so people can get care without taking on a medical loan.',
  },
  {
    title: 'Homes that stay secure',
    text: 'Awards help someone buy, keep, or stabilize a home when the next step is clear.',
  },
  {
    title: 'Businesses that open and grow',
    text: 'Owners and salespeople get capital for equipment, inventory, and expansion without another loan hanging over them.',
  },
  {
    title: 'School that actually finishes',
    text: 'Adults complete programs, credentials, and training they almost walked away from for lack of money.',
  },
  {
    title: 'Teachers who keep serving',
    text: 'Working educators get classroom and career support so students feel the difference.',
  },
  {
    title: 'Seniors and retirees with dignity',
    text: 'Older adults receive practical help for medical, housing, and living goals after a lifetime of work.',
  },
];

export default function DonatePage() {
  return (
    <div className="bg-white">
      <DonateTicker />

      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">Donate</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Help us keep awarding grants</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--gp-muted)] md:text-lg">
            If you are here to give, you already understand something simple. This program changes
            lives. Your donation helps the next award go out across every category {SHORT_NAME}{' '}
            funds.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--gp-line)] py-10 md:py-12">
        <div className="container-page grid gap-0 border border-[var(--gp-line)] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <article
              key={stat.label}
              className={`p-6 md:p-8 ${i > 0 ? 'border-t border-[var(--gp-line)] sm:border-t-0' : ''} ${
                i % 2 === 1 ? 'sm:border-l' : ''
              } ${i >= 2 ? 'lg:border-t-0 sm:border-t lg:border-l' : ''} border-[var(--gp-line)]`}
            >
              <p className="text-2xl font-semibold text-[var(--gp-navy)] md:text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div className="space-y-5 text-sm leading-relaxed text-[var(--gp-muted)] md:text-base">
          <p className="section-label">The program</p>
          <h2 className="text-3xl text-[var(--gp-navy)] md:text-4xl">What {SHORT_NAME} does</h2>
          <p>{ORG_BLURB}</p>
          <p>
            Awards are grants, not loans. People apply for medical care, housing, business ventures,
            education, educators, retirees, seniors, and other clear goals. {ELIGIBILITY_OPEN}
          </p>
          <p>
            Donations from individuals and companies around the world help {SHORT_NAME} do even more.
            We are open to more donations so this work does not slow down. Twenty thousand dollars.
            Two hundred fifty thousand. Five million. Every amount keeps another award moving.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/about" className="btn-outline">
              Read about {FULL_NAME}
            </Link>
            <Link href="/programs" className="btn-outline">
              See all grant categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <aside className="border border-[var(--gp-line)] bg-[var(--gp-paper)] p-8 md:p-10">
          <p className="section-label">Where gifts go</p>
          <h3 className="mt-3 text-2xl text-[var(--gp-navy)]">The full map</h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
            {HELP_AREAS_SHORT} Your gift helps keep one-time awards moving through all of those
            places.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--gp-navy)]">
            {grantPlaces.map((place) => (
              <li key={place.title} className="border-b border-[var(--gp-line)] pb-2 last:border-0">
                {place.title}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-16 md:py-20">
        <div className="container-page">
          <p className="section-label">Grant categories</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Places your donation can go</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--gp-muted)]">
            When you give, you help keep debt-free grant awards moving across every category below.
            That is the full list of places {SHORT_NAME} funding can go.
          </p>
          <div className="mt-10 grid gap-0 border border-[var(--gp-line)] bg-white sm:grid-cols-2">
            {grantPlaces.map((place, i) => (
              <article
                key={place.title}
                className={`p-8 md:p-10 ${i > 0 ? 'border-t border-[var(--gp-line)]' : ''} ${
                  i % 2 === 1 ? 'sm:border-l' : ''
                } ${i >= 2 ? 'sm:border-t' : ''} border-[var(--gp-line)]`}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gp-blue)] uppercase">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-xl text-[var(--gp-navy)]">{place.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">{place.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/programs" className="btn-outline">
              Read every grant category
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <p className="section-label">What your donation continues</p>
        <h2 className="mt-3 text-3xl md:text-4xl">This is the work you join</h2>
        <div className="mt-10 grid gap-0 border border-[var(--gp-line)] bg-white md:grid-cols-3">
          {outcomes.map((item, i) => (
            <article
              key={item.title}
              className={`p-8 md:p-10 ${
                i > 0 ? 'border-t border-[var(--gp-line)] md:border-t-0' : ''
              } ${i % 3 !== 0 ? 'md:border-l border-[var(--gp-line)]' : ''} ${
                i >= 3 ? 'md:border-t border-[var(--gp-line)]' : ''
              }`}
            >
              <h3 className="text-xl text-[var(--gp-navy)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--gp-line)] bg-[var(--gp-paper)] py-16 md:py-20">
        <div className="container-page">
          <p className="section-label">How giving works</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Simple steps from inquiry to gift</h2>
          <div className="mt-10 grid gap-0 border border-[var(--gp-line)] bg-white md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Send your inquiry',
                text: 'Share your name, amount, and why this program matters. Name a grant category if you want your gift aimed somewhere specific.',
              },
              {
                step: '02',
                title: 'Hear from Support',
                text: `Official next steps come only from ${SUPPORT_EMAIL}. Check inbox and spam so you do not miss the reply.`,
              },
              {
                step: '03',
                title: 'Keep awards moving',
                text: 'Your gift helps the next medical, housing, business, school, teacher, senior, or general grant file keep moving.',
              },
            ].map((item, i) => (
              <article
                key={item.step}
                className={`p-8 md:p-10 ${i > 0 ? 'border-t border-[var(--gp-line)] md:border-t-0 md:border-l' : ''}`}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gp-blue)] uppercase">
                  {item.step}
                </p>
                <h3 className="mt-3 text-xl text-[var(--gp-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page max-w-3xl space-y-12 py-16 md:py-20">
        <div>
          <p className="section-label">Give</p>
          <h2 className="mt-3 text-3xl">Make a donation</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--gp-muted)]">
            Tell us your name, the amount you want to give, and a few words about why this program
            matters to you. If you want your gift aimed at a specific category, say that in the
            message. Official follow-up comes from {SUPPORT_EMAIL}.
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
