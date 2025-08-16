"use client";
import DocsLayout from "@/components/docs-layout";
import { ReactNode } from "react";

const sections = [
  {
    id: "navbar-description",
    label: "Description",
  },
  {
    id: "navbar-installation",
    label: "Installation",
  },
  {
    id: "navbar-usage",
    label: "Usage Examples",
  },
];

export default function lauout({ children }: { children: ReactNode }) {
  return <DocsLayout sections={sections}>{children}</DocsLayout>;
}
