import { createMetadata } from '@/lib/metadata';
import { CONTACT_EMAIL, COORDINATOR_NAME, COORDINATOR_TITLE, FULL_NAME, RESPONSE_HOURS } from '@/lib/site';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Contact',
  description: `Contact ${FULL_NAME} at ${CONTACT_EMAIL}.`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">Contact</p>
          <h1 className="mt-3 text-4xl">Talk to IDA by email</h1>
          <p className="mt-4 leading-relaxed text-[var(--gp-muted)]">
            Grant applications go through the Apply form so your file is complete. Questions,
            verification, and follow-up go to {COORDINATOR_NAME}.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="container-page max-w-3xl space-y-8">
          <div className="border border-[var(--gp-line)] p-8">
            <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
              Official support
            </p>
            <p className="mt-2 text-sm text-[var(--gp-muted)]">
              {COORDINATOR_NAME}, {COORDINATOR_TITLE}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-xl font-semibold text-[var(--gp-blue)]"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
              First reply on new applications is within {RESPONSE_HOURS} hours. Check inbox and spam.
              Reply on the same thread so your file stays together.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-t border-[var(--gp-line)] pt-5">
              <h2 className="text-lg">New grant request</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">
                Use the application form. That is how IDA opens a file — not a social message or a
                lookalike website.
              </p>
              <Link href="/apply" className="mt-4 inline-block text-sm font-semibold text-[var(--gp-blue)]">
                Go to Apply
              </Link>
            </div>
            <div className="border-t border-[var(--gp-line)] pt-5">
              <h2 className="text-lg">Unsure if a message is real</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">
                Pause and verify. Tell us who contacted you and what they asked. Confirming first is
                the right thing to do.
              </p>
              <Link href="/verify" className="mt-4 inline-block text-sm font-semibold text-[var(--gp-blue)]">
                Go to Verify
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
