import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Stories',
  description:
    'IDA grant recipient stories — medical bills, homes, school, business, teachers, and seniors. Grants, not loans.',
  path: '/impact',
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
