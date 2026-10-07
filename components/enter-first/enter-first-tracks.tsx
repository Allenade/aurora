"use client";

import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  WorkshopAiIcon,
  WorkshopArmIcon,
  WorkshopBlockchainIcon,
  WorkshopCodeIcon,
  WorkshopDroneIcon,
  WorkshopRoverIcon,
  WorkshopSatelliteIcon,
  WorkshopVisionIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/components/motion";
import { ENTER_FIRST_TRACKS } from "@/lib/constants";
import {
  buildCohortDateLine,
  courseBlock,
  courseBlockLabel,
  courseDateLabel,
  cutoffLabel,
  formatCoursePrice,
  formatCourseTotal,
  seatLabel,
  sharedCourseWeeks,
} from "@/lib/enter-first/pricing";
import { hasSyllabusContent } from "@/lib/enter-first/media";
import type { CourseBlockReason, PublicCourse } from "@/lib/enter-first/types";
import { cn } from "@/lib/utils";
import { EnrollmentUnavailable } from "./enrollment-unavailable";
import { SyllabusDialog } from "./syllabus-dialog";
import { useTrackSelection } from "./track-selection";

const TRACK_ICONS = {
  code: WorkshopCodeIcon,
  satellite: WorkshopSatelliteIcon,
  rover: WorkshopRoverIcon,
  ai: WorkshopAiIcon,
  arm: WorkshopArmIcon,
  vision: WorkshopVisionIcon,
  blockchain: WorkshopBlockchainIcon,
  drone: WorkshopDroneIcon,
} satisfies Record<string, ComponentType<{ className?: string }>>;

type TrackIcon = keyof typeof TRACK_ICONS;

/** Icon only. Names, prices, and copy always come from the course list. */
function iconFor(slug: string): TrackIcon {
  return slug in TRACK_ICONS ? (slug as TrackIcon) : "code";
}

