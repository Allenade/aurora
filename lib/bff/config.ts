export const SESSION_COOKIE = "aurora_website_session";

export function getBackendUrl() {
  const url = process.env.BACKEND_URL?.trim();
  return url ? url.replace(/\/$/, "") : "";
}

/** Every Core 3.0 track is charged the same amount (whole Naira). */
export function trackAmountNgn(_trackId?: string) {
  const raw = process.env.NEXT_PUBLIC_ENTER_FIRST_TRACK_AMOUNT_NGN?.trim();
  const parsed = raw ? Number(raw) : 60_000;
  return Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed) : 60_000;
}

export function formatNgn(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}
