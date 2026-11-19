import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Globe, Mail, ShieldCheck } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageJsonLd } from '@/data/faq';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/jsonld';
import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  COORDINATOR_EMAIL,
  COORDINATOR_NAME,
  SHORT_NAME,
  SITE_DOMAIN,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/site';

const VERIFY_DESCRIPTION =
  'Got a surprise text, Facebook message, Instagram DM, or email saying you were selected for an IDA grant and must claim it? That may not be IDA. Tell support how you were contacted so we can confirm it.';

const verifyFaqs = [
  {
    question: 'I got a message saying I was selected and need to claim an IDA grant. Real?',
    answer: `Be careful. IDA does not start with cold texts, Facebook, Instagram, TikTok, WhatsApp, or surprise emails announcing that you won and must claim funds. If that is how someone reached you, email ${SUPPORT_EMAIL} with the channel, who they claimed to be, and what they asked. We will confirm whether it is us.`,
  },
  {
    question: 'How do I verify an IDA grant text, social DM, or email?',
    answer: `Stop and use this page. Write ${SUPPORT_EMAIL} with who contacted you, where (text, Facebook, Instagram, email, or another app), and what they wanted you to do. We will check it against an official file. The official website is ${SITE_DOMAIN}.`,
  },
  {
    question: 'What are the official IDA email addresses?',
    answer: `Official support and verification: ${SUPPORT_EMAIL}. Application receipts: ${APPLY_FROM_NAME} at ${APPLY_FROM_EMAIL}. After a coordinator is assigned to your file, follow-up comes from ${COORDINATOR_NAME} at ${COORDINATOR_EMAIL}.`,
  },
  {
    question: 'Does IDA ask for passwords or payment to release a grant?',
    answer:
      'No. We will never ask for your email or banking passwords. If anyone claiming to represent us demands passwords, ignore them and write support.',
  },
  {
    question: 'What if the message used a name or title that sounded official?',
    answer: `Names and titles alone do not prove a message is real. Confirm the sender address against this page — ${SUPPORT_EMAIL} for support and verification, ${APPLY_FROM_EMAIL} for application receipts, and ${COORDINATOR_EMAIL} for assigned-coordinator follow-up. When in doubt, email ${SUPPORT_EMAIL} before you act.`,
  },
];

export const metadata = createMetadata({
  title: 'Is this IDA grant text real?',
  description: VERIFY_DESCRIPTION,
  path: '/verify',
});

export default function VerifyPage() {
  return (
    <div className="bg-white">
      <JsonLd data={webPageJsonLd({ name: 'Verify official IDA contact', path: '/verify', description: VERIFY_DESCRIPTION })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Verify', path: '/verify' },
        ])}
      />
      <JsonLd data={buildFaqPageJsonLd(verifyFaqs)} />
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label">Verify</p>
          <h1 className="mt-3 text-4xl">
            Is this IDA grant
            <span className="mt-2 block text-[var(--gp-blue)]">text real?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
            If a stranger messaged you out of nowhere — text, email, Facebook, Instagram, or another
            social app — saying you were selected and need to claim an IDA grant, that may not be
            us. Tell us what happened and confirm you are speaking with the right office before you
            reply or send anything.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-page max-w-3xl space-y-8">
          <div className="border border-[var(--gp-line)] p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--gp-blue)]" />
            <h2 className="mt-4 text-xl">Official support email</h2>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="mt-2 block text-lg font-semibold text-[var(--gp-blue)]"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-[var(--gp-muted)]">
              Application receipts: {APPLY_FROM_NAME} ({APPLY_FROM_EMAIL}). Assigned coordinator
              follow-up: {COORDINATOR_NAME} ({COORDINATOR_EMAIL}). Website:{' '}
              <a href={SITE_URL} className="font-medium text-[var(--gp-navy)]">
                {SITE_DOMAIN}
              </a>
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="btn-primary mt-6"
            >
              Email support to verify
            </a>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: AlertTriangle,
                title: 'Unsolicited “selected — claim now” contact',
                body: `IDA does not open files by cold-texting or DMing people on Facebook, Instagram, TikTok, WhatsApp, or similar apps to say they won and must claim a grant. If that is how you heard from someone, treat it as unverified and email ${SUPPORT_EMAIL} first.`,
              },
              {
                icon: Globe,
                title: 'Official website only',
                body: `The official application site is ${SITE_DOMAIN}. If a link goes somewhere else, stop and email ${SUPPORT_EMAIL}.`,
              },
              {
                icon: Mail,
                title: 'Official email addresses',
                body: `Support and verification: ${SUPPORT_EMAIL}. Application receipts: ${APPLY_FROM_EMAIL} (${APPLY_FROM_NAME}). Assigned coordinator follow-up: ${COORDINATOR_EMAIL} (${COORDINATOR_NAME}).`,
              },
              {
                icon: ShieldCheck,
                title: 'Describe the contact',
                body: `Tell us the channel (text, Facebook, Instagram, email, or another app), the name or handle they used, and what they asked you to do. Email ${SUPPORT_EMAIL} so we can confirm you are talking to the right person.`,
              },
              {
                icon: AlertTriangle,
                title: 'Protect yourself',
                body: 'We will never ask for your email or banking passwords. If anyone claiming to represent us demands passwords, ignore them and write support.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--gp-paper)] text-[var(--gp-blue)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gp-navy)]">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--gp-muted)]">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--gp-line)] pt-8 text-center">
            <Link href="/apply" className="btn-primary">
              Apply for a grant
            </Link>
            <p className="mt-4 text-sm text-[var(--gp-muted)]">
              {SHORT_NAME} · Official contact lives on this website and the addresses above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
