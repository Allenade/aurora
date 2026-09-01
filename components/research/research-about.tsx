"use client";

// import { useState } from "react";
// import { ChevronDownIcon } from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { RESEARCH_ABOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ResearchCard from "./research-card";
// import ResearchPagination from "./research-pagination";

// function SearchIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={cn("shrink-0", className)}
//       aria-hidden
//     >
//       <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
//       <path
//         d="M20 20l-3.5-3.5"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

const ResearchAbout = () => {
  const { title, description, /* searchPlaceholder, filters, */ papers } =
    RESEARCH_ABOUT;

  // const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
  //   Object.fromEntries(
  //     filters.groups.map((group) => [group.id, group.defaultOpen]),
  //   ),
  // );

  return (
    <section className="bg-black">
      <SiteShell className="py-16 sm:py-20 lg:py-24 xl:py-28">
        <SiteContent>
          <Reveal className="mx-auto max-w-[52rem] text-center xl:max-w-[56rem]">
            <h2 className="font-display text-[1.75rem] font-semibold uppercase tracking-wide text-[#fcfcfe] sm:text-4xl lg:text-[2.75rem] xl:text-[3rem]">
              {title}
            </h2>
            <p className="mt-5 font-sans text-[13px] leading-[1.65] text-[#fcfcfe] sm:mt-6 sm:text-base lg:mt-7 lg:text-lg lg:leading-relaxed">
              {description}
            </p>
          </Reveal>

          {/* <label className="relative mx-auto mt-8 block w-full max-w-5xl sm:mt-10 lg:mt-12 xl:max-w-6xl">
            <span className="sr-only">Search research</span>
            <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[#8a8a8a] sm:left-6">
              <SearchIcon className="size-[15px] sm:size-4" />
            </span>
            <input
              type="search"
              name="research-search"
              placeholder={searchPlaceholder}
              className={cn(
                "w-full rounded-full border border-[#5c5c5c] bg-transparent",
                "py-3.5 pl-12 pr-6 font-sans text-sm text-[#fcfcfe]",
                "placeholder:text-[#8a8a8a]",
                "outline-none transition-colors focus:border-[#c6ff00]/60",
                "sm:py-4 sm:pl-14 sm:pr-8 sm:text-[15px]",
              )}
            />
          </label> */}

          {/*
            Figma 3-col grid:
            [Filters] [Kalman] [Trust]
            [Locomotion] [Scene] [Elder care]
            [Metacognition] [Traffic] [WebSocket]
          */}
          <Stagger
            className={cn(
              "mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6",
              "lg:mt-14 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7",
              "xl:gap-x-7 xl:gap-y-8",
            )}
            stagger={0.08}
          >
            {/* <aside className="self-start text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] sm:text-2xl">
                {filters.title}
              </h3>
              <div className="mt-4 border-t border-[#fcfcfe]/35" />

              <div className="divide-y divide-[#fcfcfe]/35">
                {filters.groups.map((group) => {
                  const isOpen = openGroups[group.id];
                  return (
                    <div key={group.id} className="py-3.5">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenGroups((prev) => ({
                            ...prev,
                            [group.id]: !prev[group.id],
                          }))
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-3 text-left font-sans text-[15px] font-medium text-[#fcfcfe]"
                      >
                        <span>{group.label}</span>
                        <ChevronDownIcon
                          className={cn(
                            "size-[18px] text-[#fcfcfe] transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {isOpen ? (
                        <ul className="mt-3.5 space-y-3">
                          {group.options.map((option) => (
                            <li key={option}>
                              <label className="flex cursor-pointer items-center gap-3">
                                <input
                                  type="checkbox"
                                  name={`${group.id}[]`}
                                  value={option}
                                  className={cn(
                                    "size-3.5 shrink-0 appearance-none rounded-[2px] border border-[#9a9a9a] bg-transparent",
                                    "checked:border-[#c6ff00] checked:bg-[#c6ff00]",
                                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c6ff00]",
                                  )}
                                />
                                <span className="font-sans text-[13px] leading-snug text-[#b0b0b0]">
                                  {option}
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </aside> */}

            {papers.map((paper) => (
              <StaggerItem key={paper.id} className="h-full min-h-0">
                <ResearchCard
                  title={paper.title}
                  authors={paper.authors}
                  image={paper.image}
                />
              </StaggerItem>
            ))}
          </Stagger>

          {/* <ResearchPagination
            previousLabel={pagination.previousLabel}
            nextLabel={pagination.nextLabel}
            pages={pagination.pages}
            initialPage={pagination.activePage}
            aria-label="Research pagination"
            className="mt-12 sm:mt-14 lg:mt-16"
          /> */}
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ResearchAbout;
