import type { Connect, Plugin } from "vite";
import { loadEnv } from "vite";
import { handleContactPost } from "./handleContactPost";

function readJsonBody(req: Connect.IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function applyServerEnv(mode: string) {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "CONTACT_RECIPIENT_EMAIL",
    "CONTACT_EMAIL_SUBJECT",
  ]) {
    if (env[key] !== undefined) {
      process.env[key] = env[key];
    }
  }
}

export function contactApiPlugin(): Plugin {
  return {
    name: "contact-api",
    configureServer(server) {
      applyServerEnv(server.config.mode);

      server.middlewares.use("/api/contact", async (req, res, next) => {
        if (req.method !== "POST") {
          next();
          return;
        }

        try {
          const body = await readJsonBody(req);
          const result = await handleContactPost(body);
          res.statusCode = result.status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.body));
        } catch {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, error: "Invalid request." }));
        }
      });
    },
  };
}
