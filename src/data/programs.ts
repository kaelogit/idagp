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
    title: 'Medical care',
    summary: 'Treatment, hospital, pharmacy, and related medical costs.',
    who: 'Anyone with medical expenses — from routine care to major treatment, at any income level.',
    details:
      'IDA grants support medical costs that insurance or savings have not fully covered — hospital stays, ongoing treatment, prescriptions, specialist visits, and recovery. Describe the care, what remains unpaid, and how a one-time grant would be used. Selected awards are grants, not medical loans. You do not repay an IDA award.',
  },
  {
    slug: 'housing',
    title: 'Buying a home',
    summary: 'Support toward a home purchase or keeping stable housing.',
    who: 'First-time buyers, families, and property owners with a clear housing goal.',
    details:
      'For people working toward a home purchase, covering closing costs, upgrading a property, or protecting the home they already have. This is grant assistance — not a mortgage and not a loan you repay. Describe the property situation and how a one-time grant would support your goal.',
  },
  {
    slug: 'business',
    title: 'Starting a business',
    summary: 'Capital for salespeople and others launching or expanding a business.',
    who: 'Salespeople, independent workers, and entrepreneurs at any stage.',
    details:
      'Salespeople and independent workers often have the skill — and want the capital to act on it. IDA reviews one-time grants to open, equip, or expand a business. Describe the work and what the funds would cover (equipment, a vehicle, inventory, licensing, a lease). This is not a business loan.',
  },
  {
    slug: 'education',
    title: 'Going to school',
    summary: 'Tuition, training, books, and related school costs.',
    who: 'Adults returning to school, completing a credential, or investing in training.',
    details:
      'For adults going back to school, finishing a credential, or covering tuition, books, tools, and related costs. IDA grants are not student loans. If selected, you do not repay the award. Tell us the program and how completing it supports your goals.',
  },
  {
    slug: 'teachers',
    title: 'Teachers',
    summary: 'Classroom and career support for working educators.',
    who: 'Working teachers investing in their classrooms or professional development.',
    details:
      'Working teachers may apply for grants toward certification, classroom materials, or professional goals. List classroom needs and personal goals separately so the file is clear. Awards are grants, not loans.',
  },
  {
    slug: 'retired-teachers',
    title: 'Retired teachers',
    summary: 'Practical support for educators who have already given their careers.',
    who: 'Retired teachers with living, medical, housing, or personal goals.',
    details:
      'Retired teachers may apply for assistance with living costs, medical care, housing, or other goals after a career in the classroom. Applications are reviewed individually. Awards are grants, not loans.',
  },
  {
    slug: 'seniors',
    title: 'Seniors',
    summary: 'Support for older and retired adults.',
    who: 'Seniors, older adults, and retirees with medical, housing, or personal goals.',
    details:
      'Seniors and retirees may apply for medical, housing, utilities, or general grant support. Applications are reviewed individually at every income level. Awards are grants, not loans — and they are made to individuals every day.',
  },
  {
    slug: 'assistance',
    title: 'General grants',
    summary: 'When your goal does not fit a single category.',
    who: 'Anyone 18 or older with a clear purpose and willing to explain it plainly.',
    details:
      'If your request spans more than one category — or does not match the list above — apply here. Write what you want to fund, what you have already arranged, and how a grant (not a loan) would be used. Completeness matters more than perfect wording.',
  },
];
