import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Globe, Mail, ShieldCheck } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import {
  CONTACT_EMAIL,
  COORDINATOR_NAME,
  COORDINATOR_TITLE,
  FULL_NAME,
  SHORT_NAME,
  SITE_DOMAIN,
  SITE_URL,
} from '@/lib/site';

export const metadata = createMetadata({
  title: 'Verify official contact',
  description: `Was someone contacting you about an IDA grant? Official ${SHORT_NAME} contact is ${CONTACT_EMAIL} on ${SITE_DOMAIN}.`,
  path: '/verify',
});

export default function VerifyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label">Verify</p>
          <h1 className="mt-3 text-4xl">
            Someone contacted you about an IDA grant?
            <span className="mt-2 block text-[var(--gp-blue)]">Verify it here first.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)]">
            If a call, email, or message left you unsure, pause and write us. Confirming official{' '}
            {FULL_NAME} contact is the right next step.
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
              Coordinator: {COORDINATOR_NAME}, {COORDINATOR_TITLE}. Website:{' '}
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
                body: `The official application site is ${SITE_DOMAIN}. If a link goes somewhere else, stop and email us.`,
              },
              {
                icon: Mail,
                title: 'Official email',
                body: `Legitimate ${SHORT_NAME} messages come from addresses you can confirm through this page, including ${CONTACT_EMAIL}.`,
              },
              {
                icon: ShieldCheck,
                title: 'Ask us before you act',
                body: `Tell us who contacted you and what they asked. We will confirm whether it matches an official file.`,
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
