import { PageHero } from "@/components/layout/page-hero";
import { COHORT_HERO, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CohortHero = () => {
  const { eyebrow, title, description } = COHORT_HERO;

  return (
    <PageHero
      eyebrow={eyebrow}
      title={
        <span className="block max-w-[18ch] max-sm:whitespace-normal sm:max-w-none">
          {title}
        </span>
      }
      description={description}
      media={{
        type: "image",
        src: IMAGES.COHORT_HERO,
        alt: "Aurora builders collaborating at workstations",
      }}
      mediaLayout="cover"
      showOverlay
      contentAlign="center"
      eyebrowClassName="font-display text-xs font-semibold uppercase tracking-[0.16em] text-aurora-lime sm:text-sm lg:text-base"
      titleClassName="font-display text-[1.65rem] font-semibold uppercase leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]"
      descriptionClassName="mx-auto max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg"
      mediaClassName="h-full w-full min-h-full min-w-full object-cover object-[42%_center]"
      overlayClassName="bg-gradient-to-b from-black/55 via-black/45 to-black/70"
      contentClassName="mx-auto w-full max-w-[92vw] text-center sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[58rem] xl:max-w-[68rem]"
      contentShellClassName={cn(
        "items-center justify-center",
        "pt-28 pb-24",
        "sm:pt-32 sm:pb-28",
        "lg:pt-36 lg:pb-32",
        "xl:pt-40 xl:pb-36",
      )}
      sectionClassName={cn(
        "min-h-[70svh] w-full",
        "sm:min-h-[75svh]",
        "lg:min-h-[85svh]",
        "xl:min-h-[90svh]",
      )}
    />
  );
};

export default CohortHero;
