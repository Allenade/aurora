import CohortPage from "@/components/cohort";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cohort",
  description:
    "Sign up for the Aurora Core 3.0 Workshop — choose your track and register for lifetime cohort access.",
};

export default function Cohort() {
  return <CohortPage />;
}
