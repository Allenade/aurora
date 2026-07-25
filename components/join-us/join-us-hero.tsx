import { PageHero } from "@/components/layout/page-hero";
import { IMAGES, JOIN_US_HERO_COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const JoinUsHero = () => {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    descriptionLines,
    slideCount,
    activeSlide,
  } = JOIN_US_HERO_COPY;

  return (
    <PageHero
      eyebrow={eyebrow}
      title={
        <>
          <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
            {titleLine1}
          </span>
          <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
            {titleLine2}
          </span>
        </>
      }
      description={descriptionLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
      media={{
        type: "image",
        src: IMAGES.JOIN_US_HERO,
        alt: "Aurora team members collaborating at workstations",
      }}
      mediaLayout="cover"
      showOverlay
      contentAlign="center"
      mediaClassName="h-full w-full min-h-full min-w-full object-cover object-[68%_center]"
      contentClassName="mx-auto w-full max-w-[92vw] text-center sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[58rem] xl:max-w-[68rem] 2xl:max-w-[76rem] min-[2560px]:max-w-[90rem]"
      contentShellClassName={cn(
        "items-center",
        "pt-28 pb-32",
        "sm:pt-32 sm:pb-28",
        "lg:pt-36 lg:pb-32",
        "xl:pt-40 xl:pb-36",
      )}
      sectionClassName={cn(
        "min-h-svh w-full",
        "lg:min-h-screen",
        "xl:min-h-[100svh]",
        "min-[2260px]:min-h-screen",
      )}
      footer={
        <div
          className="flex items-center gap-2 pb-4 sm:pb-0"
          role="tablist"
          aria-label="Hero slides"
        >
          {Array.from({ length: slideCount }, (_, index) => {
            const isActive = index === activeSlide;
            return (
              <span
                key={index}
                role="tab"
                aria-selected={isActive}
                className={cn(
                  "rounded-full transition-all",
                  isActive
                    ? "h-2 w-8 bg-aurora-lime sm:h-2.5 sm:w-10"
                    : "size-2 bg-white/40 sm:size-2.5",
                )}
              />
            );
          })}
        </div>
      }
    />
  );
};

export default JoinUsHero;
