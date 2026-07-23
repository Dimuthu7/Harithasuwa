import type { Handler, HandlerEvent } from "@netlify/functions";
import { handleContactPost } from "../../server/handleContactPost";

function parseBody(event: HandlerEvent): unknown {
  if (!event.body) return {};
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Production contact endpoint for Netlify.
 * Frontend posts to `/api/contact` (rewritten to this function in netlify.toml).
 */
export const handler: Handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { ...headers, Allow: "POST" },
      body: JSON.stringify({ ok: false, error: "Method not allowed" }),
    };
  }

  const body = parseBody(event);
  if (body === null) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ ok: false, error: "Invalid JSON body." }),
    };
  }

  const result = await handleContactPost(body);
  return {
    statusCode: result.status,
    headers,
    body: JSON.stringify(result.body),
  };
};
