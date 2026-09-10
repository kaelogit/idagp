import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { CONTACT_EMAIL, FULL_NAME, SHORT_NAME } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--gp-navy)] px-5 pt-14 pb-8 text-white">
      <div className="container-page grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            {FULL_NAME} ({SHORT_NAME}) works in cooperation with the World Bank Group. We issue
            billions of dollars in IDA grant money each year. Awards are grants, not loans.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
            Explore
          </h4>
          <nav className="flex flex-col gap-2">
            {[
              ['/', 'Home'],
              ['/programs', 'Programs'],
              ['/eligibility', 'Eligibility'],
              ['/impact', 'Stories'],
              ['/awards', 'Awards'],
              ['/apply', 'Apply'],
              ['/faq', 'FAQ'],
              ['/verify', 'Verify'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-white/75 hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
            Contact
          </h4>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/75 hover:text-white">
            {CONTACT_EMAIL}
          </a>
          <nav className="mt-4 flex flex-col gap-2">
            <Link href="/security" className="text-sm text-white/75 hover:text-white">
              Security
            </Link>
            <Link href="/privacy" className="text-sm text-white/75 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/75 hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </div>
      <p className="container-page mt-10 border-t border-white/15 pt-6 text-sm text-white/55">
        © {year} {FULL_NAME}. World Bank Group.
      </p>
    </footer>
  );
}
