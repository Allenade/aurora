import { getBackendUrl } from "@/lib/bff/config";

export class NestError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "NestError";
    this.status = status;
  }
}

type NestErrorBody = {
  message?: string | string[];
  statusCode?: number;
};

function nestErrorMessage(body: NestErrorBody | null, fallback: string) {
  const message = body?.message;
  if (Array.isArray(message)) {
    return message.filter(Boolean).join(", ") || fallback;
  }
  if (typeof message === "string" && message.trim()) return message;
  return fallback;
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
    throw new NestError(
      nestErrorMessage(body, "Request failed"),
      body?.statusCode ?? res.status,
    );
  }
  return body as T;
}
