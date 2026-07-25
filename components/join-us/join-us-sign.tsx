import type { ComponentType } from "react";
import {
  CheckIcon,
  WorkshopAiIcon,
  WorkshopArmIcon,
  WorkshopCodeIcon,
  WorkshopRoverIcon,
  WorkshopSatelliteIcon,
  WorkshopVisionIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { JOIN_US_SIGN } from "@/lib/constants";

type TrackIcon = (typeof JOIN_US_SIGN.tracks)[number]["icon"];

const TRACK_ICONS: Record<TrackIcon, ComponentType<{ className?: string }>> = {
  code: WorkshopCodeIcon,
  satellite: WorkshopSatelliteIcon,
  rover: WorkshopRoverIcon,
  ai: WorkshopAiIcon,
  arm: WorkshopArmIcon,
  vision: WorkshopVisionIcon,
};

const JoinUsSign = () => {
  const { eyebrow, title, description, tracks, promisesTitle, promises } =
    JOIN_US_SIGN;

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <header className="max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.14em] text-[#151514] sm:text-sm lg:text-base">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] text-[#151514] sm:text-4xl lg:text-[44px] xl:text-[52px]">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#757575] sm:text-lg lg:text-xl">
              {description}
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {tracks.map((track) => {
              const Icon = TRACK_ICONS[track.icon];

              return (
                <article
                  key={track.id}
                  className="rounded-2xl bg-[#151514] p-5 sm:p-6 lg:p-7"
                >
                  <span className="inline-flex size-10 items-center justify-center text-[#fcfcfe] sm:size-11">
                    <Icon className="size-7 sm:size-8" />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-[#fcfcfe] sm:text-xl lg:text-[22px]">
                    {track.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                    {track.body}
                  </p>
                </article>
              );
            })}
          </div>

          <h2 className="mt-12 font-display text-[1.75rem] font-semibold leading-[1.15] text-[#151514] sm:mt-14 sm:text-4xl lg:mt-16 lg:text-[44px] xl:text-[52px]">
            {promisesTitle}
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {promises.map((promise) => (
              <article
                key={promise}
                className="flex items-center gap-3 rounded bg-[#151514] px-5 py-5 sm:gap-3.5 sm:px-6 sm:py-6"
              >
                <CheckIcon className="size-5 shrink-0 sm:size-[22px]" />
                <p className="font-sans text-sm leading-snug text-[#fcfcfe] sm:text-base lg:text-lg">
                  {promise}
                </p>
              </article>
            ))}
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default JoinUsSign;
