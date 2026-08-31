import { NextRequest, NextResponse } from 'next/server';
import {
  createMailTransporter,
  escapeHtml,
  getOperatorInbox,
  getSmtpCredentials,
  mailUnavailableMessage,
} from '@/lib/mail';
import { CONTACT_EMAIL, COORDINATOR_NAME, COORDINATOR_TITLE, FULL_NAME, SITE_DOMAIN } from '@/lib/site';

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;color:#555;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`;
}

interface AffidavitPayload {
  supportAmount: string;
  adminPaid: boolean;
  applicationDate: string;
  fullName: string;
  addressStreet: string;
  addressCity: string;
  addressCountry: string;
  phone: string;
  email: string;
  signature: string;
  signDate: string;
  printName: string;
  electronicSignConfirm: boolean;
}

function validate(body: unknown): { payload: AffidavitPayload } | { error: string } {
  if (!body || typeof body !== 'object') {
    return { error: 'Please complete every field, sign electronically, and confirm the agreement box.' };
  }
  const o = body as Record<string, unknown>;
  const payload: AffidavitPayload = {
    supportAmount: str(o.supportAmount),
    adminPaid: o.adminPaid === true,
    applicationDate: str(o.applicationDate),
    fullName: str(o.fullName),
    addressStreet: str(o.addressStreet),
    addressCity: str(o.addressCity),
    addressCountry: str(o.addressCountry),
    phone: str(o.phone),
    email: str(o.email),
    signature: str(o.signature),
    signDate: str(o.signDate),
    printName: str(o.printName),
    electronicSignConfirm:
      o.electronicSignConfirm === true ||
      o.electronicSignConfirm === 'on' ||
      o.electronicSignConfirm === 'true',
  };

  const missing: string[] = [];
  if (!payload.applicationDate) missing.push('application date');
  if (!payload.fullName) missing.push('full name');
  if (!payload.addressStreet) missing.push('street address');
  if (!payload.addressCity) missing.push('city / state / postal code');
  if (!payload.addressCountry) missing.push('country');
  if (!payload.phone) missing.push('telephone');
  if (!payload.email) missing.push('email');
  if (!payload.signature) missing.push('electronic signature');
  if (!payload.signDate) missing.push('date signed');
  if (!payload.printName) missing.push('printed name');
  if (!payload.electronicSignConfirm) missing.push('the confirmation checkbox at the bottom');
  if (!payload.supportAmount) payload.supportAmount = 'To be confirmed';

  if (missing.length) {
    return { error: `Please complete: ${missing.join(', ')}.` };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { error: 'Please enter a valid email address.' };
  }
  return { payload };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Could not read the form. Please try again.' }, { status: 400 });
  }

  const parsed = validate(body);
  if ('error' in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  const { payload } = parsed;

  const creds = getSmtpCredentials();
  const transporter = createMailTransporter();
  const to = getOperatorInbox() || CONTACT_EMAIL;
  if (!creds || !transporter || !to) {
    return NextResponse.json({ error: mailUnavailableMessage() }, { status: 500 });
  }

  const operatorHtml = `
    <h2>IDA Affidavit of Eligibility — Submitted Online</h2>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">
      ${row('Grant amount', payload.supportAmount)}
      ${row('Admin fee already paid', payload.adminPaid ? 'Yes' : 'No')}
      ${row('Application date', payload.applicationDate)}
      ${row('Full name', payload.fullName)}
      ${row('Street', payload.addressStreet)}
      ${row('City / State / Postal', payload.addressCity)}
      ${row('Country', payload.addressCountry)}
      ${row('Phone', payload.phone)}
      ${row('Email', payload.email)}
      ${row('Electronic signature', payload.signature)}
      ${row('Date signed', payload.signDate)}
      ${row('Printed name', payload.printName)}
    </table>
    <p style="margin-top:16px;color:#666;font-size:12px;">Submitted via https://${SITE_DOMAIN}/documents/affidavit-of-eligibility.html</p>
  `;

  try {
    await transporter.sendMail({
      from: creds.user,
      to,
      replyTo: payload.email,
      subject: `[IDA Affidavit] ${payload.fullName} — ${payload.supportAmount}`,
      text: `Affidavit submitted — ${payload.fullName}\nEmail: ${payload.email}\nAmount: ${payload.supportAmount}`,
      html: operatorHtml,
    });

    await transporter.sendMail({
      from: `"${COORDINATOR_NAME}, ${FULL_NAME}" <${creds.user}>`,
      to: payload.email,
      replyTo: CONTACT_EMAIL,
      subject: `Affidavit received — ${FULL_NAME}`,
      html: `
        <p>Dear ${escapeHtml(payload.fullName)},</p>
        <p>We have received your Affidavit of Eligibility and Release for the International Development Association.</p>
        <p>Grant amount on file: <strong>${escapeHtml(payload.supportAmount)}</strong><br/>
        Date signed: <strong>${escapeHtml(payload.signDate)}</strong></p>
        <p>Your affidavit is now with our office for review. ${escapeHtml(COORDINATOR_NAME)}, your ${escapeHtml(COORDINATOR_TITLE)}, will email you with the next step.</p>
        <p>This confirmation is not a final funding release. IDA awards are grants, not loans.</p>
        <p>${escapeHtml(COORDINATOR_NAME)}<br/>${escapeHtml(COORDINATOR_TITLE)}<br/>${escapeHtml(FULL_NAME)}<br/>${escapeHtml(CONTACT_EMAIL)}</p>
      `,
      text: `Dear ${payload.fullName},\n\nWe have received your Affidavit of Eligibility and Release. ${COORDINATOR_NAME} will email you with the next step.\n\n${FULL_NAME}\n${CONTACT_EMAIL}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('IDA affidavit submit error:', err);
    return NextResponse.json({ error: 'Could not submit your affidavit. Please try again.' }, { status: 500 });
  }
}
