import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  COORDINATOR_EMAIL,
  ELIGIBILITY_OPEN,
  HELP_AREAS_SHORT,
  ORG_BLURB,
  RESPONSE_HOURS,
  SHORT_NAME,
  SITE_DOMAIN,
  SUPPORT_EMAIL,
} from '@/lib/site';

export const faqItems = [
  {
    question: 'Is an IDA grant a loan?',
    answer:
      'No. IDA grant programs are not loans. If you are selected, you do not repay the award. Applying does not create debt and does not guarantee funds.',
  },
  {
    question: 'Who can apply?',
    answer: `${ELIGIBILITY_OPEN} ${SHORT_NAME} awards grants to individuals each and every day. Each person submits their own application. ${HELP_AREAS_SHORT}`,
  },
  {
    question: 'Do I need to be low income or in financial crisis?',
    answer:
      'No. There is no income cap, no means test, and no requirement that you be in crisis. IDA reviews applications from adults at every income level. What matters is a clear purpose for the grant and a complete application.',
  },
  {
    question: 'Can IDA help with medical costs?',
    answer:
      'Yes. Medical care is one of the core categories. Include what the care is for and what remains unpaid. Selected awards are grants, not medical loans.',
  },
  {
    question: 'Can I apply for help buying a home?',
    answer:
      'Yes. IDA reviews requests related to buying a home and keeping stable housing. This is grant assistance for a housing goal — not a bank mortgage product.',
  },
  {
    question: 'I am a salesperson who wants to start my own business. Can I apply?',
    answer:
      'Yes. Salespeople starting their own business — and others launching or stabilizing a small business — may apply under the business category. Describe the work and what a one-time grant would cover.',
  },
  {
    question: 'Does IDA help people going to school?',
    answer:
      'Yes. Going to school — tuition, training, books, and related costs — is an eligible category. IDA grants are not student loans.',
  },
  {
    question: 'Can teachers and retired teachers apply?',
    answer:
      'Yes. Working teachers and retired teachers may apply. Classroom costs, certification, living costs after retirement, and related needs are reviewed under the teacher and retired-teacher programs.',
  },
  {
    question: 'Is this for seniors and retired people?',
    answer:
      'Yes. Seniors, older adults, and retirees may apply. Many IDA awards each year go to this group, at every income level.',
  },
  {
    question: 'How much grant money does IDA issue?',
    answer: `${ORG_BLURB} Volume does not mean every application is selected. Completeness and fit still matter.`,
  },
  {
    question: 'Are grants awarded every day?',
    answer: `Yes. ${SHORT_NAME} grants are awarded to individuals each and every day. Timing for your own file depends on review. First contact is by email within ${RESPONSE_HOURS} hours.`,
  },
  {
    question: 'How do I apply?',
    answer: `Complete the form at ${SITE_DOMAIN}/apply. Choose your category and explain your situation. Official applications are submitted on this website only.`,
  },
  {
    question: 'How will I be contacted?',
    answer: `You will get a receipt from ${APPLY_FROM_NAME} (${APPLY_FROM_EMAIL}). Then an IDA grant coordinator assigned to your file will contact you from ${COORDINATOR_EMAIL} within ${RESPONSE_HOURS} hours. Check inbox and spam. Reply on that thread.`,
  },
  {
    question: 'Someone contacted me about an IDA grant — is it real?',
    answer: `If you are unsure, verify before you act. Official support is ${SUPPORT_EMAIL}. Application receipts come from ${APPLY_FROM_EMAIL} (${APPLY_FROM_NAME}). Assigned coordinator follow-up is ${COORDINATOR_EMAIL}. This website is ${SITE_DOMAIN}. Visit ${SITE_DOMAIN}/verify and email support with what you were told.`,
  },
  {
    question: 'Do I have to pay IDA back?',
    answer:
      'No. Selected IDA awards are grants. You do not make monthly payments to IDA on an award. If a message asks you to “repay your grant” as if it were a loan product, pause and verify on this website first.',
  },
  {
    question: 'I am not sure which category to pick.',
    answer:
      'Choose the closest fit, or select general grants. Write your goal plainly. Medical care, housing, business, school, teaching, retirement, and senior goals are all reviewed. Completeness matters more than picking a perfect label.',
  },
];

export function buildFaqPageJsonLd(items = faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
