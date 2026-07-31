import Image from "next/image";
import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { RESEARCH_TEAM } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ResearchTeam = () => {
  const { titleLines, description, cta, background, image } = RESEARCH_TEAM;

  return (
    <section className="relative isolate overflow-x-clip bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={background.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <SiteShell
        className={cn(
          "relative z-10",
          "pt-14 pb-36 sm:pt-20 sm:pb-44 lg:pt-24 lg:pb-64 xl:pt-28 xl:pb-72",
        )}
      >
        <SiteContent>
          <div
            className={cn(
              "relative mx-auto w-full max-w-5xl xl:max-w-6xl",
              "rounded-[1.25rem] bg-[#f4f4f4] sm:rounded-[1.5rem] lg:rounded-[1.75rem]",
              "overflow-visible",
            )}
          >
            <div
              className={cn(
                "relative grid grid-cols-1 lg:grid-cols-2",
                "lg:min-h-[40rem] xl:min-h-[44rem]",
              )}
            >
              <div
                className={cn(
                  "relative z-10 flex flex-col justify-center text-left",
                  "px-5 pt-8 pb-36",
                  "sm:px-8 sm:pt-12 sm:pb-40",
                  "lg:px-10 lg:py-16 lg:pb-16",
                  "xl:px-12 xl:py-20",
                )}
              >
                <h2
                  className={cn(
                    "font-display font-bold tracking-tight text-[#151514]",
                    "text-[1.75rem] leading-[1.08]",
                    "sm:text-[2.15rem] sm:leading-[1.06]",
                    "lg:text-[2.5rem] lg:leading-[1.05]",
                    "xl:text-[2.85rem]",
                  )}
                >
                  {titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p
                  className={cn(
                    "mt-4 max-w-[20rem] font-sans text-sm leading-relaxed text-[#6b6b6b]",
                    "sm:mt-5 sm:max-w-[24rem] sm:text-[15px]",
                    "lg:mt-6 lg:max-w-[26rem] lg:text-base",
                  )}
                >
                  {description}
                </p>
                <Link
                  href={cta.href}
                  className={cn(
                    "mt-5 inline-flex w-fit items-center justify-center",
                    "rounded-md bg-aurora-lime px-5 py-2.5",
                    "font-sans text-sm font-semibold text-[#151514]",
                    "transition-opacity hover:opacity-90",
                    "sm:mt-7 sm:rounded-lg sm:px-6 sm:py-3 sm:text-base",
                  )}
                >
                  {cta.label}
                </Link>
              </div>

              {/* Mobile: pinned bottom-right of the card. Desktop: right column hang. */}
              <div
                className={cn(
                  "pointer-events-none",
                  "absolute bottom-0 right-0 z-0",
                  "flex justify-end",
                  "translate-y-[-2%] translate-x-[-2%]",
                  "sm:translate-y-[0%] sm:translate-x-[-4%]",
                  "lg:relative lg:bottom-auto lg:right-auto lg:translate-x-0 lg:translate-y-0",
                  "lg:flex lg:min-h-0 lg:items-start lg:justify-end",
                )}
              >
                <div
                  className={cn(
                    "relative",
                    "h-[14rem] w-[12rem]",
                    "sm:h-[17rem] sm:w-[14rem]",
                    "lg:absolute lg:inset-y-0 lg:right-0 lg:top-0",
                    "lg:h-[34rem] lg:w-[28rem]",
                    "lg:translate-y-[4%] lg:-translate-x-[6%]",
                    "xl:h-[38rem] xl:w-[31rem]",
                    "xl:-right-2",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 18rem, 37rem"
                    className="object-contain object-bottom lg:object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ResearchTeam;
