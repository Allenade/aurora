import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/legal-document";
import { COOKIE_POLICY } from "@/lib/legal/policies";

export const metadata: Metadata = {
  title: COOKIE_POLICY.title,
  description: COOKIE_POLICY.description,
};

export default function CookiePolicyPage() {
  return <LegalDocumentView document={COOKIE_POLICY} />;
}
