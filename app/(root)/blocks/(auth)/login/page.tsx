"use client";

import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { LoginForm1 } from "@/components/auth/login/login-form-1";
import {
  login1Code,
  login1Example,
  login2Code,
  login2Example,
  login3Code,
  login3Example,
  login4Code,
  login4Example,
} from "@/constants/auth/login";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import { LoginForm2 } from "@/components/auth/login/login-form-2";
import { LoginForm3 } from "@/components/auth/login/login-form-3";
import { LoginForm4 } from "@/components/auth/login/login-form-4";

export default function LoginForms() {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="login-description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Login Component Library
          </h1>
          <p>
            A sleek and fully responsive login form component built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This library provides multiple layout variations to suit different authentication needs.
          </p>
          <p>
            Each variant emphasizes{" "}
            <span className="font-semibold">clarity, accessibility, and ease of use</span> across
            devices, featuring built-in form validation, customizable inputs, and password
            visibility toggles.
          </p>
          <p>
            Designed with modern UI/UX principles, these components ensure consistency and seamless
            integration into your projects, reducing development time while maintaining high
            quality.
          </p>
          <p>
            Whether you need a minimal form or a complex login screen with social authentication
            options, this library offers flexible solutions tailored to various use cases.
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
              Before installing the login components, ensure your development environment is
              properly configured. Refer to the{" "}
              <Link
                href={"/docs/installation"}
                className="font-semibold text-blue-600 underline dark:text-blue-400"
              >
                official installation guide
              </Link>{" "}
              for detailed instructions on setting up React, Tailwind CSS, and required
              dependencies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              2. Install components and dependencies
            </h3>
            <CodeBlock
              code={`npx shadcn@latest add button input card\nnpm install zod`}
              copy
              language="shell"
            />
            <p className="mt-2">
              This command performs the following:
              <ul className="mt-1 ml-5 list-inside list-disc space-y-1">
                <li>
                  Installs required dependencies and updates your <code>package.json</code>.
                </li>
                <li>
                  Adds UI components such as <code>Button</code>, <code>Input</code>, and{" "}
                  <code>Card</code> to your <code>components/ui</code> directory.
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section
          id="usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-5xl space-y-16"
        >
          {/* Login Form 1 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Login Form 1 - Minimal Single Column
            </h2>
            <p>
              A clean and simple single-column login form optimized for straightforward
              authentication pages. This form is ideal when minimalism and focus on user input are
              priorities.
            </p>
            <p>
              To integrate, copy the component code into{" "}
              <code>
                <Badge variant="secondary">@/components/auth/login/login-form-1.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<LoginForm1 />} code={login1Code} onlyPro isFlex />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={login1Example} language="tsx" copy />
          </div>

          {/* Login Form 2 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Login Form 2 - Split Screen with Illustration
            </h2>
            <p>
              This variant combines the login form with engaging illustrative graphics, providing a
              more visually dynamic experience. It’s well suited for applications aiming for brand
              impact and user engagement.
            </p>
            <p>
              Implement by copying the code into{" "}
              <code>
                <Badge variant="secondary">@/components/auth/login/login-form-2.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<LoginForm2 />} code={login2Code} onlyPro isFlex />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={login2Example} language="tsx" copy />
          </div>

          {/* Login Form 3 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Login Form 3 - Centered with Social Login Options
            </h2>
            <p>
              A centered layout that includes options for social authentication such as Google,
              Facebook, or Twitter sign-in buttons. This form fits applications needing multiple
              sign-in methods to improve user convenience.
            </p>
            <p>
              Paste the code into{" "}
              <code>
                <Badge variant="secondary">@/components/auth/login/login-form-3.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<LoginForm3 />} code={login3Code} onlyPro isFlex />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={login3Example} language="tsx" copy />
          </div>

          {/* Login Form 4 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Login Form 4 - Compact Inline Form
            </h2>
            <p>
              This compact, inline login form is designed for dashboards or quick access panels
              where space is limited but functionality is required.
            </p>
            <p>
              Insert this component code into{" "}
              <code>
                <Badge variant="secondary">@/components/auth/login/login-form-4.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<LoginForm4 />} code={login4Code} onlyPro isFlex />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={login4Example} language="tsx" copy />
          </div>
        </section>
      </div>
    </main>
  );
}
