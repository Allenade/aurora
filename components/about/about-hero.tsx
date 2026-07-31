import { PageHero } from "@/components/layout/page-hero";
import { ABOUT_HERO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AboutHero = () => {
  const { eyebrow, titleLines, description, image } = ABOUT_HERO;

  return (
    <PageHero
      eyebrow={eyebrow}
      title={titleLines.map((line) => (
        <span
          key={line}
          className="block max-sm:whitespace-normal sm:whitespace-nowrap"
        >
          {line}
        </span>
      ))}
      description={description}
      media={{
        type: "image",
        src: image.src,
        alt: image.alt,
      }}
      mediaLayout="cover"
      showOverlay
      contentAlign="center"
      mediaClassName="h-full w-full min-h-full min-w-full object-cover object-[72%_center]"
      overlayClassName="bg-black/50"
      // Figma: Orbitron Bold 39.42, three centered lines
      titleClassName={cn(
        "!text-[1.15rem] !leading-[1.2]",
        "sm:!text-[1.5rem]",
        "md:!text-[1.85rem]",
        "lg:!text-[2.4625rem] lg:!leading-[1.15]",
        "xl:!text-[2.4625rem]",
        "2xl:!text-[2.4625rem]",
        "min-[2560px]:!text-[2.4625rem]",
      )}
      contentClassName={cn(
        "mx-auto w-full text-center",
        "max-w-[20rem] sm:max-w-[32rem] md:max-w-[40rem]",
        "lg:max-w-[48rem] xl:max-w-[52rem]",
      )}
      descriptionClassName={cn(
        "mx-auto w-full text-center !text-sm !leading-relaxed text-white/90",
        "sm:!text-[15px] lg:!text-base",
        "max-w-[20rem] sm:max-w-[32rem] md:max-w-[40rem] lg:max-w-[42rem]",
      )}
      contentShellClassName={cn(
        "flex flex-1 items-end justify-center",
        "pt-32 pb-40",
        "sm:pt-40 sm:pb-44",
        "lg:pt-48 lg:pb-52",
        "xl:pb-56",
      )}
      sectionClassName={cn(
        "min-h-[720px] w-full sm:min-h-[800px]",
        "lg:min-h-[880px] xl:min-h-[960px]",
      )}
    />
  );
};

export default AboutHero;
