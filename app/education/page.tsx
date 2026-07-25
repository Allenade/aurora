import EducationPage from "@/components/education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Aurora Education — subsidised cohorts, remote robotics labs, workshops, and internship pathways for African engineers.",
};

export default function Education() {
  return <EducationPage />;
}
