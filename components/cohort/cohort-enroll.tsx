"use client";

import { useState } from "react";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { COHORT_ENROLL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CohortEnroll = () => {
  const { eyebrow, title, ctaLabel, ctaHref, note, steps } = COHORT_ENROLL;
  const [openId, setOpenId] = useState(steps[1]?.id ?? steps[0]?.id ?? "");

  return (
    <section className="bg-white">
      <SiteShell className="pb-14 sm:pb-16 lg:pb-20 xl:pb-24">
        <SiteContent>
          <p className="font-display text-xs uppercase tracking-[0.16em] text-[#151514] sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.75rem] font-semibold leading-tight text-[#151514] sm:mt-4 sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
            {title}
          </h2>

          <ul className="mt-8 space-y-3 sm:mt-10">
            {steps.map((step) => {
              const isOpen = step.id === openId;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenId((current) =>
                        current === step.id ? "" : step.id,
                      )
                    }
                    className="flex w-full items-start gap-4 rounded-2xl bg-[#151514] px-4 py-4 text-left transition-colors sm:gap-5 sm:px-6 sm:py-5"
                  >
                    <span className="shrink-0 font-display text-base font-semibold tabular-nums text-aurora-lime sm:text-lg">
                      {step.id}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-sans text-sm font-semibold text-white sm:text-base lg:text-lg">
                        {step.title}
                      </span>
                      {isOpen ? (
                        <span className="mt-2 block font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                          {step.body}
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded border text-lg leading-none",
                        isOpen
                          ? "border-aurora-lime text-aurora-lime"
                          : "border-white/30 text-white",
                      )}
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-aurora-lime px-8 py-4 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:text-base"
            >
              {ctaLabel}
              <ArrowIcon />
            </a>
            <p className="font-sans text-sm text-[#757575] sm:text-base">{note}</p>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default CohortEnroll;
