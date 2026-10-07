"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal } from "@/components/motion";
import {
  BffRequestError,
  createEnterFirstEnrollment,
  getEnterFirstPaymentStatus,
  type EnterFirstPaymentStatus,
} from "@/lib/bff/client";
import { isUnder18 } from "@/lib/enter-first/age";
import {
  courseBlock,
  courseBlockLabel,
  formatCoursePrice,
  formatCourseTotal,
  formatMoney,
} from "@/lib/enter-first/pricing";
import type { PublicCourse } from "@/lib/enter-first/types";
import {
  ENROLL_LIMITS,
  toEnrollmentPayload,
  validateEnrollment,
  type EnrollFieldErrors,
} from "@/lib/enter-first/validate";
import { POLICY_VERSIONS } from "@/lib/legal/versions";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";
import { EnrollmentUnavailable } from "./enrollment-unavailable";

const fieldClassName = cn(
  "w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3.5",
  "font-sans text-sm text-[#151514] placeholder:text-[#757575]",
  "outline-none transition-colors focus:border-[#151514] sm:text-base",
);

type PaymentView = "idle" | "checking" | "paid" | "pending" | "failed" | "refunded";

function classifyPayment(status: EnterFirstPaymentStatus): PaymentView {
  if (status.status === "refunded") return "refunded";
  if (
    status.paid &&
    !status.amountMismatch &&
    !status.currencyMismatch &&
    status.status !== "failed"
  ) {
    return "paid";
  }
  if (
    status.status === "failed" ||
    status.amountMismatch ||
    status.currencyMismatch
  ) {
    return "failed";
  }
  return "pending";
}

