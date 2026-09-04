import { NextRequest, NextResponse } from 'next/server';
import {
  createMailTransporter,
  escapeHtml,
  getOperatorInbox,
  getSmtpCredentials,
  mailFromAutomated,
  mailUnavailableMessage,
} from '@/lib/mail';
import {
  APPLY_FROM_EMAIL,
  APPLY_FROM_NAME,
  CONTACT_EMAIL,
  COORDINATOR_NAME,
  COORDINATOR_TITLE,
  FULL_NAME,
  SHORT_NAME,
} from '@/lib/site';

type Payload = {
  name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  city: string;
  address: string;
  postalCode: string;
  category: string;
  message: string;
  ageConfirm: boolean;
  grantConfirm: boolean;
};

function parse(body: unknown): Payload | null {
  if (!body || typeof body !== 'object') return null;
  const o = body as Record<string, unknown>;
  const str = (k: string) => (typeof o[k] === 'string' ? (o[k] as string).trim() : '');
  const name = str('name');
  const email = str('email');
  const phone = str('phone');
  const country = str('country');
  const region = str('region');
  const city = str('city');
  const address = str('address');
  const postalCode = str('postalCode');
  const category = str('category');
  const message = str('message');
  const ageConfirm = o.ageConfirm === true;
  const grantConfirm = o.grantConfirm === true;
  if (
    !name ||
    !email ||
    !phone ||
    !country ||
    !region ||
    !city ||
    !address ||
    !postalCode ||
    !category ||
    !message ||
    !ageConfirm ||
    !grantConfirm
  ) {
    return null;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return {
    name,
    email,
    phone,
    country,
    region,
    city,
    address,
    postalCode,
    category,
    message,
    ageConfirm,
    grantConfirm,
  };
}

export async function POST(req: NextRequest) {
  const parsed = parse(await req.json());
  if (!parsed) {
    return NextResponse.json(
      { error: 'Please complete every field and confirm you are 18 or older.' },
      { status: 400 }
    );
  }

  const transporter = createMailTransporter();
  if (!transporter || !getSmtpCredentials()) {
    return NextResponse.json({ error: mailUnavailableMessage() }, { status: 500 });
  }

  const from = mailFromAutomated();
  const to = getOperatorInbox() || CONTACT_EMAIL;
  const row = (l: string, v: string) =>
    `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;">${escapeHtml(l)}</td><td>${escapeHtml(v)}</td></tr>`;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: parsed.email,
      subject: `[IDA grant application] ${parsed.name} — ${parsed.category}`,
      html: `<h2>${escapeHtml(SHORT_NAME)} application — ${escapeHtml(FULL_NAME)}</h2><table>${row('Name', parsed.name)}${row('Email', parsed.email)}${row('Phone', parsed.phone)}${row('Country', parsed.country)}${row('Region', parsed.region)}${row('City', parsed.city)}${row('Address', parsed.address)}${row('Postal code', parsed.postalCode)}${row('Category', parsed.category)}${row('Message', parsed.message)}</table>`,
      text: `${parsed.name}\n${parsed.email}\n${parsed.phone}\n${parsed.country}\n${parsed.region}\n${parsed.city}\n${parsed.address}\n${parsed.postalCode}\n${parsed.category}\n${parsed.message}`,
    });

    await transporter.sendMail({
      from,
      to: parsed.email,
      replyTo: CONTACT_EMAIL,
      subject: 'We received your IDA grant application',
      html: `
        <p>Dear ${escapeHtml(parsed.name)},</p>
        <p>This is a receipt from ${escapeHtml(APPLY_FROM_NAME)}. Thank you for trusting ${escapeHtml(FULL_NAME)} with your application. We have your file for <strong>${escapeHtml(parsed.category)}</strong>.</p>
        <p>IDA grants are not loans. Applying does not create debt.</p>
        <p>${escapeHtml(COORDINATOR_NAME)}, your ${escapeHtml(COORDINATOR_TITLE)}, has been assigned to your file and will write you from ${escapeHtml(CONTACT_EMAIL)}. Please check your inbox and spam folder, then reply on that thread.</p>
        <p>You took a brave step by asking. We are glad you did.</p>
        <p>${escapeHtml(APPLY_FROM_NAME)}<br/>${escapeHtml(FULL_NAME)}<br/>${escapeHtml(APPLY_FROM_EMAIL)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[apply]', err);
    return NextResponse.json({ error: 'Could not submit application.' }, { status: 500 });
  }
}
