import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/legal-document";
import { PRIVACY_POLICY } from "@/lib/legal/policies";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.description,
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentView document={PRIVACY_POLICY} />;
}
