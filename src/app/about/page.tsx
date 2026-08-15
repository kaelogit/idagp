import { createMetadata } from '@/lib/metadata';
import {
  CONTACT_EMAIL,
  COORDINATOR_NAME,
  FULL_NAME,
  HELP_AREAS_SHORT,
  ORG_BLURB,
  SHORT_NAME,
} from '@/lib/site';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'About',
  description: `${FULL_NAME} (${SHORT_NAME}) is a private grant foundation issuing billions in grant money each year. Awards are not loans.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">About</p>
          <h1 className="mt-3 text-4xl">Internal Development Associate</h1>
          <p className="mt-4 text-lg text-[var(--gp-navy)]">{SHORT_NAME} · Grant Program</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-[var(--gp-muted)]">
          <p>{ORG_BLURB}</p>
          <p>
            People come to IDA when they are looking for financial assistance they can actually use —
            not another product they have to pay back. {HELP_AREAS_SHORT}
          </p>

          <h2 className="pt-4 text-2xl text-[var(--gp-blue)]">Executive summary</h2>
          <p>
            IDA exists to move grant money — not credit — to individuals and groups with a practical
            need. We issue billions of dollars in IDA grant money each year across many kinds of
            files. Awards are made to individuals each and every day. That volume does not mean every
            application is selected. It does mean that asking is allowed, expected, and reviewed.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">Objectives</h2>
          <p>
            Help people pay medical bills. Help people buy a home. Help salespeople and others start
            their own business. Help people going to school. Help working teachers and retired
            teachers. Help seniors and older retired people looking for financial assistance. Contact
            every applicant by email. Keep official applications on this website.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">Not a loan</h2>
          <p>
            IDA grant programs are not loans. If you are selected, you do not repay the award.
            Applying does not create debt. If someone offers you an “IDA loan,” it is not this
            program. Confirm contact on our Verify page or write {CONTACT_EMAIL}.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">Who we serve</h2>
          <p>
            Adults 18 or older may apply for themselves. Files come from people in medical recovery,
            families closing on a house, sales professionals opening a shop, students finishing a
            credential, teachers buying classroom supplies with their own rent money, retired
            teachers on a fixed pension, and seniors who are tired of choosing between the pharmacy
            and the grocery list.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">How a file is handled</h2>
          <p>
            {COORDINATOR_NAME} reads applications personally. First contact is email within 24 hours.
            We may ask for more detail. Selected files receive next steps by email. Unselected files
            are still treated with respect — applying is not a waste of courage.
          </p>

          <Link href="/apply" className="btn-primary mt-4 inline-flex">
            Apply for a grant
          </Link>
        </div>
      </section>
    </div>
  );
}
