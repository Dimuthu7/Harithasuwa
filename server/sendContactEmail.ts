import nodemailer from "nodemailer";
import type { ContactFormPayload } from "./contactTypes";

function resolveRecipient(requested: string): string {
  const configured = process.env.CONTACT_RECIPIENT_EMAIL?.trim();
  if (configured) return configured;
  return requested;
}

function buildTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }
  return nodemailer.createTransport({
    host,
    port: Number.isFinite(port) ? port : 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
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
  const from =
    process.env.SMTP_FROM?.trim() ||
    process.env.SMTP_USER?.trim() ||
    "noreply@harithasuwa.lk";
  const subject = process.env.CONTACT_EMAIL_SUBJECT?.trim() || `New order from ${payload.name}`;
  const transporter = buildTransporter();

  await transporter.sendMail({
    from,
    to,
    subject,
    text: formatPlainBody(payload),
  });
}
