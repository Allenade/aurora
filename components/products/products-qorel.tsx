import Link from "next/link";
import {
  ArchitectureHeaderIcon,
  CheckIcon,
  ChipIcon,
  CloudBoxedIcon,
  DurableStreamFlowIcon,
  FlowArrowIcon,
  InfoIcon,
  LaunchIcon,
  MachinesFlowIcon,
  StreamforgeFlowIcon,
  ValidateBoxedIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { PRODUCTS_QOREL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FLOW_ICONS = {
  machines: MachinesFlowIcon,
  streamforge: StreamforgeFlowIcon,
  durable: DurableStreamFlowIcon,
  validate: ValidateBoxedIcon,
  cloud: CloudBoxedIcon,
} as const;

const ProductsQorel = () => {
  const { architecture, connects, protects, proofPoints, status, cta } =
    PRODUCTS_QOREL;

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20 min-[2560px]:py-24">
        <SiteContent>
          <div className="flex items-center gap-3">
            <span className="h-2 w-9 shrink-0 bg-[#313232]" aria-hidden />
            <p className="font-display text-xs uppercase tracking-wide text-[#313232] sm:text-sm lg:text-base xl:text-[22px]">
              {PRODUCTS_QOREL.eyebrow}
            </p>
          </div>

          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-[#151514] sm:text-4xl lg:text-[40px] min-[2560px]:text-[52px]">
            {PRODUCTS_QOREL.title}
          </h2>
          <p className="mt-4 max-w-5xl font-sans text-base leading-relaxed text-[#757575] sm:text-lg lg:text-[28px] lg:leading-snug">
            {PRODUCTS_QOREL.description}
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-[#757575]/40 bg-[#151514] px-5 py-5 sm:mt-10 sm:px-6 sm:py-6 lg:mt-12 lg:px-7 lg:py-7">
            <h3 className="font-sans text-lg font-semibold text-white sm:text-xl lg:text-[28px]">
              {PRODUCTS_QOREL.problem.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-white sm:text-base lg:mt-4 lg:text-xl">
              {PRODUCTS_QOREL.problem.body}
            </p>
          </div>

          <div className="mt-10 lg:mt-14">
            <div className="mb-5 flex items-center gap-3 lg:mb-6">
              <ArchitectureHeaderIcon className="size-7 text-[#313232] lg:size-8" />
              <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                {architecture.title}
              </h3>
            </div>

            <div className="rounded-xl bg-[#151514] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
              <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-1">
                {architecture.steps.map((step, index) => {
                  const Icon = FLOW_ICONS[step.icon];
                  const accent = step.accent;
                  return (
                    <div
                      key={step.label}
                      className="flex w-full flex-col items-center lg:w-auto lg:flex-1 lg:flex-row lg:items-center"
                    >
                      <div className="flex w-full flex-col items-center text-center lg:min-w-0">
                        <Icon
                          className={cn(
                            "size-12 lg:size-14",
                            accent ? "text-aurora-lime" : "text-[#fcfcfe]",
                          )}
                        />
                        <p
                          className={cn(
                            "mt-3 font-sans text-sm font-semibold uppercase tracking-wide sm:text-base lg:text-[15px]",
                            accent ? "text-aurora-lime" : "text-[#fcfcfe]",
                          )}
                        >
                          {step.label}
                        </p>
                        <p className="mt-1 max-w-[11rem] font-sans text-xs text-[#a3a3a3] sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                      {index < architecture.steps.length - 1 ? (
                        <FlowArrowIcon className="mt-4 h-3 w-8 shrink-0 rotate-90 text-[#fcfcfe] lg:mt-0 lg:ml-1 lg:rotate-0" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <ChipIcon className="size-7 text-[#313232] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                  {connects.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-6 lg:gap-8">
                {connects.items.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-6" />
                    <p className="font-sans text-sm leading-relaxed text-[#313232] sm:text-base lg:text-xl lg:leading-snug">
                      <span className="font-semibold">{item.title}: </span>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <LaunchIcon className="size-7 text-[#313232] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                  {protects.title}
                </h3>
              </div>
              <div className="rounded-xl bg-[#151514] px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <ul className="flex flex-col gap-5 lg:gap-6">
                  {protects.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 size-6" />
                      <p className="font-sans text-base text-[#fdfdfd] sm:text-lg lg:text-xl">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h3 className="font-sans text-2xl font-semibold text-[#313232] sm:text-3xl lg:text-[36px]">
              {proofPoints.title}
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
              {proofPoints.items.map((point) => (
                <article
                  key={point.location}
                  className="rounded-xl bg-[#151514] px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8"
                >
                  <p className="font-sans text-lg font-semibold text-aurora-lime sm:text-xl lg:text-[28px]">
                    {point.location}
                  </p>
                  <p className="mt-3 font-sans text-base text-[#fcfcfe] sm:text-lg lg:text-xl">
                    {point.metric}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-[#a3a3a3] sm:text-base lg:text-lg">
                    {point.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-lg border-2 border-[#92ac00] bg-[#f7fbe8] px-5 py-5 sm:mt-12 sm:px-6 lg:px-7 lg:py-6">
            <div className="flex items-center gap-2">
              <InfoIcon className="size-5 text-[#242424] lg:size-6" />
              <h3 className="font-sans text-lg font-semibold text-[#242424] sm:text-xl lg:text-2xl">
                {status.title}
              </h3>
            </div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#242424] sm:text-base lg:text-xl">
              {status.body}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-xl bg-[#151514] px-6 py-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="font-sans text-2xl font-semibold text-[#fcfcfe] sm:text-3xl lg:text-[32px]">
              {cta.title}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={cta.pilotHref}
                className="inline-flex items-center justify-center rounded-xl border-[2.5px] border-aurora-lime px-8 py-4 font-sans text-lg font-semibold text-aurora-lime transition-opacity hover:opacity-90 lg:text-[28px]"
              >
                {cta.pilotLabel}
              </Link>
              <Link
                href={cta.tourHref}
                className="inline-flex items-center justify-center rounded-xl bg-aurora-lime px-8 py-4 font-sans text-lg font-semibold text-[#242424] transition-opacity hover:opacity-90 lg:text-[28px]"
              >
                {cta.tourLabel}
              </Link>
            </div>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ProductsQorel;
