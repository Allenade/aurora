import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HeroVideo } from "@/components/layout/hero-video";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type PageHeroMedia =
  | { type: "video"; src: string; startOffset?: number }
  | { type: "image"; src: string; alt?: string };

export type PageHeroCta = {
  label: string;
  href: string;
};

export type PageHeroProps = {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  cta?: PageHeroCta;
  media: PageHeroMedia;
  /** Skip home-style video scaling; use contain or cover for page heroes */
  mediaLayout?: "default" | "contain" | "cover";
  /** Left-side gradient so copy stays readable over photography */
  showOverlay?: boolean;
  /** Text alignment — products hero is centered in Figma */
  contentAlign?: "left" | "center";
  mediaClassName?: string;
  sectionClassName?: string;
  contentShellClassName?: string;
  contentClassName?: string;
  /** Override default overlay classes when showOverlay is true */
  overlayClassName?: string;
  /** Optional content below description/CTA (e.g. carousel dots) */
  footer?: ReactNode;
};

const DEFAULT_MEDIA_CLASS = cn(
  "size-full origin-center object-contain",
  "max-[2259px]:scale-[1.35] sm:max-[2259px]:scale-[1.4]",
  "lg:max-[2259px]:scale-[1.15] xl:max-[2259px]:scale-[1.2]",
  "max-sm:object-[50%_58%] sm:object-[50%_48%]",
  "lg:object-[50%_78%] xl:object-[50%_82%]",
  "min-[2260px]:origin-[50%_100%] min-[2260px]:scale-[1.8]",
  "min-[2260px]:object-bottom min-[2260px]:translate-y-[50%]",
);

export function PageHero({
  title,
  eyebrow,
  description,
  cta,
  media,
  mediaLayout = "default",
  showOverlay = false,
  contentAlign = "left",
  mediaClassName,
  sectionClassName,
  contentShellClassName,
  contentClassName,
  overlayClassName,
  footer,
}: PageHeroProps) {
  const isCentered = contentAlign === "center";

  const mediaClasses =
    mediaLayout === "default"
      ? cn(DEFAULT_MEDIA_CLASS, mediaClassName)
      : cn(
          "size-full origin-center",
          mediaLayout === "cover"
            ? "object-cover object-center"
            : "object-contain object-center",
          mediaClassName,
        );

  return (
    <section
      className={cn(
        "relative flex w-full flex-col overflow-hidden bg-black",
        !isCentered &&
          cn(
            "min-h-[440px] sm:min-h-[520px]",
            "lg:min-h-[680px] xl:min-h-[760px]",
            "min-[2260px]:min-h-[920px]",
          ),
        sectionClassName,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          mediaLayout === "cover" && "h-full w-full",
          mediaLayout === "default" &&
            "min-[2260px]:flex min-[2260px]:items-end min-[2260px]:justify-center",
        )}
        aria-hidden
      >
        {media.type === "video" ? (
          <HeroVideo
            src={media.src}
            startOffset={media.startOffset}
            className={mediaClasses}
          />
        ) : (
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className={mediaClasses}
            aria-hidden
          />
        )}
      </div>

      {showOverlay ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            overlayClassName ??
              (isCentered
                ? "bg-gradient-to-b from-black/55 via-black/25 to-black/50"
                : "bg-gradient-to-r from-black/80 via-black/35 to-black/10"),
          )}
          aria-hidden
        />
      ) : null}

      <SiteShell
        className={cn(
          "relative z-10",
          isCentered
            ? cn(
                "flex flex-1 justify-center",
                contentShellClassName ??
                  "items-center pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28 xl:pt-52",
              )
            : cn(
                "pb-8 pt-[18rem] sm:pb-10 sm:pt-[19rem]",
                "lg:mt-auto lg:pb-10 lg:pt-0 xl:pb-12",
                "min-[2560px]:pb-14",
                contentShellClassName,
              ),
        )}
      >
        <SiteContent
          className={cn("relative", isCentered && "flex justify-center")}
        >
          <div
            className={cn(
              "relative",
              isCentered && "mx-auto text-center",
              isCentered &&
                !contentClassName &&
                "max-w-3xl xl:max-w-4xl min-[2560px]:max-w-5xl",
              !isCentered && "max-w-[682px] min-[2560px]:max-w-[1100px]",
              contentClassName,
            )}
          >
            {eyebrow ? (
              <p
                className={cn(
                  "mb-3 font-display text-xs font-medium uppercase tracking-wide sm:mb-4 sm:text-sm lg:mb-5 lg:text-base xl:text-xl min-[2560px]:mb-6 min-[2560px]:text-2xl",
                  isCentered ? "text-aurora-lime" : "text-white",
                )}
              >
                {eyebrow}
              </p>
            ) : null}

            <h1
              className={cn(
                "font-display font-bold uppercase leading-[1.1] text-white",
                isCentered
                  ? "text-[22px] sm:text-3xl lg:text-[40px] xl:text-[48px] 2xl:text-[56px] min-[2560px]:text-[72px]"
                  : "max-w-5xl text-[22px] sm:text-3xl lg:text-[34px] xl:text-[48px] 2xl:text-[56px] min-[2560px]:max-w-none min-[2560px]:text-[84px] min-[2560px]:leading-[1.05]",
              )}
            >
              {title}
            </h1>

            {description ? (
              <p
                className={cn(
                  "mt-4 font-sans text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base lg:mt-6 lg:text-lg min-[2560px]:mt-8 min-[2560px]:text-2xl min-[2560px]:leading-relaxed",
                  isCentered
                    ? "mx-auto max-w-none sm:max-w-2xl lg:max-w-3xl xl:max-w-[52rem]"
                    : "max-w-md sm:max-w-lg lg:max-w-xl min-[2560px]:max-w-2xl",
                )}
              >
                {description}
              </p>
            ) : null}

            {cta ? (
              <Link
                href={cta.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg bg-aurora-lime px-4 py-2 text-black transition-opacity hover:opacity-90",
                  description
                    ? "mt-5 sm:mt-6 lg:mt-8 min-[2560px]:mt-10"
                    : "mt-6 sm:mt-8 lg:mt-10 min-[2560px]:mt-12",
                  "sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3 lg:gap-4 lg:px-6 lg:py-3.5",
                  "min-[2560px]:gap-5 min-[2560px]:rounded-2xl min-[2560px]:px-8 min-[2560px]:py-4",
                )}
              >
                <span className="font-sans text-xs font-medium sm:text-sm lg:text-lg min-[2560px]:text-2xl">
                  {cta.label}
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
            ) : null}

            {footer ? (
              <div
                className={cn(
                  "flex justify-center",
                  cta || description
                    ? "mt-8 sm:mt-10 lg:mt-12"
                    : "mt-6 sm:mt-8",
                )}
              >
                {footer}
              </div>
            ) : null}
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
}
