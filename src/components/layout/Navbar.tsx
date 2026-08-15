'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/eligibility', label: 'Eligibility' },
  { href: '/impact', label: 'Stories' },
  { href: '/awards', label: 'Awards' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/verify', label: 'Verify' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--gp-line)] bg-white">
        <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-4 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  isActive(link.href)
                    ? 'text-[var(--gp-blue)]'
                    : 'text-[var(--gp-muted)] hover:text-[var(--gp-navy)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-primary">
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
          <button
            type="button"
            className="xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-40 bg-white pt-[4.25rem] xl:hidden">
          <nav className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-[var(--gp-line)] py-4 text-base font-medium text-[var(--gp-navy)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-primary mt-6">
              Apply now
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
