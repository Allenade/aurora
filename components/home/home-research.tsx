import Image from "next/image";
import Link from "next/link";
import { HOME_RESEARCH, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeResearch = () => {
  const { title, stats, problem, solution, cta, background } = HOME_RESEARCH;

  return (
    <section className="relative isolate overflow-hidden bg-[#0a1218]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={background.src}
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft darken so the card stays readable over the lab photo */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div
        className={cn(
          "relative z-10 flex w-full items-center justify-center",
          "px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:py-28",
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-[26rem] flex-col items-center text-center",
            "rounded-[1.5rem] bg-[#151514]/92 px-5 py-8 backdrop-blur-[2px]",
            "sm:max-w-[34rem] sm:rounded-[1.75rem] sm:px-8 sm:py-10",
            "lg:max-w-[40rem] lg:rounded-[2rem] lg:px-10 lg:py-11",
            "xl:max-w-[44rem]",
          )}
        >
          <h2 className="font-display text-[1.5rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:whitespace-nowrap sm:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem]">
            {title}
          </h2>

          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 sm:mt-7 sm:gap-x-6 lg:mt-8 lg:gap-x-8">
            {stats.map((stat) => (
              <li
                key={stat.value}
                className="flex flex-col items-center text-center"
              >
                <p className="font-display text-[1.75rem] font-semibold leading-none tabular-nums text-[#fcfcfe] sm:text-[2rem] lg:text-[2.25rem]">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[11rem] font-sans text-[8px] font-medium uppercase leading-[1.35] tracking-[0.04em] text-aurora-lime sm:max-w-[13rem] sm:text-[9px] lg:max-w-[14rem] lg:text-[10px]">
                  {stat.labelLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 w-full space-y-4 sm:mt-7 sm:space-y-5 lg:mt-8">
            <div>
              <h3 className="font-sans text-[15px] font-semibold text-[#fcfcfe] sm:text-base lg:text-lg">
                {problem.title}
              </h3>
              <p className="mx-auto mt-1.5 max-w-[28rem] font-sans text-[13px] leading-relaxed text-white/90 sm:text-sm">
                {problem.bodyLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <h3 className="font-sans text-[15px] font-semibold text-aurora-lime sm:text-base lg:text-lg">
                {solution.title}
              </h3>
              <p className="mx-auto mt-1.5 max-w-[28rem] font-sans text-[13px] leading-relaxed text-white/90 sm:text-sm">
                {solution.bodyLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <Link
            href={cta.href}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-aurora-lime px-5 py-3 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:mt-8 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <span>{cta.label}</span>
            <Image
              src={IMAGES.ARROW_CIRCLE_DARK}
              alt=""
              width={28}
              height={28}
              className="size-5 shrink-0 sm:size-6"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeResearch;
