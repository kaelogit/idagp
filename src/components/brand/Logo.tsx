import Link from 'next/link';
import { NAV_NAME } from '@/lib/site';

/** Text wordmark only — no logo image. */
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
    <Link href="/" className={`inline-flex min-w-0 items-center no-underline ${className}`}>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`${compact ? 'text-[12px] sm:text-[13px] xl:text-[15px]' : 'text-[15px]'} font-semibold tracking-tight ${word}`}
        >
          {NAV_NAME}
        </span>
        <span className={`text-[11px] font-medium tracking-wide ${sub}`}>Grant Program</span>
      </span>
    </Link>
  );
}
