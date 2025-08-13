"use client";

import DocsLayout from "@/components/docs-layout";
import { ReactNode } from "react";

const sections = [
  { id: "nextjs-structure", label: "Next.js Structure" },
  { id: "react-structure", label: "React Structure" },
  { id: "components", label: "Finding Components" },
  { id: "next-steps", label: "Next Steps" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout sections={sections}>{children}</DocsLayout>;
}
