"use client";

import CodeBlock from "@/components/code-block";
import Link from "next/link";
import { PreviewWithCodeTabs } from "@/components/preview-with-code-tabs";
import { Badge } from "@/components/ui/badge";

import {
  Hero1Code,
  hero1Example,
  Hero2Code,
  hero2Example,
  Hero3Code,
  hero3Example,
  Hero4Code,
  hero4Example,
} from "@/constants/hero/hero";
import HeroSection1 from "@/components/hero/hero-section-1";
import HeroSection2 from "@/components/hero/hero-section-2";
import HeroSection3 from "@/components/hero/hero-section-pro-3";
import HeroSection4 from "@/components/hero/hero-section-pro-4";

export default function HeroForms() {
  return (
    <main className="mx-auto w-full max-w-7xl py-6 text-base sm:px-6 sm:text-lg lg:px-8">
      <div className="space-y-20 sm:space-y-24">
        <section
          id="hero-description"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-7xl space-y-5"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Hero Component Library
          </h1>
          <p>
            A collection of stunning and fully responsive hero section components built with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Tailwind CSS</span>.
            This library provides multiple layout variations to create impactful landing pages and
            engaging user experiences.
          </p>
          <p>
            Each variant emphasizes{" "}
            <span className="font-semibold">
              visual appeal, conversion optimization, and responsive design
            </span>{" "}
            across devices, featuring compelling calls-to-action, dynamic layouts, and modern
            typography.
          </p>
          <p>
            Designed with contemporary web design principles, these components ensure brand
            consistency and seamless integration into your projects, reducing development time while
            maintaining premium quality.
          </p>
          <p>
            Whether you need a minimal hero section or a complex landing page with interactive
            elements and multimedia, this library offers flexible solutions tailored to various
            marketing and presentation needs.
          </p>
        </section>

        <section
          id="hero-installation"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-6xl space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Installation
          </h2>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">1. Set up your project</h3>
            <p>
              Before installing the hero components, ensure your development environment is properly
              configured. Refer to the{" "}
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
              code={`npx shadcn@latest add button card badge\nnpm install lucide-react`}
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
          id="hero-usage"
          className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-5xl space-y-16"
        >
          {/* Hero Form  */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Hero Section 1 - Centered Call-to-Action
            </h2>
            <p>
              A clean and impactful centered hero section optimized for maximum conversion. This
              hero is ideal when focusing user attention on a primary call-to-action and key
              messaging.
            </p>
            <p>
              To integrate, copy the component code into{" "}
              <code>
                <Badge variant="secondary">@/components/hero/hero-form-1.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<HeroSection1 />} code={Hero1Code} onlyPro />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={hero1Example} language="tsx" copy />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Hero Section 2 - Modern Centered Layout with Features
            </h2>
            <p>
              A modern, feature-rich hero section with centered content, feature highlights, and
              trust indicators. This hero includes a responsive navigation, prominent headline with
              gradient text, call-to-action buttons, feature cards, and company logos for social
              proof.
            </p>
            <p>
              To integrate, copy the component code into{" "}
              <code>
                <Badge variant="secondary">@/components/hero/hero-form-2.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<HeroSection2 />} code={Hero2Code} onlyPro />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Key Features
            </h3>
            <ul>
              <li>Responsive mobile navigation with drawer menu</li>
              <li>Gradient headline for visual impact</li>
              <li>Dual call-to-action buttons (primary + secondary)</li>
              <li>Feature highlights with icon cards</li>
              <li>Trust indicators and social proof elements</li>
              <li>Dark mode compatible</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={hero2Example} language="tsx" copy />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Hero Section 3 – Futuristic Dark/Light Mode with Animated Metrics
            </h2>
            <p>
              A visually striking, dark-mode-compatible hero section featuring animated backgrounds,
              floating gradient shapes, a responsive navigation bar, dynamic metrics, and an
              interactive product preview card. Designed for maximum impact with smooth entrance
              animations, gradient headlines, and strong call-to-action buttons.
            </p>
            <p>
              To integrate, copy the component code into{" "}
              <code>
                <Badge variant="secondary">@/components/hero/hero-section-with-dark-mode.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<HeroSection3 />} code={Hero3Code} onlyPro />

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Key Features
            </h3>
            <ul>
              <li>Fully responsive with mobile drawer navigation</li>
              <li>Dark and light mode styling with smooth transitions</li>
              <li>Animated background grid and floating gradient orbs</li>
              <li>Gradient headline for bold visual impact</li>
              <li>Rotating performance metrics with highlight effects</li>
              <li>Dual CTA buttons (primary + secondary)</li>
              <li>Interactive product dashboard card with floating elements</li>
              <li>Subtle entrance animations for all sections</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={hero3Example} language="tsx" copy />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Hero Section 4 – AI-Powered Analytics with Animated Slideshow
            </h2>
            <p>
              A visually dynamic, AI-focused hero section featuring a full-width diagonal background
              pattern, animated floating elements, an interactive image slideshow with selector
              dots, and a floating analytics card. Includes a bold gradient headline, responsive
              layout, feature checklist, and call-to-action buttons for maximum engagement.
            </p>
            <p>
              To integrate, copy the component code into{" "}
              <code>
                <Badge variant="secondary">@/components/hero/hero-section-4.tsx</Badge>
              </code>
              .
            </p>
            <PreviewWithCodeTabs preview={<HeroSection4 />} code={Hero4Code} onlyPro />

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Key Features
            </h3>
            <ul>
              <li>Diagonal gradient background pattern with dark mode support</li>
              <li>Animated floating orbs for visual depth</li>
              <li>Automatic and manual image slideshow with smooth transitions</li>
              <li>Gradient headline for strong visual impact</li>
              <li>Feature checklist with icon indicators</li>
              <li>Dual call-to-action buttons (primary + outline)</li>
              <li>Floating analytics card with KPI display</li>
              <li>Fully responsive and mobile-friendly</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Usage Example
            </h3>
            <CodeBlock code={hero4Example} language="tsx" copy />
          </div>
        </section>
      </div>
    </main>
  );
}
