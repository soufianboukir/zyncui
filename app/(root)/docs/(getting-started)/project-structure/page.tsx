"use client";

import CodeBlock from "@/components/code-block";
import { Badge } from "@/components/ui/badge";

export default function ProjectStructurePage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-4xl mx-auto">
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        <section id="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Project Structure
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Understanding the folder structure will help you quickly locate components, pages, and
            configuration files. Below are recommended layouts for Next.js 13+ (App Router) and
            React (Vite) projects.
          </p>
        </section>

        <section id="nextjs-structure" className="space-y-3 sm:space-y-4 lg:space-y-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Next.js 13+ (App Router) Structure
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="px-4 sm:px-0">
              <CodeBlock
                language="bash"
                code={`my-project/
├── app/                   # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│
├── components/            # Reusable components
│   ├── ui/                # Base UI elements
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── login-form-1.tsx  # Login component
│   └── navbar.tsx
│
├── lib/                   # Utilities & constants
│   └── utils.ts
│
├── types/                 # TypeScript definitions
│   └── index.d.ts
│
├── public/                # Static assets
│   ├── favicon.ico
│   └── logo.png
│
├── .env.local             # Environment variables
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies & scripts`}
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Clean separation of concerns for maintainable and scalable Next.js projects.
          </p>
        </section>

        <section id="react-structure" className="space-y-3 sm:space-y-4 lg:space-y-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            React (Vite) Structure
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="px-4 sm:px-0">
              <CodeBlock
                language="bash"
                code={`my-project/
├── public/                # Static assets
│   └── logo.png
│
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/            # Base UI elements
│   │   │   ├── button.tsx
│   │   │   └── input.tsx
│   │   ├── login-form-1.tsx
│   │   └── navbar.tsx
│   │
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   └── About.tsx
│   │
│   ├── styles/            # Global styles
│   │   └── index.css
│   │
│   ├── utils/             # Helper functions
│   │
│   └── main.tsx           # App entry point
│
├── package.json
├── tsconfig.json
└── vite.config.ts`}
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Standard Vite React structure with source code in{" "}
            <Badge variant="secondary" className="text-xs">src/</Badge>
          </p>
        </section>

        <section id="components" className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Finding Components
          </h2>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            All reusable UI elements are in the{" "}
            <Badge variant="secondary" className="text-xs">components/</Badge>{" "}
            folder.
          </p>
          <div className="space-y-2">
            <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
              <span className="text-xs sm:text-sm font-medium min-w-0">Buttons:</span>
              <Badge variant="secondary" className="text-xs break-all">
                components/ui/button.tsx
              </Badge>
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
              <span className="text-xs sm:text-sm font-medium min-w-0">Login Page:</span>
              <Badge variant="secondary" className="text-xs break-all">
                components/login-form-1.tsx
              </Badge>
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
              <span className="text-xs sm:text-sm font-medium min-w-0">Navigation:</span>
              <Badge variant="secondary" className="text-xs break-all">
                components/navbar.tsx
              </Badge>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Customize by editing existing files or creating new ones in the same folder.
          </p>
        </section>

        <section id="next-steps" className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Next Steps
          </h2>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Now that you understand the structure, start customizing components and adding pages. 
            For styling, edit{" "}
            <Badge variant="secondary" className="text-xs break-all">
              tailwind.config.js
            </Badge>{" "}
            and{" "}
            <Badge variant="secondary" className="text-xs break-all">
              globals.css
            </Badge>
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Explore the{" "}
            <a 
              href="/docs/blocks" 
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline transition-colors"
            >
              Components
            </a>{" "}
            section for ready-to-use UI elements.
          </p>
        </section>
      </div>
    </main>
  );
}