const KNOWN_FIELDS = [
  "firstName",
  "lastName",
  "middleName",
  "email",
  "phone",
  "whatsapp",
  "gender",
  "nationality",
  "stateOfResidence",
  "currentStatus",
  "institution",
  "experienceLevel",
  "howDidYouHear",
  "joinedCommunity",
  "tracks",
  "termsAccepted",
  "termsVersion",
  "privacyVersion",
  "marketingOptIn",
  "ageConfirmed",
  "dateOfBirth",
  "guardianName",
  "guardianEmail",
  "guardianConsent",
] as const;

/** Map Nest validation messages onto form fields when the property name is present. */
export function fieldErrorsFromMessages(messages: string[]) {
  const fieldErrors: Record<string, string> = {};

  for (const message of messages) {
    const text = message.trim();
    if (!text) continue;

    const field = KNOWN_FIELDS.find(
      (name) => text === name || text.startsWith(`${name} `),
    );
    if (field && !fieldErrors[field]) fieldErrors[field] = text;

    if (/terms must be accepted/i.test(text) && !fieldErrors.termsAccepted) {
      fieldErrors.termsAccepted = text;
    }
    if (/age must be confirmed/i.test(text) && !fieldErrors.ageConfirmed) {
      fieldErrors.ageConfirmed = text;
    }
    if (/date of birth|dateOfBirth/i.test(text) && !fieldErrors.dateOfBirth) {
      fieldErrors.dateOfBirth = text;
    }
    if (/guardian/i.test(text)) {
      fieldErrors.guardianName ??= text;
      fieldErrors.guardianEmail ??= text;
      fieldErrors.guardianConsent ??= text;
    }
    if (
      /track|course|cutoff|full|currency/i.test(text) &&
      !fieldErrors.tracks
    ) {
      fieldErrors.tracks = text;
    }
  }

  return fieldErrors;
}
