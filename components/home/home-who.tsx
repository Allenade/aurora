import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/components/motion";
import { HOME_WHO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeWho = () => {
  const { title, description, stats } = HOME_WHO;

  return (
    <section className="bg-black">
      <SiteShell className="py-16 sm:py-20 lg:py-24 xl:py-28">
        <SiteContent>
          <div className="max-w-4xl lg:max-w-5xl">
            <Reveal as="h2" className="font-display text-2xl font-semibold uppercase tracking-wide text-[#fcfcfe] sm:text-3xl lg:text-[40px] xl:text-[48px]">
              {title}
            </Reveal>

            <Reveal as="p" delay={0.08} className="mt-6 font-sans text-sm leading-relaxed text-[#fcfcfe]/90 sm:mt-8 sm:text-base lg:mt-10 lg:text-lg xl:text-xl">
              {description}
            </Reveal>

            <Stagger
              as="ul"
              className="mt-12 flex w-full flex-col gap-8 sm:mt-14 sm:flex-row sm:items-stretch sm:gap-0 lg:mt-16"
            >
              {stats.map((stat, index) => (
                <StaggerItem
                  key={stat.label}
                  as="li"
                  className={cn(
                    "flex flex-1 flex-col items-start text-left",
                    index === 0 ? "sm:pr-8 lg:pr-10" : "sm:border-l sm:border-white/30 sm:px-8 lg:px-10",
                  )}
                >
                  <CountUp
                    value={stat.value}
                    className="font-display text-4xl font-semibold tabular-nums text-[#fcfcfe] sm:text-5xl lg:text-[56px]"
                  />
                  <p className="mt-2 font-sans text-xs text-white/80 sm:mt-3 sm:text-sm lg:text-base">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default HomeWho;
