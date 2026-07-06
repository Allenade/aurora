import Image from "next/image";
import Link from "next/link";
import { HOME_WEBINAR, IMAGES } from "@/lib/constants";

const HomeWebniar = () => {
  return (
    <section className="bg-[#151514]">
      <div className="mx-auto max-w-[1813px] px-4 py-5 sm:px-6 lg:px-12 lg:py-7">
        <div className="flex flex-col items-center gap-3 sm:ml-36 sm:flex-row sm:items-center sm:gap-8 lg:ml-52 lg:gap-12 xl:ml-64">
          <p className="text-center font-display text-sm font-medium leading-tight whitespace-nowrap text-[#fdfdfd] sm:text-left sm:text-lg lg:text-xl xl:text-[28px]">
            {HOME_WEBINAR.title}
          </p>

          <Link
            href={HOME_WEBINAR.ctaHref}
            className="inline-flex shrink-0 items-center gap-2 self-center rounded-lg border-2 border-aurora-lime px-3 py-2 text-aurora-lime transition-opacity hover:opacity-90 sm:gap-4 sm:self-auto sm:rounded-xl sm:px-5 sm:py-3 lg:px-7 lg:py-4"
          >
            <span className="font-sans text-xs font-medium sm:text-base lg:text-lg xl:text-xl">
              {HOME_WEBINAR.ctaLabel}
            </span>
            <Image
              src={IMAGES.ARROW_CIRCLE}
              alt=""
              width={32}
              height={32}
              className="size-4 shrink-0 sm:size-7 lg:size-8"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWebniar;
