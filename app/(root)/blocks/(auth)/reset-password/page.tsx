import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import ResetPasswordForm from "@/components/auth/reset-password/reset-password-form";
import { resetPasswordExample } from "@/constants/auth/reset-password";

import fs from "fs";
import path from "path";

const resetPasswordCodePath = path.join(
  process.cwd(),
  "/components/auth/reset-password/reset-password-form.tsx",
);
const resetPasswordCode = fs.readFileSync(resetPasswordCodePath, "utf-8");

const passwordInputCodePath = path.join(process.cwd(), "/components/ui/password-input.tsx");
const passwordInputCode = fs.readFileSync(passwordInputCodePath, "utf-8");

export default function PasswordResetPage() {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Password Reset Component
          </h1>
          <p>
            A secure and responsive password reset form built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This form allows users to set a new password after verifying their identity via a reset
            link or token.
          </p>
          <p>
            It includes two input fields — <span className="font-semibold">New Password</span> and{" "}
            <span className="font-semibold">Confirm Password</span> — with built-in validation to
            ensure passwords match and meet security requirements.
          </p>
          <p>
            Success feedback is provided upon completion, guiding the user to log in with their new
            credentials.
          </p>
        </section>

        <section
          id="installation"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h2>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">1. Set up your project</h3>
            <p>
              Ensure your project is ready with React, Tailwind CSS, and dependencies. For setup
              details, check the{" "}
              <Link
                href={"/docs/installation"}
                className="font-semibold text-blue-600 underline dark:text-blue-400"
              >
                official installation guide
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              2. Install components and dependencies
            </h3>
            <CodeBlock
              code={`npx shadcn@latest add button card\nnpm install zod`}
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
                  Add UI components like <code>Button</code>, <code>Input</code>, and{" "}
                  <code>Card</code> to your <code>components/ui</code> directory.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              3. Create a file and Copy past this code into it{" "}
              <code>
                <Badge variant="secondary">@/components/ui/password-input.tsx</Badge>
              </code>
            </h3>
            <CodeBlock code={passwordInputCode} copy language="tsx" />
            <p className="mt-2">
              This will:
              <ul className="mt-1 ml-5 list-inside list-disc space-y-1">
                <li>
                  Install required dependencies and update your <code>package.json</code>.
                </li>
                <li>
                  Add UI components like <code>Button</code>, <code>Input</code>, and{" "}
                  <code>Card</code> to your <code>components/ui</code> directory.
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section
          id="usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Password Reset Form
            </h2>
            <p>
              A clean, two-field layout with password validation and confirmation checks. Displays
              real-time feedback for mismatched or weak passwords, and shows a success message upon
              completion.
            </p>
            <p>
              Add this form to your project by copying the code into{" "}
              <code>
                <Badge variant="secondary">
                  @/components/auth/password-reset/password-reset-form.tsx
                </Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<ResetPasswordForm />} code={resetPasswordCode} onlyPro />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={resetPasswordExample} language="tsx" copy />
          </div>
        </section>
      </div>
    </main>
  );
}
