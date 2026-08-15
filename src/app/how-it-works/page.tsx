import { createMetadata } from '@/lib/metadata';
import { applicantContactWithin, CONTACT_EMAIL, COORDINATOR_NAME, RESPONSE_HOURS } from '@/lib/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'How it works',
  description: 'How International Development Association reviews IDA grant applications. Grants are not loans.',
  path: '/how-it-works',
});

const steps = [
  {
    title: 'Objectives',
    body: 'Move IDA grant money to individuals with a practical need — medical bills, a home, a business start, school, teachers, retired teachers, seniors, and other financial assistance. Awards are grants, not loans.',
  },
  {
    title: 'Background',
    body: 'International Development Association issues billions of dollars in grant money each year to a variety of groups. Grants are awarded to individuals each and every day. Your file is still reviewed on its own merits.',
  },
  {
    title: 'Submit',
    body: `Complete the apply form on this website. ${applicantContactWithin()}`,
  },
  {
    title: 'Review',
    body: `${COORDINATOR_NAME} may ask for more detail by email. Incomplete files are not advanced. Write plainly. Completeness matters more than perfect wording.`,
  },
  {
    title: 'Decision',
    body: 'Selected applicants receive next steps by email. IDA grants are not loans. Applying is not a promise of funds.',
  },
  {
    title: 'Timeline',
    body: `First reply within ${RESPONSE_HOURS} hours. Full review timing depends on the file. Awards to individuals happen every day across the program.`,
  },
  {
    title: 'Results',
    body: 'Selected files receive next steps by email. Recipients use grants for medical bills, a home, a business start, school, teaching, retirement, and senior needs. Unselected files still receive a clear reply.',
  },
  {
    title: 'Monitoring',
    body: 'IDA keeps an official email thread on each file. Reply on that thread. Do not send passwords. If a new person contacts you, verify on this website first.',
  },
  {
    title: 'Contact',
    body: `Official follow-up is email only: ${CONTACT_EMAIL}. If you are unsure whether a message is real, use the Verify page first.`,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'How it works', path: '/how-it-works' },
        ])}
      />
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-14 text-white">
        <div className="container-page max-w-3xl">
          <p className="section-label">Process</p>
          <h1 className="mt-3 text-4xl text-white">How an IDA grant works</h1>
          <p className="mt-4 leading-relaxed text-white/75">
            Clean process. Email follow-up. No loan paperwork.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl">
          {steps.map((s) => (
            <div key={s.title} className="border-t border-[var(--gp-line)] py-8">
              <h2 className="text-xl text-[var(--gp-blue)]">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{s.body}</p>
            </div>
          ))}
          <Link href="/apply" className="btn-primary mt-4">
            Apply now
          </Link>
        </div>
      </section>
    </div>
  );
}
