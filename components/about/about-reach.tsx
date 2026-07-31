import { AppLink } from "@/components/layout/app-link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { ABOUT_WIDER_REACH } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function AboutReach() {
  const { title, stats, ctas } = ABOUT_WIDER_REACH;

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="pb-14 pt-4 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-8">
        <SiteContent>
          <div
            className={cn(
              "rounded-2xl bg-black px-5 py-10 text-center",
              "sm:rounded-3xl sm:px-8 sm:py-12",
              "lg:rounded-[1.75rem] lg:px-10 lg:py-14 xl:px-14",
            )}
          >
            <h2
              className={cn(
                "font-display font-bold uppercase tracking-tight text-white",
                "text-xl sm:text-2xl lg:text-[1.75rem]",
              )}
            >
              {title}
            </h2>

            <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 lg:mt-14 lg:grid-cols-4 lg:gap-6">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <p className="font-display text-3xl font-semibold tabular-nums text-white sm:text-4xl lg:text-[2.5rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-44 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-white/80 sm:text-xs lg:max-w-none lg:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:gap-5">
              {ctas.map((cta) => (
                <AppLink
                  key={cta.id}
                  href={cta.href}
                  className={cn(
                    "inline-flex items-center justify-center",
                    "rounded-xl px-8 py-4",
                    "min-h-14 min-w-56",
                    "font-sans font-semibold transition-opacity hover:opacity-90",
                    "text-lg sm:text-xl lg:text-2xl",
                    "sm:min-h-[3.75rem] sm:min-w-[16rem] sm:rounded-2xl sm:px-10 sm:py-5",
                    "lg:min-h-[4.5rem] lg:min-w-[18rem] lg:px-12 lg:py-6",
                    cta.variant === "primary"
                      ? "bg-aurora-lime text-[#151514] sm:min-h-[4.75rem] lg:min-h-[5.25rem]"
                      : "border-2 border-aurora-lime bg-transparent text-white",
                  )}
                >
                  {cta.label}
                </AppLink>
              ))}
            </div>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
}
