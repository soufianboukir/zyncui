import CodeBlock from "@/components/code-block";
import { Feature1 } from "@/components/features/feature-1";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";
import { featue1Code, featue1Example } from "@/constants/features/features";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Feature 1 ",
    description: `A clean and impactful centered hero section optimized for maximum conversion.
                    This hero is ideal when focusing user attention on a primary call-to-action and key messaging.`,
    pathFile: {
      title: "This command performs the following:",
      path: "@/components/features/feature-1.tsx",
    },
    macket: { preview: <Feature1 />, code: featue1Code },
    example: featue1Example,
  },
];

const Features = () => {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="hero-description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Features
          </h1>
          <p>
            This component includes multiple layout options with flexible illustration placements
            and mockup displays. Each variant is carefully crafted to highlight your product&apos;s
            features while maintaining shadcn&apos;s consistent design language.
          </p>
          <p>
            Built using
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span> and
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, it
            perfectly complements other shadcn components in your interface. The component maintains
            high accessibility standards and responsive design principles, ensuring your feature
            showcase looks great and works well for all users.
          </p>
          <p>
            Designed with contemporary web design principles, these components ensure brand
            consistency and seamless integration into your projects, reducing development time while
            maintaining premium quality.
          </p>
        </section>

        <section
          id="hero-installation"
          className="prose prose-lg prose-gray dark:prose-invert space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h2>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">1. Set up your project</h3>
            <p>
              Before installing the feature components, ensure your development environment is
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
              code={`npx shadcn@latest add button card badge\nnpm install lucide-react \nnpm install @splinetool/react-spline`}
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
                  Adds UI components such as <code>Button</code>, <code>Card</code>, and{" "}
                  <code>Badge</code> to your <code>components/ui</code> directory.
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section
          id="usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-16"
        >
          {/**Features Examples */}
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

export default Features;