function CurriculumArrow({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectionBox({
  checked,
  className,
}: {
  checked: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border",
        checked
          ? "border-aurora-lime bg-aurora-lime/15"
          : "border-white/35 bg-transparent",
        className,
      )}
      aria-hidden
    >
      {checked ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.2 4.1 7.2 8 2.8"
            stroke="#c6ff00"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </span>
  );
}

function buildPathwayTitle(courses: PublicCourse[]) {
  return courses.map((course) => course.name).join(" + ");
}

function buildPathwayBody(courses: PublicCourse[]) {
  if (courses.length < 2) return ENTER_FIRST_TRACKS.stack.pathwayEmpty;
  return `${courses.length} tracks selected. Combine these into one learning pathway where the timetable allows.`;
}

function courseBody(course: PublicCourse) {
  return course.description.trim();
}

function TrackSelectControl({
  course,
  blocked,
  inStack,
  onToggle,
  overlay,
}: {
  course: PublicCourse;
  blocked: CourseBlockReason | null;
  inStack: boolean;
  onToggle: () => void;
  overlay?: boolean;
}) {
  if (blocked) {
    return (
      <span
        className={cn(
          "rounded-md px-2 py-1 font-sans text-[11px] font-semibold tracking-wide text-white",
          overlay ? "bg-[#151514]/85" : "bg-white/10",
        )}
      >
        {courseBlockLabel(blocked)}
      </span>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={inStack}
      aria-label={`${inStack ? "Remove" : "Add"} ${course.name} to learning stack`}
      onClick={onToggle}
      className={cn(
        "rounded-sm p-0.5 transition-opacity hover:opacity-80",
        overlay && "rounded-md bg-[#151514]/85 p-1.5",
      )}
    >
      <SelectionBox checked={inStack} />
    </button>
  );
}

function SyllabusControl({
  course,
  onOpenText,
}: {
  course: PublicCourse;
  onOpenText: () => void;
}) {
  if (!hasSyllabusContent(course.syllabus)) return null;
  const { syllabusLabel } = ENTER_FIRST_TRACKS;
  const className =
    "inline-flex items-center gap-2 font-sans text-sm font-medium text-white/70 transition-colors hover:text-aurora-lime group-hover:text-aurora-lime sm:text-[15px]";

  if (course.syllabus.text) {
    return (
      <button type="button" onClick={onOpenText} className={className}>
        {syllabusLabel}
      </button>
    );
  }

  return (
    <a
      href={course.syllabus.url ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {syllabusLabel}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function CourseCard({
  course,
  blocked,
  inStack,
  onToggle,
  onViewSelection,
}: {
  course: PublicCourse;
  blocked: CourseBlockReason | null;
  inStack: boolean;
  onToggle: () => void;
  onViewSelection: () => void;
}) {
  const { curriculumLabel } = ENTER_FIRST_TRACKS;
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null);
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const imageUrl = course.imageUrl;
  const showImage = Boolean(imageUrl) && failedImageUrl !== imageUrl;
  const showSyllabus = hasSyllabusContent(course.syllabus);
  const Icon = TRACK_ICONS[iconFor(course.slug)];
  const meta = [seatLabel(course), courseDateLabel(course), cutoffLabel(course)]
    .filter(Boolean)
    .join(" · ");

  return (
    <StaggerItem
      as="article"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#151514] p-5 transition-colors sm:p-6 lg:p-7",
        inStack ? "border-aurora-lime" : "hover:border-aurora-lime",
        blocked && "opacity-80",
      )}
    >
      {showImage ? (
        <div className="relative -mx-5 -mt-5 mb-5 aspect-[16/9] overflow-hidden sm:-mx-6 sm:-mt-6 lg:-mx-7 lg:-mt-7">
          {/* Course pictures use whatever public host the API returns. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl ?? undefined}
            alt=""
            className="h-full w-full object-cover"
            onError={() => {
              if (imageUrl) setFailedImageUrl(imageUrl);
            }}
          />
          <div className="absolute top-3 right-3">
            <TrackSelectControl
              course={course}
              blocked={blocked}
              inStack={inStack}
              onToggle={onToggle}
              overlay
            />
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "flex size-11 items-center justify-center rounded-md border border-white/25 text-white transition-colors",
              "group-hover:border-aurora-lime group-hover:text-aurora-lime",
              inStack && "border-aurora-lime text-aurora-lime",
              "sm:size-12",
            )}
          >
            <Icon className="size-6 sm:size-7" />
          </div>
          <TrackSelectControl
            course={course}
            blocked={blocked}
            inStack={inStack}
            onToggle={onToggle}
          />
        </div>
      )}

      <h3
        className={cn(
          "font-sans text-lg font-semibold text-white transition-colors group-hover:text-aurora-lime sm:text-xl lg:text-[22px]",
          showImage ? "mt-0" : "mt-5",
        )}
      >
        {course.name}
      </h3>
      <p className="mt-3 flex-1 whitespace-pre-line font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
        {courseBody(course)}
      </p>
      {meta ? (
        <p className="mt-3 font-sans text-xs leading-relaxed text-white/55">
          {meta}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <p className="font-sans text-sm font-semibold text-aurora-lime sm:text-base">
          {formatCoursePrice(course)}
        </p>
        <div
          className={cn(
            "flex max-w-full flex-wrap items-center justify-end gap-x-4 gap-y-1",
            showSyllabus && "w-full",
          )}
        >
          <button
            type="button"
            onClick={onViewSelection}
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/70 transition-colors group-hover:text-aurora-lime sm:text-[15px]"
          >
            {curriculumLabel}
            <CurriculumArrow />
          </button>
          <SyllabusControl
            course={course}
            onOpenText={() => setSyllabusOpen(true)}
          />
        </div>
      </div>
      {syllabusOpen && course.syllabus.text
        ? createPortal(
            <SyllabusDialog
              course={course}
              onClose={() => setSyllabusOpen(false)}
            />,
            document.body,
          )
        : null}
    </StaggerItem>
  );
}

const EnterFirstTracks = ({ courses }: { courses: PublicCourse[] }) => {
  const {
    title,
    description,
    outlineLabel,
    priceLabel,
    totalLabel,
    emptySelection,
    enrollLabel,
    stack,
    tagline,
  } = ENTER_FIRST_TRACKS;

  const { selectedIds, toggleTrack, clearSelection, enrollHref } =
    useTrackSelection();

  const openCourses = useMemo(
    () => courses.filter((course) => !courseBlock(course)),
    [courses],
  );
  const selectedCourses = useMemo(
    () =>
      openCourses.filter((course) => selectedIds.includes(course.slug)),
    [openCourses, selectedIds],
  );
  const totalLabelText = formatCourseTotal(selectedCourses);
  const mixedCurrency =
    selectedCourses.length > 1 &&
    new Set(selectedCourses.map((course) => course.currency.toUpperCase()))
      .size > 1;
  const dateLine = buildCohortDateLine(courses);
  const weeks = sharedCourseWeeks(courses);
  const stats = [
    { value: String(courses.length), label: "Tracks listed" },
    weeks
      ? { value: String(weeks), label: "Weeks Per Track" }
      : { value: "—", label: "Weeks shown on each track" },
    {
      value: dateLine && !dateLine.startsWith("Dates vary") ? "1" : "—",
      label: dateLine ?? "Dates on each track",
    },
  ];

  const focusSelection = () => {
    document.getElementById("track-detail")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!courses.length) {
    return (
      <section id="tracks" className="bg-white">
        <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
          <SiteContent>
            <Reveal as="header" className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-[#151514] sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
                {title}
              </h2>
            </Reveal>
            <div className="mt-10">
              <EnrollmentUnavailable />
            </div>
          </SiteContent>
        </SiteShell>
      </section>
    );
  }

  return (
    <section id="tracks" className="bg-white">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <Reveal as="header" className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-[#151514] sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#757575] sm:mt-5 sm:text-base lg:text-lg">
              {description}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {courses.map((course) => {
              const blocked = courseBlock(course);
              const inStack = !blocked && selectedIds.includes(course.slug);
              return (
                <CourseCard
                  key={course.slug}
                  course={course}
                  blocked={blocked}
                  inStack={inStack}
                  onToggle={() => toggleTrack(course.slug)}
                  onViewSelection={() => {
                    if (!blocked && !inStack) toggleTrack(course.slug);
                    focusSelection();
                  }}
                />
              );
            })}
          </Stagger>

          <Reveal
            id="track-detail"
            className="mt-10 scroll-mt-28 rounded-2xl border border-aurora-lime bg-[#111111] p-5 sm:mt-12 sm:p-7 lg:mt-14 lg:p-8"
          >
            <div className="min-w-0">
              <h3 className="font-sans text-xl font-semibold text-white sm:text-2xl lg:text-[28px]">
                {selectedCourses.length
                  ? buildPathwayTitle(selectedCourses)
                  : "Your selected tracks"}
              </h3>
              <p className="mt-3 max-w-4xl whitespace-pre-line font-sans text-sm leading-relaxed text-[#757575] sm:text-base lg:text-lg">
                {!selectedCourses.length
                  ? emptySelection
                  : selectedCourses.length === 1
                    ? courseBody(selectedCourses[0]) || selectedCourses[0].name
                    : buildPathwayBody(selectedCourses)}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="font-sans text-sm font-semibold text-aurora-lime sm:text-base">
                  {outlineLabel}
                </p>
                {selectedCourses.length ? (
                  <ul className="mt-4 space-y-3">
                    {selectedCourses.map((course) => {
                      const Icon = TRACK_ICONS[iconFor(course.slug)];
                      return (
                        <li
                          key={course.slug}
                          className="flex items-center gap-3 rounded-xl border border-white/15 px-4 py-3.5"
                        >
                          <Icon className="size-5 shrink-0 text-aurora-lime" />
                          <span className="min-w-0 flex-1 font-sans text-sm text-white/85 sm:text-[15px]">
                            {course.name}
                          </span>
                          <span className="shrink-0 font-sans text-sm font-semibold text-aurora-lime">
                            {formatCoursePrice(course)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="mt-4 rounded-xl border border-dashed border-white/20 px-4 py-6 font-sans text-sm text-[#757575]">
                    {emptySelection}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {selectedCourses.length ? (
                  <>
                    {selectedCourses.map((course) => (
                      <div
                        key={`price-${course.slug}`}
                        className="rounded-xl border border-white/15 px-4 py-3.5"
                      >
                        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                          {priceLabel}
                        </p>
                        <div className="my-2 h-px bg-white/10" aria-hidden />
                        <p className="font-sans text-sm text-white sm:text-[15px]">
                          {course.name}: {formatCoursePrice(course)}
                        </p>
                      </div>
                    ))}
                    <div className="rounded-xl border border-aurora-lime/50 bg-aurora-lime/5 px-4 py-3.5">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-aurora-lime">
                        {totalLabel}
                      </p>
                      <div className="my-2 h-px bg-aurora-lime/20" aria-hidden />
                      <p className="font-sans text-lg font-semibold text-aurora-lime sm:text-xl">
                        {mixedCurrency
                          ? "Different currencies"
                          : (totalLabelText ?? "—")}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="rounded-xl border border-white/15 px-4 py-3.5">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                      {totalLabel}
                    </p>
                    <div className="my-2 h-px bg-white/10" aria-hidden />
                    <p className="font-sans text-sm text-white sm:text-[15px]">
                      Select a track to see the total charged at checkout.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={enrollHref()}
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-aurora-lime px-6 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:text-base",
                  (!selectedCourses.length || mixedCurrency) &&
                    "pointer-events-none opacity-50",
                )}
                aria-disabled={!selectedCourses.length || mixedCurrency}
              >
                {enrollLabel}
                {totalLabelText && !mixedCurrency
                  ? ` · ${totalLabelText}`
                  : ""}
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-10 rounded-2xl border border-aurora-lime bg-[#111111] p-5 sm:mt-12 sm:p-7 lg:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white sm:text-xl lg:text-2xl">
                  {stack.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-[#757575] sm:text-base">
                  {stack.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => clearSelection()}
                className="shrink-0 self-start font-sans text-sm text-[#757575] transition-colors hover:text-aurora-lime"
              >
                {stack.clearLabel}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {courses.map((course) => {
                const Icon = TRACK_ICONS[iconFor(course.slug)];
                const blocked = courseBlock(course);
                const selected =
                  !blocked && selectedIds.includes(course.slug);
                return (
                  <button
                    key={course.slug}
                    type="button"
                    disabled={Boolean(blocked)}
                    onClick={() => {
                      if (!blocked) toggleTrack(course.slug);
                    }}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-sans text-sm transition-colors",
                      selected
                        ? "border-aurora-lime text-aurora-lime"
                        : "border-white/20 text-[#757575] hover:border-white/40 hover:text-white",
                      blocked && "cursor-not-allowed opacity-50",
                    )}
                  >
                    <Icon className="size-4" />
                    {course.name}
                    {blocked ? ` · ${courseBlockLabel(blocked)}` : ""}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-white/15 bg-black/40 px-5 py-5 sm:px-6">
              <p className="font-sans text-sm font-semibold text-aurora-lime">
                {stack.pathwayLabel}
              </p>
              {selectedCourses.length >= 2 ? (
                <>
                  <p className="mt-2 font-sans text-lg font-semibold text-aurora-lime sm:text-xl">
                    {buildPathwayTitle(selectedCourses)}
                  </p>
                  <p className="mt-2 max-w-3xl font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                    {buildPathwayBody(selectedCourses)}
                  </p>
                  {totalLabelText && !mixedCurrency ? (
                    <p className="mt-3 font-sans text-sm font-semibold text-white">
                      Total: {totalLabelText}
                    </p>
                  ) : null}
                </>
              ) : (
                <p className="mt-2 font-sans text-sm text-[#757575] sm:text-base">
                  {stack.pathwayEmpty}
                </p>
              )}
            </div>
          </Reveal>

          <Stagger
            as="ul"
            className="mt-10 grid grid-cols-1 divide-y divide-black/10 border-y border-black/10 sm:mt-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {stats.map((stat) => (
              <StaggerItem
                as="li"
                key={stat.label}
                className="flex flex-col items-center px-4 py-8 text-center sm:py-10"
              >
                <p className="font-display text-4xl font-semibold tabular-nums text-[#151514] sm:text-5xl lg:text-[56px]">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 font-sans text-sm text-[#757575] sm:text-base">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal
            as="p"
            className="mx-auto mt-10 max-w-3xl text-center font-sans text-sm leading-relaxed text-[#757575] sm:mt-12 sm:text-base lg:text-lg"
          >
            {tagline}
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default EnterFirstTracks;
