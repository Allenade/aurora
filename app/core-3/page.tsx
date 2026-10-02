import EnterFirstPage from "@/components/enter-first";
import type { Metadata } from "next";

// Always render with the current course list from the dashboard.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Core 3.0",
  description:
    "Sign up for the Aurora Core 3.0 workshop — choose your track and register.",
};

export default function Core3Page() {
  return <EnterFirstPage />;
}
