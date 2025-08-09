"use client";

import DocsLayout from "@/components/docs-layout";
import { ReactNode } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "faqs", label: "FAQs" },
  { id: "whoIsItFor", label: "Who is for?" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout sections={sections}>{children}</DocsLayout>;
}
