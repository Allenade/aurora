import CohortEnroll from "./cohort-enroll";
import CohortFaq from "./cohort-faq";
import CohortHardware from "./cohort-hardware";
import CohortHero from "./cohort-hero";
import CohortProgram from "./cohort-program";
import CohortProve from "./cohort-prove";
import EnterFirstTracks from "@/components/enter-first/enter-first-tracks";
import { TrackSelectionProvider } from "@/components/enter-first/track-selection";
import { getEnterFirstCatalog } from "@/lib/enter-first/courses";

const CohortPage = async () => {
  const courses = await getEnterFirstCatalog({ revalidate: false });

  return (
    <TrackSelectionProvider>
      <CohortHero />
      <EnterFirstTracks courses={courses} />
      <CohortProgram courses={courses} />
      <CohortHardware />
      <CohortProve courses={courses} />
      <CohortEnroll courses={courses} />
      <CohortFaq courses={courses} />
    </TrackSelectionProvider>
  );
};

export default CohortPage;
