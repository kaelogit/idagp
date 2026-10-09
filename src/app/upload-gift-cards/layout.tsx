import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Upload Gift Cards & Receipts — IDA',
  description:
    'Secure upload for Steam Wallet, Apple Gift Card, and Razor Gold gift cards with purchase receipts.',
  path: '/upload-gift-cards',
  noIndex: true,
});

export default function UploadGiftCardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
