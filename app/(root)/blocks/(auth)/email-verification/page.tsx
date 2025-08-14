"use client";

import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import { EmailVerificationForm } from "@/components/auth/email-verifecation/email-verification-form";
import {
  emailVerificationCode,
  emailVerificationExample,
  otpInputCode,
} from "@/constants/auth/email-verification";

export default function EmailVerificationPage() {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="email-verification-description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Email Verification Component
          </h1>
          <p>
            A responsive and accessible email verification form built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This component allows users to confirm their email by entering a one-time password (OTP)
            sent to their inbox.
          </p>
          <p>
            Includes real-time validation for OTP format, a resend button with cooldown handling,
            and a success message upon successful verification.
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
              Make sure your development environment is ready. Follow the{" "}
              <Link
                href={"/docs/installation"}
                className="font-semibold text-blue-600 underline dark:text-blue-400"
              >
                official installation guide
              </Link>{" "}
              to configure React, Tailwind CSS, and dependencies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              2. Install components and dependencies
            </h3>
            <CodeBlock
              code={`npx shadcn@latest add button input card\nnpm install input-otp`}
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
                <Badge variant="secondary">@/components/ui/input-otp.tsx</Badge>
              </code>
            </h3>
            <CodeBlock code={otpInputCode} copy language="tsx" />
          </div>
        </section>

        <section
          id="usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-5xl space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Email Verification Form
            </h2>
            <p>
              A centered OTP input field with validation to ensure correct format (e.g., 6 digits).
              Includes a resend button with a cooldown timer to prevent spam requests, and a success
              message when verification is complete.
            </p>
            <p>
              Copy the component into{" "}
              <code>
                <Badge variant="secondary">@/components/email-verification-form.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs
              preview={<EmailVerificationForm />}
              code={emailVerificationCode}
              onlyPro
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={emailVerificationExample} language="tsx" copy />
          </div>
        </section>
      </div>
    </main>
  );
}
