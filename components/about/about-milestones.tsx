"use client";

import { useRef } from "react";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { ABOUT_MILESTONES } from "@/lib/constants";
import { cn } from "@/lib/utils";

function MilestoneArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Previous milestones" : "Next milestones"}
      className={cn(
        "flex size-9 items-center justify-center rounded-full border transition-colors",
        "sm:size-10",
        isPrev
          ? "border-[#d0d0d0] text-[#151514] hover:border-[#151514]"
          : "border-aurora-lime bg-aurora-lime text-[#151514] hover:opacity-90",
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={cn(!isPrev && "rotate-180")}
      >
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const AboutMilestones = () => {
  const { title, items } = ABOUT_MILESTONES;
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(node.clientWidth * 0.75, 340);
    node.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-10 sm:py-12 lg:py-14 xl:py-16">
        <SiteContent>
          <div className="flex items-center justify-between gap-4">
            <h2
              className={cn(
                "font-display font-bold uppercase tracking-tight text-[#151514]",
                "text-xl sm:text-2xl lg:text-[1.75rem]",
              )}
            >
              {title}
            </h2>
            <div className="flex items-center gap-2 sm:gap-3">
              <MilestoneArrow
                direction="prev"
                onClick={() => scrollByCard("prev")}
              />
              <MilestoneArrow
                direction="next"
                onClick={() => scrollByCard("next")}
              />
            </div>
          </div>

          <div
            ref={scrollerRef}
            className={cn(
              "mt-8 flex gap-4 overflow-x-auto pb-2 sm:mt-10 sm:gap-5",
              "snap-x snap-mandatory scroll-smooth",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            {items.map((item) => (
              <article
                key={item.number}
                className={cn(
                  "snap-start shrink-0",
                  "w-[min(100%,17.5rem)] sm:w-[18.5rem] lg:w-[19.5rem]",
                  "rounded-2xl bg-black px-5 py-6 sm:rounded-[1.25rem] sm:px-6 sm:py-7",
                )}
              >
                {/* Figma: short lime rule above the number */}
                <span
                  className="mb-3 block h-px w-10 bg-aurora-lime sm:mb-3.5"
                  aria-hidden
                />
                <p className="font-display text-2xl font-bold tabular-nums text-aurora-lime sm:text-[1.75rem]">
                  {item.number}
                </p>
                <p className="mt-3 font-sans text-xs text-white/55 sm:text-sm">
                  {item.year}
                </p>
                <h3 className="mt-2 font-sans text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/75 sm:mt-3">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default AboutMilestones;
