"use client";

import { useState } from "react";
import { AppLink } from "@/components/layout/app-link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { COHORT_FAQ } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CohortFaq = () => {
  const { title, items, cta, legal } = COHORT_FAQ;
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <section className="bg-black">
      <SiteShell className="py-14 sm:py-16 lg:py-20 xl:py-24">
        <SiteContent>
          <h2 className="text-center font-display text-[1.5rem] font-semibold uppercase tracking-[0.04em] text-white sm:text-2xl lg:text-3xl xl:text-[2.25rem]">
            {title}
          </h2>

          <ul className="mx-auto mt-10 max-w-4xl sm:mt-12">
            {items.map((item) => {
              const isOpen = item.id === openId;
              return (
                <li key={item.id} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenId((current) =>
                        current === item.id ? "" : item.id,
                      )
                    }
                    className="flex w-full items-start gap-4 py-5 text-left sm:gap-6 sm:py-6"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-sans text-base font-medium text-white sm:text-lg lg:text-xl">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <span className="mt-3 block font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                          {item.answer}
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded border text-lg leading-none",
                        isOpen
                          ? "border-aurora-lime/70 bg-aurora-lime/10 text-aurora-lime"
                          : "border-white/35 text-white",
                      )}
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-12 max-w-4xl rounded-lg bg-[#1a1a19] px-6 py-10 text-center sm:mt-14 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <h3 className="font-display text-[1.5rem] font-semibold leading-tight text-white sm:text-2xl lg:text-3xl xl:text-[2.25rem]">
              {cta.title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#adadad] sm:mt-5 sm:text-base lg:text-lg">
              {cta.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href={cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-aurora-lime px-7 py-3.5 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
              >
                {cta.primary.label}
              </a>
              <AppLink
                href={cta.secondary.href}
                className="inline-flex items-center justify-center rounded-lg border-[1.5px] border-aurora-lime bg-transparent px-7 py-3.5 font-sans text-sm font-semibold text-aurora-lime transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
              >
                {cta.secondary.label}
              </AppLink>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center font-sans text-[0.65rem] uppercase tracking-[0.08em] text-[#757575] sm:mt-8 sm:text-xs">
            {legal}
          </p>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default CohortFaq;
