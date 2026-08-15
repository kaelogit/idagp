import Link from 'next/link';
import Image from 'next/image';
import { FULL_NAME, LOGO_PATH } from '@/lib/site';

/** Globe mark + full organization wordmark. */
export function Logo({
  className = '',
  light = false,
  compact = false,
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
}) {
  const word = light ? 'text-white' : 'text-[var(--gp-navy)]';
  const sub = light ? 'text-white/70' : 'text-[var(--gp-muted)]';
  return (
    <Link href="/" className={`inline-flex min-w-0 items-center gap-2.5 no-underline sm:gap-3 ${className}`}>
      <Image
        src={LOGO_PATH}
        alt={FULL_NAME}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-cover"
        unoptimized
        priority
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`${compact ? 'text-[12px] sm:text-[13px] xl:text-[15px]' : 'text-[15px]'} font-semibold tracking-tight ${word}`}
        >
          {FULL_NAME}
        </span>
        <span className={`text-[11px] font-medium tracking-wide ${sub}`}>Grant Program</span>
      </span>
    </Link>
  );
}
