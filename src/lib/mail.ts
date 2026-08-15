import nodemailer from 'nodemailer';
import { APPLY_FROM_NAME, CONTACT_EMAIL } from '@/lib/site';

export function getSmtpCredentials() {
  const user = process.env.ZOHO_USER?.trim();
  const pass = process.env.ZOHO_PASS?.trim();
  if (!user || !pass) return null;
  return { user, pass };
}

export function createMailTransporter() {
  const creds = getSmtpCredentials();
  if (!creds) return null;
  return nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: creds,
  });
}

export function getOperatorInbox() {
  return process.env.TO_EMAIL?.trim() || process.env.ZOHO_USER?.trim() || '';
}

export function mailFromAutomated() {
  const address = process.env.MAIL_FROM?.trim() || process.env.ZOHO_USER?.trim() || '';
  if (!address) return '';
  return `"${APPLY_FROM_NAME}" <${address}>`;
}

export function mailUnavailableMessage() {
  return `Applications are temporarily unavailable. Please email ${CONTACT_EMAIL} or try again shortly.`;
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
