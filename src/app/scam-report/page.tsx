import Link from 'next/link';
import { AlertTriangle, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/jsonld';
import { ScamReportForm } from '@/components/scam-report/ScamReportForm';
import { fakeAgents } from '@/data/fake-agents';
import { SUPPORT_EMAIL } from '@/lib/site';

const DESCRIPTION =
  'We feel your pain. If a fake claims agent or trustee took your money while using the IDA name, begin recovery mode. Tell your story, report names like Ralph Montigny or Bobby Miller, and speak up for possible extra support.';

export const metadata = createMetadata({
  title: 'Scam Recovery Mode',
  description: DESCRIPTION,
  path: '/scam-report',
});

export default function ScamReportPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={webPageJsonLd({
          name: 'IDA scam recovery mode',
          path: '/scam-report',
          description: DESCRIPTION,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Scam Recovery Mode', path: '/scam-report' },
        ])}
      />

      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">You are not alone</p>
          <h1 className="mt-3 text-4xl text-[var(--gp-navy)] md:text-5xl">
            We feel your pain.
            <span className="mt-2 block text-[var(--gp-blue)]">Let us help you heal.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--gp-muted)] md:text-lg">
            Someone used a fake name, a soft voice, and a promise that felt like hope. Then the money
            was gone. That shame you are carrying is not yours to keep. It belongs to the people who
            lied to you. We see you. We believe you. And we want to begin recovery with you.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--gp-line)] bg-white py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <div className="flex items-start gap-4">
            <HeartHandshake className="mt-1 h-8 w-8 shrink-0 text-[var(--gp-blue)]" />
            <div>
              <p className="section-label">Recovery mode</p>
              <h2 className="mt-3 text-2xl text-[var(--gp-navy)] md:text-3xl">
                Tell your story. Begin recovery of what was taken.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--gp-muted)]">
                When you speak up, we can open a recovery path for the funds you lost to a fake
                claims agent, trustee, or coordinator using the IDA name. Speaking up also
                matters. People who come forward may receive additional support beyond the amount
                taken, because courage should not go unanswered. Your voice protects the next person
                who almost hits &quot;reply.&quot;
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--gp-navy)]">
                <li className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                  Recovery review for the amount you lost
                </li>
                <li className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                  Extra support considered for those brave enough to report
                </li>
                <li className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                  A quiet place to be heard without judgment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page max-w-3xl py-16 md:py-20">
        <div className="border border-[var(--gp-line)] bg-[var(--gp-paper)] p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gp-blue)]" />
            <div>
              <h2 className="text-lg text-[var(--gp-navy)]">How they got to you</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">
                A text. A call. A flyer on the door. A message on Facebook. They said you won. They
                called themselves your claims agent, your trustee, your coordinator. They asked you
                to reply YES, buy gift cards, send codes, or move money &quot;just this once.&quot;
                That pressure was designed to steal more than cash. It stole sleep, trust, and
                dignity. That was never the IDA Grant Program.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl text-[var(--gp-navy)]">Names that keep hurting people</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--gp-muted)]">
            If one of these names is sitting in your phone, you are not the first. You will not be
            the last unless we shine a light. None of them speak for IDA.
          </p>
          <ul className="mt-8 space-y-4">
            {fakeAgents.map((agent) => (
              <li
                key={agent.name}
                className="border-b border-[var(--gp-line)] pb-4 last:border-b-0 last:pb-0"
              >
                <p className="font-semibold text-[var(--gp-navy)]">{agent.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--gp-muted)]">{agent.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[var(--gp-muted)]">
            The name may be misspelled on purpose. Scammers remix names the way they remix hope. If
            they reached out first to say you won, pause. Then tell us.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl text-[var(--gp-navy)]">Begin recovery mode</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--gp-muted)]">
            Write what they said. Write what you sent. Write how much left your hands. Even if your
            hands are shaking. Even if you stopped before the last payment. This is where recovery
            starts, and where speaking up can open the door to extra support on top of what was
            taken from you.
          </p>
          <div className="mt-8">
            <ScamReportForm />
          </div>
        </div>

        <div className="mt-14 flex gap-4 border border-[var(--gp-line)] p-6 sm:p-8">
          <ShieldCheck className="h-6 w-6 shrink-0 text-[var(--gp-blue)]" />
          <div>
            <h2 className="text-lg text-[var(--gp-navy)]">You are safe here</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">
              Official follow-up uses{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[var(--gp-navy)] underline">
                {SUPPORT_EMAIL}
              </a>
              . You can also{' '}
              <Link href="/verify" className="font-semibold text-[var(--gp-navy)] underline">
                verify a contact
              </Link>{' '}
              before you reply to anyone else. From this point forward, you do not have to face
              that silence alone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
