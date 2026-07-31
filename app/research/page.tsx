import ResearchPage from "@/components/research";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Aurora research — theory, simulation, and hands-on robotics systems",
};

export default function Research() {
  return <ResearchPage />;
}
