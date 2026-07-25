import Link from "next/link";
import type { ComponentType } from "react";
import {
  AssociateBadgeIcon,
  BriefcaseIcon,
  DiscordIcon,
  EyeIcon,
  EyeOffIcon,
  FlagIcon,
  GraduationCapIcon,
  GrowthArrowIcon,
  HeartIcon,
  CheckIcon,
  LinkIcon,
  LimeInfoIcon,
  TargetIcon,
  ToolsIcon,
  UsersOutlineIcon,
  WhatsAppIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { JOIN_US_COMMUNITY } from "@/lib/constants";

type OfferIcon = (typeof JOIN_US_COMMUNITY.offers)[number]["icon"];
type AssociateIcon =
  | (typeof JOIN_US_COMMUNITY.associate.doItems)[number]["icon"]
  | (typeof JOIN_US_COMMUNITY.associate.receiveItems)[number]["icon"];

const OFFER_ICONS: Record<OfferIcon, ComponentType<{ className?: string }>> = {
  graduation: GraduationCapIcon,
  users: UsersOutlineIcon,
  eye: EyeOffIcon,
  tools: ToolsIcon,
  briefcase: BriefcaseIcon,
  heart: HeartIcon,
};

const ASSOCIATE_ICONS: Record<
  AssociateIcon,
  ComponentType<{ className?: string }>
> = {
  flag: FlagIcon,
  growth: GrowthArrowIcon,
  link: LinkIcon,
  eye: EyeIcon,
  badge: AssociateBadgeIcon,
  target: TargetIcon,
};

const JoinUsCommunity = () => {
  const {
    eyebrow,
    title,
    description,
    whatsapp,
    discord,
    offersTitle,
    offers,
    associate,
  } = JOIN_US_COMMUNITY;

  return (
    <section className="bg-[#151514]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          {/* Intro */}
          <header className="max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.14em] text-aurora-lime sm:text-sm lg:text-base">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:text-4xl lg:text-[44px] xl:text-[52px]">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#757575] sm:text-lg lg:text-xl">
              {description}
            </p>
          </header>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-aurora-lime px-7 py-3.5 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:text-lg"
            >
              <WhatsAppIcon className="size-5" />
              {whatsapp.label}
            </Link>
            <Link
              href={discord.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-aurora-lime bg-transparent px-7 py-3.5 font-sans text-base font-semibold text-aurora-lime transition-opacity hover:opacity-90 sm:text-lg"
            >
              <DiscordIcon className="size-5" />
              {discord.label}
            </Link>
          </div>

          {/* Offers */}
          <div className="mt-12 sm:mt-14 lg:mt-16">
            <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] sm:text-2xl lg:text-[28px]">
              {offersTitle}
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {offers.map((offer) => {
                const Icon = OFFER_ICONS[offer.icon];
                const isFeatured = Boolean(offer.featured);
                return (
                  <article
                    key={offer.id}
                    className={
                      isFeatured
                        ? "rounded-2xl border border-aurora-lime bg-black p-5 sm:p-6"
                        : "rounded-2xl bg-black p-5 sm:p-6"
                    }
                  >
                    <Icon
                      className={
                        isFeatured
                          ? "size-6 text-aurora-lime sm:size-7"
                          : "size-6 text-[#fcfcfe] sm:size-7"
                      }
                    />
                    <h4 className="mt-4 font-sans text-lg font-semibold text-[#fcfcfe] sm:text-xl">
                      {offer.title}
                    </h4>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                      {offer.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* White divider — content width, not full bleed */}
          <div
            className="mt-14 h-px w-full bg-[#fcfcfe] sm:mt-16 lg:mt-[4.5rem]"
            aria-hidden
          />

          {/* Associate */}
          <div className="pt-10 sm:pt-12 lg:pt-14">
            <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:text-4xl lg:text-[44px]">
              {associate.title}
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#757575] sm:text-lg lg:text-xl">
              {associate.description}
            </p>

            {/* Lime left bar callout */}
            <aside className="mt-7 border-l-[5px] border-aurora-lime bg-black py-5 pl-5 pr-5 sm:mt-8 sm:py-6 sm:pl-6 sm:pr-6 lg:pl-7">
              <p className="font-sans text-lg font-semibold text-aurora-lime sm:text-xl lg:text-2xl">
                {associate.callout.title}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#fcfcfe]/80 sm:text-base lg:text-lg">
                {associate.callout.bodyLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </aside>

            {/* 2×2 cards — Do / Receive / Benefits / Benefits */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              <article className="rounded-2xl bg-black p-5 sm:p-6 lg:p-7">
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-[#fcfcfe] sm:text-lg">
                  {associate.doTitle}
                </h3>
                <ul className="mt-5 flex flex-col gap-5">
                  {associate.doItems.map((item) => {
                    const Icon = ASSOCIATE_ICONS[item.icon];
                    return (
                      <li key={item.id} className="flex gap-3.5">
                        <Icon className="mt-0.5 size-6 shrink-0 text-aurora-lime" />
                        <div>
                          <p className="font-sans text-base font-semibold text-[#fcfcfe] sm:text-lg">
                            {item.title}
                          </p>
                          <p className="mt-1 font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>

              <article className="rounded-2xl bg-black p-5 sm:p-6 lg:p-7">
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-[#fcfcfe] sm:text-lg">
                  {associate.receiveTitle}
                </h3>
                <ul className="mt-5 flex flex-col gap-5">
                  {associate.receiveItems.map((item) => {
                    const Icon = ASSOCIATE_ICONS[item.icon];
                    return (
                      <li key={item.id} className="flex gap-3.5">
                        <Icon className="mt-0.5 size-6 shrink-0 text-aurora-lime" />
                        <div>
                          <p className="font-sans text-base font-semibold text-[#fcfcfe] sm:text-lg">
                            {item.title}
                          </p>
                          <p className="mt-1 font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>

              {associate.benefits.map((card) => (
                <article
                  key={card.id}
                  className="rounded-2xl bg-black p-5 sm:p-6 lg:p-7"
                >
                  <h3 className="font-display text-base font-semibold uppercase tracking-wide text-[#fcfcfe] sm:text-lg">
                    {card.title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-sans text-sm text-[#fcfcfe] sm:text-base"
                      >
                        {card.bullet === "info" ? (
                          <LimeInfoIcon className="mt-0.5 size-5 shrink-0 sm:size-[22px]" />
                        ) : (
                          <CheckIcon className="mt-0.5 size-5 shrink-0 sm:size-[22px]" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* CTA band */}
            <div className="mt-8 rounded-2xl bg-black px-6 py-9 text-center sm:mt-10 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <h3 className="font-display text-2xl font-semibold uppercase leading-tight text-[#fcfcfe] sm:text-3xl lg:text-[40px]">
                {associate.cta.title}
              </h3>
              <p className="mt-3 font-sans text-base text-[#757575] sm:text-lg">
                {associate.cta.description}
              </p>
              <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href={associate.cta.applyHref}
                  className="inline-flex items-center justify-center rounded-xl bg-aurora-lime px-7 py-3.5 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:px-8 sm:text-lg"
                >
                  {associate.cta.applyLabel}
                </Link>
                <Link
                  href={associate.cta.networkHref}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-aurora-lime bg-transparent px-7 py-3.5 font-sans text-base font-semibold text-aurora-lime transition-opacity hover:opacity-90 sm:px-8 sm:text-lg"
                >
                  {associate.cta.networkLabel}
                </Link>
              </div>
            </div>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default JoinUsCommunity;
