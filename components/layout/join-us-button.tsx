import Image from "next/image";
import Link from "next/link";
import { IMAGES, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type JoinUsButtonProps = {
  href?: string;
  label?: string;
  className?: string;
  compact?: boolean;
};

export function JoinUsButton({
  href = ROUTES.BASE,
  label = "Join Us",
  className,
  compact = false,
}: JoinUsButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center font-sans text-aurora-lime transition-opacity hover:opacity-90",
        compact
          ? "gap-2 rounded-[10px] bg-black px-4 py-2.5 min-[2560px]:gap-3 min-[2560px]:rounded-xl min-[2560px]:px-6 min-[2560px]:py-3.5"
          : "gap-2.5 rounded-xl bg-black px-5 py-3 sm:gap-3 sm:px-6 sm:py-3.5",
        className,
      )}
    >
      <span
        className={cn(
          "font-medium leading-none",
          compact ? "text-base min-[2560px]:text-xl" : "text-lg sm:text-[28px]",
        )}
      >
        {label}
      </span>
      <Image
        src={IMAGES.ARROW_CIRCLE}
        alt=""
        width={34}
        height={34}
        className={cn("shrink-0", compact ? "size-6 min-[2560px]:size-8" : "size-7 sm:size-[34px]")}
        aria-hidden
      />
    </Link>
  );
}
