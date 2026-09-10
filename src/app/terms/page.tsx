import { createMetadata } from '@/lib/metadata';
import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { APPLY_FROM_EMAIL, APPLY_FROM_NAME, CONTACT_EMAIL, FULL_NAME, ORG_BLURB, SHORT_NAME, SITE_DOMAIN } from '@/lib/site';

export const metadata = createMetadata({
  title: 'IDA Terms — Grants Are Not Loans',
  description:
    'Terms for the official IDA Grant Program website. Applying does not create debt. Awards are grants, not loans, and are not guaranteed.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of use">
      <p className="mb-8 text-sm leading-relaxed text-[var(--gp-muted)]">{ORG_BLURB}</p>
      <LegalSection title="This website">
        {SITE_DOMAIN} is the official application site for {FULL_NAME}. Use it to learn about IDA
        grants, apply, and verify contact.
      </LegalSection>
      <LegalSection title="Grants are not loans">
        IDA grant programs are not loans. Submitting an application does not create debt, an award,
        or a contract. If you are selected, you do not repay the grant. If you are not selected,
        applying still does not create an obligation to IDA.
      </LegalSection>
      <LegalSection title="Eligibility">
        Adults 18 or older may apply for themselves. Each person submits their own application.
        Completeness matters. Awards are not guaranteed even though grants are issued to individuals
        every day and billions of dollars in IDA grant money go out each year.
      </LegalSection>
      <LegalSection title="Official contact">
        Follow-up is by email. Application receipts come from {APPLY_FROM_NAME} ({APPLY_FROM_EMAIL}).
        If you are unsure whether a message is from IDA, use the Verify page or write {CONTACT_EMAIL}{' '}
        before you act.
      </LegalSection>
      <LegalSection title="Accuracy">
        You agree that what you submit is true to the best of your knowledge. False statements can
        close a file.
      </LegalSection>
    </LegalLayout>
  );
}
