"use client";

import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import ForgotPasswordForm from "@/components/auth/forgot-password/forgot-password";
import { forgotPasswordCode, forgotPasswordExample } from "@/constants/auth/forgot-password";

export default function ForgotPasswordPage() {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Forgot Password Component
          </h1>
          <p>
            A responsive and accessible forgot password form built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This form enables users to request a password reset via email, following secure UX
            practices.
          </p>
          <p>
            The component includes form validation, clear error handling, and success messaging to
            ensure a smooth recovery process for users across devices.
          </p>
          <p>
            Whether for SaaS products, e-commerce, or internal tools, this form integrates easily
            into existing authentication flows.
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
              Before installing the forgot password component, make sure your development
              environment is ready. See the{" "}
              <Link
                href={"/docs/installation"}
                className="font-semibold text-blue-600 underline dark:text-blue-400"
              >
                official installation guide
              </Link>{" "}
              for React, Tailwind CSS, and dependencies setup.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              2. Install components and dependencies
            </h3>
            <CodeBlock
              code={`npx shadcn@latest add button input card label`}
              copy
              language="shell"
            />
            <p className="mt-2">
              This will:
              <ul className="mt-1 ml-5 list-inside list-disc space-y-1">
                <li>
                  Install required dependencies and update your <code>package.json</code>.
                </li>
                <li>
                  Add UI components like <code>Button</code>, <code>Label</code>, <code>Input</code>
                  , and <code>Card</code> to your <code>components/ui</code> directory.
                </li>
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
              Forgot Password Form
            </h2>
            <p>
              A single-column, centered layout where users can enter their email address to receive
              a password reset link. Includes input validation and error feedback for a better user
              experience.
            </p>
            <p>
              Add this form to your project by copying the code into{" "}
              <code>
                <Badge variant="secondary">@/components/forgot-password-form.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs
              preview={<ForgotPasswordForm />}
              code={forgotPasswordCode}
              onlyPro
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={forgotPasswordExample} language="tsx" copy />
          </div>
        </section>
      </div>
    </main>
  );
}
