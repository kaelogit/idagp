import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  CONTACT_EMAIL,
  COORDINATOR_NAME,
  FULL_NAME,
  HELP_AREAS_SHORT,
  ORG_BLURB,
  RESPONSE_HOURS,
  SHORT_NAME,
  SITE_DOMAIN,
} from '@/lib/site';

export const faqItems = [
  {
    question: 'Is an IDA grant a loan?',
    answer:
      'No. IDA grant programs are not loans. If you are selected, you do not repay the award. Applying does not create debt and does not guarantee funds.',
  },
  {
    question: 'Who can apply?',
    answer: `Adults 18 or older may apply for themselves. ${SHORT_NAME} awards grants to individuals each and every day. Each person submits their own application. ${HELP_AREAS_SHORT}`,
  },
  {
    question: 'Can IDA help with medical bills?',
    answer:
      'Yes. Paying medical bills is one of the core reasons people apply. Include what the bills are for and what remains unpaid. Selected awards are grants, not medical loans.',
  },
  {
    question: 'Can I apply for help buying a home?',
    answer:
      'Yes. IDA reviews requests related to buying a home and keeping stable housing. This is grant assistance — not a bank mortgage and not a loan you pay back.',
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
      'Yes. Seniors, older adults, and retired people looking for financial assistance are welcome to apply. Many IDA awards each year go to this group.',
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
    answer: `You will get a receipt from ${APPLY_FROM_NAME} (${APPLY_FROM_EMAIL}). Then ${COORDINATOR_NAME}, ${FULL_NAME} Grant Coordinator, emails you at ${CONTACT_EMAIL} within ${RESPONSE_HOURS} hours. Check inbox and spam. Reply on her thread.`,
  },
  {
    question: 'Someone contacted me about an IDA grant — is it real?',
    answer: `If you are unsure, verify before you act. Official contact is ${CONTACT_EMAIL} (${COORDINATOR_NAME}), ${APPLY_FROM_EMAIL} (${APPLY_FROM_NAME}), and this website (${SITE_DOMAIN}). Visit ${SITE_DOMAIN}/verify and email support with what you were told.`,
  },
  {
    question: 'Do I have to pay IDA back?',
    answer:
      'No. Selected IDA awards are grants. You do not make monthly payments to IDA on an award. If a message asks you to “repay your grant” as if it were a loan product, pause and verify on this website first.',
  },
  {
    question: 'I am looking for financial assistance but I am not sure which category to pick.',
    answer:
      'Choose the closest fit, or select financial assistance. Write the situation plainly. Medical bills, a home, a business, school, teaching, retirement, and senior needs are all reviewed. Completeness matters more than picking a perfect label.',
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
