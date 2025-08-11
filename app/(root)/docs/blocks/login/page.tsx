
import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { LoginForm1 } from "@/components/auth/login/login-form-1";
import { login1Code } from "@/constants/auth/login";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";

export default function LoginForms() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-base sm:text-lg">
      <div className="space-y-8 sm:space-y-10">
        <section id="login-description" className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Login
          </h1>
          <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert text-black/80 dark:text-white/80 max-w-none">
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
              visibility toggles, the login form can be seamlessly adapted to match your brand's
              style. The clean design language ensures it fits perfectly with other components in
              your library while maintaining visual harmony and usability standards.
            </p>
          </div>
        </section>

        <section id="installation" className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">1. Set up your project</h2>
              <p className="text-sm sm:text-base">
                Before installing this component, make sure your development environment is ready.
                Follow the{" "}
                <Link href={"/docs/installation"} className="font-bold underline text-blue-600 dark:text-blue-400">
                  installation guide
                </Link>{" "}
                to configure your project.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">2. Install components and dependencies</h2>
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
            <h3 className="text-base sm:text-lg font-medium mb-2">This command will:</h3>
            <ul className="text-sm sm:text-base ml-3 list-inside list-disc space-y-1">
              <li>install necessary dependencies and add them to package.json</li>
              <li>add components required by this block to work to components/ui</li>
            </ul>
          </div>
        </section>

        <section id="usage">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Usage
          </h1>
          <PreviewWithCodeTabs preview={<LoginForm1 />} code={login1Code} onlyPro />
        </section>
      </div>
    </main>
  );
}