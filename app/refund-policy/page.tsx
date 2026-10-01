import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/legal-document";
import { REFUND_POLICY } from "@/lib/legal/policies";

export const metadata: Metadata = {
  title: REFUND_POLICY.title,
  description: REFUND_POLICY.description,
};

export default function RefundPolicyPage() {
  return <LegalDocumentView document={REFUND_POLICY} />;
}
