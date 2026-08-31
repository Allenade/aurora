import CohortEnroll from "./cohort-enroll";
import CohortFaq from "./cohort-faq";
import CohortHardware from "./cohort-hardware";
import CohortHero from "./cohort-hero";
import CohortProgram from "./cohort-program";
import CohortProve from "./cohort-prove";
import CohortTracks from "./cohort-tracks";

const CohortPage = () => {
  return (
    <>
      <CohortHero />
      <CohortTracks />
      <CohortProgram />
      <CohortHardware />
      <CohortProve />
      <CohortEnroll />
      <CohortFaq />
    </>
  );
};

export default CohortPage;
