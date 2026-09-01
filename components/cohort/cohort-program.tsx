"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import {
  WorkshopAiIcon,
  WorkshopArmIcon,
  WorkshopCodeIcon,
  WorkshopRoverIcon,
  WorkshopSatelliteIcon,
  WorkshopVisionIcon,
} from "@/components/icons/figma-icons";
import { AppLink } from "@/components/layout/app-link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { COHORT_PROGRAM, EXTERNAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TrackIcon =
  (typeof COHORT_PROGRAM.engineer.roles)[number]["tracks"][number]["icon"];

const TRACK_ICONS: Record<TrackIcon, ComponentType<{ className?: string }>> = {
  code: WorkshopCodeIcon,
  satellite: WorkshopSatelliteIcon,
  rover: WorkshopRoverIcon,
  ai: WorkshopAiIcon,
  arm: WorkshopArmIcon,
  vision: WorkshopVisionIcon,
};

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="2.5"
        y="5.5"
        width="7"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4 5.5V4a2 2 0 0 1 4 0v1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="2.5"
        y="3.5"
        width="13"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M2.5 7.5h13M6 2.5v2M12 2.5v2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

function StepArrow({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" stroke="#c6ff00" strokeWidth="1.5" />
      <path
        d="M14 20h12M21 15l5 5-5 5"
        stroke="#c6ff00"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CohortProgram = () => {
  const { eyebrow, title, steps, engineer } = COHORT_PROGRAM;
  const [openId, setOpenId] = useState(engineer.roles[0]?.id ?? "");
  const activeRole =
    engineer.roles.find((role) => role.id === openId) ?? engineer.roles[0];

  return (
    <section className="bg-[#151514]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-1 w-8 shrink-0 bg-aurora-lime" aria-hidden />
              <p className="font-display text-xs uppercase tracking-[0.16em] text-white/70 sm:text-sm">
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-4 max-w-3xl font-display text-[1.75rem] font-semibold leading-tight text-white sm:mt-5 sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
              {title}
            </h2>
          </Reveal>

          <Stagger className="mt-8 flex flex-col items-stretch gap-4 lg:mt-10 lg:flex-row lg:items-center lg:gap-5">
            {steps.flatMap((step, index) => {
              const isExternal = step.ctaHref.startsWith("http");
              const ctaClassName =
                "mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-colors hover:text-aurora-lime sm:text-base";
              const ctaContent = (
                <>
                  {step.ctaLabel}
                  <ArrowIcon className="size-4" />
                </>
              );

              const card = (
                <StaggerItem
                  as="article"
                  key={step.id}
                  className="relative flex flex-1 flex-col rounded-2xl border border-white/10 bg-black p-5 sm:p-6 lg:p-7"
                >
                  <span
                    className={cn(
                      "absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wide",
                      step.badgeTone === "free"
                        ? "bg-aurora-lime text-[#151514]"
                        : "bg-[#2a2a2a] text-white/80",
                    )}
                  >
                    {step.badgeTone === "paid" ? <LockIcon /> : null}
                    {step.badge}
                  </span>
                  <h3 className="max-w-[20ch] pr-20 font-sans text-lg font-semibold text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                    {step.body}
                  </p>
                  <p className="mt-5 font-sans text-sm text-white/55 sm:text-base">
                    {step.meta}
                  </p>
                  {isExternal ? (
                    <a
                      href={step.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ctaClassName}
                    >
                      {ctaContent}
                    </a>
                  ) : (
                    <AppLink href={step.ctaHref} className={ctaClassName}>
                      {ctaContent}
                    </AppLink>
                  )}
                </StaggerItem>
              );

              if (index >= steps.length - 1) return [card];

              return [
                card,
                <div
                  key={`${step.id}-arrow`}
                  className="flex justify-center lg:shrink-0"
                >
                  <StepArrow className="rotate-90 lg:rotate-0" />
                </div>,
              ];
            })}
          </Stagger>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <Reveal>
              <h3 className="max-w-3xl font-display text-[1.5rem] font-semibold leading-tight text-white sm:text-3xl lg:text-[2.5rem]">
                {engineer.title}
              </h3>
              <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-[#757575] sm:mt-4 sm:text-base lg:text-lg">
                {engineer.description}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
              <div>
                <p className="font-sans text-sm font-semibold text-white/80 sm:text-base">
                  {engineer.listLabel}
                </p>
                <Stagger as="ul" className="mt-4 space-y-3">
                  {engineer.roles.map((role) => {
                    const isOpen = role.id === openId;
                    return (
                      <StaggerItem as="li" key={role.id}>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenId((current) =>
                              current === role.id ? "" : role.id,
                            )
                          }
                          className={cn(
                            "group flex w-full items-center justify-between gap-4 rounded-xl border bg-black px-4 py-4 text-left transition-colors sm:px-5 sm:py-5",
                            isOpen
                              ? "border-aurora-lime"
                              : "border-transparent hover:border-aurora-lime",
                          )}
                        >
                          <span className="font-sans text-sm font-medium text-white sm:text-base lg:text-lg">
                            {role.label}
                          </span>
                          <span
                            className={cn(
                              "flex size-7 shrink-0 items-center justify-center rounded-full border text-lg leading-none",
                              isOpen
                                ? "border-aurora-lime text-aurora-lime"
                                : "border-white/30 text-white/70 group-hover:border-aurora-lime group-hover:text-aurora-lime",
                            )}
                            aria-hidden
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>

              <Reveal>
                <aside className="rounded-2xl border border-white/10 bg-black p-5 sm:p-6 lg:p-7">
                  <h4 className="font-sans text-lg font-semibold text-white sm:text-xl">
                    {engineer.combinationLabel}
                  </h4>

                  {activeRole ? (
                    <>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {activeRole.tracks.map((track) => {
                          const Icon = TRACK_ICONS[track.icon];
                          return (
                            <span
                              key={track.id}
                              className="inline-flex items-center gap-2 rounded-full border border-aurora-lime px-3.5 py-2 font-sans text-sm text-aurora-lime"
                            >
                              <Icon className="size-4" />
                              {track.title}
                            </span>
                          );
                        })}
                      </div>

                      <div className="mt-6">
                        <p className="font-sans text-sm font-semibold text-white sm:text-base">
                          {engineer.whyLabel}
                        </p>
                        <div className="mt-3 rounded-xl bg-[#151514] px-4 py-4 sm:px-5 sm:py-5">
                          <p className="font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                            {activeRole.why}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 font-sans text-sm text-white/70 sm:text-base">
                        {engineer.dateRange}
                      </p>
                    </>
                  ) : (
                    <p className="mt-5 font-sans text-sm text-[#757575]">
                      Select a role to preview your track combination.
                    </p>
                  )}
                </aside>
              </Reveal>
            </div>

            <Reveal className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={EXTERNAL_LINKS.COHORT_REGISTRATION}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: 16 }}
                className="inline-flex items-center justify-center gap-2.5 bg-aurora-lime px-7 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
              >
                {engineer.registerLabel}
                <ArrowIcon />
              </a>
              <a
                href={EXTERNAL_LINKS.COHORT_REGISTRATION}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: 16 }}
                className="inline-flex items-center justify-center gap-2.5 border-[1.5px] border-aurora-lime bg-transparent px-7 py-3.5 font-sans text-sm font-semibold text-aurora-lime transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
              >
                <CalendarIcon />
                {engineer.calendarLabel}
              </a>
            </Reveal>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default CohortProgram;
