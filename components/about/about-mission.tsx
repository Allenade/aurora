import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { ABOUT_MISSION } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AboutMission = () => {
  const { cards } = ABOUT_MISSION;

  return (
    <section className="bg-[#fcfcfe]">
      <SiteShell className="py-10 sm:py-12 lg:py-14 xl:py-16">
        <SiteContent>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
            {cards.map((card) => (
              <article
                key={card.id}
                className={cn(
                  "rounded-2xl bg-black px-6 py-7 sm:rounded-[1.25rem] sm:px-8 sm:py-8 lg:px-9 lg:py-9",
                  card.wide && "lg:col-span-2",
                )}
              >
                <div className="w-fit">
                  <h2 className="font-sans text-lg font-semibold text-aurora-lime sm:text-xl lg:text-[1.35rem]">
                    {card.title}
                  </h2>
                  <span
                    className="mt-2 block h-px w-full bg-aurora-lime sm:mt-2.5"
                    aria-hidden
                  />
                </div>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white sm:mt-5 sm:text-[15px] lg:text-base lg:leading-relaxed">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default AboutMission;
