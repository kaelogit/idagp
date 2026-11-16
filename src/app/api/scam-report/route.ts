import { NextRequest, NextResponse } from 'next/server';
import {
  createMailTransporter,
  escapeHtml,
  getOperatorInbox,
  getSmtpCredentials,
  mailFromSupport,
} from '@/lib/mail';
import { PROGRAM_NAME, SHORT_NAME, SUPPORT_EMAIL } from '@/lib/site';

type Payload = {
  name: string;
  email: string;
  phone: string;
  agentName: string;
  channel: string;
  amountLost: string;
  whenHappened: string;
  story: string;
};

function str(o: Record<string, unknown>, k: string): string {
  return typeof o[k] === 'string' ? (o[k] as string).trim() : '';
}

function validate(body: unknown): Payload | null {
  if (!body || typeof body !== 'object') return null;
  const o = body as Record<string, unknown>;
  const payload: Payload = {
    name: str(o, 'name'),
    email: str(o, 'email'),
    phone: str(o, 'phone'),
    agentName: str(o, 'agentName'),
    channel: str(o, 'channel'),
    amountLost: str(o, 'amountLost'),
    whenHappened: str(o, 'whenHappened'),
    story: str(o, 'story'),
  };

  if (
    !payload.name ||
    !payload.email ||
    !payload.agentName ||
    !payload.channel ||
    !payload.amountLost ||
    !payload.story
  ) {
    return null;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return null;
  return payload;
}

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;color:#555;">${escapeHtml(label)}</td><td style="padding:6px 0;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: NextRequest) {
  const parsed = validate(await request.json().catch(() => null));
  if (!parsed) {
    return NextResponse.json(
      { error: 'Please complete every required field with a valid email.' },
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

  const operatorHtml = `
    <h2>New scam report from ${SHORT_NAME}</h2>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">
      ${row('Name', parsed.name)}
      ${row('Email', parsed.email)}
      ${row('Phone', parsed.phone || '(not provided)')}
      ${row('Fake agent name', parsed.agentName)}
      ${row('Channel', parsed.channel)}
      ${row('Amount lost', parsed.amountLost)}
      ${row('When', parsed.whenHappened || '(not provided)')}
      ${row('Story', parsed.story)}
    </table>
    <hr />
    <p style="color:#666;font-size:12px;">Sent from the ${PROGRAM_NAME} scam report form.</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: parsed.email,
      subject: `${SHORT_NAME} scam report: ${parsed.agentName} - ${parsed.name}`,
      text: `Name: ${parsed.name}\nEmail: ${parsed.email}\nPhone: ${parsed.phone || '(not provided)'}\nFake agent: ${parsed.agentName}\nChannel: ${parsed.channel}\nAmount lost: ${parsed.amountLost}\nWhen: ${parsed.whenHappened || '(not provided)'}\n\n${parsed.story}`,
      html: operatorHtml,
    });

    await transporter.sendMail({
      from,
      to: parsed.email,
      replyTo: SUPPORT_EMAIL,
      subject: `Recovery mode started - ${PROGRAM_NAME}`,
      html: `
        <p>Dear ${escapeHtml(parsed.name)},</p>
        <p>Thank you for trusting us with your story. We have received your report about <strong>${escapeHtml(parsed.agentName)}</strong> and the amount you said was taken: <strong>${escapeHtml(parsed.amountLost)}</strong>.</p>
        <p>We feel what this has cost you. Your file is now in recovery review. Speaking up matters, and our team will follow up from ${escapeHtml(SUPPORT_EMAIL)} about next steps, including recovery of lost funds and whether additional support can be added for coming forward.</p>
        <p>${escapeHtml(PROGRAM_NAME)}<br/>${escapeHtml(SUPPORT_EMAIL)}</p>
      `,
      text: `Dear ${parsed.name},\n\nThank you for trusting us with your story. We have received your report about ${parsed.agentName} and the amount you said was taken: ${parsed.amountLost}.\n\nYour file is now in recovery review. We will follow up from ${SUPPORT_EMAIL}.\n\n${PROGRAM_NAME}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Scam report send error:', err);
    return NextResponse.json(
      { error: 'Could not send your report. Please try again later.' },
      { status: 500 }
    );
  }
}
