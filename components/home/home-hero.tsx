import Image from "next/image";
import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { IMAGES, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px] opacity-80 min-[2560px]:bg-size-[64px_64px]"
        aria-hidden
      />

      <SiteShell
        className={cn(
          "relative pb-10 pt-[20rem] sm:pb-12 sm:pt-[21rem]",
          "lg:pb-12 lg:pt-28 xl:pb-14 xl:pt-32 2xl:pt-36",
          "min-[2560px]:min-h-[720px] min-[2560px]:pb-20 min-[2560px]:pt-40",
        )}
      >
        <SiteContent
          className={cn(
            "relative lg:grid lg:grid-cols-[minmax(0,32%)_minmax(0,68%)]",
            "lg:items-end lg:gap-6 xl:gap-8 min-[2560px]:gap-12",
          )}
        >
          <div className="relative z-10 max-w-[682px] min-[2560px]:max-w-[1100px]">
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

          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-[-15rem] h-[min(84vw,420px)] w-screen max-w-none -translate-x-1/2",
              "sm:top-[-16rem] sm:h-[min(80vw,460px)]",
              "lg:static lg:col-start-2 lg:row-start-1 lg:h-auto lg:min-h-[480px] lg:w-full lg:translate-x-0",
              "xl:min-h-[560px] min-[2560px]:min-h-[680px]",
            )}
          >
            <video
              src={IMAGES.HERO_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="size-full scale-[1.45] object-contain object-center lg:scale-125 xl:scale-[1.3] lg:object-right min-[2560px]:scale-[var(--hero-media-scale)]"
              aria-hidden
            />
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default HomeHero;
