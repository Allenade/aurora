import { HOME_EXPERIENCE } from "@/lib/constants";
import HomeGapSplit from "./home-gap-split";

const HomeExperience = () => {
  const { titleLines, stats, problem, solution, cta, image } = HOME_EXPERIENCE;

  return (
    <HomeGapSplit
      imageSide="end"
      titleLines={titleLines}
      stats={stats}
      problem={problem}
      solution={solution}
      primaryCta={cta}
      image={image}
      imagePosition="center"
    />
  );
};

export default HomeExperience;
