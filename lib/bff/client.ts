export type ApiErrorBody = {
  message: string;
  fieldErrors?: Record<string, string>;
};

export class BffRequestError extends Error {
  status: number;
  fieldErrors?: Record<string, string>;
  messages: string[];

  constructor(
    message: string,
    status: number,
    fieldErrors?: Record<string, string>,
    messages?: string[],
  ) {
    super(message);
    this.name = "BffRequestError";
    this.status = status;
    this.fieldErrors = fieldErrors;
    this.messages = messages?.length ? messages : [message];
  }
}

type ErrorPayload = ApiErrorBody & {
  messages?: string[];
};

async function parseJson<T>(res: Response): Promise<T | null> {
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Browser → Next BFF (same-origin). */
export async function bffFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const body = await parseJson<T & ErrorPayload>(res);
  if (!res.ok) {
    const messages =
      body?.messages?.filter((item) => item.trim()) ??
      (body?.message ? [body.message] : ["Request failed"]);
    throw new BffRequestError(
      messages.join("\n"),
      res.status,
      body?.fieldErrors,
      messages,
    );
  }
  return body as T;
}

export type EnterFirstEnrollPayload = {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  gender?: string;
  nationality?: string;
  stateOfResidence?: string;
  currentStatus?: string;
  institution?: string;
  experienceLevel?: string;
  howDidYouHear?: string;
  joinedCommunity?: string;
  tracks: string[];
  termsAccepted: boolean;
  termsVersion: string;
  privacyVersion: string;
  marketingOptIn: boolean;
  ageConfirmed: boolean;
  dateOfBirth: string;
  guardianName?: string;
  guardianEmail?: string;
  guardianConsent?: boolean;
};

export type EnterFirstEnrollResponse = {
  enrollment: {
    id: string;
    paymentStatus: string;
    amount: number;
    currency: string;
    tracks: string[];
  };
  payment: {
    provider: "paystack";
    reference: string;
    authorizationUrl: string | null;
    publicKey?: string;
    amount: number;
    currency: string;
    free: boolean;
  };
};

export type EnterFirstPaymentStatus = {
  reference: string | null;
  status: string;
  paid: boolean;
  amount: number;
  currency: string;
  tracks: string[];
  enrollmentId: string;
  amountMismatch?: boolean;
  currencyMismatch?: boolean;
};

export function createEnterFirstEnrollment(input: EnterFirstEnrollPayload) {
  return bffFetch<EnterFirstEnrollResponse>("/api/bff/enter-first/enrollments", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function getEnterFirstPaymentStatus(reference: string) {
  return bffFetch<EnterFirstPaymentStatus>(
    `/api/bff/enter-first/enrollments/by-reference/${encodeURIComponent(reference)}/status`,
  );
}
