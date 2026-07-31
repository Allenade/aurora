import AboutPage from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aurora Robotics — Africa's one-stop AI and robotics solution. We train talent, build systems, and move AI & robotics from possibility to deployment.",
};

export default function AboutUs() {
  return <AboutPage />;
}
