import { PageHero } from "@/components/layout/page-hero";
import { IMAGES, ROUTES } from "@/lib/constants";

const HomeHero = () => {
  return (
    <PageHero
      title={
        <>
          <span className="block">A one stop</span>
          <span className="block whitespace-nowrap">
            AI &amp; robotics solution
          </span>
        </>
      }
      media={{ type: "video", src: IMAGES.HERO_VIDEO }}
      cta={{ label: "Learn More", href: ROUTES.BASE }}
    />
  );
};

export default HomeHero;
