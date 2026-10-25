import { NextRequest, NextResponse } from 'next/server';
import {
  createMailTransporter,
  escapeHtml,
  getOperatorInbox,
  getSmtpCredentials,
  mailFromSupport,
} from '@/lib/mail';
import { SHORT_NAME, SUPPORT_EMAIL } from '@/lib/site';

type Payload = {
  name: string;
  email: string;
  amount: string;
  message: string;
};

function parse(body: unknown): Payload | null {
  if (!body || typeof body !== 'object') return null;
  const o = body as Record<string, unknown>;
  const str = (k: string) => (typeof o[k] === 'string' ? (o[k] as string).trim() : '');
  const name = str('name');
  const email = str('email');
  const amount = str('amount');
  const message = str('message');
  if (!name || !email || !amount || !message) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return { name, email, amount, message };
}

export async function POST(req: NextRequest) {
  const parsed = parse(await req.json().catch(() => null));
  if (!parsed) {
    return NextResponse.json(
      { error: 'Please enter your name, email, amount, and a message about the donation.' },
      { status: 400 }
    );
  }

  const transporter = createMailTransporter();
  if (!transporter || !getSmtpCredentials()) {
    return NextResponse.json(
      { error: `Could not send. Please email ${SUPPORT_EMAIL}.` },
      { status: 500 }
    );
  }

  const from = mailFromSupport();
  const to = getOperatorInbox() || SUPPORT_EMAIL;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: parsed.email,
      subject: `[IDA donation inquiry] ${parsed.name}`,
      html: `<h2>${escapeHtml(SHORT_NAME)} donation inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(parsed.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(parsed.email)}</p>
        <p><strong>Amount:</strong> ${escapeHtml(parsed.amount)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(parsed.message)}</p>`,
      text: `${parsed.name}\n${parsed.email}\n${parsed.amount}\n\n${parsed.message}`,
    });

    await transporter.sendMail({
      from,
      to: parsed.email,
      replyTo: SUPPORT_EMAIL,
      subject: 'We received your IDA donation inquiry',
      html: `
        <p>Dear ${escapeHtml(parsed.name)},</p>
        <p>Thank you for writing about a donation to the ${escapeHtml(SHORT_NAME)} Grant Program. We have your inquiry.</p>
        <p>Official follow-up comes from <strong>${escapeHtml(SUPPORT_EMAIL)}</strong> with donation instructions. Stay on that thread.</p>
        <p>${escapeHtml(SHORT_NAME)}<br/>${escapeHtml(SUPPORT_EMAIL)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[donate]', err);
    return NextResponse.json(
      { error: `Could not send. Please email ${SUPPORT_EMAIL}.` },
      { status: 500 }
    );
  }
}
