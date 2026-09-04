import Link from 'next/link';
import { Clock, Shield } from 'lucide-react';
import { RESPONSE_HOURS } from '@/lib/site';

export function CoordinatorSection() {
  return (
    <section className="border-y border-[var(--gp-line)] bg-[var(--gp-paper)] py-20">
      <div className="container-page max-w-3xl">
        <p className="section-label">After you apply</p>
        <h2 className="mt-3 text-3xl md:text-4xl">A coordinator is assigned to your file</h2>
        <p className="mt-5 text-sm leading-relaxed text-[var(--gp-muted)]">
          Once your application is submitted, IDA assigns a coordinator to your file and contacts you
          by email. First reply within {RESPONSE_HOURS} hours — not a ticket number, not a chatbot.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
          Every application is read by a person. Your coordinator will ask what they need to
          understand your file: medical bills, a home, a business start, school, teaching, or senior
          support.
        </p>
        <div className="mt-6 flex items-start gap-3 border border-[var(--gp-line)] bg-white p-4">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gp-blue)]" />
          <p className="text-sm text-[var(--gp-muted)]">
            Check your inbox and spam folder after you apply. Reply on the same email thread so your
            file stays together.
          </p>
        </div>
        <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-[var(--gp-muted)]">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
          If someone contacts you about an IDA grant before you have applied, use the Verify page
          first.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/apply" className="btn-primary">
            Apply to open your file
          </Link>
          <Link href="/verify" className="btn-outline">
            Verify a message
          </Link>
        </div>
      </div>
    </section>
  );
}
