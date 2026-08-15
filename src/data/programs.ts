export type GrantProgram = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  who: string;
};

export const GRANT_PROGRAMS: GrantProgram[] = [
  {
    slug: 'medical',
    title: 'Medical bills',
    summary: 'Help paying treatment, hospital, pharmacy, and related medical costs.',
    who: 'Anyone facing unpaid medical bills, ongoing treatment, or recovery costs.',
    details:
      'IDA grants help individuals cover medical bills that insurance or savings have not fully closed — hospital stays, ongoing treatment, prescriptions, specialist visits, and recovery costs. Tell us what you owe, what the care is for, and what remains unpaid. Selected awards are grants, not medical loans. You do not repay an IDA award.',
  },
  {
    slug: 'housing',
    title: 'Buying a home',
    summary: 'Support toward a home purchase or keeping stable housing.',
    who: 'First-time buyers, families closing a gap, and people protecting the home they already have.',
    details:
      'For people working toward a first home, covering closing costs, or remaining in the home they already have. This is grant assistance — not a mortgage and not a loan you repay. Describe the property situation, the gap you need to close, and how a one-time grant would make the difference.',
  },
  {
    slug: 'business',
    title: 'Starting a business',
    summary: 'Seed help for salespeople and others launching their own business.',
    who: 'Salespeople, independent workers, and people standing up a small business of their own.',
    details:
      'Salespeople and independent workers often have the skill — and not the start-up capital. IDA reviews one-time grants to open, equip, or stabilize a small business. Describe the work, what the funds would cover (equipment, a vehicle, inventory, licensing, a first lease), and how the business will support you. This is not a business loan.',
  },
  {
    slug: 'education',
    title: 'Going to school',
    summary: 'Tuition, training, books, and related school costs.',
    who: 'Adults returning to school, completing a credential, or covering tuition and materials.',
    details:
      'For adults going back to school, finishing a credential, or covering tuition, books, tools, and related costs. IDA grants are not student loans. If selected, you do not repay the award. Tell us the program, what remains unpaid, and how finishing would change your work.',
  },
  {
    slug: 'teachers',
    title: 'Teachers',
    summary: 'Classroom and career support for working educators.',
    who: 'Working teachers under financial pressure at home or in the classroom.',
    details:
      'Working teachers may apply for help with certification, classroom materials, or personal financial pressure that is getting in the way of staying in the profession. Educators are people with rent, too. List classroom needs and household bills separately so the file is clear.',
  },
  {
    slug: 'retired-teachers',
    title: 'Retired teachers',
    summary: 'Practical support for educators who have already given their careers.',
    who: 'Retired teachers facing living costs, medical bills, or housing after a career in the classroom.',
    details:
      'Retired teachers may apply for assistance with living costs, medical bills, housing, or other needs after a career in the classroom. A lifetime of teaching should not end in a collection letter. Applications are reviewed individually. Awards are grants, not loans.',
  },
  {
    slug: 'seniors',
    title: 'Seniors',
    summary: 'Help for older and retired people seeking financial assistance.',
    who: 'Seniors, older adults, and retired people looking for practical financial help.',
    details:
      'Seniors and retirees may apply for medical, housing, utilities, or general financial assistance. Applications are reviewed individually. Many IDA awards each year go to this group. Awards are grants, not loans — and they are made to individuals every day.',
  },
  {
    slug: 'assistance',
    title: 'Financial assistance',
    summary: 'General help when your need does not fit a single category.',
    who: 'Anyone 18 or older looking for financial assistance and willing to explain the situation plainly.',
    details:
      'If you are looking for financial assistance and your request spans more than one category — or does not match the list above — apply here. Write what you need, what you have already tried, and how a grant (not a loan) would help. Completeness matters more than perfect wording.',
  },
];
