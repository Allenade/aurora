import {
  CheckIcon,
  ChipIcon,
  InfoIcon,
  LaunchIcon,
} from "@/components/icons/figma-icons";
import { AppLink } from "@/components/layout/app-link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PRODUCTS_AEGIS } from "@/lib/constants";

const ProductsAegis = () => {
  const { capabilities, designedFor, howItWorks, cta, status } = PRODUCTS_AEGIS;

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20 min-[2560px]:py-24">
        <SiteContent>
          {/* Eyebrow */}
          <Reveal className="flex items-center gap-3">
            <span className="h-2 w-9 shrink-0 bg-[#313232]" aria-hidden />
            <p className="font-display text-xs uppercase tracking-wide text-[#313232] sm:text-sm lg:text-base xl:text-[22px]">
              {PRODUCTS_AEGIS.eyebrow}
            </p>
          </Reveal>

          {/* Title + description */}
          <Reveal>
            <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight text-[#151514] sm:text-4xl lg:text-[40px] min-[2560px]:text-[52px]">
              {PRODUCTS_AEGIS.title}
            </h2>
            <p className="mt-4 max-w-4xl font-sans text-base leading-relaxed text-[#757575] sm:text-lg lg:text-[28px] lg:leading-snug">
              {PRODUCTS_AEGIS.description}
            </p>
          </Reveal>

          {/* The Problem */}
          <Reveal className="mt-8 overflow-hidden rounded-lg border border-[#757575]/40 bg-[#151514] px-5 py-5 sm:mt-10 sm:px-6 sm:py-6 lg:mt-12 lg:rounded-[8px] lg:px-7 lg:py-7">
            <h3 className="font-sans text-lg font-semibold text-white sm:text-xl lg:text-[28px]">
              {PRODUCTS_AEGIS.problem.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-white sm:text-base lg:mt-4 lg:text-xl">
              {PRODUCTS_AEGIS.problem.body}
            </p>
          </Reveal>

          {/* Pipeline stages — hidden until new assets arrive
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
            {stages.map((stage) => (
              <article
                key={stage.label}
                className="overflow-hidden rounded-lg border border-[#757575]/50 bg-black"
              >
                <div className="relative aspect-[387/270] w-full">
                  <Image
                    src={stage.image}
                    alt={stage.label}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <p className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
                  {stage.label}
                </p>
              </article>
            ))}
          </div>
          */}

          {/* Capabilities + Designed For */}
          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <ChipIcon className="size-8 text-[#313232] lg:size-9" />
                <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                  {capabilities.title}
                </h3>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-6 lg:gap-8" stagger={0.08}>
                {capabilities.items.map((item) => (
                  <StaggerItem key={item.title} as="li" className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-6" />
                    <div>
                      <p className="font-sans text-base font-semibold capitalize text-[#313232] sm:text-lg lg:text-xl">
                        {item.title}
                      </p>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-[#757575] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <LaunchIcon className="size-7 text-[#313232] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                  {designedFor.title}
                </h3>
              </Reveal>
              <Reveal className="rounded-xl bg-[#151514] px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <ul className="flex flex-col gap-5 lg:gap-6">
                  {designedFor.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckIcon className="size-6" />
                      <p className="font-sans text-base capitalize text-[#fdfdfd] sm:text-lg lg:text-xl">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* How AEGIS Works */}
          <div className="mt-12 lg:mt-16">
            <Reveal>
              <h3 className="font-sans text-2xl font-semibold text-[#313232] sm:text-3xl lg:text-[36px]">
                {howItWorks.title}
              </h3>
            </Reveal>
            <Stagger
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-8 lg:grid-cols-5 lg:gap-5"
              stagger={0.08}
            >
              {howItWorks.steps.map((step) => (
                <StaggerItem
                  key={step.number}
                  as="article"
                  className="rounded-lg bg-[#151514] px-5 py-6 sm:px-6 sm:py-7"
                >
                  <p className="font-display text-3xl font-semibold text-aurora-lime lg:text-[40px]">
                    {step.number}
                  </p>
                  <p className="mt-3 font-sans text-lg font-semibold text-white lg:text-[22px]">
                    {step.title}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#f8fbfe] lg:text-base">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Product Status */}
          <Reveal className="mt-10 rounded-lg border-2 border-[#92ac00] bg-[#f7fbe8] px-5 py-5 sm:mt-12 sm:px-6 lg:px-7 lg:py-6">
            <div className="flex items-center gap-2">
              <InfoIcon className="size-5 text-[#242424] lg:size-6" />
              <h3 className="font-sans text-lg font-semibold text-[#242424] sm:text-xl lg:text-2xl">
                {status.title}
              </h3>
            </div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#242424] sm:text-base lg:text-xl">
              {status.body}
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-10 flex flex-col gap-6 rounded-xl bg-[#151514] px-6 py-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="font-sans text-2xl font-semibold text-[#fcfcfe] sm:text-3xl lg:text-[32px]">
              {cta.title}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <AppLink
                href={cta.pilotHref}
                className="inline-flex items-center justify-center rounded-xl bg-aurora-lime px-8 py-4 font-sans text-lg font-semibold text-[#242424] transition-opacity hover:opacity-90 lg:text-[28px]"
              >
                {cta.pilotLabel}
              </AppLink>
            </div>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ProductsAegis;
