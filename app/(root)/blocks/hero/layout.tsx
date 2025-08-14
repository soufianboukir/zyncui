"use client";

import DocsLayout from "@/components/docs-layout";
import { ReactNode } from "react";

const sections = [
  { id: "hero-description", label: "Description" },
  { id: "hero-installation", label: "Installation" },
  { id: "hero-usage", label: "Usage Examples" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout sections={sections}>{children}</DocsLayout>;
}
