"use client";

import DocsLayout from "@/components/docs-layout";
import { ReactNode } from "react";

const sections = [
  { id: "prerequisites", label: "Prerequisites" },
  { id: "nextjs", label: "Next.js installation" },
  { id: "reactjs", label: "React.js installation" },
  { id: "otherFramwork", label: "Other framework?" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout sections={sections}>{children}</DocsLayout>;
}
