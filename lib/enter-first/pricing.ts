import type { CourseBlockReason, PublicCourse } from "./types";

/** Amount the backend charges for one course. Free courses are zero. */
export function chargedAmount(course: Pick<PublicCourse, "isFree" | "price">) {
  return course.isFree ? 0 : course.price;
}

export function formatMoney(amount: number, currency: string) {
  const code = currency?.trim() || "NGN";
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: code,
      maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    }).format(amount);
  } catch {
    return `${code} ${amount.toLocaleString("en-NG")}`;
  }
}

/** Price label equal to the amount checkout charges. */
export function formatCoursePrice(
  course: Pick<PublicCourse, "isFree" | "price" | "currency">,
) {
  const amount = chargedAmount(course);
  if (amount === 0) return "Free";
  return formatMoney(amount, course.currency);
}

export function formatCourseTotal(courses: PublicCourse[]): string | null {
  if (!courses.length) return null;
  const currencies = new Set(
    courses.map((course) => (course.currency || "NGN").toUpperCase()),
  );
  if (currencies.size > 1) return null;
  const amount = courses.reduce((sum, course) => sum + chargedAmount(course), 0);
  if (amount === 0) return "Free";
  return formatMoney(amount, courses[0]?.currency || "NGN");
}

export function priceNoteFor(courses: PublicCourse[]): string | null {
  if (!courses.length) return null;
  const paid = courses.filter((course) => chargedAmount(course) > 0);
  const free = courses.filter((course) => chargedAmount(course) === 0);
  if (!paid.length) return "These tracks are free.";
  const labels = [...new Set(paid.map((course) => formatCoursePrice(course)))];
  if (paid.length === courses.length && labels.length === 1) {
    return `${labels[0]} per track. Checkout charges this amount.`;
  }
  if (labels.length === 1 && free.length) {
    return `Paid tracks are ${labels[0]} each. Free tracks are marked Free. Checkout charges the total shown.`;
  }
  return "Each track shows the price checkout charges. Your total is the sum of the tracks you select.";
}

export function courseBlock(
  course: PublicCourse,
  now = new Date(),
): CourseBlockReason | null {
  if (course.status !== "open") return "closed";
  if (course.enrollmentCutoff) {
    const cutoff = new Date(course.enrollmentCutoff);
    if (!Number.isNaN(cutoff.getTime()) && now.getTime() > cutoff.getTime()) {
      return "past-cutoff";
    }
  }
  if (
    course.seatCap != null &&
    course.seatCap >= 0 &&
    course.seatsTaken >= course.seatCap
  ) {
    return "full";
  }
  if (course.seatsRemaining === 0) return "full";
  return null;
}

export function courseBlockLabel(reason: CourseBlockReason) {
  if (reason === "full") return "Full";
  if (reason === "past-cutoff") return "Past cutoff";
  return "Closed";
}

export function seatLabel(course: PublicCourse): string | null {
  const full =
    course.seatsRemaining === 0 ||
    (course.seatCap != null && course.seatsTaken >= course.seatCap);
  if (full) return "No seats left";
  if (course.seatsRemaining != null) {
    const count = course.seatsRemaining;
    return `${count} seat${count === 1 ? "" : "s"} left`;
  }
  return null;
}

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Africa/Lagos",
});

export function formatIsoDate(iso: string | null): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return DATE_FORMAT.format(date);
}

export function courseDateLabel(course: PublicCourse): string | null {
  const start = formatIsoDate(course.startDate);
  const end = formatIsoDate(course.endDate);
  if (start && end) return `${start} – ${end}`;
  if (start) return `Starts ${start}`;
  if (end) return `Ends ${end}`;
  return null;
}

export function cutoffLabel(course: PublicCourse): string | null {
  const cutoff = formatIsoDate(course.enrollmentCutoff);
  return cutoff ? `Enroll by ${cutoff}` : null;
}

/** One date line from course start/end values. No hard-coded cohort dates. */
export function buildCohortDateLine(courses: PublicCourse[]): string | null {
  if (!courses.length) return null;
  const starts = courses
    .map((course) => course.startDate)
    .filter((value): value is string => Boolean(value))
    .map((value) => new Date(value).getTime())
    .filter((value) => !Number.isNaN(value));
  const ends = courses
    .map((course) => course.endDate)
    .filter((value): value is string => Boolean(value))
    .map((value) => new Date(value).getTime())
    .filter((value) => !Number.isNaN(value));
  if (!starts.length && !ends.length) return null;

  const same = courses.every(
    (course) =>
      course.startDate === courses[0]?.startDate &&
      course.endDate === courses[0]?.endDate,
  );
  const startLabel = starts.length
    ? formatIsoDate(new Date(Math.min(...starts)).toISOString())
    : null;
  const endLabel = ends.length
    ? formatIsoDate(new Date(Math.max(...ends)).toISOString())
    : null;
  const span =
    startLabel && endLabel
      ? `${startLabel} – ${endLabel}`
      : startLabel || endLabel;
  if (!span) return null;
  return same ? span : `Dates vary by track (${span})`;
}
