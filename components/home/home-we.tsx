import Image from "next/image";
import Link from "next/link";
import { HOME_WE, IMAGES, SITE_INNER_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeWe = () => {
  const { title, stats, problem, solution, cta, image } = HOME_WE;

  return (
    <section className="bg-white">
      <div className="grid w-full lg:grid-cols-2 lg:items-stretch">
        {/* Left details */}
        <div
          className={cn(
            "flex min-w-0 w-full flex-col justify-center",
            "px-[var(--site-edge)] py-12 sm:py-14 lg:px-8 lg:py-16 xl:py-20",
          )}
        >
          <div className={cn(SITE_INNER_CONTENT, "lg:pr-8 xl:pr-12")}>
            <h2 className="font-display text-[1.5rem] font-semibold leading-[1.12] text-[#151514] sm:whitespace-nowrap sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]">
              {title}
            </h2>

            <ul className="mt-8 flex flex-row flex-wrap items-start gap-x-10 gap-y-6 sm:mt-9 sm:gap-x-12 lg:mt-10 lg:gap-x-14">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex flex-col items-start text-left"
                >
                  <p className="font-display text-[2rem] font-semibold leading-none tabular-nums text-[#151514] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[10.5rem] font-sans text-[10px] font-medium uppercase leading-[1.35] tracking-[0.06em] text-[#757575] sm:max-w-[12rem] sm:text-[11px] lg:text-xs">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-5 sm:mt-9 sm:space-y-6 lg:mt-10">
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#151514] sm:text-xl">
                  {problem.title}
                </h3>
                <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-[#6b6b6b] sm:text-[15px] lg:max-w-[28rem] lg:text-base">
                  {problem.body}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-lg font-semibold text-[#151514] sm:text-xl">
                  {solution.title}
                </h3>
                <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-[#6b6b6b] sm:text-[15px] lg:max-w-[28rem] lg:text-base">
                  {solution.body}
                </p>
              </div>
            </div>

            <Link
              href={cta.href}
              className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-xl bg-aurora-lime px-5 py-3 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:mt-10 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
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

        {/* Right image — covers its half completely */}
        <div className="relative isolate min-h-[22rem] w-full min-w-0 overflow-hidden bg-[#04140a] sm:min-h-[26rem] lg:min-h-[36rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            unoptimized
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeWe;
