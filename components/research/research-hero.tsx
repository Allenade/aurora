import { PageHero } from "@/components/layout/page-hero";
import { RESEARCH_HERO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ResearchHero = () => {
  const { titleLine1, titleLine2, description, image } = RESEARCH_HERO;

  return (
    <PageHero
      title={
        <>
          <span className="block whitespace-nowrap text-white">
            {titleLine1}
          </span>
          <span className="block whitespace-nowrap text-aurora-lime">
            {titleLine2}
          </span>
        </>
      }
      description={description}
      media={{
        type: "image",
        src: image.src,
        alt: image.alt,
        unoptimized: true,
      }}
      mediaLayout="cover"
      showOverlay
      contentAlign="left"
      mediaClassName="object-cover object-center"
      overlayClassName="bg-gradient-to-r from-black/75 via-black/35 to-black/10"
      contentClassName="max-w-none text-left sm:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
      descriptionClassName="max-w-[18rem] text-left text-white/90 sm:max-w-sm lg:max-w-md xl:max-w-lg"
      contentShellClassName={cn(
        "mt-auto items-start justify-end",
        "pb-10 pt-[18rem]",
        "sm:pb-12 sm:pt-[19rem]",
        "lg:pb-14 lg:pt-0",
        "xl:pb-16",
      )}
      sectionClassName={cn(
        "min-h-[560px] sm:min-h-[640px]",
        "lg:min-h-[780px] xl:min-h-[860px]",
        "min-[2260px]:min-h-[960px]",
      )}
    />
  );
};

export default ResearchHero;
