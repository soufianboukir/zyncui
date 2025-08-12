import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { LoginForm1 } from "@/components/auth/login/login-form-1";
import { login1Code } from "@/constants/auth/login";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";

export default function LoginForms() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-8 sm:space-y-10">
        <section id="login-description" className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            Login
          </h1>
          <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none text-black/80 dark:text-white/80">
            <p>
              A sleek and fully responsive login form component built with React and Tailwind CSS.
            </p>
            <br />
            <p>
              Designed for modern authentication flows, this component includes multiple layout
              variations—from minimal single-column forms to split-screen designs with imagery or
              illustrations. Each variant focuses on user experience, ensuring clarity,
              accessibility, and ease of use across devices.
            </p>
            <br />
            <p>
              With built-in form validation, customizable input fields, and support for password
              visibility toggles, the login form can be seamlessly adapted to match your
              brand&apos;s style. The clean design language ensures it fits perfectly with other
              components in your library while maintaining visual harmony and usability standards.
            </p>
          </div>
        </section>

        <section id="installation" className="space-y-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            Installation
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="mb-3 text-lg font-semibold sm:text-xl">1. Set up your project</h2>
              <p className="text-sm sm:text-base">
                Before installing this component, make sure your development environment is ready.
                Follow the{" "}
                <Link
                  href={"/docs/installation"}
                  className="font-bold text-blue-600 underline dark:text-blue-400"
                >
                  installation guide
                </Link>{" "}
                to configure your project.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold sm:text-xl">
                2. Install components and dependencies
              </h2>
              <div className="w-full overflow-hidden">
                <CodeBlock
                  code={`npx shadcn@latest add button input card
npm install zod`}
                  copy
                  language="shell"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-base font-medium sm:text-lg">This command will:</h3>
            <ul className="ml-3 list-inside list-disc space-y-1 text-sm sm:text-base">
              <li>install necessary dependencies and add them to package.json</li>
              <li>add components required by this block to work to components/ui</li>
            </ul>
          </div>
        </section>

        <section id="usage">
          <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            Usage
          </h1>
          <PreviewWithCodeTabs preview={<LoginForm1 />} code={login1Code} onlyPro />
        </section>
      </div>
    </main>
  );
}
