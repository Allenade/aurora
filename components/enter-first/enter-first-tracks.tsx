"use client";

import type { ComponentType } from "react";
import { useMemo } from "react";
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
import { formatNgn, trackAmountNgn } from "@/lib/bff/config";
import { ENTER_FIRST_TRACKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTrackSelection } from "./track-selection";

type Track = (typeof ENTER_FIRST_TRACKS.tracks)[number];
type TrackIcon = Track["icon"];

const TRACK_ICONS: Record<TrackIcon, ComponentType<{ className?: string }>> = {
  code: WorkshopCodeIcon,
  satellite: WorkshopSatelliteIcon,
  rover: WorkshopRoverIcon,
  ai: WorkshopAiIcon,
  arm: WorkshopArmIcon,
  vision: WorkshopVisionIcon,
  blockchain: WorkshopBlockchainIcon,
  drone: WorkshopDroneIcon,
};

const PATHWAY_HINTS: Record<string, string> = {
  "iot+mobile":
    "2 tracks, zero schedule clashes. Build toward cloud-connected sensor robot + autonomous mapped & navigated vehicle.",
  "mobile+vision+ai":
    "3 tracks building the foundations of an autonomous-systems engineer — navigation, sight, and intelligent decisions.",
  "mobile+vision":
    "2 tracks pairing navigation with perception for robots that move and understand their surroundings.",
  "vision+ai":
    "2 tracks combining visual understanding with learning-based decision systems.",
  "iot+ai":
    "2 tracks connecting edge intelligence with learning models that act on live sensor streams.",
  "arm+vision":
    "2 tracks for manipulators that see — motion planning paired with visual perception.",
};

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

function pathwayKey(ids: string[]) {
  return [...ids].sort().join("+");
}

function buildPathwayTitle(tracks: Track[]) {
  if (tracks.length === 0) return "";
  if (tracks.length === 1) return tracks[0].title;
  const short = tracks.map((track) => {
    if (track.id === "iot") return "IoT";
    if (track.id === "mobile") return "Mobile";
    if (track.id === "ai") return "AI";
    if (track.id === "arm") return "Arm";
    if (track.id === "vision") return "Vision";
    if (track.id === "programming") return "Programming";
    if (track.id === "blockchain") return "Blockchain";
    if (track.id === "aerial") return "Aerial";
    return track.title;
  });
  return short.join(" + ");
}

function buildPathwayBody(tracks: Track[]) {
  const key = pathwayKey(tracks.map((track) => track.id));
  if (PATHWAY_HINTS[key]) return PATHWAY_HINTS[key];
  if (tracks.length < 2) return ENTER_FIRST_TRACKS.stack.pathwayEmpty;
  return `${tracks.length} tracks selected. Combine these specialties into one learning pathway where the timetable allows.`;
}

