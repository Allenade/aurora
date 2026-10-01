import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/legal-document";
import { TERMS } from "@/lib/legal/policies";

export const metadata: Metadata = {
  title: TERMS.title,
  description: TERMS.description,
};

export default function TermsPage() {
  return <LegalDocumentView document={TERMS} />;
}
