"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function EnrollmentUnavailable({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const dark = tone === "dark";

  return (
    <div
      className={
        dark
          ? "rounded-2xl border border-white/15 bg-[#111111] px-6 py-10 text-center sm:px-10 sm:py-14"
          : "rounded-2xl border border-[#e5e5e5] bg-[#fafafa] px-6 py-10 text-center sm:px-10 sm:py-14"
      }
    >
      <h2
        className={
          dark
            ? "font-display text-2xl font-semibold text-white sm:text-3xl"
            : "font-display text-2xl font-semibold text-[#151514] sm:text-3xl"
        }
      >
        Enrollment opening soon
      </h2>
      <p
        className={
          dark
            ? "mx-auto mt-3 max-w-xl font-sans text-sm leading-relaxed text-[#adadad] sm:text-base"
            : "mx-auto mt-3 max-w-xl font-sans text-sm leading-relaxed text-[#757575] sm:text-base"
        }
      >
        Course names, seats, dates, and prices appear here when registration
        opens. Please try again shortly. We will not show a stand-in price.
      </p>
      <button
        type="button"
        onClick={() => {
          setPending(true);
          router.refresh();
        }}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-aurora-lime px-6 py-3 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Checking again…" : "Try again"}
      </button>
    </div>
  );
}
