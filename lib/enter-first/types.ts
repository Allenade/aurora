export type CourseStatus = "draft" | "open" | "closed" | "archived" | string;

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
};

export type CourseBlockReason = "closed" | "full" | "past-cutoff";
