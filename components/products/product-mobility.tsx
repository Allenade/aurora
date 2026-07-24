import Link from "next/link";
import {
  CheckIcon,
  HeartIcon,
  LaunchIcon,
  UsersOutlineIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { PRODUCTS_MOBILITY } from "@/lib/constants";

const ProductsMobility = () => {
  const { humanFirst, autonomy, designedFor, codesign, cta, stages } =
    PRODUCTS_MOBILITY;

  return (
    <section className="bg-[#151514]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20 min-[2560px]:py-24">
        <SiteContent>
          <div className="flex items-center gap-3">
            <span className="h-2 w-9 shrink-0 bg-[#fcfcfe]" aria-hidden />
            <p className="font-display text-xs uppercase tracking-wide text-[#fcfcfe] sm:text-sm lg:text-base xl:text-[22px]">
              {PRODUCTS_MOBILITY.eyebrow}
            </p>
          </div>

          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-[#fcfcfe] sm:text-4xl lg:text-[40px] min-[2560px]:text-[52px]">
            {PRODUCTS_MOBILITY.title}
          </h2>
          <p className="mt-4 max-w-5xl font-sans text-base leading-relaxed text-[#fcfcfe] sm:text-lg lg:text-[28px] lg:leading-snug">
            {PRODUCTS_MOBILITY.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-7 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {stages.map((stage) => (
              <article
                key={stage.label}
                className="overflow-hidden rounded-[12px] border border-[#fcfcfe]/15 bg-black"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stage.image}
                  alt={stage.label}
                  className="block h-auto w-full max-w-full"
                />
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <HeartIcon className="size-7 text-[#fcfcfe] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] lg:text-[28px]">
                  {humanFirst.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-6 lg:gap-8">
                {humanFirst.items.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-6" />
                    <div>
                      <p className="font-sans text-base font-semibold text-aurora-lime sm:text-lg lg:text-xl">
                        {item.title}
                      </p>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-[#a3a3a3] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <LaunchIcon className="size-7 text-[#fcfcfe] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] lg:text-[28px]">
                  {autonomy.title}
                </h3>
              </div>
              <div className="rounded-[12px] bg-[#151514] px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <ul className="flex flex-col gap-5 lg:gap-6">
                  {autonomy.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckIcon className="size-6 shrink-0" />
                      <p className="font-sans text-base text-[#fdfdfd] sm:text-lg lg:text-xl">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14">
            <div className="mb-5 flex items-center gap-3 lg:mb-6">
              <LaunchIcon className="size-7 text-[#fcfcfe] lg:size-8" />
              <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] lg:text-[28px]">
                {designedFor.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {designedFor.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[#fcfcfe]/70 px-5 py-2.5 font-sans text-sm text-[#fcfcfe] sm:text-base lg:px-6 lg:py-3 lg:text-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-lg border-2 border-[#92ac00] bg-transparent px-5 py-5 sm:mt-12 sm:px-6 lg:gap-6 lg:px-7 lg:py-6">
            <div className="flex items-center gap-2">
              <UsersOutlineIcon className="size-6 text-[#fcfcfe]" />
              <h3 className="font-sans text-lg font-semibold text-[#fcfcfe] sm:text-xl lg:text-2xl">
                {codesign.title}
              </h3>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#fcfcfe] sm:text-base lg:text-xl">
              {codesign.body}
            </p>
            <Link
              href={codesign.ctaHref}
              className="inline-flex w-fit items-center justify-center rounded-xl border-[2.5px] border-aurora-lime px-6 py-3.5 font-sans text-base font-semibold text-aurora-lime transition-opacity hover:opacity-90 sm:px-8 sm:text-lg lg:text-xl"
            >
              {codesign.ctaLabel}
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-xl bg-black px-6 py-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="font-sans text-2xl font-semibold text-[#fcfcfe] sm:text-3xl lg:text-[32px]">
              {cta.title}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={cta.partnerHref}
                className="inline-flex items-center justify-center rounded-xl border-[2.5px] border-aurora-lime px-8 py-4 font-sans text-lg font-semibold text-aurora-lime transition-opacity hover:opacity-90 lg:text-[28px]"
              >
                {cta.partnerLabel}
              </Link>
              <Link
                href={cta.pilotHref}
                className="inline-flex items-center justify-center rounded-xl bg-aurora-lime px-8 py-4 font-sans text-lg font-semibold text-[#242424] transition-opacity hover:opacity-90 lg:text-[28px]"
              >
                {cta.pilotLabel}
              </Link>
            </div>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ProductsMobility;
