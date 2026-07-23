import nodemailer from "nodemailer";
import type { ContactFormPayload } from "./contactTypes";

function resolveRecipient(requested: string): string {
  const configured = process.env.CONTACT_RECIPIENT_EMAIL?.trim();
  if (configured) return configured;
  return requested;
}

/** Gmail app passwords are often copied with spaces — strip them. */
function normalizeSmtpPass(pass: string): string {
  return pass.replace(/\s+/g, "");
}

function extractEmailAddress(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim().toLowerCase();
}

function buildTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER?.trim();
  const passRaw = process.env.SMTP_PASS;
  if (!host || !user || !passRaw) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  const pass = normalizeSmtpPass(passRaw);
  const resolvedPort = Number.isFinite(port) ? port : 587;
  const secure = process.env.SMTP_SECURE === "true" || resolvedPort === 465;

  return nodemailer.createTransport({
    host,
    port: resolvedPort,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });
}

function resolveFrom(smtpUser: string): string {
  const configured = process.env.SMTP_FROM?.trim();
  if (!configured) {
    return `Harithasuwa Orders <${smtpUser}>`;
  }

  // Gmail rejects From addresses that don't match the authenticated account.
  const fromEmail = extractEmailAddress(configured);
  const userEmail = smtpUser.toLowerCase();
  if (fromEmail !== userEmail) {
    console.warn(
      `[contact] SMTP_FROM (${fromEmail}) differs from SMTP_USER (${userEmail}); using SMTP_USER as From.`,
    );
    return `Harithasuwa Orders <${smtpUser}>`;
  }

  return configured;
}

function formatPlainBody(payload: ContactFormPayload): string {
  return [
    "New order from the Harithasuwa website",
    "",
    `Name: ${payload.name}`,
    `Phone / WhatsApp: ${payload.phone}`,
    `Delivery address: ${payload.address}`,
    "",
    "Order details:",
    payload.orderDetails,
  ].join("\n");
}

export async function sendContactEmail(
  recipientEmail: string,
  payload: ContactFormPayload,
): Promise<void> {
  const to = resolveRecipient(recipientEmail);
  const smtpUser = process.env.SMTP_USER?.trim() || "noreply@harithasuwa.lk";
  const from = resolveFrom(smtpUser);
  const subject = process.env.CONTACT_EMAIL_SUBJECT?.trim() || `New order from ${payload.name}`;
  const transporter = buildTransporter();

  await transporter.sendMail({
    from,
    to,
    replyTo: smtpUser,
    subject,
    text: formatPlainBody(payload),
  });
}
