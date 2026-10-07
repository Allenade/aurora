import { getBackendUrl } from "@/lib/bff/config";
import { normalizeCourseMedia } from "./media";
import type { PublicCourse } from "./types";

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function asNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() && Number.isFinite(Number(value))) {
    return Number(value);
  }
  return null;
}

function asNullableString(value: unknown) {
  if (value == null) return null;
  return typeof value === "string" && value.trim() ? value : null;
}

function asNullableInt(value: unknown) {
  if (value == null) return null;
  const parsed = asNumber(value);
  return parsed == null ? null : Math.round(parsed);
}

/**
 * Keep a course only when the payload includes a real price or marks it free.
 * Never invent an amount.
 */
export function normalizePublicCourse(value: unknown): PublicCourse | null {
  if (!value || typeof value !== "object") return null;
  const row = value as Record<string, unknown>;
  const slug = asString(row.slug).trim();
  const name = asString(row.name).trim();
  if (!slug || !name) return null;

  const isFree = row.isFree === true;
  const price = asNumber(row.price);
  if (!isFree && price == null) return null;

  return {
    id: asString(row.id) || slug,
    slug,
    name,
    description: asString(row.description),
    price: isFree ? 0 : (price as number),
    currency: asString(row.currency).trim() || "NGN",
    isFree,
    seatCap: asNullableInt(row.seatCap),
    seatsTaken: asNullableInt(row.seatsTaken) ?? 0,
    seatsRemaining: asNullableInt(row.seatsRemaining),
    startDate: asNullableString(row.startDate),
    endDate: asNullableString(row.endDate),
    enrollmentCutoff: asNullableString(row.enrollmentCutoff),
    status: asString(row.status) || "closed",
    sortOrder: asNullableInt(row.sortOrder) ?? 0,
    cohort: asNullableString(row.cohort),
    ...normalizeCourseMedia(row),
  };
}

export function normalizePublicCourses(body: unknown): PublicCourse[] {
  const rows = Array.isArray(body) ? body : [];
  return rows
    .map((row) => normalizePublicCourse(row))
    .filter((course): course is PublicCourse => course != null);
}

/**
 * Server catalogue fetch.
 * Defaults to no cache so dashboard changes show on the next request.
 * Pass `revalidate` seconds only where a cached list is acceptable.
 * Failures and empty lists return [] — callers show an opening-soon state.
 */
export async function getEnterFirstCatalog(options?: {
  revalidate?: number | false;
}): Promise<PublicCourse[]> {
  const base = getBackendUrl();
  if (!base) return [];

  const revalidate = options?.revalidate === undefined ? false : options.revalidate;

  try {
    const res = await fetch(`${base}/api/v1/enter-first/courses`, 
      revalidate === false
        ? { cache: "no-store" }
        : { next: { revalidate } },
    );
    if (!res.ok) return [];
    return normalizePublicCourses(await res.json());
  } catch {
    return [];
  }
}
