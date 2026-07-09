export interface SubmitContactFormInput {
  recipientEmail: string;
  name: string;
  phone: string;
  address: string;
  orderDetails: string;
}

export type SubmitContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContactForm(
  input: SubmitContactFormInput,
): Promise<SubmitContactFormResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = (await response.json().catch(() => null)) as
    | { ok: true }
    | { ok: false; error?: string }
    | null;

  if (response.ok && data?.ok === true) {
    return { ok: true };
  }

  const error =
    data && typeof data === "object" && "error" in data && typeof data.error === "string"
      ? data.error
      : "Something went wrong. Please try again.";

  return { ok: false, error };
}
