import JoinUsPage from "@/components/join-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join Aurora — builders, researchers, students, engineers, and partners shaping Africa's AI and robotics future.",
};

export default function JoinUs() {
  return <JoinUsPage />;
}
