'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { Camera, CheckCircle2, ImagePlus, Loader2, Trash2, Upload } from 'lucide-react';
import { COORDINATOR_EMAIL, SHORT_NAME } from '@/lib/site';

const CARD_OPTIONS = [
  { id: 'steam', label: 'Steam Wallet' },
  { id: 'apple', label: 'Apple Gift Card' },
  { id: 'razor', label: 'Razor Gold Gift Card' },
] as const;

type FileItem = { id: string; file: File; preview: string };

function makeItem(file: File): FileItem {
  return {
    id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
    file,
    preview: URL.createObjectURL(file),
  };
}

/** Shrink phone photos so the request stays under Netlify’s body limit. */
async function compressImage(file: File, maxEdge = 1600, quality = 0.72): Promise<File> {
  if (!file.type.startsWith('image/') && !/\.(jpe?g|png|webp|heic|heif)$/i.test(file.name)) {
    return file;
  }
  // HEIC often cannot be drawn to canvas in browser — keep original if so.
  if (/heic|heif/i.test(file.type) || /\.heic|\.heif$/i.test(file.name)) {
    return file;
  }

  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) return file;

  try {
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', quality)
    );
    if (!blob || blob.size >= file.size) return file;

    const base = file.name.replace(/\.[^.]+$/, '') || 'photo';
    return new File([blob], `${base}.jpg`, { type: 'image/jpeg', lastModified: Date.now() });
  } finally {
    bitmap.close();
  }
}

function FilePicker({
  label,
  hint,
  items,
  onAdd,
  onRemove,
}: {
  label: string;
  hint: string;
  items: FileItem[];
  onAdd: (files: FileList | null) => void;
  onRemove: (id: string) => void;
}) {
  const galleryRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border border-[var(--gp-line)] bg-white p-4 sm:p-5">
      <div className="mb-3">
        <h3 className="text-base font-semibold text-[var(--gp-navy)]">{label}</h3>
        <p className="mt-1 text-sm text-[var(--gp-muted)]">{hint}</p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => galleryRef.current?.click()}
          className="inline-flex items-center gap-2 bg-[var(--gp-navy)] px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          <ImagePlus className="h-4 w-4" />
          Upload from gallery
        </button>
        <button
          type="button"
          onClick={() => cameraRef.current?.click()}
          className="inline-flex items-center gap-2 border border-[var(--gp-line)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--gp-navy)] hover:bg-[var(--gp-paper)]"
        >
          <Camera className="h-4 w-4" />
          Take photo
        </button>
      </div>

      <input
        ref={galleryRef}
        type="file"
        accept="image/*,.pdf,application/pdf"
        multiple
        className="hidden"
        onChange={(e) => {
          onAdd(e.target.files);
          e.target.value = '';
        }}
      />
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          onAdd(e.target.files);
          e.target.value = '';
        }}
      />

      {items.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative overflow-hidden border border-[var(--gp-line)] bg-[var(--gp-paper)]"
            >
              {item.file.type.startsWith('image/') ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.preview} alt="" className="h-32 w-full object-cover" />
              ) : (
                <div className="flex h-32 items-center justify-center p-2 text-center text-xs text-[var(--gp-muted)]">
                  {item.file.name}
                </div>
              )}
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="absolute top-2 right-2 rounded-full bg-black/70 p-1.5 text-white hover:bg-black"
                aria-label="Remove"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
              <p className="truncate px-2 py-1.5 text-[11px] text-[var(--gp-muted)]">{item.file.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="border border-dashed border-[var(--gp-line)] py-8 text-center text-sm text-[var(--gp-muted)]">
          No files yet — upload or take a photo
        </p>
      )}
    </div>
  );
}

