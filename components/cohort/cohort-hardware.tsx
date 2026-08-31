import type { ComponentType } from "react";
import {
  WorkshopArmIcon,
  WorkshopRoverIcon,
  WorkshopSatelliteIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { COHORT_HARDWARE } from "@/lib/constants";

type KitIcon = (typeof COHORT_HARDWARE.kits)[number]["icon"];

const KIT_ICONS: Record<KitIcon, ComponentType<{ className?: string }>> = {
  arm: WorkshopArmIcon,
  satellite: WorkshopSatelliteIcon,
  rover: WorkshopRoverIcon,
};

function TagIcon({ className }: { className?: string }) {
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
        d="M2 3.5h5.2L12 8.3 8.3 12 3.5 7.2V3.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function CheckBadge({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-6 items-center justify-center rounded-md bg-aurora-lime text-[#151514] ${className ?? ""}`}
      aria-hidden
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2 4.8 8.5 9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
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

const CohortHardware = () => {
  const { eyebrow, title, description, pricingLabel, kits, banner } =
    COHORT_HARDWARE;

  return (
    <section className="bg-white">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <div className="flex items-center gap-3">
            <span className="h-1 w-8 shrink-0 bg-[#151514]" aria-hidden />
            <p className="font-display text-xs uppercase tracking-[0.16em] text-[#151514] sm:text-sm">
              {eyebrow}
            </p>
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-[1.75rem] font-semibold leading-tight text-[#151514] sm:mt-5 sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-[#757575] sm:mt-5 sm:text-base lg:text-lg">
            {description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {kits.map((kit) => {
              const Icon = KIT_ICONS[kit.icon];
              return (
                <article
                  key={kit.id}
                  className="flex flex-col rounded-2xl bg-[#151514] p-5 sm:p-6 lg:p-7"
                >
                  <span className="inline-flex size-10 items-center justify-center text-white">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-white sm:text-xl">
                    {kit.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                    {kit.body}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 font-sans text-sm text-[#757575]">
                    <TagIcon />
                    {pricingLabel}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#151514] px-5 py-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5 lg:px-7">
            <div className="flex items-start gap-3 sm:items-center">
              <CheckBadge className="shrink-0" />
              <p className="font-sans text-sm leading-relaxed text-white sm:text-base">
                {banner.body}
              </p>
            </div>
            <a
              href={banner.ctaHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-aurora-lime px-6 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:text-base"
            >
              {banner.ctaLabel}
              <ArrowIcon />
            </a>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default CohortHardware;
