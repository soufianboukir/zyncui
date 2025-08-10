import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { LoginForm1 } from "@/components/auth/login/login-form-1";
import { login1Code } from "@/constants/auth/login";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
export default function LoginForms() {
  return (
    <main className="text-lg">
      <div className="space-y-10">
        <section id="login-description" className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Login
          </h1>
          <div className="prose prose-gray dark:prose-invert text-black/80 dark:text-white/80">
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
              visibility toggles, the login form can be seamlessly adapted to match your brand’s
              style. The clean design language ensures it fits perfectly with other components in
              your library while maintaining visual harmony and usability standards.
            </p>
          </div>
        </section>

        <section id="installation">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h1>

          <div className="mt-5">
            <h2 className="text-xl">1. Set up your project</h2>
            <p className="mt-2">
              Before installing this component, make sure your development environment is ready.
              Follow the{" "}
              <Link href={"/docs/installation"} className="font-bold underline">
                installation guide
              </Link>{" "}
              to configure your project.
            </p>
            <br />
            <br />
            <h2 className="text-xl">2. Install components and dependencies</h2>
            <CodeBlock
              code={`npx shadcn@latest add button input card
npm install zod`}
              copy
              language="shell"
            />
          </div>

          <div className="mt-4">
            <h1 className="text-lg">This command will:</h1>

            <ul className="mt-2 ml-3 list-inside list-disc">
              <li>install necessary dependencies and add them to package.json</li>
              <li>add components required by this block to work to components/ui</li>
            </ul>
          </div>
        </section>

        <section id="usage">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Usage
          </h1>
          <PreviewWithCodeTabs preview={<LoginForm1 />} code={login1Code} onlyPro />
        </section>
      </div>
    </main>
  );
}
