import Image from "next/image";
import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { HOME_WEBINAR, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeWebniar = () => {
  return (
    <section className="bg-[#151514]">
      <SiteShell
        className={cn(
          "py-5 lg:pb-10 lg:pt-14 xl:pb-12 xl:pt-16",
          "min-[2560px]:py-12 min-[2560px]:pb-16 min-[2560px]:pt-24",
        )}
      >
        <SiteContent
          className={cn(
            "flex flex-col items-center gap-3",
            "sm:flex-row sm:items-center sm:justify-center sm:gap-8",
            "lg:gap-12 min-[2560px]:gap-16",
          )}
        >
          <p className="text-center font-display text-xs font-medium leading-tight whitespace-nowrap text-[#fdfdfd] sm:text-lg lg:text-xl xl:text-[28px] min-[2560px]:text-[40px]">
            {HOME_WEBINAR.title}
          </p>

          <Link
            href={HOME_WEBINAR.ctaHref}
            className="inline-flex shrink-0 items-center gap-2 self-center rounded-lg border-2 border-aurora-lime px-3 py-2 text-aurora-lime transition-opacity hover:opacity-90 sm:gap-4 sm:rounded-xl sm:px-5 sm:py-3 lg:px-7 lg:py-4 min-[2560px]:gap-5 min-[2560px]:rounded-2xl min-[2560px]:border-[3px] min-[2560px]:px-9 min-[2560px]:py-5"
          >
            <span className="font-sans text-xs font-medium sm:text-base lg:text-lg xl:text-xl min-[2560px]:text-2xl">
              {HOME_WEBINAR.ctaLabel}
            </span>
            <Image
              src={IMAGES.ARROW_CIRCLE}
              alt=""
              width={32}
              height={32}
              className="size-4 shrink-0 sm:size-7 lg:size-8 min-[2560px]:size-10"
              aria-hidden
            />
          </Link>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default HomeWebniar;
