import Link from 'next/link';
import { ArrowRight, AlertTriangle, HeartHandshake } from 'lucide-react';
import { fakeAgents } from '@/data/fake-agents';
import { SHORT_NAME } from '@/lib/site';

const featured = fakeAgents.slice(0, 8);

export function ScamAlertSection() {
  return (
    <section data-nosnippet className="border-y border-[var(--gp-line)] bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="section-label">You are not alone</p>
            <h2 className="mt-4 text-4xl text-[var(--gp-navy)] md:text-5xl">
              Got an IDA grant
              <br />
              scam text?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--gp-muted)] md:text-lg">
              If a text said the grant program picked you, that message was not us. The full story
              form is on its own page.
            </p>
            <div className="mt-6 flex items-start gap-3 text-sm text-[var(--gp-navy)]">
              <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gp-blue)]" />
              <p className="leading-relaxed">
                Your courage protects the next person. Your story can help bring your funds home.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/scam-report" className="btn-navy">
                Tell us about the scam text
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/verify" className="btn-outline">
                Verify a contact
              </Link>
            </div>
          </div>

          <div className="border border-[var(--gp-line)] bg-[var(--gp-paper)] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[var(--gp-blue)]">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <p className="text-xs font-bold tracking-[0.16em] uppercase">Names we keep seeing</p>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {featured.map((agent) => (
                <li
                  key={agent.name}
                  className="border border-[var(--gp-line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--gp-navy)]"
                >
                  {agent.name}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-[var(--gp-muted)]">
              These names are not {SHORT_NAME} staff. Full list, recovery path, and story form on the
              next page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
