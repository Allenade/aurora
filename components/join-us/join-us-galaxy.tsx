import Link from "next/link";
import type { ComponentType } from "react";
import {
  AssociateBadgeIcon,
  BuildingCommunityIcon,
  ChatBubbleIcon,
  IdeaChipIcon,
  LaunchIcon,
  ToolsIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { JOIN_US_GALAXY } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GalaxyIcon = (typeof JOIN_US_GALAXY.cards)[number]["icon"];

const GALAXY_ICONS: Record<
  GalaxyIcon,
  ComponentType<{ className?: string }>
> = {
  chat: ChatBubbleIcon,
  associate: AssociateBadgeIcon,
  tools: ToolsIcon,
  launch: LaunchIcon,
  idea: IdeaChipIcon,
  building: BuildingCommunityIcon,
};

const JoinUsGalaxy = () => {
  const { eyebrow, title, description, cards } = JOIN_US_GALAXY;

  return (
    <section className="bg-white">
      <SiteShell className="py-14 sm:py-16 lg:py-20 xl:py-24 min-[2560px]:py-28">
        <SiteContent>
          <header className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <p className="galaxy-rise font-display text-xs uppercase tracking-[0.12em] text-[#151514] sm:text-sm lg:text-base">
              {eyebrow}
            </p>
            <h2
              className="galaxy-rise mt-4 font-display text-3xl font-semibold leading-tight text-[#151514] sm:text-4xl lg:text-[44px] xl:text-[52px] min-[2560px]:text-[64px]"
              style={{ animationDelay: "100ms" }}
            >
              {title}
            </h2>
            <p
              className="galaxy-rise mt-4 font-sans text-base leading-relaxed text-[#6b6b6b] sm:text-lg lg:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              {description}
            </p>
          </header>

          <div className="group/grid mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6 xl:gap-7">
            {cards.map((card, index) => {
              const Icon = GALAXY_ICONS[card.icon];
              const isFeatured = Boolean(card.featured);

              return (
                <article
                  key={card.id}
                  className={cn(
                    "galaxy-rise group/card flex min-h-[17.5rem] flex-col rounded-2xl border bg-[#151514] p-5 transition-[border-color,transform] duration-300 sm:min-h-[18.5rem] sm:p-6 lg:min-h-[20rem] lg:p-7",
                    "hover:-translate-y-0.5 hover:border-aurora-lime",
                    isFeatured
                      ? "border-aurora-lime group-hover/grid:border-transparent group-hover/grid:hover:border-aurora-lime"
                      : "border-transparent",
                  )}
                  style={{ animationDelay: `${220 + index * 70}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "inline-flex size-10 items-center justify-center rounded-md border transition-colors duration-300 sm:size-11",
                        isFeatured
                          ? "border-aurora-lime text-aurora-lime group-hover/grid:border-[#5c5c5c] group-hover/grid:text-[#cfcfcf] group-hover/card:border-aurora-lime group-hover/card:text-aurora-lime"
                          : "border-[#5c5c5c] text-[#cfcfcf] group-hover/card:border-aurora-lime group-hover/card:text-aurora-lime",
                      )}
                    >
                      <Icon className="size-5 sm:size-6" />
                    </span>
                    <span className="font-display text-sm tabular-nums tracking-wide text-aurora-lime sm:text-base">
                      {card.index}
                    </span>
                  </div>

                  <h3 className="mt-5 font-sans text-lg font-semibold text-[#fcfcfe] sm:text-xl lg:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#b0b0b0] sm:text-base">
                    {card.body}
                  </p>

                  <Link
                    href={card.href}
                    className={cn(
                      "mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-medium transition-colors duration-300 sm:text-base",
                      isFeatured
                        ? "text-aurora-lime group-hover/grid:text-[#fcfcfe] group-hover/card:text-aurora-lime"
                        : "text-[#fcfcfe] group-hover/card:text-aurora-lime",
                    )}
                  >
                    {card.ctaLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default JoinUsGalaxy;
