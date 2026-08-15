import Link from 'next/link';
import { SHORT_NAME } from '@/lib/site';

/** Original IDA lockup — square mark + wordmark. Not a globe. */
export function Logo({
  className = '',
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const word = light ? 'text-white' : 'text-[var(--gp-navy)]';
  const sub = light ? 'text-white/70' : 'text-[var(--gp-muted)]';
  return (
    <Link href="/" className={`inline-flex items-center gap-3 no-underline ${className}`}>
      <span className="inline-flex h-9 min-w-9 items-center justify-center bg-[var(--gp-navy)] px-1.5 text-[12px] font-bold tracking-wide text-white">
        {SHORT_NAME}
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={`hidden text-[15px] font-semibold tracking-tight sm:block ${word}`}>
          Internal Development Associate
        </span>
        <span className={`text-[15px] font-semibold tracking-tight sm:hidden ${word}`}>IDA</span>
        <span className={`text-[11px] font-medium tracking-wide ${sub}`}>Grant Program</span>
      </span>
    </Link>
  );
}
