"use client";

import Link from "next/link";
import { useEffect, useState, type ComponentType } from "react";
import {
  BoltIcon,
  ChartIcon,
  ChevronDownIcon,
  ConsistencyTimerIcon,
  DocumentIcon,
  FlaskIcon,
  IdeaBulbIcon,
  InstitutionBuildingIcon,
  LeadershipBadgeIcon,
  UsersOutlineIcon,
  WarningTriangleIcon,
  WorkshopCodeIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { JOIN_US_BECOME } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LookIcon = (typeof JOIN_US_BECOME.intern.lookFor)[number]["icon"];
type SupportIcon = (typeof JOIN_US_BECOME.cofound.supports)[number]["icon"];

const LOOK_ICONS: Record<LookIcon, ComponentType<{ className?: string }>> = {
  bolt: BoltIcon,
  timer: ConsistencyTimerIcon,
  bulb: IdeaBulbIcon,
  badge: LeadershipBadgeIcon,
};

const SUPPORT_ICONS: Record<
  SupportIcon,
  ComponentType<{ className?: string }>
> = {
  monitor: WorkshopCodeIcon,
  chart: ChartIcon,
  users: UsersOutlineIcon,
  flask: FlaskIcon,
  building: InstitutionBuildingIcon,
  document: DocumentIcon,
};

const COLLAPSED_IDEA_COUNT = 4;

const JoinUsBecome = () => {
  const { intern, cofound, pathway, notice } = JOIN_US_BECOME;
  const [activeIdea, setActiveIdea] = useState(cofound.highlightedIdea);
  const [ideasOpen, setIdeasOpen] = useState(false);

  useEffect(() => {
    const highlightIndex = cofound.ideas.indexOf(cofound.highlightedIdea);
    let index = highlightIndex >= 0 ? highlightIndex : 0;

    const id = window.setInterval(() => {
      index = (index + 1) % cofound.ideas.length;
      setActiveIdea(cofound.ideas[index]);
      setIdeasOpen(index >= COLLAPSED_IDEA_COUNT);
    }, 2800);

    return () => window.clearInterval(id);
  }, [cofound.highlightedIdea, cofound.ideas]);

  return (
    <section className="bg-black">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          {/* Become An Intern */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div>
              <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:text-4xl lg:text-[44px] xl:text-[52px]">
                {intern.title}
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#fcfcfe] sm:text-lg lg:text-xl">
                {intern.lead}
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#adadad] sm:text-lg">
                {intern.body}
              </p>
              <Link
                href={intern.ctaHref}
                className="mt-7 inline-flex items-center justify-center rounded-xl bg-aurora-lime px-6 py-3.5 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:mt-8 sm:px-7 sm:text-lg"
              >
                {intern.ctaLabel}
              </Link>
            </div>

            <aside className="rounded-2xl bg-[#151514] p-5 sm:p-6 lg:p-7">
              <h3 className="font-display text-lg font-semibold text-[#fcfcfe] sm:text-xl lg:text-2xl">
                {intern.lookForTitle}
              </h3>
              <ul className="mt-6 flex flex-col gap-5 sm:mt-7 sm:gap-6">
                {intern.lookFor.map((item) => {
                  const Icon = LOOK_ICONS[item.icon];
                  return (
                    <li key={item.id} className="flex gap-3.5">
                      <Icon className="mt-0.5 size-6 shrink-0 text-aurora-lime" />
                      <div>
                        <p className="font-sans text-base font-semibold text-[#fcfcfe] sm:text-lg">
                          {item.title}
                        </p>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>

          {/* Co-Found a Product */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <header className="max-w-3xl text-left">
              <p className="font-display text-xs uppercase tracking-[0.14em] text-aurora-lime sm:text-sm">
                {cofound.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-[1.75rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:text-4xl lg:text-[44px] xl:text-[52px]">
                {cofound.title}
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#adadad] sm:text-lg lg:text-xl">
                {cofound.description}
              </p>
            </header>

            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl bg-[#151514] lg:mt-10 lg:grid-cols-2">
              <div className="relative border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7 xl:p-8">
                <ul
                  className={cn(
                    "flex flex-col gap-3 transition-[max-height] duration-500 ease-out sm:gap-3.5",
                    ideasOpen
                      ? "max-h-[40rem]"
                      : "max-h-[14rem] overflow-hidden sm:max-h-[16rem]",
                  )}
                >
                  {cofound.ideas.map((idea) => (
                    <li
                      key={idea}
                      className={cn(
                        'font-sans text-sm leading-snug transition-colors duration-500 sm:text-base lg:text-lg before:mr-1 before:content-["“"] after:ml-0.5 after:content-["”"]',
                        idea === activeIdea
                          ? "text-aurora-lime"
                          : "text-[#6b6b6b]",
                      )}
                    >
                      {idea}
                    </li>
                  ))}
                </ul>

                <div
                  className={cn(
                    "flex justify-center pt-4",
                    !ideasOpen &&
                      "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151514] via-[#151514]/90 to-transparent pb-4 pt-12",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={ideasOpen}
                    aria-label={
                      ideasOpen ? "Collapse idea list" : "Expand idea list"
                    }
                    onClick={() => setIdeasOpen((open) => !open)}
                    className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 text-[#fcfcfe] transition-colors hover:border-aurora-lime hover:text-aurora-lime sm:size-14"
                  >
                    <ChevronDownIcon
                      className={cn(
                        "size-6 transition-transform duration-300 sm:size-7",
                        ideasOpen && "rotate-180",
                      )}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-5 text-center sm:p-6 lg:p-7 xl:p-8">
                <h3 className="font-display text-xl font-semibold text-aurora-lime sm:text-2xl lg:text-[28px]">
                  {cofound.convictionTitle}
                </h3>
                <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-[#fcfcfe] sm:text-lg">
                  {cofound.convictionBody}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {cofound.supports.map((item) => {
                const Icon = SUPPORT_ICONS[item.icon];
                return (
                  <article
                    key={item.id}
                    className="rounded-2xl bg-[#151514] p-5 sm:p-6"
                  >
                    <Icon className="size-6 text-aurora-lime sm:size-7" />
                    <h3 className="mt-4 font-sans text-base font-semibold text-[#fcfcfe] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Product pathway */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:text-4xl lg:text-[44px] xl:text-[52px]">
              {pathway.title}
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {pathway.steps.map((step) => (
                <article
                  key={step.index}
                  className="rounded-2xl bg-[#151514] p-5 sm:p-6"
                >
                  <p className="font-display text-2xl font-semibold tabular-nums text-aurora-lime sm:text-3xl">
                    {step.index}
                  </p>
                  <h3 className="mt-3 font-sans text-base font-semibold text-[#fcfcfe] sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Important notice */}
          <aside className="mt-8 rounded-xl border border-[#ee4e4e] px-5 py-4 sm:mt-10 sm:px-6 sm:py-5">
            <div className="flex items-start gap-3">
              <WarningTriangleIcon className="mt-0.5 size-5 shrink-0 text-[#ee4e4e]" />
              <div>
                <p className="font-sans text-sm font-semibold text-[#ee4e4e] sm:text-base">
                  {notice.label}
                </p>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                  {notice.body}
                </p>
              </div>
            </div>
          </aside>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default JoinUsBecome;
