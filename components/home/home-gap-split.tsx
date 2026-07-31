import Image from "next/image";
import { AppLink } from "@/components/layout/app-link";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GapStat = {
  value: string;
  labelLines: readonly string[];
};

type GapCta = {
  label: string;
  href: string;
};

type HomeGapSplitProps = {
  /** `start` = image left (Product). `end` = image right (Experience). */
  imageSide: "start" | "end";
  title?: string;
  /** Stacked title lines (e.g. Experience Gap). Takes priority over `title`. */
  titleLines?: readonly string[];
  stats: readonly GapStat[];
  problem: { title: string; bodyLines: readonly string[] };
  solution: { title: string; bodyLines: readonly string[] };
  primaryCta: GapCta;
  secondaryCta?: GapCta;
  image: { src: string; alt: string };
  /** Optional object-position for the photo (e.g. "75% center"). */
  imagePosition?: string;
};

/** Product Gap middle-line notch (tip into image on the left). */
const CLIP_LEFT =
  "polygon(28px 0%, 100% 0%, 100% 100%, 28px 100%, 28px 77.3%, 0 73.7%, 0 27.5%, 28px 24.2%)";

/** Same middle-line notch, flipped (tip into image on the right). */
const CLIP_RIGHT =
  "polygon(0 0%, calc(100% - 28px) 0%, calc(100% - 28px) 24.2%, 100% 27.5%, 100% 73.7%, calc(100% - 28px) 77.3%, calc(100% - 28px) 100%, 0 100%)";

const HomeGapSplit = ({
  imageSide,
  title,
  titleLines,
  stats,
  problem,
  solution,
  primaryCta,
  secondaryCta,
  image,
  imagePosition = "center",
}: HomeGapSplitProps) => {
  const imageOnLeft = imageSide === "start";

  const panel = (
    <div
      className={cn(
        "home-gap-panel relative z-10 flex w-full min-w-0 flex-col justify-center bg-white",
        "px-5 py-10 sm:px-8 sm:py-12 lg:py-14",
        imageOnLeft
          ? // Product: shift panel left so the notch bites into the image
            "lg:-ml-7 lg:pr-10 lg:pl-[calc(3rem+1.75rem)] xl:pr-14 xl:pl-[calc(3.5rem+1.75rem)]"
          : // Experience: grow panel right ( -mr doesn't move the box like -ml )
            "lg:w-[calc(100%+1.75rem)] lg:max-w-none lg:pl-10 lg:pr-[calc(3rem+1.75rem)] xl:pl-14 xl:pr-[calc(3.5rem+1.75rem)]",
        imageOnLeft ? "home-gap-panel--left" : "home-gap-panel--right",
      )}
    >
      <h2
        className={cn(
          "font-display text-[1.5rem] font-semibold leading-[1.12] text-[#151514] sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]",
          !titleLines && "sm:whitespace-nowrap",
        )}
      >
        {titleLines
          ? titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))
          : title}
      </h2>

      <ul className="mt-7 grid grid-cols-2 gap-x-6 sm:mt-8 sm:gap-x-10 lg:mt-9 lg:gap-x-12">
        {stats.map((stat) => (
          <li key={stat.value} className="flex flex-col items-start text-left">
            <p className="font-display text-[1.75rem] font-semibold leading-none tabular-nums text-[#151514] sm:text-[2rem] lg:text-[2.25rem]">
              {stat.value}
            </p>
            <p className="mt-2 font-sans text-[9px] font-medium uppercase leading-[1.35] tracking-[0.05em] text-[#757575] sm:text-[10px] lg:text-[11px]">
              {stat.labelLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
        <div>
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
        </div>

        <div>
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
        </div>
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
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

        {secondaryCta ? (
          <AppLink
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-lg border border-[#151514] bg-white px-4 py-3 font-sans text-sm font-semibold text-[#151514] transition-opacity hover:opacity-80 sm:px-5 sm:py-3.5 sm:text-base"
          >
            {secondaryCta.label}
          </AppLink>
        ) : null}
      </div>
    </div>
  );

  const visual = (
    <div className="relative min-h-[20rem] w-full min-w-0 bg-black sm:min-h-[24rem] lg:min-h-[34rem]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        unoptimized
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
    </div>
  );

  return (
    <section className="bg-white px-[var(--site-edge)] py-10 sm:py-12 lg:px-8 lg:py-14 xl:py-16">
      {/*
        Clip-path via real CSS — Tailwind arbitrary calc() was dropping the
        mirrored right-hand notch (clip stayed none). Same geometry both sides.
      */}
      <style>{`
        @media (min-width: 1024px) {
          .home-gap-panel--left {
            clip-path: ${CLIP_LEFT};
          }
          .home-gap-panel--right {
            clip-path: ${CLIP_RIGHT};
          }
        }
      `}</style>
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--site-max-width)] overflow-hidden",
          "border border-[#151514]",
        )}
      >
        <div className="relative grid w-full lg:grid-cols-2 lg:items-stretch">
          {imageOnLeft ? (
            <>
              {visual}
              {panel}
            </>
          ) : (
            <>
              {panel}
              {visual}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeGapSplit;
