import { isRealIsoDate, isUnder18, todayUtcDate } from "./age";
import { courseBlock } from "./pricing";
import type { PublicCourse } from "./types";
import { POLICY_VERSIONS } from "@/lib/legal/versions";

/** Length limits from the backend EnterFirstEnrollDto. */
export const ENROLL_LIMITS = {
  firstName: 80,
  lastName: 80,
  middleName: 80,
  email: 254,
  phone: 32,
  whatsapp: 32,
  gender: 40,
  nationality: 80,
  stateOfResidence: 80,
  currentStatus: 80,
  institution: 160,
  experienceLevel: 80,
  howDidYouHear: 160,
  joinedCommunity: 160,
  trackSlug: 40,
  tracksMin: 1,
  tracksMax: 8,
  termsVersion: 32,
  privacyVersion: 32,
  guardianName: 120,
  guardianEmail: 254,
} as const;

export type EnrollFormInput = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
  whatsapp: string;
  gender: string;
  nationality: string;
  stateOfResidence: string;
  currentStatus: string;
  institution: string;
  experienceLevel: string;
  howDidYouHear: string;
  joinedCommunity: string;
  tracks: string[];
  termsAccepted: boolean;
  marketingOptIn: boolean;
  ageConfirmed: boolean;
  dateOfBirth: string;
  guardianName: string;
  guardianEmail: string;
  guardianConsent: boolean;
};

