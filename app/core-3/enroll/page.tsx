import { Suspense } from "react";
import EnterFirstEnrollForm from "@/components/enter-first/enter-first-enroll-form";
import { getEnterFirstCatalog } from "@/lib/enter-first/courses";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Core 3.0 Enrollment",
  description: "Enroll in Aurora Core 3.0 and secure your track seat.",
};

export default async function Core3EnrollPage() {
  const courses = await getEnterFirstCatalog({ revalidate: false });

  return (
    <Suspense
      fallback={
        <div className="bg-white py-20 text-center font-sans text-sm text-[#757575]">
          Loading enrollment…
        </div>
      }
    >
      <EnterFirstEnrollForm courses={courses} />
    </Suspense>
  );
}
