import Image from "next/image";
import Link from "next/link";
import { IMAGES, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type AuroraLogoProps = {
  variant?: "default" | "footer" | "header";
};

export function AuroraLogo({ variant = "default" }: AuroraLogoProps) {
  const brandLabel = variant === "footer" ? "AURORA ROBOTICS" : "AURORA";

  return (
    <Link
      href={ROUTES.BASE}
      className="flex shrink-0 flex-col items-start gap-1"
      aria-label="Aurora home"
    >
      <Image
        src={IMAGES.LOGO}
        alt=""
        width={66}
        height={55}
        className={
          variant === "footer"
            ? "h-11 w-auto"
            : variant === "header"
              ? "h-9 w-auto sm:h-10"
              : "h-[42px] w-auto sm:h-[55px]"
        }
        priority={variant === "default" || variant === "header"}
      />
      <span
        className={cn(
          "font-brand font-bold uppercase leading-none tracking-[0.12em] text-aurora-lime",
          variant === "header"
            ? "text-[10px] sm:text-[11px]"
            : variant === "footer"
              ? "text-xs sm:text-sm"
              : "text-[11px] sm:text-sm",
        )}
      >
        {brandLabel}
      </span>
    </Link>
  );
}
