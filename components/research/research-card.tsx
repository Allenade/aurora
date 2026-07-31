import Image from "next/image";
import { cn } from "@/lib/utils";

export type ResearchCardProps = {
  title: string;
  authors: string;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};

/** Equal-height research card — image + clamped title/authors so every card matches. */
const ResearchCard = ({
  title,
  authors,
  image,
  className,
}: ResearchCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl bg-[#151514]",
        className,
      )}
    >
      <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pt-4 pb-5 text-left sm:px-5 sm:pt-5 sm:pb-6">
        <h3
          className={cn(
            "font-sans text-[15px] font-semibold leading-snug text-[#fcfcfe]",
            "line-clamp-3 min-h-[4.05rem]",
            "sm:text-base sm:min-h-[4.35rem]",
            "lg:text-[17px] lg:min-h-[4.6rem]",
          )}
          title={title}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2.5 font-sans text-[12px] leading-snug text-[#b0b0b0]",
            "line-clamp-2 min-h-[2.1rem]",
            "sm:text-[13px] sm:min-h-[2.25rem]",
          )}
          title={authors}
        >
          {authors}
        </p>
      </div>
    </article>
  );
};

export default ResearchCard;
