import Image from "next/image";
import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { IMAGES, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeHero = () => {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col overflow-hidden bg-black",
        "min-h-[440px] sm:min-h-[520px]",
        "lg:min-h-[680px] xl:min-h-[760px]",
        "min-[2260px]:min-h-[920px]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "min-[2260px]:flex min-[2260px]:items-end min-[2260px]:justify-center",
        )}
        aria-hidden
      >
        <video
          src={IMAGES.HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "size-full origin-center object-contain",
            "max-[2259px]:scale-[1.35] sm:max-[2259px]:scale-[1.4]",
            "lg:max-[2259px]:scale-[1.15] xl:max-[2259px]:scale-[1.2]",
            "max-sm:object-[50%_58%] sm:object-[50%_48%]",
            "lg:object-[50%_78%] xl:object-[50%_82%]",
            "min-[2260px]:origin-[50%_100%] min-[2260px]:scale-[1.8]",
            "min-[2260px]:object-bottom min-[2260px]:translate-y-[50%]",
          )}
        />
      </div>
      <SiteShell
        className={cn(
          "relative z-10",
          "pb-8 pt-[18rem] sm:pb-10 sm:pt-[19rem]",
          "lg:mt-auto lg:pb-10 lg:pt-0 xl:pb-12",
          "min-[2560px]:pb-14",
        )}
      >
        <SiteContent className="relative">
          <div className="relative max-w-[682px] min-[2560px]:max-w-[1100px]">
            <h1 className="max-w-5xl font-display text-[22px] font-bold uppercase leading-[1.1] text-white sm:text-3xl lg:text-[34px] xl:text-[48px] 2xl:text-[56px] min-[2560px]:max-w-none min-[2560px]:text-[84px] min-[2560px]:leading-[1.05]">
              <span className="block">A one stop</span>
              <span className="block whitespace-nowrap">
                AI &amp; robotics solution
              </span>
            </h1>

            <Link
              href={ROUTES.BASE}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-aurora-lime px-4 py-2 text-black transition-opacity hover:opacity-90 sm:mt-8 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3 lg:mt-10 lg:gap-4 lg:px-6 lg:py-3.5 min-[2560px]:mt-12 min-[2560px]:gap-5 min-[2560px]:rounded-2xl min-[2560px]:px-8 min-[2560px]:py-4"
            >
              <span className="font-sans text-xs font-medium sm:text-sm lg:text-lg min-[2560px]:text-2xl">
                Learn More
              </span>
              <Image
                src={IMAGES.ARROW_CIRCLE_DARK}
                alt=""
                width={28}
                height={28}
                className="size-5 shrink-0 sm:size-6 lg:size-7 min-[2560px]:size-10"
                aria-hidden
              />
            </Link>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default HomeHero;
