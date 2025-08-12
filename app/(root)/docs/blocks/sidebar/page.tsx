"use client";

import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import SidebarForm1 from "@/components/dashboard/sidebar-form-1";
import { sidebar1Code, sidebar1Example } from "@/constants/sidebar/sidebar";

export default function SidebarForms() {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="sidebar-description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Sidebar Component Library
          </h1>
          <p>
            A collection of flexible and responsive sidebar components built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            These sidebars provide various layouts and styles to enhance navigation in your apps.
          </p>
          <p>
            Each variant prioritizes{" "}
            <span className="font-semibold">usability, accessibility, and customization</span>, making
            integration seamless across different project requirements.
          </p>
          <p>
            Designed for smooth animations, responsive design, and clear visual hierarchy to help users
            navigate your app efficiently.
          </p>
        </section>

        <section
          id="installation"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-6xl space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h2>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">1. Set up your project</h3>
            <p>
              Make sure your project is configured with React and Tailwind CSS before adding sidebar
              components. Follow the{" "}
              <Link
                href={"/docs/installation"}
                className="font-semibold text-blue-600 underline dark:text-blue-400"
              >
                official installation guide
              </Link>{" "}
              for detailed setup instructions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              2. Install sidebar components and dependencies
            </h3>
            <CodeBlock
              code={`npx shadcn@latest add sidebar menu\nnpm install @headlessui/react`}
              copy
              language="shell"
            />
            <p className="mt-2">
              This command will:
              <ul className="mt-1 ml-5 list-inside list-disc space-y-1">
                <li>Install UI components like Sidebar and Menu to your components folder</li>
                <li>Add any required dependencies, such as Headless UI, for accessibility</li>
              </ul>
            </p>
          </div>
        </section>

        <section
          id="usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-5xl space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Sidebar Form 1 - A simple sidebar with navigation grouped by section
            </h2>
            <p>
              A clean vertical sidebar with collapsible menu items and icons. Ideal for admin dashboards.
              Paste this component code into{" "}
              <code>
                <Badge variant="secondary">@/components/sidebar/sidebar-form-1.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<SidebarForm1 />} code={sidebar1Code} onlyPro />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={sidebar1Example} language="tsx" copy />
          </div>

         
        </section>
      </div>
    </main>
  );
}
