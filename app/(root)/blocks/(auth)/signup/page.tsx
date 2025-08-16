import { SignUpForm1 } from "@/components/auth/signUp/sign-up-form-1";
import { SignUpForm2 } from "@/components/auth/signUp/sign-up-form-2";
import { SignUpForm3 } from "@/components/auth/signUp/sign-up-form-3";
import { SignUpForm4 } from "@/components/auth/signUp/sign-up-form-4";

import CodeBlock from "@/components/code-block";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import fs from "fs";
import path from "path";

import {
  signUp1Example,
  signUp2Example,
  signUp3Example,
  signUp4Example,
} from "@/constants/auth/sign-up";

const formsConfig = [
  {
    id: 1,
    title: "Sign up Form 1 - Centered with Social Sign up Options",
    description:
      "A centered layout that includes options for social authentication such as Google, Facebook, or Twitter sign-in buttons.",
    file: "sign-up-form-1.tsx",
    component: <SignUpForm1 />,
    example: signUp1Example,
  },
  {
    id: 2,
    title: "Sign up Form 2 - Simple Page",
    description:
      "A streamlined, no-frills sign-up page designed for maximum clarity and ease of use.",
    file: "sign-up-form-2.tsx",
    component: <SignUpForm2 />,
    example: signUp2Example,
  },
  {
    id: 3,
    title: "Sign up Form 3 - Dynamic Page",
    description:
      "A minimal sign-up form focused on simplicity and usability, ideal for professional platforms.",
    file: "sign-up-form-3.tsx",
    component: <SignUpForm3 />,
    example: signUp3Example,
  },
  {
    id: 4,
    title: "Sign up Form 4 - Split Screen with Illustration",
    description:
      "Enhances the sign-up experience by combining the registration form with eye-catching illustrations.",
    file: "sign-up-form-4.tsx",
    component: <SignUpForm4 />,
    example: signUp4Example,
  },
];

// Dynamically read the code files
const formsWithCode = formsConfig.map(form => {
  const filePath = path.join(process.cwd(), `components/auth/signUp/${form.file}`);
  const code = fs.readFileSync(filePath, "utf-8");
  return { ...form, code };
});

export default function SignUpForms() {
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
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This library offers multiple layout variations to accommodate diverse user registration
            flows and design requirements.
          </p>

          <p>
            Each variant is crafted with a focus on{" "}
            <span className="font-semibold">clarity, accessibility, and user-friendly</span>{" "}
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
          id="description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Sign up Component Library
          </h1>
          <p>
            A sleek and fully responsive sign-up form component built with{" "}
            <Link
              className="font-semibold text-blue-600 dark:text-blue-400"
              href={"https://react.dev"}
            >
              React
            </Link>{" "}
            and{" "}
            <Link
              className="font-semibold text-teal-600 dark:text-teal-400"
              href={"https://tailwindcss.com"}
            >
              Tailwind CSS
            </Link>
            . This library offers multiple layout variations to accommodate diverse user
            registration flows.
          </p>
        </section>

        {/* Forms */}
        <section
          id="usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto space-y-16"
        >
          {formsWithCode.map(form => (
            <div key={form.id} className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {form.title}
              </h2>
              <p>{form.description}</p>
              <p>
                Copy the component code into{" "}
                <code>
                  <Badge variant="secondary">@/components/auth/signUp/{form.file}</Badge>
                </code>
                .
              </p>
              <PreviewWithCodeTabs preview={form.component} code={form.code} onlyPro />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Usage Example
              </h3>
              <CodeBlock code={form.example} language="tsx" copy />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
