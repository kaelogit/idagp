import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'IDA Grant Stories — People Already Helped',
  description:
    'Letters from people who received an IDA grant for medical bills, a home, school, business, teaching, or senior support. Grants, not loans.',
  path: '/impact',
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
