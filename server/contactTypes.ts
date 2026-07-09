export interface ContactFormPayload {
  name: string;
  phone: string;
  address: string;
  orderDetails: string;
}

export interface ContactApiRequestBody extends ContactFormPayload {
  recipientEmail: string;
}

export function parseContactApiBody(body: unknown): ContactApiRequestBody | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  const name = trimString(record.name);
  const phone = trimString(record.phone);
  const address = trimString(record.address);
  const orderDetails = trimString(record.orderDetails);
  const recipientEmail = trimString(record.recipientEmail);
  if (!name || !phone || !address || !orderDetails || !recipientEmail) return null;
  if (!isValidEmail(recipientEmail)) return null;
  return { name, phone, address, orderDetails, recipientEmail };
}

function trimString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
