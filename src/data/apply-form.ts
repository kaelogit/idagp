import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  CONTACT_EMAIL,
  COORDINATOR_NAME,
  COORDINATOR_TITLE,
  RESPONSE_HOURS,
} from '@/lib/site';

export const COUNTRY_OPTIONS = [
  {
    group: 'Americas',
    values: [
      { value: 'United States', label: 'United States' },
      { value: 'Canada', label: 'Canada' },
      { value: 'Mexico', label: 'Mexico' },
      { value: 'Brazil', label: 'Brazil' },
      { value: 'Argentina', label: 'Argentina' },
      { value: 'Colombia', label: 'Colombia' },
      { value: 'Jamaica', label: 'Jamaica' },
    ],
  },
  {
    group: 'Europe',
    values: [
      { value: 'United Kingdom', label: 'United Kingdom' },
      { value: 'Ireland', label: 'Ireland' },
      { value: 'Germany', label: 'Germany' },
      { value: 'France', label: 'France' },
      { value: 'Netherlands', label: 'Netherlands' },
      { value: 'Spain', label: 'Spain' },
      { value: 'Italy', label: 'Italy' },
      { value: 'Portugal', label: 'Portugal' },
      { value: 'Sweden', label: 'Sweden' },
      { value: 'Norway', label: 'Norway' },
      { value: 'Denmark', label: 'Denmark' },
      { value: 'Belgium', label: 'Belgium' },
      { value: 'Switzerland', label: 'Switzerland' },
      { value: 'Poland', label: 'Poland' },
    ],
  },
  {
    group: 'Africa',
    values: [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'Ghana', label: 'Ghana' },
      { value: 'Kenya', label: 'Kenya' },
      { value: 'South Africa', label: 'South Africa' },
      { value: 'Egypt', label: 'Egypt' },
    ],
  },
  {
    group: 'Asia & Pacific',
    values: [
      { value: 'India', label: 'India' },
      { value: 'Philippines', label: 'Philippines' },
      { value: 'Pakistan', label: 'Pakistan' },
      { value: 'Bangladesh', label: 'Bangladesh' },
      { value: 'Japan', label: 'Japan' },
      { value: 'Singapore', label: 'Singapore' },
      { value: 'Australia', label: 'Australia' },
      { value: 'New Zealand', label: 'New Zealand' },
    ],
  },
  {
    group: 'Other',
    values: [{ value: 'Other', label: 'Other' }],
  },
] as const;

export const APPLY_TESTIMONIALS = [
  {
    name: 'Ruth P.',
    location: 'Ohio',
    amount: '$48,000',
    quote: 'I stopped choosing between the pharmacy and the grocery list.',
    time: '2 hours ago',
  },
  {
    name: 'Dominic H.',
    location: 'Georgia',
    amount: '$62,000',
    quote: 'I had the clients. I did not have the keys to my own shop.',
    time: '5 hours ago',
  },
  {
    name: 'Marisol V.',
    location: 'Nevada',
    amount: '$95,000',
    quote: 'We were always almost homeowners. Almost is a hard place to live.',
    time: '1 day ago',
  },
  {
    name: 'Keisha G.',
    location: 'Maryland',
    amount: '$18,500',
    quote: 'I was buying notebooks with money meant for rent.',
    time: '2 days ago',
  },
  {
    name: 'Calvin R.',
    location: 'Tennessee',
    amount: '$74,000',
    quote: 'Healing is easier when the mailbox is not the enemy.',
    time: '3 days ago',
  },
  {
    name: 'Aisha B.',
    location: 'Texas',
    amount: '$33,000',
    quote: 'School stopped being a night-shift dream and became a weekday.',
    time: '5 days ago',
  },
  {
    name: 'Nadia C.',
    location: 'Michigan',
    amount: '$44,000',
    quote: 'I was tired of selling someone else’s product under someone else’s name.',
    time: '6 days ago',
  },
  {
    name: 'Harold W.',
    location: 'North Carolina',
    amount: '$27,500',
    quote: 'I gave forty years to other people’s children. Someone finally noticed I still had bills.',
    time: '1 week ago',
  },
  {
    name: 'Frank D.',
    location: 'Missouri',
    amount: '$55,000',
    quote: 'The next door could have my name on it.',
    time: '8 days ago',
  },
  {
    name: 'Betty R.',
    location: 'Florida',
    amount: '$31,000',
    quote: 'I am old. I am not finished. I was just out of money.',
    time: '9 days ago',
  },
  {
    name: 'Samuel O.',
    location: 'Massachusetts',
    amount: '$88,000',
    quote: 'The treatment worked. The invoices almost undid the treatment.',
    time: '10 days ago',
  },
];

export const APPLY_FAQS = [
  {
    q: 'Is an IDA grant a loan?',
    a: 'No. IDA programs are not loans. If you are selected, you do not repay the award. Applying does not create debt.',
  },
  {
    q: 'How soon will I hear back?',
    a: `${APPLY_FROM_NAME} sends a receipt from ${APPLY_FROM_EMAIL}. ${COORDINATOR_NAME}, ${COORDINATOR_TITLE}, then emails every applicant from ${CONTACT_EMAIL} within ${RESPONSE_HOURS} hours. Check inbox and spam, then reply on her thread.`,
  },
  {
    q: 'What should I write in my message?',
    a: 'Write plainly. Name the category, the amount of help you need if you know it, and what the grant would cover. Completeness matters more than perfect wording.',
  },
  {
    q: 'Is applying confidential?',
    a: 'Yes. Application details are used to review your request and contact you. We do not sell your information. We will never ask for passwords.',
  },
];
