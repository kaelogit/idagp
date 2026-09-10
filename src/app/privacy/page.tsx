import { createMetadata } from '@/lib/metadata';
import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { APPLY_FROM_EMAIL, APPLY_FROM_NAME, CONTACT_EMAIL, FULL_NAME, SHORT_NAME, SITE_DOMAIN } from '@/lib/site';

export const metadata = createMetadata({
  title: 'IDA Privacy Policy — How We Handle Applications',
  description:
    'How International Development Association uses the information you submit on idagrantprogram.com. Official follow-up is by email. We never ask for passwords.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="mb-8 text-sm leading-relaxed text-[var(--gp-muted)]">
        {FULL_NAME} ({SHORT_NAME}) uses this policy to explain how we handle information you submit
        on {SITE_DOMAIN}.
      </p>
      <LegalSection title="What we collect">
        When you apply, we collect your name, email, phone, address, country, grant category, and
        the message you write about your situation. If you email support, we keep that thread so we
        can answer you.
      </LegalSection>
      <LegalSection title="How we use it">
        Application details are used only to review your grant request, contact you, and keep an
        official file. We do not sell your information. We do not use your application as marketing
        to third parties.
      </LegalSection>
      <LegalSection title="Email">
        Application receipts come from {APPLY_FROM_NAME} ({APPLY_FROM_EMAIL}). Official follow-up
        comes from {CONTACT_EMAIL}. Check inbox and spam. We will never ask for your email or
        banking passwords.
      </LegalSection>
      <LegalSection title="Access and deletion">
        You may request access, correction, or deletion of your personal information by emailing{' '}
        {CONTACT_EMAIL}.
      </LegalSection>
      <LegalSection title="Questions">
        Write {CONTACT_EMAIL} with any privacy question. Confirming official contact first is always
        allowed — use the Verify page if a message feels off.
      </LegalSection>
    </LegalLayout>
  );
}
