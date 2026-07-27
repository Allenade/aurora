import { PageHero } from "@/components/layout/page-hero";
import { IMAGES, PRODUCTS_HERO_COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ProductsHero = () => {
  return (
    <PageHero
      eyebrow={PRODUCTS_HERO_COPY.eyebrow}
      title={PRODUCTS_HERO_COPY.title}
      description={PRODUCTS_HERO_COPY.descriptionLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
      media={{
        type: "video",
        src: IMAGES.PRODUCTS_HERO_VIDEO,
      }}
      mediaLayout="cover"
      showOverlay
      contentAlign="center"
      // Keep products in frame; text sits lower above them — same on all large screens
      mediaClassName="object-cover object-center"
      contentShellClassName={cn(
        "items-end",
        "pb-[28%] pt-[18%]",
        "sm:pb-[27%] sm:pt-[16%]",
        "lg:pb-[30%] lg:pt-[14%]",
        "xl:pb-[32%] xl:pt-[12%]",
        "min-[2260px]:pb-[34%] min-[2260px]:pt-[12%]",
      )}
      sectionClassName={cn(
        "min-h-[640px] sm:min-h-[720px]",
        "lg:min-h-[900px] xl:min-h-[1000px]",
        "min-[2260px]:min-h-[1100px]",
      )}
    />
  );
};

export default ProductsHero;
