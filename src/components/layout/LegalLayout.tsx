export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <div className="border-b border-[var(--gp-line)] bg-[var(--gp-paper)] pt-16 pb-10">
        <div className="container-page max-w-3xl">
          <p className="section-label">Legal</p>
          <h1 className="mt-3 text-4xl">{title}</h1>
        </div>
      </div>
      <div className="container-page max-w-3xl py-12">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-base font-semibold text-[var(--gp-navy)]">{title}</h2>
      <p className="text-sm leading-relaxed text-[var(--gp-muted)]">{children}</p>
    </div>
  );
}
