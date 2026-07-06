import HomePage from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora",
  description: "Aurora",
};

export default function Home() {
  return <HomePage />;
}
