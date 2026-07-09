import { parseContactApiBody } from "./contactTypes";
import { sendContactEmail } from "./sendContactEmail";

export type ContactPostResult =
  | { status: 200; body: { ok: true } }
  | { status: 400; body: { ok: false; error: string } }
  | { status: 500; body: { ok: false; error: string } };

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
    console.error("[contact]", message);
    return {
      status: 500,
      body: { ok: false, error: "We could not send your order right now. Please try again or contact us by phone." },
    };
  }
}
