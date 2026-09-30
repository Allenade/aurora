export type ApiErrorBody = {
  message: string;
  fieldErrors?: Record<string, string>;
};

export class BffRequestError extends Error {
  status: number;
  fieldErrors?: Record<string, string>;

  constructor(
    message: string,
    status: number,
    fieldErrors?: Record<string, string>,
  ) {
    super(message);
    this.name = "BffRequestError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

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

  const body = await parseJson<T & ApiErrorBody>(res);
  if (!res.ok) {
    throw new BffRequestError(
      body?.message ?? "Request failed",
      res.status,
      body?.fieldErrors,
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
