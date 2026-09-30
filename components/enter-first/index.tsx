import EnterFirstEnroll from "./enter-first-enroll";
import EnterFirstFaq from "./enter-first-faq";
import EnterFirstHardware from "./enter-first-hardware";
import EnterFirstHero from "./enter-first-hero";
import EnterFirstProgram from "./enter-first-program";
import EnterFirstProve from "./enter-first-prove";
import EnterFirstTracks from "./enter-first-tracks";
import { TrackSelectionProvider } from "./track-selection";

export { EnterFirstButton } from "./enter-first-button";

const EnterFirstPage = () => {
  return (
    <TrackSelectionProvider>
      <EnterFirstHero />
      <EnterFirstTracks />
      <EnterFirstProgram />
      <EnterFirstHardware />
      <EnterFirstProve />
      <EnterFirstEnroll />
      <EnterFirstFaq />
    </TrackSelectionProvider>
  );
};

export default EnterFirstPage;
