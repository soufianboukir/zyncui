"use client";

import CodeBlock from "@/components/code-block";
import { nextJsSnippets, reactJsSnippets } from "@/constants/installation/steps";

export default function IntroductionPage() {
  return (
    <main className="text-lg">
      <div className="space-y-10">
        <section id="prerequisites" className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Prerequisites
          </h1>
          <p>Before getting started, ensure you have:</p>
          <ul className="list-inside list-disc">
            <li>Node.js installed (recommended version 18 or higher)</li>
            <li>A code editor like Visual Studio Code</li>
            <li>Basic familiarity with JavaScript and React</li>
          </ul>
        </section>

        <section id="nextjs" className="space-y-6">
          <h1 className="max-w-none text-3xl font-bold text-gray-900 dark:text-gray-100">
            Installing Next.js (with Tailwind CSS)
          </h1>

          <div className="prose prose-gray dark:prose-invert">
            <p className="max-w-none">
              <strong>
                <a href="https://nextjs.org" className="underline">
                  Next.js
                </a>{" "}
              </strong>{" "}
              is a React framework for building fast, SEO-friendly, and scalable web apps with
              built-in routing, API support, and server-side rendering (SSR). Your prebuilt pages
              and components can be used directly in any Next.js project once Tailwind CSS is set
              up.
            </p>
            <br />

            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-semibold">Steps</h1>
              <h1 className="text-lg font-medium">1. Create a Next.js Project</h1>
              <span>
                Use the official Next.js starter with TypeScript (optional, but recommended):
              </span>
              <CodeBlock code={nextJsSnippets.createApp} language="tsx" copy />

              <div className="mt-3">
                <h1 className="text-lg">2. You&apos;ll be asked:</h1>
                <CodeBlock code={nextJsSnippets.installationSteps} language="tsx" />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">3. Verify Installation</h1>
                <p>If the command finished without errors, your Next.js project is ready.</p>
                <span>Run the development server:</span>
                <CodeBlock code={nextJsSnippets.devServer} language="tsx" copy />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">4. Start Using Prebuilt Pages</h1>
                <p>
                  Now that your Next.js project is running, you can start adding our prebuilt pages
                  and components.
                </p>
                <CodeBlock code={nextJsSnippets.example} language="tsx" copy />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 space-y-6" id="reactjs">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installing React.js (with Tailwind CSS)
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              <strong>React.js</strong> is a JavaScript library for building user interfaces. You
              can use our prebuilt pages and components in any React project once Tailwind CSS is
              set up.
            </p>
            <br />

            <div>
              <h1 className="text-2xl font-semibold">Steps</h1>
              <br />
              <h1 className="text-lg font-medium">1. Create a React Project</h1>
              <span>Use Vite for a faster development experience (recommended):</span>
              <CodeBlock code={`npm create vite@latest my-project`} language="bash" />

              <div className="mt-3">
                <h1 className="text-lg">2. Select Project Options:</h1>
                <CodeBlock code={reactJsSnippets.projectOptions} language="bash" />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">3. Install Tailwind CSS</h1>
                <span>Follow the Tailwind setup for Vite projects:</span>
                <CodeBlock code={reactJsSnippets.tailwindInstallation} language="bash" />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">4. Configure Tailwind</h1>
                <CodeBlock code={reactJsSnippets.tailwindConfig} language="tsx" />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">5. Add Tailwind Directives</h1>
                <CodeBlock code={reactJsSnippets.tailwindDirectives} language="css" />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">6. Verify Installation</h1>
                <span>Run the development server:</span>
                <CodeBlock code={`npm run dev`} language="bash" />
              </div>

              <div className="mt-3">
                <h1 className="text-lg">7. Start Using Prebuilt Pages</h1>
                <CodeBlock code={nextJsSnippets.example} language="tsx" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8" id="otherFramwork">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Start with a different framework?
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            You can also start with other frameworks like React, Vue, Svelte, and more. Visit{" "}
            <a
              href="https://ui.shadcn.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              shadcn guid
            </a>{" "}
            to learn how to set up your preferred framework.
          </p>
          <br />
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            If you’re exploring other frontend technologies, remember that our prebuilt components
            are designed to be easily adaptable. Feel free to customize styles and integrate them
            into your preferred framework workflow.
          </p>
        </div>
      </div>
    </main>
  );
}
