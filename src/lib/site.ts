const DEFAULT_SITE_URL = 'https://idagrantprogram.com';

function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (value) {
    try {
      const host = new URL(value.replace(/\/$/, '')).hostname.toLowerCase();
      if (host.endsWith('.vercel.app')) return DEFAULT_SITE_URL;
      return value.replace(/\/$/, '');
    } catch {
      return DEFAULT_SITE_URL;
    }
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Public logo used in nav, favicons, and Google / Open Graph. */
export const LOGO_PATH = '/logo.png';
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;

export const SITE_DOMAIN = (() => {
  try {
    return new URL(SITE_URL).hostname;
  } catch {
    return 'idagrantprogram.com';
  }
})();

/** Short public brand */
export const SHORT_NAME = 'IDA';
/** Legal / full organization name */
export const FULL_NAME = 'Internal Development Associate';
/** Program line used in headlines */
export const PROGRAM_NAME = 'IDA Grant Program';
export const BRAND_NAME = SHORT_NAME;
export const LEGAL_NAME = FULL_NAME;

export const CONTACT_EMAIL = 'support@idagrantprogram.com';
export const APPLY_FROM_EMAIL = 'apply@idagrantprogram.com';

export const RESPONSE_HOURS = 24;

export const COORDINATOR_NAME = 'Helen Marsh';
export const COORDINATOR_TITLE = 'IDA Grant Coordinator';

export function applicantResponseBadge(hours = RESPONSE_HOURS): string {
  return `Email from ${COORDINATOR_NAME} within ${hours} hours`;
}

export function applicantContactWithin(hours = RESPONSE_HOURS): string {
  return `Every applicant is contacted by email (${CONTACT_EMAIL}) within ${hours} hours.`;
}

export const APPLICANT_CONTACT_MONITOR =
  'Check your inbox and spam folder. Reply on the email thread from Helen Marsh.';

export function absoluteSiteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const ORG_BLURB =
  'Internal Development Associate (IDA) is a private grant foundation. Each year we issue billions of dollars in IDA grant money to individuals and groups. Awards are grants — not loans — and they are made every day.';

export const HELP_AREAS_SHORT =
  'Medical bills, buying a home, starting a business, going to school, teachers, retired teachers, seniors, and others seeking financial assistance.';
