import {
  CheckIcon,
  IdeaChipIcon,
  InstitutionBuildingIcon,
} from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PRODUCTS_INDUSTRY } from "@/lib/constants";

const ProductsIndustry = () => {
  const { industry, partners } = PRODUCTS_INDUSTRY;

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20 min-[2560px]:py-24">
        <SiteContent>
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold uppercase leading-tight text-[#151514] sm:text-3xl lg:text-4xl xl:text-[44px] min-[2560px]:text-[56px]">
              {PRODUCTS_INDUSTRY.title}
            </h2>
          </Reveal>

          <Stagger
            className="mt-10 grid gap-10 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16"
            stagger={0.12}
          >
            <StaggerItem>
              <div className="mb-5 flex items-center gap-3 lg:mb-6">
                <InstitutionBuildingIcon className="size-7 text-[#313232] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                  {industry.title}
                </h3>
              </div>
              <div className="rounded-xl bg-[#151514] px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <ul className="flex flex-col gap-5 lg:gap-6">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 size-6 shrink-0" />
                      <p className="font-sans text-base text-[#fdfdfd] sm:text-lg lg:text-xl">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mb-5 flex items-center gap-3 lg:mb-6">
                <IdeaChipIcon className="size-7 text-[#313232] lg:size-8" />
                <h3 className="font-sans text-xl font-semibold text-[#313232] lg:text-[28px]">
                  {partners.title}
                </h3>
              </div>
              <div className="rounded-xl bg-[#151514] px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <ul className="flex flex-col gap-5 lg:gap-6">
                  {partners.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 size-6 shrink-0" />
                      <p className="font-sans text-base text-[#fdfdfd] sm:text-lg lg:text-xl">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </Stagger>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ProductsIndustry;
