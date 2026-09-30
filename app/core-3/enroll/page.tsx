import { Suspense } from "react";
import EnterFirstEnrollForm from "@/components/enter-first/enter-first-enroll-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core 3.0 Enrollment",
  description: "Enroll in Aurora Core 3.0 and secure your track seat.",
};

export default function Core3EnrollPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-white py-20 text-center font-sans text-sm text-[#757575]">
          Loading enrollment…
        </div>
      }
    >
      <EnterFirstEnrollForm />
    </Suspense>
  );
}
