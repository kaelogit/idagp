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
export const FULL_NAME = 'International Development Association';
/** Program line used in headlines */
export const PROGRAM_NAME = 'IDA Grant Program';
export const BRAND_NAME = SHORT_NAME;
export const LEGAL_NAME = FULL_NAME;

export const CONTACT_EMAIL = 'support@idagrantprogram.com';
export const APPLY_FROM_EMAIL = 'apply@idagrantprogram.com';
/** Desk name on application receipts — not a person */
export const APPLY_FROM_NAME = 'IDA Applications';

export const RESPONSE_HOURS = 24;

export const COORDINATOR_NAME = 'Helen Marsh';
export const COORDINATOR_TITLE = 'IDA Grant Coordinator';

export function applicantResponseBadge(hours = RESPONSE_HOURS): string {
  return `A coordinator is assigned to your file within ${hours} hours of applying`;
}

export function applicantContactWithin(hours = RESPONSE_HOURS): string {
  return `After you apply, an IDA grant coordinator is assigned to your file and contacts you by email within ${hours} hours.`;
}

export const APPLICANT_CONTACT_MONITOR =
  'Check your inbox and spam folder. Reply on the email thread from your assigned coordinator.';

export function absoluteSiteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const ORG_BLURB =
  'International Development Association (IDA) works in cooperation with the World Bank Group. Through the IDA Grant Program we issue billions of dollars in one-time awards to individuals and groups each year — for medical care, housing, business, education, and more.';

/** Shown on eligibility blocks — no income gate, no crisis requirement */
export const ELIGIBILITY_OPEN =
  'Open to all adults 18 and older. There is no income cap, no means test, and no requirement that you be in financial crisis.';

export const HELP_AREAS_SHORT =
  'Medical care, housing, business ventures, education, educators, retirees, seniors, and other personal or professional goals.';
