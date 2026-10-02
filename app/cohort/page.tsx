import CohortPage from "@/components/cohort";
import type { Metadata } from "next";

// Always render with the current course list from the dashboard.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cohort",
  description:
    "Sign up for the Aurora Educators Program (AEP) — choose your track and register for lifetime cohort access.",
};

export default function Cohort() {
  return <CohortPage />;
}
