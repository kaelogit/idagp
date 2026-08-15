import Link from 'next/link';
import { COORDINATOR_NAME, COORDINATOR_TITLE, CONTACT_EMAIL, RESPONSE_HOURS } from '@/lib/site';

export function CoordinatorSection() {
  return (
    <section className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-20">
      <div className="container-page max-w-3xl">
        <p className="section-label">Your coordinator</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{COORDINATOR_NAME}</h2>
        <p className="mt-2 text-sm font-semibold text-[var(--gp-blue)]">{COORDINATOR_TITLE}</p>
        <p className="mt-5 text-sm leading-relaxed text-[var(--gp-muted)]">
          Every application is read by a person. {COORDINATOR_NAME} writes you within {RESPONSE_HOURS}{' '}
          hours — not a ticket number, not a chatbot. She will ask what she needs to understand your
          file: medical bills, a home, a business start, school, teaching, or senior support.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
          Official follow-up is email only ({CONTACT_EMAIL}). If a stranger contacts you claiming to
          be IDA, pause and verify on this website first.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/apply" className="btn-primary">
            Apply so she can open your file
          </Link>
          <Link href="/verify" className="btn-outline">
            Verify a message
          </Link>
        </div>
      </div>
    </section>
  );
}
