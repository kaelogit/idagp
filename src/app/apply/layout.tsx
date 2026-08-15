import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Apply',
  description:
    'Apply for an IDA grant from International Development Association. Grants are not loans. Medical bills, home, school, business, teachers, and seniors.',
  path: '/apply',
});

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
