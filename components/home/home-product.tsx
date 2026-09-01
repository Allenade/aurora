import Image from "next/image";
import { AppLink } from "@/components/layout/app-link";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/components/motion";
import { HOME_PRODUCT, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeProduct = () => {
  const { title, stats, problem, solution, primaryCta, secondaryCta, image } =
    HOME_PRODUCT;

  return (
    <section className="bg-white px-[var(--site-edge)] py-10 sm:py-12 lg:px-8 lg:py-14 xl:py-16">
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--site-max-width)] overflow-hidden",
          "border border-[#151514]",
        )}
      >
        <div className="relative grid w-full lg:grid-cols-2 lg:items-stretch">
          {/* Left — product visual */}
          <div className="relative min-h-[20rem] w-full min-w-0 bg-black sm:min-h-[24rem] lg:min-h-[34rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/*
            Right — white panel. On lg+, shifts 28px into the image and uses
            clip-path for the Figma trapezoid: long flat tip (~27–74% height),
            short diagonals, shallow depth.
          */}
          <div
            className={cn(
              "relative z-10 flex w-full min-w-0 flex-col justify-center bg-white",
              "px-5 py-10 sm:px-8 sm:py-12 lg:py-14 lg:pr-10 xl:pr-14",
              "lg:-ml-7 lg:pl-[calc(3rem+1.75rem)] xl:pl-[calc(3.5rem+1.75rem)]",
              "lg:[clip-path:polygon(28px_0%,100%_0%,100%_100%,28px_100%,28px_77.3%,0_73.7%,0_27.5%,28px_24.2%)]",
            )}
          >
            <Reveal as="h2" className="font-display text-[1.5rem] font-semibold leading-[1.12] text-[#151514] sm:whitespace-nowrap sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]">
              {title}
            </Reveal>

            <Stagger
              as="ul"
              className="mt-7 grid grid-cols-2 gap-x-6 sm:mt-8 sm:gap-x-10 lg:mt-9 lg:gap-x-12"
            >
              {stats.map((stat) => (
                <StaggerItem
                  key={stat.value}
                  as="li"
                  className="flex flex-col items-start text-left"
                >
                  <CountUp
                    value={stat.value}
                    className="font-display text-[1.75rem] font-semibold leading-none tabular-nums text-[#151514] sm:text-[2rem] lg:text-[2.25rem]"
                  />
                  <p className="mt-2 font-sans text-[9px] font-medium uppercase leading-[1.35] tracking-[0.05em] text-[#757575] sm:text-[10px] lg:text-[11px]">
                    {stat.labelLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
              <Reveal>
                <h3 className="font-sans text-base font-semibold text-[#151514] sm:text-lg">
                  {problem.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#6b6b6b] sm:text-[15px]">
                  {problem.bodyLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h3 className="font-sans text-base font-semibold text-[#151514] sm:text-lg">
                  {solution.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#6b6b6b] sm:text-[15px]">
                  {solution.bodyLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={0.12}
              className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
            >
              <AppLink
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-aurora-lime px-4 py-3 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-base"
              >
                <span>{primaryCta.label}</span>
                <Image
                  src={IMAGES.ARROW_CIRCLE_DARK}
                  alt=""
                  width={28}
                  height={28}
                  className="size-5 shrink-0 sm:size-6"
                  aria-hidden
                />
              </AppLink>

              <AppLink
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-[#151514] bg-white px-4 py-3 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-80 sm:px-5 sm:py-3.5 sm:text-base"
              >
                {secondaryCta.label}
              </AppLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
