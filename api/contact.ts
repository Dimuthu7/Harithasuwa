import type { IncomingMessage, ServerResponse } from "http";
import { handleContactPost } from "../server/handleContactPost";

export default async function handler(req: IncomingMessage & { method?: string; body?: unknown }, res: ServerResponse) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  const result = await handleContactPost(req.body);
  res.statusCode = result.status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result.body));
}