export default function EnterFirstEnrollForm({
  courses,
}: {
  courses: PublicCourse[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const openSlugs = useMemo(
    () => new Set(courses.filter((course) => !courseBlock(course)).map((course) => course.slug)),
    [courses],
  );
  const presetTracks = searchParams
    .getAll("track")
    .filter((id) => openSlugs.has(id));
  const payReference = searchParams.get("pay") ?? "";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [institution, setInstitution] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [joinedCommunity, setJoinedCommunity] = useState("");
  const [tracks, setTracks] = useState<string[]>(presetTracks);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianConsent, setGuardianConsent] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<EnrollFieldErrors>({});
  const [formMessages, setFormMessages] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [paymentState, setPaymentState] = useState<PaymentView>(
    payReference ? "checking" : "idle",
  );
  const [paymentDetail, setPaymentDetail] =
    useState<EnterFirstPaymentStatus | null>(null);
  const toast = useToast();

  const selectedCourses = useMemo(
    () => courses.filter((course) => tracks.includes(course.slug) && !courseBlock(course)),
    [courses, tracks],
  );
  const totalLabel = formatCourseTotal(selectedCourses);
  const needsGuardian = isUnder18(dateOfBirth);

  useEffect(() => {
    if (!payReference) return;
    let cancelled = false;

    async function check() {
      try {
        const status = await getEnterFirstPaymentStatus(payReference);
        if (cancelled) return;
        setPaymentDetail(status);
        const next = classifyPayment(status);
        setPaymentState(next);
        if (next === "paid") toast.success("Payment confirmed. You're enrolled.");
        if (next === "failed") toast.error("Payment was not completed.");
      } catch (err) {
        if (cancelled) return;
        setPaymentState("pending");
        if (err instanceof BffRequestError) {
          toast.error(err.messages[0] ?? err.message);
        }
      }
    }

    void check();
    return () => {
      cancelled = true;
    };
  }, [payReference, toast]);

  function toggleTrack(id: string) {
    const course = courses.find((item) => item.slug === id);
    if (!course || courseBlock(course)) return;
    setTracks((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function formInput() {
    return {
      firstName,
      lastName,
      middleName,
      email,
      phone,
      whatsapp,
      gender,
      nationality,
      stateOfResidence,
      currentStatus,
      institution,
      experienceLevel,
      howDidYouHear,
      joinedCommunity,
      tracks,
      termsAccepted,
      marketingOptIn,
      ageConfirmed,
      dateOfBirth,
      guardianName,
      guardianEmail,
      guardianConsent,
    };
  }

  async function refreshPayment() {
    if (!payReference) return;
    setPaymentState("checking");
    try {
      const status = await getEnterFirstPaymentStatus(payReference);
      setPaymentDetail(status);
      const next = classifyPayment(status);
      setPaymentState(next);
      if (next === "paid") toast.success("Payment confirmed. You're enrolled.");
      else if (next === "failed") toast.error("Payment was not completed.");
      else if (next === "refunded") toast.info("This payment was refunded.");
      else toast.info("Payment is still pending. Try again shortly.");
    } catch (err) {
      setPaymentState("pending");
      toast.error(
        err instanceof BffRequestError
          ? err.messages.join(" ")
          : "Could not verify payment status yet.",
      );
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = formInput();
    const validated = validateEnrollment(input, courses);
    if (validated.messages.length) {
      setFieldErrors(validated.fieldErrors);
      setFormMessages(validated.messages);
      toast.error(validated.messages[0] ?? "Check the form and try again.");
      return;
    }

    setFieldErrors({});
    setFormMessages([]);
    setSubmitting(true);
    try {
      const result = await createEnterFirstEnrollment(
        toEnrollmentPayload(input, courses),
      );

      if (result.payment.authorizationUrl) {
        toast.info("Redirecting to Paystack…");
        window.location.href = result.payment.authorizationUrl;
        return;
      }

      toast.success("Enrollment confirmed.");
      router.replace(
        `${ROUTES.CORE_3_ENROLL}?pay=${encodeURIComponent(result.payment.reference)}`,
      );
      setPaymentState("paid");
    } catch (err) {
      if (err instanceof BffRequestError) {
        setFormMessages(err.messages);
        setFieldErrors(err.fieldErrors ?? {});
        toast.error(err.messages[0] ?? err.message);
      } else {
        const message = "Enrollment failed. Please try again.";
        setFormMessages([message]);
        toast.error(message);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (paymentState === "paid") {
    return (
      <StatusPanel
        title="You're enrolled"
        body="Payment confirmed. A confirmation email is on its way — check your inbox for next steps."
      />
    );
  }

  if (paymentState === "refunded") {
    return (
      <StatusPanel
        title="Payment refunded"
        body="This enrollment was refunded through Paystack. If you still need a seat, start a new enrollment."
        reference={paymentDetail?.reference ?? payReference}
        actionHref={ROUTES.CORE_3_ENROLL}
        actionLabel="Start a new enrollment"
      />
    );
  }

  if (paymentState === "failed") {
    const mismatch = Boolean(
      paymentDetail?.amountMismatch || paymentDetail?.currencyMismatch,
    );
    return (
      <StatusPanel
        title="Payment not completed"
        body={
          mismatch
            ? "Paystack reported an amount or currency that does not match this enrollment, so it was not marked as paid. Contact us with your reference before you try again."
            : "Paystack did not confirm this payment. You can submit the form again to start a new checkout. You will only be charged the course total shown there."
        }
        reference={paymentDetail?.reference ?? payReference}
        amount={
          paymentDetail
            ? formatMoney(paymentDetail.amount, paymentDetail.currency)
            : undefined
        }
        actionHref={ROUTES.CORE_3_ENROLL}
        actionLabel="Try enrollment again"
        onCheckAgain={() => void refreshPayment()}
      />
    );
  }

  if (paymentState === "checking" || paymentState === "pending") {
    return (
      <StatusPanel
        title="Confirming payment…"
        body={
          paymentState === "checking"
            ? "Hang tight while we verify your Paystack payment."
            : "Payment is still pending. If you just paid, check again in a moment."
        }
        reference={payReference}
        onCheckAgain={payReference ? () => void refreshPayment() : undefined}
      />
    );
  }

  if (!courses.length) {
    return (
      <section className="bg-white">
        <SiteShell className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
          <SiteContent>
            <EnrollmentUnavailable />
          </SiteContent>
        </SiteShell>
      </section>
    );
  }

  const paid = selectedCourses.some((course) => course.price > 0 && !course.isFree);

  return (
    <section className="bg-white">
      <SiteShell className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <SiteContent>
          <Reveal className="mx-auto max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.16em] text-[#151514]">
              Core 3.0 enrollment
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-[#151514] sm:text-4xl">
              Secure your track seat
            </h1>
            <p className="mt-3 max-w-2xl font-sans text-sm text-[#757575] sm:text-base">
              Prices below are the amounts checkout charges. Closed, full, and
              past-cutoff tracks stay visible but cannot be selected.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-3xl" delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-5 sm:p-8"
              noValidate
            >
              {formMessages.length ? (
                <div
                  role="alert"
                  className="mb-6 rounded-xl border border-[#ff4d4f]/40 bg-[#fff5f5] px-4 py-3"
                >
                  <p className="font-sans text-sm font-semibold text-[#151514]">
                    We could not submit this enrollment
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 font-sans text-sm text-[#151514]">
                    {formMessages.map((message) => (
                      <li key={message}>{message}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" required error={fieldErrors.firstName}>
                  <input
                    className={fieldClassName}
                    required
                    maxLength={ENROLL_LIMITS.firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    aria-invalid={Boolean(fieldErrors.firstName)}
                  />
                </Field>
                <Field label="Last name" required error={fieldErrors.lastName}>
                  <input
                    className={fieldClassName}
                    required
                    maxLength={ENROLL_LIMITS.lastName}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                    aria-invalid={Boolean(fieldErrors.lastName)}
                  />
                </Field>
                <Field label="Middle name" error={fieldErrors.middleName}>
                  <input
                    className={fieldClassName}
                    maxLength={ENROLL_LIMITS.middleName}
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </Field>
                <Field label="Email" required error={fieldErrors.email}>
                  <input
                    className={fieldClassName}
                    type="email"
                    required
                    maxLength={ENROLL_LIMITS.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                </Field>
                <Field label="Phone" required error={fieldErrors.phone}>
                  <input
                    className={fieldClassName}
                    required
                    maxLength={ENROLL_LIMITS.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    aria-invalid={Boolean(fieldErrors.phone)}
                  />
                </Field>
                <Field label="WhatsApp" error={fieldErrors.whatsapp}>
                  <input
                    className={fieldClassName}
                    maxLength={ENROLL_LIMITS.whatsapp}
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </Field>
                <Field label="Gender" error={fieldErrors.gender}>
                  <select
                    className={fieldClassName}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Field>
                <Field label="Nationality" error={fieldErrors.nationality}>
                  <input
                    className={fieldClassName}
                    maxLength={ENROLL_LIMITS.nationality}
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </Field>
                <Field label="State of residence" error={fieldErrors.stateOfResidence}>
                  <input
                    className={fieldClassName}
                    maxLength={ENROLL_LIMITS.stateOfResidence}
                    value={stateOfResidence}
                    onChange={(e) => setStateOfResidence(e.target.value)}
                  />
                </Field>
                <Field label="Current status" error={fieldErrors.currentStatus}>
                  <select
                    className={fieldClassName}
                    value={currentStatus}
                    onChange={(e) => setCurrentStatus(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">
                      Working Professional
                    </option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Job-seeking">Job-seeking</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Institution / organization" error={fieldErrors.institution}>
                  <input
                    className={fieldClassName}
                    maxLength={ENROLL_LIMITS.institution}
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </Field>
                <Field label="Experience level" error={fieldErrors.experienceLevel}>
                  <select
                    className={fieldClassName}
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Some exposure">Some exposure</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </Field>
                <Field label="How did you hear about us?" error={fieldErrors.howDidYouHear}>
                  <input
                    className={fieldClassName}
                    maxLength={ENROLL_LIMITS.howDidYouHear}
                    value={howDidYouHear}
                    onChange={(e) => setHowDidYouHear(e.target.value)}
                  />
                </Field>
                <Field label="Joined community?" error={fieldErrors.joinedCommunity}>
                  <select
                    className={fieldClassName}
                    value={joinedCommunity}
                    onChange={(e) => setJoinedCommunity(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="Not yet — joining now">
                      Not yet — joining now
                    </option>
                    <option value="No">No</option>
                  </select>
                </Field>
                <Field label="Date of birth" required error={fieldErrors.dateOfBirth}>
                  <input
                    className={fieldClassName}
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    autoComplete="bday"
                    aria-invalid={Boolean(fieldErrors.dateOfBirth)}
                  />
                </Field>
              </div>

              <CheckField
                className="mt-6"
                checked={ageConfirmed}
                onChange={setAgeConfirmed}
                error={fieldErrors.ageConfirmed}
              >
                I confirm this date of birth is accurate.
              </CheckField>

              {needsGuardian ? (
                <fieldset className="mt-6 rounded-xl border border-[#e5e5e5] bg-white p-4">
                  <legend className="px-1 font-sans text-sm font-semibold text-[#151514]">
                    Parent or guardian
                  </legend>
                  <p className="mb-4 font-sans text-sm text-[#757575]">
                    A student under 18 needs a guardian&apos;s name, email, and
                    consent. The enrollment is rejected without them.
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Guardian name" required error={fieldErrors.guardianName}>
                      <input
                        className={fieldClassName}
                        required
                        maxLength={ENROLL_LIMITS.guardianName}
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Guardian email" required error={fieldErrors.guardianEmail}>
                      <input
                        className={fieldClassName}
                        type="email"
                        required
                        maxLength={ENROLL_LIMITS.guardianEmail}
                        value={guardianEmail}
                        onChange={(e) => setGuardianEmail(e.target.value)}
                        autoComplete="email"
                      />
                    </Field>
                  </div>
                  <CheckField
                    className="mt-4"
                    checked={guardianConsent}
                    onChange={setGuardianConsent}
                    error={fieldErrors.guardianConsent}
                  >
                    I am the parent or guardian and I consent to this enrollment.
                  </CheckField>
                </fieldset>
              ) : null}

              <fieldset className="mt-8">
                <legend className="font-sans text-sm font-semibold text-[#151514] sm:text-base">
                  Tracks <span className="text-[#ff4d4f]">*</span>
                </legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {courses.map((course) => {
                    const blocked = courseBlock(course);
                    const checked = !blocked && tracks.includes(course.slug);
                    return (
                      <label
                        key={course.slug}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border px-4 py-3 transition-colors",
                          blocked
                            ? "cursor-not-allowed border-[#e5e5e5] bg-white/40 opacity-70"
                            : "cursor-pointer",
                          !blocked && checked
                            ? "border-[#151514] bg-white"
                            : !blocked && "border-[#e5e5e5] bg-white/60",
                        )}
                      >
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={checked}
                          disabled={Boolean(blocked)}
                          onChange={() => toggleTrack(course.slug)}
                        />
                        <span className="min-w-0">
                          <span className="block font-sans text-sm font-semibold text-[#151514]">
                            {course.name}
                            {blocked ? ` · ${courseBlockLabel(blocked)}` : ""}
                          </span>
                          <span className="mt-0.5 block font-sans text-xs text-[#757575]">
                            {formatCoursePrice(course)}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
                {fieldErrors.tracks ? (
                  <p className="mt-2 font-sans text-sm text-[#ff4d4f]">
                    {fieldErrors.tracks}
                  </p>
                ) : null}
              </fieldset>

              <CheckField
                className="mt-8"
                checked={termsAccepted}
                onChange={setTermsAccepted}
                error={fieldErrors.termsAccepted}
              >
                I agree to the{" "}
                <Link
                  href={ROUTES.TERMS_AND_CONDITIONS}
                  className="font-semibold underline"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href={ROUTES.PRIVACY_POLICY} className="font-semibold underline">
                  Privacy Policy
                </Link>
                .
                <span className="mt-1 block text-xs text-[#757575]">
                  Terms {POLICY_VERSIONS.termsVersion} · Privacy{" "}
                  {POLICY_VERSIONS.privacyVersion}
                </span>
              </CheckField>

              <CheckField
                className="mt-4"
                checked={marketingOptIn}
                onChange={setMarketingOptIn}
              >
                Email me programme updates and offers. Optional, and off unless
                you tick it. You can unsubscribe from any marketing email.
              </CheckField>

              <p className="mt-6 font-sans text-sm leading-relaxed text-[#757575]">
                Refunds are not instant. Ask us and we review the request before
                anything is returned through Paystack.{" "}
                <Link
                  href={ROUTES.REFUND_POLICY}
                  className="font-semibold text-[#151514] underline"
                >
                  Refund policy
                </Link>
                .
              </p>

              <div className="mt-8 flex flex-col gap-3 border-t border-[#e5e5e5] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-sans text-sm text-[#757575]">
                  Total due:{" "}
                  <span className="font-semibold text-[#151514]">
                    {totalLabel ?? "Select a track"}
                  </span>
                </p>
                <button
                  type="submit"
                  disabled={submitting || !selectedCourses.length}
                  className="inline-flex items-center justify-center rounded-lg bg-aurora-lime px-8 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 disabled:opacity-60 sm:text-base"
                >
                  {submitting
                    ? "Starting payment…"
                    : paid
                      ? "Continue"
                      : "Complete enrollment"}
                </button>
              </div>
            </form>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
}

function StatusPanel({
  title,
  body,
  reference,
  amount,
  actionHref,
  actionLabel,
  onCheckAgain,
}: {
  title: string;
  body: string;
  reference?: string;
  amount?: string;
  actionHref?: string;
  actionLabel?: string;
  onCheckAgain?: () => void;
}) {
  return (
    <section className="flex min-h-[calc(100svh-6rem)] items-center justify-center bg-white sm:min-h-[calc(100svh-7rem)]">
      <SiteShell className="w-full py-10">
        <SiteContent>
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="font-display text-xs uppercase tracking-[0.16em] text-[#151514]">
              Core 3.0
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-[#151514] sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 font-sans text-base text-[#757575]">{body}</p>
            {amount ? (
              <p className="mt-3 font-sans text-sm text-[#151514]">
                Amount on this enrollment: {amount}
              </p>
            ) : null}
            {reference ? (
              <p className="mt-2 font-sans text-sm text-[#757575]">
                Reference: {reference}
              </p>
            ) : null}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {actionHref && actionLabel ? (
                <Link
                  href={actionHref}
                  className="inline-flex items-center justify-center rounded-lg bg-aurora-lime px-6 py-3 font-sans text-sm font-semibold text-[#151514]"
                >
                  {actionLabel}
                </Link>
              ) : null}
              {onCheckAgain ? (
                <button
                  type="button"
                  className="font-sans text-sm font-semibold text-[#151514] underline"
                  onClick={onCheckAgain}
                >
                  Check again
                </button>
              ) : null}
            </div>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-sm text-[#151514]">
        {label}
        {required ? <span className="text-[#ff4d4f]"> *</span> : null}
      </span>
      {children}
      {error ? (
        <span className="font-sans text-xs text-[#ff4d4f]">{error}</span>
      ) : null}
    </label>
  );
}

function CheckField({
  checked,
  onChange,
  error,
  children,
  className,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="flex items-start gap-3 font-sans text-sm text-[#151514]">
        <input
          type="checkbox"
          className="mt-1"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>{children}</span>
      </label>
      {error ? (
        <p className="mt-1 pl-7 font-sans text-xs text-[#ff4d4f]">{error}</p>
      ) : null}
    </div>
  );
}
