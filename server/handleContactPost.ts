import { parseContactApiBody } from "./contactTypes";
import { sendContactEmail } from "./sendContactEmail";

export type ContactPostResult =
  | { status: 200; body: { ok: true } }
  | { status: 400; body: { ok: false; error: string } }
  | { status: 500; body: { ok: false; error: string } };

function clientErrorFor(err: unknown): string {
  const message = err instanceof Error ? err.message : String(err);
  const lower = message.toLowerCase();

  if (/smtp is not configured/i.test(message)) {
    return "Email is not configured on the server. Add SMTP_HOST, SMTP_USER, and SMTP_PASS in Netlify Environment variables, then redeploy.";
  }
  if (/eauth|invalid login|username and password not accepted|badcredentials/i.test(lower)) {
    return "Email login failed. Check SMTP_USER and SMTP_PASS (use a Gmail App Password) in Netlify.";
  }
  if (/enotfound|econnrefused|etimedout|econnection|connection timeout|greeting never received/i.test(lower)) {
    return "Could not reach the mail server from Netlify. Confirm SMTP_HOST/SMTP_PORT, or use a provider that supports serverless (Brevo/Mailgun).";
  }
  if (/daily limit|quota|too many/i.test(lower)) {
    return "The mail provider rate-limited sending. Try again later or switch SMTP provider.";
  }

  return "We could not send your order right now. Please try again or contact us by phone.";
}

export async function handleContactPost(rawBody: unknown): Promise<ContactPostResult> {
  const parsed = parseContactApiBody(rawBody);
  if (!parsed) {
    return {
      status: 400,
      body: { ok: false, error: "Please fill in all required fields." },
    };
  }

  const { recipientEmail, ...payload } = parsed;

  try {
    await sendContactEmail(recipientEmail, payload);
    return { status: 200, body: { ok: true } };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email.";
    const code =
      err && typeof err === "object" && "code" in err ? String((err as { code?: unknown }).code) : "";
    console.error("[contact]", code || "(no code)", message);
    return {
      status: 500,
      body: { ok: false, error: clientErrorFor(err) },
    };
  }
}
