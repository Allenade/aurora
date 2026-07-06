import Image from "next/image";
import Link from "next/link";
import { IMAGES, ROUTES } from "@/lib/constants";

const HomeHero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-black sm:min-h-[560px] lg:min-h-[700px] xl:min-h-[700px]">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px] opacity-80"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-24 h-[48%] sm:top-28 sm:h-[52%] lg:inset-x-auto lg:top-[14%] lg:right-0 lg:h-[88%] lg:w-[65%] xl:top-[20%] xl:right-[2%] xl:h-[82%] xl:w-[62%]">
        <video
          src={IMAGES.HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-contain object-center"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1813px] px-4 pb-14 pt-[29rem] sm:px-6 sm:pb-16 sm:pt-[30rem] lg:px-12 lg:pb-20 lg:pt-[24rem] xl:pb-24 xl:pt-[26rem] 2xl:pt-[28rem]">
        <div className="max-w-[682px]">
          <h1 className="max-w-5xl font-display text-[22px] font-bold uppercase leading-[1.1] text-white sm:text-3xl lg:text-[34px] xl:text-[48px] 2xl:text-[56px]">
            <span className="block">A one stop</span>
            <span className="block whitespace-nowrap">
              AI &amp; robotics solution
            </span>
          </h1>
          {/* 
          <p className="mt-5 max-w-[682px] font-sans text-sm leading-relaxed text-white sm:mt-6 sm:text-base lg:mt-8 lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}

          <Link
            href={ROUTES.BASE}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-aurora-lime px-4 py-2 text-black transition-opacity hover:opacity-90 sm:mt-8 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3 lg:mt-10 lg:gap-4 lg:px-6 lg:py-3.5"
          >
            <span className="font-sans text-xs font-medium sm:text-sm lg:text-lg">
              Learn More
            </span>
            <Image
              src={IMAGES.ARROW_CIRCLE_DARK}
              alt=""
              width={28}
              height={28}
              className="size-5 shrink-0 sm:size-6 lg:size-7"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
