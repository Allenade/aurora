"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";
import {
  BringCompaniesIcon,
  BringConnectorsIcon,
  BringEventsIcon,
  BringInstitutionIcon,
  GearServiceIcon,
  HandshakeIcon,
  ProjectBoardIcon,
  TourPinIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { JOIN_US_BRING } from "@/lib/constants";
import { cn } from "@/lib/utils";

type OfferIcon = (typeof JOIN_US_BRING.offerings)[number]["icon"];
type DealIcon = (typeof JOIN_US_BRING.deals)[number]["icon"];
type OptionIcon = (typeof JOIN_US_BRING.conversation.options)[number]["icon"];

const OFFER_ICONS: Record<OfferIcon, ComponentType<{ className?: string }>> = {
  campus: BringInstitutionIcon,
  swep: GearServiceIcon,
  tour: TourPinIcon,
  lab: BringInstitutionIcon,
};

const DEAL_ICONS: Record<DealIcon, ComponentType<{ className?: string }>> = {
  institution: BringInstitutionIcon,
  company: BringCompaniesIcon,
  event: BringEventsIcon,
  connector: BringConnectorsIcon,
};

const OPTION_ICONS: Record<OptionIcon, ComponentType<{ className?: string }>> = {
  campus: BringInstitutionIcon,
  company: BringCompaniesIcon,
  event: BringEventsIcon,
  client: ProjectBoardIcon,
  partnership: HandshakeIcon,
  lead: BringCompaniesIcon,
};

const JoinUsBring = () => {
  const { eyebrow, title, description, offerings, dealsTitle, deals, conversation } =
    JOIN_US_BRING;
  const [selectedOption, setSelectedOption] = useState(
    conversation.options[0]?.id ?? "schools",
  );

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <header className="max-w-4xl">
            <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.14em] text-[#151514] sm:gap-3.5 sm:text-sm lg:text-base">
              <svg
                width="36"
                height="5"
                viewBox="0 0 36 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 sm:h-1.5 sm:w-10"
                aria-hidden
              >
                <rect width="36" height="5" rx="1" fill="#151514" />
              </svg>
              <span>{eyebrow.replace(/^—\s*/, "")}</span>
            </p>
            <h2 className="mt-3 whitespace-nowrap font-display text-[clamp(1.15rem,5.2vw,3.25rem)] font-semibold leading-[1.15] text-[#151514]">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#757575] sm:text-lg lg:text-xl">
              {description}
            </p>
          </header>

          <div className="group/offer mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:gap-6">
            {offerings.map((item) => {
              const Icon = OFFER_ICONS[item.icon];
              const isFeatured = Boolean(item.featured);

              return (
                <article
                  key={item.id}
                  className="group/card rounded-2xl bg-[#151514] p-5 transition-colors duration-300 sm:p-6 lg:p-7"
                >
                  <Icon
                    className={cn(
                      "size-7 sm:size-8",
                      isFeatured &&
                        "group-hover/offer:opacity-70 group-hover/card:opacity-100",
                    )}
                  />
                  <h3
                    className={cn(
                      "mt-5 font-sans text-lg font-semibold transition-colors duration-300 sm:text-xl lg:text-[22px]",
                      isFeatured
                        ? "text-aurora-lime group-hover/offer:text-[#fcfcfe] group-hover/card:text-aurora-lime"
                        : "text-[#fcfcfe] group-hover/card:text-aurora-lime",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>

          <h2 className="mt-12 font-display text-[1.75rem] font-semibold leading-[1.15] text-[#151514] sm:mt-14 sm:text-3xl lg:mt-16 lg:text-[40px]">
            {dealsTitle}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
            {deals.map((deal) => {
              const Icon = DEAL_ICONS[deal.icon];
              return (
                <article
                  key={deal.id}
                  className="rounded-2xl bg-[#151514] p-5 sm:p-5 lg:p-6"
                >
                  <Icon className="size-6 sm:size-7" />
                  <h3 className="mt-4 font-sans text-base font-semibold text-[#fcfcfe] sm:text-lg">
                    {deal.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#adadad]">
                    {deal.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-aurora-lime/70 px-5 py-6 sm:mt-10 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
            <h3 className="font-display text-xl font-semibold text-[#151514] sm:text-2xl lg:text-[28px]">
              {conversation.title}
            </h3>
            <p className="mt-2 max-w-3xl font-sans text-sm leading-relaxed text-[#757575] sm:text-base lg:text-lg">
              {conversation.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              {conversation.options.map((option) => {
                const Icon = OPTION_ICONS[option.icon];
                const isSelected = selectedOption === option.id;
                const isAssetIcon =
                  option.icon === "campus" ||
                  option.icon === "company" ||
                  option.icon === "event" ||
                  option.icon === "lead";

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedOption(option.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-sans text-sm font-medium transition-colors sm:px-5 sm:text-base",
                      isSelected
                        ? "bg-[#151514] text-aurora-lime"
                        : "bg-[#e8e8e8] text-[#5c5c5c] hover:bg-[#dedede]",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-4 sm:size-5",
                        isAssetIcon && !isSelected && "brightness-0",
                      )}
                    />
                    {option.label}
                  </button>
                );
              })}
            </div>

            <Link
              href={`${conversation.ctaHref}?opportunity=${selectedOption}`}
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-aurora-lime px-7 py-3.5 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:mt-8 sm:px-8 sm:text-lg"
            >
              {conversation.ctaLabel}
            </Link>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default JoinUsBring;