const EnterFirstTracks = () => {
  const {
    title,
    description,
    curriculumLabel,
    outlineLabel,
    priceLabel,
    totalLabel,
    emptySelection,
    enrollLabel,
    downloadLabel,
    priceNote,
    stack,
    stats,
    tagline,
    tracks,
  } = ENTER_FIRST_TRACKS;

  const { selectedIds, toggleTrack, clearSelection, enrollHref } =
    useTrackSelection();
  const stackIds = selectedIds;

  const stackedTracks = useMemo(
    () => tracks.filter((track) => stackIds.includes(track.id)),
    [stackIds, tracks],
  );

  const totalAmount = useMemo(
    () => stackedTracks.reduce((sum, track) => sum + trackAmountNgn(track.id), 0),
    [stackedTracks],
  );

  const enrollLink = enrollHref();

  const focusSelection = () => {
    document.getElementById("track-detail")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
            <p className="mt-3 font-sans text-sm font-semibold text-[#151514] sm:text-base">
              {priceNote}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {tracks.map((track) => {
              const Icon = TRACK_ICONS[track.icon];
              const inStack = stackIds.includes(track.id);
              const amount = trackAmountNgn(track.id);

              return (
                <StaggerItem
                  as="article"
                  key={track.id}
                  className={cn(
                    "group relative flex flex-col rounded-lg border border-white/10 bg-[#151514] p-5 transition-colors sm:p-6 lg:p-7",
                    inStack ? "border-aurora-lime" : "hover:border-aurora-lime",
                  )}
                >
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
                    <button
                      type="button"
                      aria-pressed={inStack}
                      aria-label={`${inStack ? "Remove" : "Add"} ${track.title} to learning stack`}
                      onClick={() => toggleTrack(track.id)}
                      className="rounded-sm p-0.5 transition-opacity hover:opacity-80"
                    >
                      <SelectionBox checked={inStack} />
                    </button>
                  </div>

                  <h3 className="mt-5 font-sans text-lg font-semibold text-white transition-colors group-hover:text-aurora-lime sm:text-xl lg:text-[22px]">
                    {track.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                    {track.body}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="font-sans text-sm font-semibold text-aurora-lime sm:text-base">
                      {formatNgn(amount)}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        if (!inStack) toggleTrack(track.id);
                        focusSelection();
                      }}
                      className="inline-flex items-center gap-2 self-start font-sans text-sm font-medium text-white/70 transition-colors group-hover:text-aurora-lime sm:text-[15px]"
                    >
                      {curriculumLabel}
                      <CurriculumArrow />
                    </button>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal
            id="track-detail"
            className="mt-10 scroll-mt-28 rounded-2xl border border-aurora-lime bg-[#111111] p-5 sm:mt-12 sm:p-7 lg:mt-14 lg:p-8"
          >
            <div className="min-w-0">
              <h3 className="font-sans text-xl font-semibold text-white sm:text-2xl lg:text-[28px]">
                {stackedTracks.length
                  ? buildPathwayTitle(stackedTracks)
                  : "Your selected tracks"}
              </h3>
              <p className="mt-3 max-w-4xl font-sans text-sm leading-relaxed text-[#757575] sm:text-base lg:text-lg">
                {!stackedTracks.length
                  ? emptySelection
                  : stackedTracks.length === 1
                    ? stackedTracks[0].detail
                    : buildPathwayBody(stackedTracks)}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="font-sans text-sm font-semibold text-aurora-lime sm:text-base">
                  {outlineLabel}
                </p>
                {stackedTracks.length ? (
                  <ul className="mt-4 space-y-3">
                    {stackedTracks.map((track) => {
                      const Icon = TRACK_ICONS[track.icon];
                      return (
                        <li
                          key={track.id}
                          className="flex items-center gap-3 rounded-xl border border-white/15 px-4 py-3.5"
                        >
                          <Icon className="size-5 shrink-0 text-aurora-lime" />
                          <span className="min-w-0 flex-1 font-sans text-sm text-white/85 sm:text-[15px]">
                            {track.title}
                          </span>
                          <span className="shrink-0 font-sans text-sm font-semibold text-aurora-lime">
                            {formatNgn(trackAmountNgn(track.id))}
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
                {stackedTracks.length ? (
                  <>
                    {stackedTracks.map((track) => (
                      <div
                        key={`price-${track.id}`}
                        className="rounded-xl border border-white/15 px-4 py-3.5"
                      >
                        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                          {priceLabel}
                        </p>
                        <div className="my-2 h-px bg-white/10" aria-hidden />
                        <p className="font-sans text-sm text-white sm:text-[15px]">
                          {track.title}: {formatNgn(trackAmountNgn(track.id))}
                        </p>
                      </div>
                    ))}
                    <div className="rounded-xl border border-aurora-lime/50 bg-aurora-lime/5 px-4 py-3.5">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-aurora-lime">
                        {totalLabel}
                      </p>
                      <div className="my-2 h-px bg-aurora-lime/20" aria-hidden />
                      <p className="font-sans text-lg font-semibold text-aurora-lime sm:text-xl">
                        {formatNgn(totalAmount)}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-xl border border-white/15 px-4 py-3.5">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                        {priceLabel}
                      </p>
                      <div className="my-2 h-px bg-white/10" aria-hidden />
                      <p className="font-sans text-sm text-white sm:text-[15px]">
                        {priceNote}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/15 px-4 py-3.5">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                        {totalLabel}
                      </p>
                      <div className="my-2 h-px bg-white/10" aria-hidden />
                      <p className="font-sans text-sm text-white sm:text-[15px]">
                        {formatNgn(0)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={enrollLink}
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-aurora-lime px-6 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:text-base",
                  !stackedTracks.length && "pointer-events-none opacity-50",
                )}
                aria-disabled={!stackedTracks.length}
              >
                {enrollLabel}
                {stackedTracks.length
                  ? ` · ${formatNgn(totalAmount)}`
                  : ""}
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:border-aurora-lime hover:text-aurora-lime sm:text-base"
              >
                {downloadLabel}
              </button>
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
              {tracks.map((track) => {
                const Icon = TRACK_ICONS[track.icon];
                const selected = stackIds.includes(track.id);
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => toggleTrack(track.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-sans text-sm transition-colors",
                      selected
                        ? "border-aurora-lime text-aurora-lime"
                        : "border-white/20 text-[#757575] hover:border-white/40 hover:text-white",
                    )}
                  >
                    <Icon className="size-4" />
                    {track.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-white/15 bg-black/40 px-5 py-5 sm:px-6">
              <p className="font-sans text-sm font-semibold text-aurora-lime">
                {stack.pathwayLabel}
              </p>
              {stackedTracks.length >= 2 ? (
                <>
                  <p className="mt-2 font-sans text-lg font-semibold text-aurora-lime sm:text-xl">
                    {buildPathwayTitle(stackedTracks)}
                  </p>
                  <p className="mt-2 max-w-3xl font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                    {buildPathwayBody(stackedTracks)}
                  </p>
                  <p className="mt-3 font-sans text-sm font-semibold text-white">
                    Total: {formatNgn(totalAmount)}
                  </p>
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
