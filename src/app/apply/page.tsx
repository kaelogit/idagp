'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Lock,
  Mail,
  Shield,
} from 'lucide-react';
import { GRANT_PROGRAMS } from '@/data/programs';
import { APPLY_FAQS, APPLY_TESTIMONIALS, COUNTRY_OPTIONS } from '@/data/apply-form';
import {
  applicantResponseBadge,
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  COORDINATOR_EMAIL,
  HELP_AREAS_SHORT,
  RESPONSE_HOURS,
} from '@/lib/site';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ApplyPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const confirmEmailRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    country: '',
    region: '',
    city: '',
    address: '',
    postalCode: '',
    category: '',
    message: '',
    ageConfirm: false,
    grantConfirm: false,
  });

  useEffect(() => {
    const t = setInterval(
      () => setTestimonialIdx((i) => (i + 1) % APPLY_TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function emailsMatch(email: string, confirmEmail: string) {
    return email.trim().toLowerCase() === confirmEmail.trim().toLowerCase();
  }

  function syncConfirmValidity(email: string, confirmEmail: string) {
    const input = confirmEmailRef.current;
    if (!input) return;
    input.setCustomValidity(
      confirmEmail && !emailsMatch(email, confirmEmail)
        ? 'Email addresses do not match.'
        : ''
    );
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    if (!emailsMatch(form.email, form.confirmEmail)) {
      setStatus('error');
      setErrorMsg('Email addresses do not match. Please type the same address in both fields.');
      confirmEmailRef.current?.focus();
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(json.error || 'Could not submit.');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Could not submit. Please try again.');
    }
  }

  const t = APPLY_TESTIMONIALS[testimonialIdx];

  return (
    <div className="bg-white">
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-12 text-white">
        <div className="container-page max-w-3xl">
          <p className="section-label">Apply</p>
          <h1 className="mt-3 text-4xl text-white">Your IDA grant application</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            Through the IDA Grant Program we issue billions of dollars in awards each year. Awards go
            to individuals every day. {HELP_AREAS_SHORT}
          </p>
          <p className="mt-3 text-sm text-white/70">{applicantResponseBadge()}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div>
            {status === 'success' ? (
              <div className="border border-[var(--gp-line)] bg-[var(--gp-paper)] p-8">
                <CheckCircle2 className="h-10 w-10 text-[var(--gp-blue)]" />
                <h2 className="mt-4 text-2xl">Thank you. Your file is with us.</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--gp-muted)]">
                  Your application has been received. An IDA grant coordinator will be assigned to
                  your file and will contact you by email. Your request will be read personally.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">
                  You will get a receipt from {APPLY_FROM_NAME} ({APPLY_FROM_EMAIL}). Then expect
                  an email from your assigned coordinator at {COORDINATOR_EMAIL} within{' '}
                  {RESPONSE_HOURS} hours. Check spam. Reply on that thread so your file stays
                  together.
                </p>
                <p className="mt-4 text-sm font-medium text-[var(--gp-navy)]">
                  You did the hard part by asking. Rest tonight. We will take the next step. IDA
                  awards grants to people like you each and every day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <p className="text-sm leading-relaxed text-[var(--gp-muted)]">
                  Write plainly. Completeness matters more than perfect wording. Every application
                  is read by a person after you submit.
                </p>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Full name
                  <input
                    required
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.email}
                    onChange={(e) => {
                      const email = e.target.value;
                      set('email', email);
                      syncConfirmValidity(email, form.confirmEmail);
                    }}
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Confirm email address
                  <input
                    ref={confirmEmailRef}
                    type="email"
                    name="confirmEmail"
                    required
                    autoComplete="off"
                    inputMode="email"
                    spellCheck={false}
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.confirmEmail}
                    onChange={(e) => {
                      const confirmEmail = e.target.value;
                      set('confirmEmail', confirmEmail);
                      syncConfirmValidity(form.email, confirmEmail);
                    }}
                    onPaste={(e) => e.preventDefault()}
                    onDrop={(e) => e.preventDefault()}
                  />
                  <span className="mt-1.5 block text-xs font-normal text-[var(--gp-muted)]">
                    Type your email again. The two addresses must match so we can reach you.
                  </span>
                  {form.confirmEmail && !emailsMatch(form.email, form.confirmEmail) ? (
                    <span className="mt-1 block text-xs font-normal text-red-700">
                      Email addresses do not match.
                    </span>
                  ) : null}
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Phone
                  <input
                    type="tel"
                    required
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Country
                  <select
                    required
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.country}
                    onChange={(e) => set('country', e.target.value)}
                  >
                    <option value="">Select country</option>
                    {COUNTRY_OPTIONS.map((g) => (
                      <optgroup key={g.group} label={g.group}>
                        {g.values.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-[var(--gp-navy)]">
                    State / region
                    <input
                      required
                      className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                      value={form.region}
                      onChange={(e) => set('region', e.target.value)}
                    />
                  </label>
                  <label className="block text-sm font-medium text-[var(--gp-navy)]">
                    City
                    <input
                      required
                      className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                      value={form.city}
                      onChange={(e) => set('city', e.target.value)}
                    />
                  </label>
                </div>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Mailing address
                  <input
                    required
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.address}
                    onChange={(e) => set('address', e.target.value)}
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Postal / ZIP code
                  <input
                    required
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.postalCode}
                    onChange={(e) => set('postalCode', e.target.value)}
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Grant category
                  <select
                    required
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.category}
                    onChange={(e) => set('category', e.target.value)}
                  >
                    <option value="">Select a category</option>
                    {GRANT_PROGRAMS.map((p) => (
                      <option key={p.slug} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium text-[var(--gp-navy)]">
                  Why you are applying
                  <textarea
                    required
                    rows={7}
                    placeholder="Tell us what you need — medical bills, buying a home, starting a business, going to school, classroom costs, retirement, or another need. Write the situation plainly."
                    className="mt-1.5 w-full border border-[var(--gp-line)] px-3 py-2.5 text-sm"
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                  />
                </label>
                <label className="flex items-start gap-2 text-sm text-[var(--gp-muted)]">
                  <input
                    type="checkbox"
                    checked={form.ageConfirm}
                    onChange={(e) => set('ageConfirm', e.target.checked)}
                    required
                    className="mt-1"
                  />
                  I am 18 or older.
                </label>
                <label className="flex items-start gap-2 text-sm text-[var(--gp-muted)]">
                  <input
                    type="checkbox"
                    checked={form.grantConfirm}
                    onChange={(e) => set('grantConfirm', e.target.checked)}
                    required
                    className="mt-1"
                  />
                  I understand this is a one-time IDA grant award, and applying does not guarantee
                  selection.
                </label>
                {status === 'error' ? <p className="text-sm text-red-700">{errorMsg}</p> : null}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {status === 'loading' ? 'Submitting…' : 'Submit grant application'}
                </button>
              </form>
            )}

            <div className="mt-12 border-t border-[var(--gp-line)] pt-8">
              <h2 className="text-lg">Questions before you apply</h2>
              {APPLY_FAQS.map((item, idx) => (
                <div key={item.q} className="border-b border-[var(--gp-line)]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-semibold text-[var(--gp-navy)]"
                  >
                    {item.q}
                    <ChevronDown className={`h-4 w-4 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <p
                    className={`pb-4 text-sm leading-relaxed text-[var(--gp-muted)] ${
                      openFaq === idx ? '' : 'hidden'
                    }`}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="border border-[var(--gp-line)] p-5">
              <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
                Recent IDA grants
              </p>
              <p className="mt-3 text-sm font-semibold text-[var(--gp-navy)]">{t.name}</p>
              <p className="text-xs text-[var(--gp-muted)]">
                {t.location} · {t.time}
              </p>
              <p className="mt-2 text-lg font-bold text-[var(--gp-blue)]">{t.amount}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--gp-muted)]">“{t.quote}”</p>
            </div>
            <div className="space-y-3 border border-[var(--gp-line)] p-5 text-sm text-[var(--gp-muted)]">
              <p className="text-xs font-semibold tracking-wider text-[var(--gp-blue)] uppercase">
                After you apply
              </p>
              <p className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                Reply within {RESPONSE_HOURS} hours
              </p>
              <p className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                Coordinator assigned · {COORDINATOR_EMAIL}
              </p>
              <p className="flex gap-2">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                We never ask for passwords
              </p>
              <p className="flex gap-2">
                <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
                Grants — one-time awards
              </p>
              <Link href="/verify" className="block font-semibold text-[var(--gp-blue)]">
                Verify official contact
              </Link>
            </div>
            <p className="text-xs leading-relaxed text-[var(--gp-muted)]">
              A coordinator is assigned to your file after you submit. Official applications are
              submitted on this website only.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
