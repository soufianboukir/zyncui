"use client";

import DocsLayout from "@/components/docs-layout";
import { ReactNode } from "react";

const sections = [
  { id: "password-reset-description", label: "Description" },
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage examples" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout sections={sections}>{children}</DocsLayout>;
}
