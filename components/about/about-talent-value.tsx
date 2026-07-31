import Image from "next/image";
import { DocumentIcon } from "@/components/icons/figma-icons";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { ABOUT_TALENT_VALUE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AboutTalentValue = () => {
  const { title, description, engines } = ABOUT_TALENT_VALUE;

  return (
    <section id="services" className="scroll-mt-24 bg-black">
      <SiteShell className="py-12 sm:py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <div className="mx-auto w-full text-center">
            <h2
              className={cn(
                "font-display font-bold uppercase tracking-tight text-white",
                "text-lg leading-tight sm:text-2xl lg:text-[1.75rem] xl:text-[2rem]",
                "max-sm:px-1 max-sm:whitespace-normal sm:whitespace-nowrap",
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mx-auto mt-5 w-full max-w-5xl font-sans text-sm leading-relaxed text-white/80",
                "sm:mt-6 sm:text-base lg:text-lg",
              )}
            >
              {description}
            </p>
          </div>

          <ul className="mx-auto mt-10 flex max-w-5xl flex-col gap-3 sm:mt-12 sm:gap-4 lg:mt-14">
            {engines.map((engine) => {
              const featured = Boolean(engine.featured);

              return (
                <li key={engine.id}>
                  <article
                    className={cn(
                      "flex items-center gap-4 rounded-2xl px-4 py-4",
                      "sm:gap-5 sm:rounded-[1.25rem] sm:px-6 sm:py-5",
                      "lg:gap-6 lg:px-8 lg:py-6",
                      featured
                        ? "border border-aurora-lime bg-[#0a0a0a]"
                        : "border border-white/15 bg-[#0a0a0a]",
                    )}
                  >
                    <p className="shrink-0 font-display text-lg font-bold tabular-nums text-aurora-lime sm:text-xl lg:text-2xl">
                      {engine.number}
                    </p>

                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="font-sans text-base font-semibold text-white sm:text-lg lg:text-xl">
                        {engine.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-white/70 sm:text-[15px] lg:text-base">
                        {engine.body}
                      </p>
                    </div>

                    {"iconSrc" in engine && engine.iconSrc ? (
                      <Image
                        src={engine.iconSrc}
                        alt=""
                        width={56}
                        height={56}
                        className="size-11 shrink-0 rounded-xl sm:size-12 lg:size-14"
                        aria-hidden
                      />
                    ) : (
                      <div
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-[#151514] sm:size-12 lg:size-14",
                          featured && "border-aurora-lime/40 text-aurora-lime",
                        )}
                        aria-hidden
                      >
                        <DocumentIcon className="size-5 text-aurora-lime sm:size-6 lg:size-7" />
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default AboutTalentValue;
