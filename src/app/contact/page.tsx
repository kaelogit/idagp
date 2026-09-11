import { createMetadata } from '@/lib/metadata';
import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  COORDINATOR_EMAIL,
  COORDINATOR_NAME,
  RESPONSE_HOURS,
  SUPPORT_EMAIL,
} from '@/lib/site';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Contact IDA — Official Email for Applicants',
  description:
    'Official support: support@idagrantprogram.com. Application receipts: apply@idagrantprogram.com. After you apply, your coordinator contacts you from helenmarsh@idagrantprogram.com.',
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
            Grant applications go through the Apply form. For questions, verification, or general
            support, write {SUPPORT_EMAIL}.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="container-page max-w-3xl space-y-8">
          <div className="border border-[var(--gp-line)] p-8">
            <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
              Official support
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-block text-xl font-semibold text-[var(--gp-blue)]"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
              Use this address for verification, questions, and general help. Application receipts
              come from {APPLY_FROM_NAME} ({APPLY_FROM_EMAIL}) only.
            </p>
          </div>
          <div className="border border-[var(--gp-line)] p-8">
            <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
              After you apply
            </p>
            <p className="mt-2 text-sm text-[var(--gp-muted)]">
              A coordinator is assigned to your file after you submit. Official coordinator follow-up
              for assigned files is {COORDINATOR_NAME} ({COORDINATOR_EMAIL}).
            </p>
            <a
              href={`mailto:${COORDINATOR_EMAIL}`}
              className="mt-3 inline-block text-lg font-semibold text-[var(--gp-blue)]"
            >
              {COORDINATOR_EMAIL}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
              First reply on new applications is within {RESPONSE_HOURS} hours. Check inbox and spam.
              Reply on the same coordinator thread so your file stays together.
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
                Pause and verify. Email {SUPPORT_EMAIL} with who contacted you and what they asked.
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
