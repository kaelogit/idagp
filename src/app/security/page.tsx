import Link from 'next/link';
import { AlertTriangle, Lock, Mail, ShieldCheck } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { CONTACT_EMAIL, SHORT_NAME, SITE_DOMAIN } from '@/lib/site';

export const metadata = createMetadata({
  title: 'Security',
  description: `How ${SHORT_NAME} protects applicants. Official contact is ${CONTACT_EMAIL} on ${SITE_DOMAIN}.`,
  path: '/security',
});

export default function SecurityPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-12">
        <div className="container-page max-w-3xl">
          <p className="section-label">Security</p>
          <h1 className="mt-3 text-4xl">Trust, privacy, and how to verify us</h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
            International Development Association protects every applicant — and helps people confirm
            whether a grant message is really from us.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-10">
          {[
            {
              icon: AlertTriangle,
              title: 'Unsure if a contact is real?',
              body: `Email ${CONTACT_EMAIL} or use the Verify page. We will confirm whether the outreach matches an official file.`,
            },
            {
              icon: Lock,
              title: 'Private applications',
              body: 'Your details are used to review your grant request and contact you. We do not sell your information.',
            },
            {
              icon: ShieldCheck,
              title: 'Official channels',
              body: `Use ${SITE_DOMAIN} and ${CONTACT_EMAIL}. We will never ask for passwords.`,
            },
            {
              icon: Mail,
              title: 'Email response',
              body: `Helen Marsh replies from ${CONTACT_EMAIL}. Check inbox and spam.`,
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--gp-paper)] text-[var(--gp-blue)]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-[var(--gp-muted)]">{body}</p>
              </div>
            </div>
          ))}
          <Link href="/verify" className="btn-primary">
            Go to Verify page
          </Link>
        </div>
      </section>
    </div>
  );
}
