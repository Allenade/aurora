import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { CountUp, Stagger, StaggerItem } from "@/components/motion";
import { EDUCATION_HERO, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EducationHero = () => {
  const {
    titleLines,
    descriptionLines,
    tagline,
    primaryCta,
    stats,
  } = EDUCATION_HERO;

  return (
    <>
      <PageHero
        title={titleLines.map((line) => (
          <span
            key={line}
            className="block max-sm:whitespace-normal sm:whitespace-nowrap"
          >
            {line}
          </span>
        ))}
        description={descriptionLines.map((line) => (
          <span
            key={line}
            className="block text-[#b0b0b0] max-sm:whitespace-normal sm:whitespace-nowrap"
          >
            {line}
          </span>
        ))}
        media={{
          type: "image",
          src: IMAGES.EDUCATION_HERO,
          alt: "Abstract robotics wireframe mesh",
        }}
        mediaLayout="cover"
        showOverlay
        contentAlign="center"
        mediaClassName="object-cover object-center"
        overlayClassName="bg-gradient-to-b from-black/20 via-transparent to-black/35"
        contentClassName="mx-auto w-full max-w-[92vw] text-center sm:max-w-[44rem] md:max-w-[54rem] lg:max-w-[62rem] xl:max-w-[70rem]"
        descriptionClassName="text-[#b0b0b0]"
        contentShellClassName={cn(
          "items-center",
          "pt-28 pb-16",
          "sm:pt-32 sm:pb-20",
          "lg:pt-36 lg:pb-24",
          "xl:pt-40 xl:pb-28",
        )}
        sectionClassName={cn(
          "min-h-[70svh] w-full",
          "sm:min-h-[75svh]",
          "lg:min-h-[85svh]",
          "xl:min-h-[90svh]",
        )}
        footer={
          <div className="flex w-full flex-col items-center gap-6 sm:gap-7 lg:gap-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-aurora-lime sm:text-base lg:text-lg">
              {tagline}
            </p>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-aurora-lime px-7 py-3.5 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:px-8 sm:text-lg"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        }
      />

      <section className="border-t border-white/10 bg-black">
        <SiteShell className="py-8 sm:py-10 lg:py-12">
          <SiteContent>
            <Stagger
              as="ul"
              className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0"
              stagger={0.08}
            >
              {stats.map((stat, index) => (
                <StaggerItem
                  key={stat.label}
                  as="li"
                  className={cn(
                    "flex flex-col items-center px-3 text-center sm:px-4",
                    index > 0 && "lg:border-l lg:border-white/25",
                    index % 2 === 1 && "max-sm:border-l max-sm:border-white/20",
                    index > 0 &&
                      index % 3 !== 0 &&
                      "sm:max-lg:border-l sm:max-lg:border-white/20",
                  )}
                >
                  <p className="font-display text-3xl font-semibold tabular-nums text-[#fcfcfe] sm:text-4xl lg:text-[44px]">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 font-sans text-xs text-white/75 sm:text-sm lg:text-base">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </SiteContent>
        </SiteShell>
      </section>
    </>
  );
};

export default EducationHero;