export type EnrollFieldErrors = Partial<Record<keyof EnrollFormInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function optional(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function checkLength(
  errors: EnrollFieldErrors,
  field: keyof EnrollFormInput,
  value: string,
  max: number,
  label: string,
) {
  if (value.trim().length > max) {
    errors[field] = `${label} must be ${max} characters or fewer`;
  }
}

export function validateEnrollment(
  input: EnrollFormInput,
  courses: PublicCourse[],
  now = new Date(),
): { fieldErrors: EnrollFieldErrors; messages: string[] } {
  const fieldErrors: EnrollFieldErrors = {};
  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const email = input.email.trim().toLowerCase();
  const phone = input.phone.trim();
  const dateOfBirth = input.dateOfBirth.trim();

  if (!firstName) fieldErrors.firstName = "First name is required";
  else checkLength(fieldErrors, "firstName", firstName, ENROLL_LIMITS.firstName, "First name");

  if (!lastName) fieldErrors.lastName = "Last name is required";
  else checkLength(fieldErrors, "lastName", lastName, ENROLL_LIMITS.lastName, "Last name");

  checkLength(fieldErrors, "middleName", input.middleName, ENROLL_LIMITS.middleName, "Middle name");

  if (!email) fieldErrors.email = "Email is required";
  else if (email.length > ENROLL_LIMITS.email || !EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  if (!phone) fieldErrors.phone = "Phone is required";
  else checkLength(fieldErrors, "phone", phone, ENROLL_LIMITS.phone, "Phone");

  checkLength(fieldErrors, "whatsapp", input.whatsapp, ENROLL_LIMITS.whatsapp, "WhatsApp");
  checkLength(fieldErrors, "gender", input.gender, ENROLL_LIMITS.gender, "Gender");
  checkLength(fieldErrors, "nationality", input.nationality, ENROLL_LIMITS.nationality, "Nationality");
  checkLength(
    fieldErrors,
    "stateOfResidence",
    input.stateOfResidence,
    ENROLL_LIMITS.stateOfResidence,
    "State of residence",
  );
  checkLength(
    fieldErrors,
    "currentStatus",
    input.currentStatus,
    ENROLL_LIMITS.currentStatus,
    "Current status",
  );
  checkLength(fieldErrors, "institution", input.institution, ENROLL_LIMITS.institution, "Institution");
  checkLength(
    fieldErrors,
    "experienceLevel",
    input.experienceLevel,
    ENROLL_LIMITS.experienceLevel,
    "Experience level",
  );
  checkLength(
    fieldErrors,
    "howDidYouHear",
    input.howDidYouHear,
    ENROLL_LIMITS.howDidYouHear,
    "How did you hear about us",
  );
  checkLength(
    fieldErrors,
    "joinedCommunity",
    input.joinedCommunity,
    ENROLL_LIMITS.joinedCommunity,
    "Joined community",
  );

  const tracks = [...new Set(input.tracks.map((id) => id.trim()).filter(Boolean))];
  if (tracks.length < ENROLL_LIMITS.tracksMin) {
    fieldErrors.tracks = "Select at least one track";
  } else if (tracks.length > ENROLL_LIMITS.tracksMax) {
    fieldErrors.tracks = "You can enroll in at most 8 tracks";
  } else if (tracks.some((id) => id.length > ENROLL_LIMITS.trackSlug)) {
    fieldErrors.tracks = "A selected track is not valid";
  } else {
    const bySlug = new Map(courses.map((course) => [course.slug, course]));
    const unknown = tracks.filter((id) => !bySlug.has(id));
    if (unknown.length) {
      fieldErrors.tracks = `Unknown track(s): ${unknown.join(", ")}`;
    } else {
      const blocked = tracks
        .map((id) => bySlug.get(id))
        .filter((course): course is PublicCourse => Boolean(course))
        .find((course) => courseBlock(course, now));
      if (blocked) {
        const reason = courseBlock(blocked, now);
        fieldErrors.tracks =
          reason === "full"
            ? `${blocked.name} is full`
            : reason === "past-cutoff"
              ? `Enrollment for ${blocked.name} is past the cutoff`
              : `${blocked.name} is not open for enrollment`;
      } else {
        const currencies = new Set(
          tracks.map((id) => (bySlug.get(id)?.currency || "NGN").toUpperCase()),
        );
        if (currencies.size > 1) {
          fieldErrors.tracks = "Selected courses use different currencies";
        }
      }
    }
  }

  if (input.termsAccepted !== true) {
    fieldErrors.termsAccepted = "Terms must be accepted";
  }
  if (
    POLICY_VERSIONS.termsVersion.length > ENROLL_LIMITS.termsVersion ||
    POLICY_VERSIONS.privacyVersion.length > ENROLL_LIMITS.privacyVersion
  ) {
    fieldErrors.termsAccepted = "Policy version is too long";
  }

  if (input.ageConfirmed !== true) {
    fieldErrors.ageConfirmed = "Age must be confirmed";
  }

  if (!dateOfBirth) {
    fieldErrors.dateOfBirth = "Date of birth is required";
  } else if (!isRealIsoDate(dateOfBirth) || dateOfBirth > todayUtcDate(now) || dateOfBirth < "1900-01-01") {
    fieldErrors.dateOfBirth = "Enter a valid date of birth";
  } else if (isUnder18(dateOfBirth, now)) {
    const guardianName = input.guardianName.trim();
    const guardianEmail = input.guardianEmail.trim().toLowerCase();
    if (
      !guardianName ||
      !guardianEmail ||
      input.guardianConsent !== true
    ) {
      const message =
        "Guardian name, email, and consent are required when the student is under 18";
      if (!guardianName) fieldErrors.guardianName = message;
      if (!guardianEmail) fieldErrors.guardianEmail = message;
      if (input.guardianConsent !== true) fieldErrors.guardianConsent = message;
    } else {
      if (guardianName.length > ENROLL_LIMITS.guardianName) {
        fieldErrors.guardianName = `Guardian name must be ${ENROLL_LIMITS.guardianName} characters or fewer`;
      }
      if (
        guardianEmail.length > ENROLL_LIMITS.guardianEmail ||
        !EMAIL_PATTERN.test(guardianEmail)
      ) {
        fieldErrors.guardianEmail = "Enter a valid guardian email address";
      }
    }
  }

  const messages = [...new Set(Object.values(fieldErrors).filter(Boolean))] as string[];
  return { fieldErrors, messages };
}

export function toEnrollmentPayload(input: EnrollFormInput, courses: PublicCourse[]) {
  const dateOfBirth = input.dateOfBirth.trim();
  const minor = isRealIsoDate(dateOfBirth) && isUnder18(dateOfBirth);
  const tracks = [...new Set(input.tracks.map((id) => id.trim()).filter(Boolean))];
  const known = new Set(courses.map((course) => course.slug));

  return {
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    middleName: optional(input.middleName),
    email: input.email.trim().toLowerCase(),
    phone: input.phone.trim(),
    whatsapp: optional(input.whatsapp),
    gender: optional(input.gender),
    nationality: optional(input.nationality),
    stateOfResidence: optional(input.stateOfResidence),
    currentStatus: optional(input.currentStatus),
    institution: optional(input.institution),
    experienceLevel: optional(input.experienceLevel),
    howDidYouHear: optional(input.howDidYouHear),
    joinedCommunity: optional(input.joinedCommunity),
    tracks: tracks.filter((id) => known.has(id)),
    termsAccepted: true as const,
    termsVersion: POLICY_VERSIONS.termsVersion,
    privacyVersion: POLICY_VERSIONS.privacyVersion,
    marketingOptIn: input.marketingOptIn === true,
    ageConfirmed: true as const,
    dateOfBirth,
    ...(minor
      ? {
          guardianName: input.guardianName.trim(),
          guardianEmail: input.guardianEmail.trim().toLowerCase(),
          guardianConsent: true as const,
        }
      : {}),
  };
}
