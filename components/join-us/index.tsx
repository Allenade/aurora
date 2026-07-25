import JoinUsBecome from "./join-us-become";
import JoinUsBring from "./join-us-bring";
import JoinUsCommunity from "./join-us-community";
import JoinUsGalaxy from "./join-us-galaxy";
import JoinUsHero from "./join-us-hero";
import JoinUsMove from "./join-us-move";
import JoinUsSign from "./join-us-sign";

const JoinUsPage = () => {
  return (
    <>
      <JoinUsHero />
      <JoinUsGalaxy />
      <JoinUsCommunity />
      <JoinUsSign />
      <JoinUsBecome />
      <JoinUsBring />
      <JoinUsMove />
    </>
  );
};

export default JoinUsPage;
