"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal } from "@/components/motion";
import {
  BffRequestError,
  createEnterFirstEnrollment,
  getEnterFirstPaymentStatus,
} from "@/lib/bff/client";
import { trackAmountNgn } from "@/lib/bff/config";
import { ENTER_FIRST_TRACKS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";

const fieldClassName = cn(
  "w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3.5",
  "font-sans text-sm text-[#151514] placeholder:text-[#757575]",
  "outline-none transition-colors focus:border-[#151514] sm:text-base",
);

const TRACKS = ENTER_FIRST_TRACKS.tracks;

export default function EnterFirstEnrollForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const presetTracks = searchParams
    .getAll("track")
    .filter((id) => TRACKS.some((t) => t.id === id));
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
  const [submitting, setSubmitting] = useState(false);
  const [paymentState, setPaymentState] = useState<
    "idle" | "checking" | "paid" | "pending" | "failed"
  >(payReference ? "checking" : "idle");
  const toast = useToast();

  const total = useMemo(
    () => tracks.reduce((sum, id) => sum + trackAmountNgn(id), 0),
    [tracks],
  );

  useEffect(() => {
    if (!payReference) return;
    let cancelled = false;

    async function check() {
      try {
        const status = await getEnterFirstPaymentStatus(payReference);
        if (cancelled) return;
        if (status.paid) {
          setPaymentState("paid");
          toast.success("Payment confirmed. You're enrolled.");
        } else if (status.status === "failed") {
          setPaymentState("failed");
          toast.error("Payment failed. You can submit again to retry.");
        } else {
          setPaymentState("pending");
        }
      } catch {
        if (!cancelled) setPaymentState("pending");
      }
    }

    void check();
    return () => {
      cancelled = true;
    };
  }, [payReference, toast]);

  function toggleTrack(id: string) {
    setTracks((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!tracks.length) {
      toast.error("Select at least one track.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await createEnterFirstEnrollment({
        firstName,
        lastName,
        middleName: middleName || undefined,
        email,
        phone,
        whatsapp: whatsapp || undefined,
        gender: gender || undefined,
        nationality: nationality || undefined,
        stateOfResidence: stateOfResidence || undefined,
        currentStatus: currentStatus || undefined,
        institution: institution || undefined,
        experienceLevel: experienceLevel || undefined,
        howDidYouHear: howDidYouHear || undefined,
        joinedCommunity: joinedCommunity || undefined,
        tracks,
      });

      if (result.payment.authorizationUrl) {
        toast.info("Redirecting to Paystack…");
        window.location.href = result.payment.authorizationUrl;
        return;
      }

      // Free enrollment (e.g. programming-only)
      toast.success("Enrollment confirmed.");
      router.replace(
        `${ROUTES.CORE_3_ENROLL}?pay=${encodeURIComponent(result.payment.reference)}`,
      );
      setPaymentState("paid");
    } catch (err) {
      toast.error(
        err instanceof BffRequestError
          ? err.message
          : "Enrollment failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (paymentState === "paid") {
    return (
      <section className="bg-white">
        <SiteShell className="flex min-h-[70svh] items-center py-28 sm:min-h-[75svh] sm:py-32 lg:py-36">
          <SiteContent>
            <Reveal className="mx-auto max-w-xl text-center">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-[#151514]">
                Core 3.0
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold text-[#151514] sm:text-4xl">
                You&apos;re enrolled
              </h1>
              <p className="mt-4 font-sans text-base text-[#757575]">
                Payment confirmed. A confirmation email is on its way — check
                your inbox for next steps.
              </p>
              {payReference ? (
                <p className="mt-2 font-sans text-sm text-[#adadad]">
                  Reference: {payReference}
                </p>
              ) : null}
            </Reveal>
          </SiteContent>
        </SiteShell>
      </section>
    );
  }

  if (paymentState === "checking" || paymentState === "pending") {
    return (
      <section className="bg-white">
        <SiteShell className="flex min-h-[70svh] items-center py-28 sm:min-h-[75svh] sm:py-32 lg:py-36">
          <SiteContent>
            <Reveal className="mx-auto max-w-xl text-center">
              <h1 className="font-display text-3xl font-semibold text-[#151514]">
                Confirming payment…
              </h1>
              <p className="mt-4 font-sans text-base text-[#757575]">
                {paymentState === "checking"
                  ? "Hang tight while we verify your Paystack payment."
                  : "Payment is still pending. If you just paid, refresh in a moment."}
              </p>
              {payReference ? (
                <button
                  type="button"
                  className="mt-6 font-sans text-sm font-semibold text-[#151514] underline"
                  onClick={() => {
                    setPaymentState("checking");
                    void getEnterFirstPaymentStatus(payReference)
                      .then((status) => {
                        if (status.paid) {
                          setPaymentState("paid");
                          toast.success("Payment confirmed. You're enrolled.");
                        } else if (status.status === "failed") {
                          setPaymentState("failed");
                          toast.error(
                            "Payment failed. You can submit again to retry.",
                          );
                        } else {
                          setPaymentState("pending");
                          toast.info(
                            "Payment is still pending. Try again shortly.",
                          );
                        }
                      })
                      .catch(() => {
                        setPaymentState("pending");
                        toast.error("Could not verify payment status yet.");
                      });
                  }}
                >
                  Check again
                </button>
              ) : null}
            </Reveal>
          </SiteContent>
        </SiteShell>
      </section>
    );
  }

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
              Fill in your details, pick your track(s), then continue to
              Paystack. Programming for Robotics is free; specialist tracks are
              charged per track.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-3xl" delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" required>
                  <input
                    className={fieldClassName}
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                  />
                </Field>
                <Field label="Last name" required>
                  <input
                    className={fieldClassName}
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                  />
                </Field>
                <Field label="Middle name">
                  <input
                    className={fieldClassName}
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    className={fieldClassName}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    className={fieldClassName}
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                  />
                </Field>
                <Field label="WhatsApp">
                  <input
                    className={fieldClassName}
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </Field>
                <Field label="Gender">
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
                <Field label="Nationality">
                  <input
                    className={fieldClassName}
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </Field>
                <Field label="State of residence">
                  <input
                    className={fieldClassName}
                    value={stateOfResidence}
                    onChange={(e) => setStateOfResidence(e.target.value)}
                  />
                </Field>
                <Field label="Current status">
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
                <Field label="Institution / organization">
                  <input
                    className={fieldClassName}
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </Field>
                <Field label="Experience level">
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
                <Field label="How did you hear about us?">
                  <input
                    className={fieldClassName}
                    value={howDidYouHear}
                    onChange={(e) => setHowDidYouHear(e.target.value)}
                  />
                </Field>
                <Field label="Joined community?">
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
              </div>

              <fieldset className="mt-8">
                <legend className="font-sans text-sm font-semibold text-[#151514] sm:text-base">
                  Tracks <span className="text-[#ff4d4f]">*</span>
                </legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {TRACKS.map((track) => {
                    const amount = trackAmountNgn(track.id);
                    const checked = tracks.includes(track.id);
                    return (
                      <label
                        key={track.id}
                        className={cn(
                          "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors",
                          checked
                            ? "border-[#151514] bg-white"
                            : "border-[#e5e5e5] bg-white/60",
                        )}
                      >
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={checked}
                          onChange={() => toggleTrack(track.id)}
                        />
                        <span className="min-w-0">
                          <span className="block font-sans text-sm font-semibold text-[#151514]">
                            {track.title}
                          </span>
                          <span className="mt-0.5 block font-sans text-xs text-[#757575]">
                            {amount === 0
                              ? "Free"
                              : `₦${amount.toLocaleString("en-NG")}`}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-8 flex flex-col gap-3 border-t border-[#e5e5e5] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-sans text-sm text-[#757575]">
                  Total due:{" "}
                  <span className="font-semibold text-[#151514]">
                    {total === 0
                      ? "Free"
                      : `₦${total.toLocaleString("en-NG")}`}
                  </span>
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-lg bg-aurora-lime px-8 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 disabled:opacity-60 sm:text-base"
                >
                  {submitting
                    ? "Starting payment…"
                    : total === 0
                      ? "Complete free enrollment"
                      : "Continue to Paystack"}
                </button>
              </div>
            </form>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-sm text-[#151514]">
        {label}
        {required ? <span className="text-[#ff4d4f]"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
