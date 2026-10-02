export const SESSION_COOKIE = "aurora_website_session";

export function getBackendUrl() {
  const url = process.env.BACKEND_URL?.trim();
  return url ? url.replace(/\/$/, "") : "";
}
