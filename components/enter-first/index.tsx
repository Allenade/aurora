import EnterFirstEnroll from "./enter-first-enroll";
import EnterFirstFaq from "./enter-first-faq";
import EnterFirstHardware from "./enter-first-hardware";
import EnterFirstHero from "./enter-first-hero";
import EnterFirstProgram from "./enter-first-program";
import EnterFirstProve from "./enter-first-prove";
import EnterFirstTracks from "./enter-first-tracks";
import { TrackSelectionProvider } from "./track-selection";
import { getEnterFirstCatalog } from "@/lib/enter-first/courses";

export { EnterFirstButton } from "./enter-first-button";

const EnterFirstPage = async () => {
  const courses = await getEnterFirstCatalog({ revalidate: false });

  return (
    <TrackSelectionProvider>
      <EnterFirstHero />
      <EnterFirstTracks courses={courses} />
      <EnterFirstProgram courses={courses} />
      <EnterFirstHardware />
      <EnterFirstProve courses={courses} />
      <EnterFirstEnroll courses={courses} />
      <EnterFirstFaq courses={courses} />
    </TrackSelectionProvider>
  );
};

export default EnterFirstPage;
