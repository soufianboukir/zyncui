import CodeBlock from "@/components/code-block";
import NavBar1 from "@/components/Navbar/navbar-compennets-1";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import { navbar1Code, navbar1Example } from "@/constants/navbar/navbar";
import Link from "next/link";

export default function NavBarForms() {
  return (
    <main>
      <div>
        <section
          id="navbar-description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Navbar Component Library
          </h1>
          <p>
            A collection of modern and fully responsive navigation bar components built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This library offers multiple variations to help you build clean and accessible
            navigation experiences.
          </p>
          <p>
            Each variant emphasizes{" "}
            <span className="font-semibold">usability, responsive behavior, and accessibility</span>{" "}
            across all devices. It features flexible layouts, sticky/fixed navigation options,
            dropdown menus, and integrated search functionalities.
          </p>
          <p>
            Designed with current web design best practices, these components ensure smooth
            integration into any project, significantly reducing development time while maintaining
            a professional UI quality.
          </p>
          <p>
            Whether you need a minimal top bar or a complex navigation layout with multi-level menus
            and actions, this library provides flexible solutions tailored to various application
            requirements.
          </p>
        </section>
        <section
          id="navbar-installation"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-6xl space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h2>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">1. Set up your project</h3>
            <p>
              Before using the navbar components, make sure your development environment is properly
              configured. Refer to the{" "}
              <Link
                href={"/docs/installation"}
                className="font-semibold text-blue-600 underline dark:text-blue-400"
              >
                official installation guide
              </Link>{" "}
              for instructions on setting up <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Tailwind CSS</span>, and required dependencies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              2. Install components and dependencies
            </h3>
            <CodeBlock
              code={`npx shadcn@latest add navbar dropdown\nnpm install lucide-react`}
              copy
              language="shell"
            />
            <p className="mt-2">
              This command will:
              <ul className="mt-1 ml-5 list-inside list-disc space-y-1">
                <li>
                  Install required dependencies and update your <code>package.json</code>.
                </li>

                <li>
                  Add navigation-related components such as <code>Navbar</code> and{" "}
                  <code>DropdownMenu</code> to your <code>components/ui</code> directory.
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section
          id="navbar-usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-5xl space-y-16"
        >
          {/* Navbar Component  */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Navbar 1 – Responsive Top Navigation
            </h2>
            <p>
              A modern and responsive top navigation bar featuring a mobile sidebar menu and clean
              desktop layout. Ideal for applications and marketing sites that require accessible
              navigation across all devices.
            </p>
            <p>
              To use this navbar, copy the component code into{" "}
              <code>
                <Badge variant="secondary">@/components/navbar/navbar-1.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<NavBar1 />} code={navbar1Code} onlyPro />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={navbar1Example} language="tsx" copy />
          </div>
        </section>
      </div>
    </main>
  );
}
