import Image from "next/image";
import { AppLink } from "@/components/layout/app-link";
import {
  CheckIcon,
  ChipIcon,
  InfoIcon,
  LaunchIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PRODUCTS_BRAINIAC } from "@/lib/constants";

const ProductsBrainiac = () => {
  const { pipeline, applications, cta, status, stages } = PRODUCTS_BRAINIAC;

  return (
    <section className="bg-[#151514]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20 min-[2560px]:py-24">
        <SiteContent>
          <Reveal className="flex items-center gap-3">
            <span className="h-2 w-9 shrink-0 bg-[#fcfcfe]" aria-hidden />
            <p className="font-display text-xs uppercase tracking-wide text-[#fcfcfe] sm:text-sm lg:text-base xl:text-[22px]">
              {PRODUCTS_BRAINIAC.eyebrow}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-[#fcfcfe] sm:text-4xl lg:text-[40px] min-[2560px]:text-[52px]">
              {PRODUCTS_BRAINIAC.title}
            </h2>
            <p className="mt-4 max-w-5xl font-sans text-base leading-relaxed text-[#fcfcfe] sm:text-lg lg:text-[28px] lg:leading-snug">
              {PRODUCTS_BRAINIAC.description}
            </p>
          </Reveal>

          <Stagger
            className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5"
            stagger={0.08}
          >
            {stages.map((stage) => (
              <StaggerItem
                key={stage.label}
                as="article"
                className="overflow-hidden rounded-lg border border-[#fcfcfe]/30 bg-black"
              >
                <div className="relative aspect-[774/675] w-full bg-black">
                  <Image
                    src={stage.image}
                    alt={stage.label}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <ChipIcon className="size-8 text-[#fcfcfe] lg:size-9" />
                <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] lg:text-[28px]">
                  {pipeline.title}
                </h3>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-6 lg:gap-8" stagger={0.08}>
                {pipeline.items.map((item) => (
                  <StaggerItem key={item.title} as="li" className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-6" />
                    <div>
                      <p className="font-sans text-base font-semibold capitalize text-[#fcfcfe] sm:text-lg lg:text-xl">
                        {item.title}
                      </p>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-[#fcfcfe]/80 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <LaunchIcon className="size-7 text-[#fcfcfe] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#fcfcfe] lg:text-[28px]">
                  {applications.title}
                </h3>
              </Reveal>
              <Reveal className="rounded-xl bg-black px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <ul className="flex flex-col gap-5 lg:gap-6">
                  {applications.items.map((item) => (
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

          <Reveal className="mt-10 rounded-lg border-2 border-[#92ac00] bg-transparent px-5 py-5 sm:mt-12 sm:px-6 lg:px-7 lg:py-6">
            <div className="flex items-center gap-2">
              <InfoIcon className="size-5 text-[#fcfcfe] lg:size-6" />
              <h3 className="font-sans text-lg font-semibold text-[#fcfcfe] sm:text-xl lg:text-2xl">
                {status.title}
              </h3>
            </div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#fcfcfe] sm:text-base lg:text-xl">
              {status.body}
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-6 rounded-xl bg-black px-6 py-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="font-sans text-2xl font-semibold text-[#fcfcfe] sm:text-3xl lg:text-[32px]">
              {cta.title}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <AppLink
                href={cta.validationHref}
                className="inline-flex items-center justify-center rounded-xl bg-aurora-lime px-8 py-4 font-sans text-lg font-semibold text-[#242424] transition-opacity hover:opacity-90 lg:text-[28px]"
              >
                {cta.validationLabel}
              </AppLink>
            </div>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ProductsBrainiac;
