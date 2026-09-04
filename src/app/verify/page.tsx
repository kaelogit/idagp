import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Globe, Mail, ShieldCheck } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageJsonLd } from '@/data/faq';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/jsonld';
import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  CONTACT_EMAIL,
  FULL_NAME,
  SHORT_NAME,
  SITE_DOMAIN,
  SITE_URL,
} from '@/lib/site';

const VERIFY_DESCRIPTION =
  'Pause here if someone contacted you about an IDA grant. Verifying means confirming the text or email is from IDA before you reply, share personal information, or take any next step.';

const verifyFaqs = [
  {
    question: 'How do I verify an IDA grant text or email?',
    answer: `Pause and check this page. Email ${CONTACT_EMAIL} with who contacted you and what they asked. We will confirm whether it matches an official file. The official website is ${SITE_DOMAIN}.`,
  },
  {
    question: 'What are the official IDA email addresses?',
    answer: `Official support is ${CONTACT_EMAIL}. Application receipts come from ${APPLY_FROM_NAME} at ${APPLY_FROM_EMAIL} only. Messages from other addresses are not official.`,
  },
  {
    question: 'Does IDA ask for passwords or payment to release a grant?',
    answer:
      'No. IDA grants are not loans. We will never ask for your email or banking passwords. If anyone claiming to represent us demands passwords or repayment as if the award were a loan, ignore them and write support.',
  },
  {
    question: 'What if the message used a name or title that sounded official?',
    answer: `Names and titles alone do not prove a message is real. Confirm the sender address against this page — ${CONTACT_EMAIL} for support and verification, ${APPLY_FROM_EMAIL} for application receipts only. When in doubt, email support before you act.`,
  },
];

export const metadata = createMetadata({
  title: 'Verify an IDA Grant Text or Email',
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
            Someone contacted you about an IDA grant?
            <span className="mt-2 block text-[var(--gp-blue)]">Verify it here first.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
            If a text or email about an IDA grant left you unsure, pause and write us. Verifying
            means confirming the message is from {FULL_NAME} before you reply or take any next step.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-page max-w-3xl space-y-8">
          <div className="border border-[var(--gp-line)] p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--gp-blue)]" />
            <h2 className="mt-4 text-xl">Official support email</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="mt-2 block text-lg font-semibold text-[var(--gp-blue)]"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-[var(--gp-muted)]">
              Application receipts come from {APPLY_FROM_NAME} ({APPLY_FROM_EMAIL}). Website:{' '}
              <a href={SITE_URL} className="font-medium text-[var(--gp-navy)]">
                {SITE_DOMAIN}
              </a>
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="btn-primary mt-6"
            >
              Email support to verify
            </a>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: Globe,
                title: 'Official website only',
                body: `The official application site is ${SITE_DOMAIN}. If a link goes somewhere else, stop and email ${CONTACT_EMAIL}.`,
              },
              {
                icon: Mail,
                title: 'Official email',
                body: `Legitimate ${SHORT_NAME} support and verification messages come from ${CONTACT_EMAIL}. Application receipts come from ${APPLY_FROM_EMAIL} (${APPLY_FROM_NAME}) only.`,
              },
              {
                icon: ShieldCheck,
                title: 'Ask us before you act',
                body: `Tell us who contacted you and what they asked. Email ${CONTACT_EMAIL} and we will confirm whether it matches an official file.`,
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
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--gp-muted)]">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl">Questions people ask before they reply</h2>
            <div className="mt-4">
              {verifyFaqs.map((item) => (
                <div key={item.question} className="border-t border-[var(--gp-line)] py-5">
                  <h3 className="text-sm font-semibold text-[var(--gp-navy)]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn-outline">
              FAQ
            </Link>
            <Link href="/security" className="btn-outline">
              Security
            </Link>
            <Link href="/apply" className="btn-primary">
              Apply on this site
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
