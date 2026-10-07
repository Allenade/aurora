export type CourseStatus = "draft" | "open" | "closed" | "archived" | string;

/** Optional syllabus on a public course. Any field may be null. */
export type CourseSyllabus = {
  url: string | null;
  filename: string | null;
  text: string | null;
};

/** Public course row from GET /api/v1/enter-first/courses. */
export type PublicCourse = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  isFree: boolean;
  seatCap: number | null;
  seatsTaken: number;
  seatsRemaining: number | null;
  startDate: string | null;
  endDate: string | null;
  enrollmentCutoff: string | null;
  status: CourseStatus;
  sortOrder: number;
  cohort: string | null;
  /** Picture URL. Null when the course has none, or when an older API omits it. */
  imageUrl: string | null;
  /** PDF and/or sanitized HTML. All null when missing or when an older API omits it. */
  syllabus: CourseSyllabus;
};

export type CourseBlockReason = "closed" | "full" | "past-cutoff";