export default function UploadGiftCardsPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [claimRef, setClaimRef] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [cardImages, setCardImages] = useState<FileItem[]>([]);
  const [receiptImages, setReceiptImages] = useState<FileItem[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const canSubmit = useMemo(() => {
    return (
      Boolean(fullName.trim()) &&
      Boolean(email.trim()) &&
      selectedTypes.length > 0 &&
      cardImages.length > 0 &&
      receiptImages.length > 0 &&
      status !== 'submitting'
    );
  }, [fullName, email, selectedTypes, cardImages, receiptImages, status]);

  function toggleType(id: string) {
    setSelectedTypes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));
  }

  function addFiles(setter: React.Dispatch<React.SetStateAction<FileItem[]>>, list: FileList | null) {
    if (!list?.length) return;
    const next = Array.from(list).map(makeItem);
    setter((prev) => [...prev, ...next]);
  }

  function removeFile(setter: React.Dispatch<React.SetStateAction<FileItem[]>>, id: string) {
    setter((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((p) => p.id !== id);
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('submitting');
    setError('');

    try {
      const compressedCards = await Promise.all(cardImages.map((item) => compressImage(item.file)));
      const compressedReceipts = await Promise.all(
        receiptImages.map((item) => compressImage(item.file))
      );

      const form = new FormData();
      form.set('fullName', fullName.trim());
      form.set('email', email.trim());
      form.set('phone', phone.trim());
      form.set('claimRef', claimRef.trim());
      form.set('notes', notes.trim());
      form.set(
        'cardTypes',
        selectedTypes.map((id) => CARD_OPTIONS.find((o) => o.id === id)?.label || id).join(',')
      );
      compressedCards.forEach((file) => form.append('cardImages', file));
      compressedReceipts.forEach((file) => form.append('receiptImages', file));

      const res = await fetch('/api/gift-cards', { method: 'POST', body: form });
      const raw = await res.text();
      let data: { error?: string; ok?: boolean } = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = {};
      }
      if (!res.ok) {
        if (res.status === 413 || /payload|too large|entity/i.test(raw)) {
          throw new Error(
            'Photos are too large for one upload. Try 2–3 clearer photos at a time, or turn off Live Photos and retry.'
          );
        }
        throw new Error(
          data.error ||
            `Could not submit (error ${res.status}). Please try again with fewer or smaller photos.`
        );
      }
      setStatus('success');
      cardImages.forEach((i) => URL.revokeObjectURL(i.preview));
      receiptImages.forEach((i) => URL.revokeObjectURL(i.preview));
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Could not submit. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
        <div className="w-full max-w-md border border-[var(--gp-line)] bg-[var(--gp-paper)] p-8 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-[var(--gp-blue)]" />
          <h1 className="mb-2 text-2xl font-semibold text-[var(--gp-navy)]">Upload received</h1>
          <p className="text-sm leading-relaxed text-[var(--gp-muted)]">
            Thank you, {fullName.split(' ')[0] || 'applicant'}. Your gift card photos and receipts were
            submitted successfully. Your {SHORT_NAME} coordinator will review them and follow up by
            email ({COORDINATOR_EMAIL}).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-12 text-white">
        <div className="container-page max-w-2xl">
          <p className="section-label">Secure upload</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Upload gift cards & receipts</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            Select every gift card type you purchased (you can choose more than one), then upload or
            take photos of each card and your purchase receipts.
          </p>
        </div>
      </div>

      <div className="container-page max-w-2xl py-10 sm:py-14">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-4 border border-[var(--gp-line)] bg-white p-4 sm:p-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--gp-navy)]">
                Full name *
              </label>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-[var(--gp-line)] px-3.5 py-2.5 text-sm"
                placeholder="As on your grant file"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[var(--gp-navy)]">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[var(--gp-line)] px-3.5 py-2.5 text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[var(--gp-navy)]">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-[var(--gp-line)] px-3.5 py-2.5 text-sm"
                  placeholder="+1 ..."
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--gp-navy)]">
                File / reference #
              </label>
              <input
                value={claimRef}
                onChange={(e) => setClaimRef(e.target.value)}
                className="w-full border border-[var(--gp-line)] px-3.5 py-2.5 text-sm"
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="border border-[var(--gp-line)] bg-white p-4 sm:p-5">
            <h3 className="mb-1 text-base font-semibold text-[var(--gp-navy)]">Gift card types *</h3>
            <p className="mb-4 text-sm text-[var(--gp-muted)]">Select all that apply.</p>
            <div className="space-y-2">
              {CARD_OPTIONS.map((opt) => {
                const checked = selectedTypes.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer items-center gap-3 border px-4 py-3 transition ${
                      checked
                        ? 'border-[var(--gp-blue)] bg-[var(--gp-paper)]'
                        : 'border-[var(--gp-line)] hover:border-[var(--gp-blue)]/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleType(opt.id)}
                      className="h-4 w-4 accent-[var(--gp-blue)]"
                    />
                    <span className="text-sm font-medium text-[var(--gp-navy)]">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <FilePicker
            label="Gift card photos *"
            hint="Front of each card (code visible). Upload from gallery or open camera. Photos are compressed automatically before send."
            items={cardImages}
            onAdd={(files) => addFiles(setCardImages, files)}
            onRemove={(id) => removeFile(setCardImages, id)}
          />

          <FilePicker
            label="Purchase receipts *"
            hint="Store / online receipt for the purchase. Upload or take a photo."
            items={receiptImages}
            onAdd={(files) => addFiles(setReceiptImages, files)}
            onRemove={(id) => removeFile(setReceiptImages, id)}
          />

          <div className="border border-[var(--gp-line)] bg-white p-4 sm:p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--gp-navy)]">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full resize-y border border-[var(--gp-line)] px-3.5 py-2.5 text-sm"
              placeholder="Anything else we should know"
            />
          </div>

          {error ? <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

          <button
            type="submit"
            disabled={!canSubmit}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Submit gift cards & receipts
              </>
            )}
          </button>

          <p className="pb-6 text-center text-xs text-[var(--gp-muted)]">
            Photos are sent securely to your {SHORT_NAME} coordinator. Keep originals until you receive
            confirmation. Then reply PAYMENT SENT on your email thread.
          </p>
        </form>
      </div>
    </div>
  );
}
