import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ABOUT_TRACTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AboutTraction = () => {
  const { titleLines, stats } = ABOUT_TRACTION;

  return (
    <section id="traction" className="scroll-mt-24 bg-[#fcfcfe]">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <Reveal className="flex w-full flex-col items-center text-center">
            <h2
              className={cn(
                "font-display font-bold uppercase tracking-tight text-[#151514]",
                "text-xl sm:text-2xl lg:text-[1.75rem] xl:text-[2rem]",
              )}
            >
              {titleLines.map((line) => (
                <span
                  key={line}
                  className="block max-sm:whitespace-normal sm:whitespace-nowrap"
                >
                  {line}
                </span>
              ))}
            </h2>
            <span
              className="mt-5 h-px w-full bg-[#d4d4d4] sm:mt-6"
              aria-hidden
            />
          </Reveal>

          <Stagger
            as="ul"
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:mt-14 lg:grid-cols-4 lg:gap-y-14"
            stagger={0.08}
          >
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                as="li"
                className="flex flex-col items-center text-center"
              >
                <p className="font-display text-3xl font-semibold tabular-nums text-[#151514] sm:text-4xl lg:text-[2.75rem]">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#151514]/75 sm:text-xs lg:text-sm">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default AboutTraction;
