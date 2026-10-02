import { getBackendUrl } from "@/lib/bff/config";

export class NestError extends Error {
  status: number;
  messages: string[];

  constructor(message: string, status = 400, messages?: string[]) {
    super(message);
    this.name = "NestError";
    this.status = status;
    this.messages = messages?.length ? messages : [message];
  }
}

type NestErrorBody = {
  message?: string | string[];
  statusCode?: number;
};

function readMessages(body: NestErrorBody | null, fallback: string) {
  const message = body?.message;
  if (Array.isArray(message)) {
    const items = message.map((item) => String(item).trim()).filter(Boolean);
    return items.length ? items : [fallback];
  }
  if (typeof message === "string" && message.trim()) return [message.trim()];
  return [fallback];
}

async function parseJson<T>(res: Response): Promise<T | null> {
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Server-only: Next BFF → Nest API (no shop session). */
export async function nestFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const base = getBackendUrl();
  if (!base) {
    throw new NestError("BACKEND_URL is not configured", 503);
  }

  const headers = new Headers(init?.headers);
  if (!headers.has("Content-Type") && init?.body) {
    headers.set("Content-Type", "application/json");
  }

  const url = `${base}/api/v1${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, { ...init, headers, cache: "no-store" });
  const body = await parseJson<T & NestErrorBody>(res);
  if (!res.ok) {
    const messages = readMessages(body, "Request failed");
    throw new NestError(
      messages.join("\n"),
      body?.statusCode ?? res.status,
      messages,
    );
  }
  return body as T;
}
