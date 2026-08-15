import Link from 'next/link';
import Image from 'next/image';
import { LOGO_PATH, SHORT_NAME } from '@/lib/site';

/** IDA globe mark + wordmark. */
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
  const longName = compact ? 'hidden xl:block' : 'hidden sm:block';
  const shortName = compact ? 'xl:hidden' : 'sm:hidden';
  return (
    <Link href="/" className={`inline-flex items-center gap-3 no-underline ${className}`}>
      <Image
        src={LOGO_PATH}
        alt={SHORT_NAME}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-cover"
        unoptimized
        priority
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={`${longName} text-[15px] font-semibold tracking-tight ${word}`}>
          Internal Development Associate
        </span>
        <span className={`${shortName} text-[15px] font-semibold tracking-tight ${word}`}>IDA</span>
        <span className={`text-[11px] font-medium tracking-wide ${sub}`}>Grant Program</span>
      </span>
    </Link>
  );
}
