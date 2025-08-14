"use client";

import { SignUpForm1 } from "@/components/auth/signUp/sign-up-form-1";
import { SignUpForm2 } from "@/components/auth/signUp/sign-up-form-2";
import CodeBlock from "@/components/code-block";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import { passwordInputCode } from "@/constants/auth/reset-password";
import { signUp1Code, signUp1Example, signUp2Code, signUp2Example } from "@/constants/auth/sign-up";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Sign up Form 1 - Split Screen with Illustration",
    description: `his variant enhances the sign-up experience by combining the registration
                  form with eye-catching illustrations or animations. It creates a welcoming and visually appealing environment that encourages
                  users to complete the onboarding process. Ideal for platforms focused on brand identity and first impressions,
                  it helps build trust and engagement from the very first interaction.`,
    pathFile: {
      title: "This command performs the following:",
      path: "@/components/auth/signUp/sign-up-form-1.tsx",
    },
    macket: { preview: <SignUpForm1 />, code: signUp1Code },
    example: signUp1Example,
  },
  {
    id: 2,
    title: "Sign up Form 2 - Dynamic page",
    description: `This variant features a clean and minimal sign-up form focused on simplicity and usability.
                  With no distracting visuals or animations, it offers a straightforward experience that allows users to register quickly and efficiently.
                  Ideal for professional or content-focused platforms where clarity and speed are prioritized over visual embellishment.`,
    pathFile: {
      title: "This command performs the following:",
      path: "@/components/auth/signUp/sign-up-form-2.tsx",
    },
    macket: { preview: <SignUpForm2 />, code: signUp2Code },
    example: signUp2Example,
  },
];

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Sign up Component Library
          </h1>

          <p>
            A sleek and fully responsive sign-up form component built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400"> React</span> and
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This library offers multiple layout variations to accommodate diverse user registration
            flows and design requirements.
          </p>
          <p>
            Each variant is crafted with a focus on{" "}
            <span className="font-semibold"> clarity, accessibility, and user-friendly</span>
            interaction across all devices. Features include built-in form validation, customizable
            input fields, password confirmation support, and optional terms & conditions checkboxes.
          </p>
          <p>
            Designed following modern UI/UX best practices, these components offer seamless
            integration, consistency, and flexibility—whether you need a simple registration form or
            a more advanced sign-up experience with social authentication options. Perfect for
            accelerating development without compromising on quality or usability.
          </p>
        </section>

        <section
          id="installation"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h2>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">1. Set up your project</h3>
            <p>
              Before installing the sign up components, ensure your development environment is
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
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          {/**Sign up forms */}
          {data &&
            data.map(item => (
              <div key={item.id} className="space-y-6">
                <h2 className="text-xl font-semibold sm:text-2xl">{item.title}</h2>
                <p>{item.description}</p>
                <p>
                  {item.pathFile.title}
                  <code>
                    <Badge variant="secondary">{item.pathFile.path}</Badge>
                  </code>
                  .
                </p>
                <PreviewWithCodeTabs
                  preview={item.macket.preview}
                  code={item.macket.code}
                  onlyPro
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Usage Example
                </h3>
                <CodeBlock code={item.example} language="tsx" copy />
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default page;
