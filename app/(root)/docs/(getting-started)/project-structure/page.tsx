"use client";

import CodeBlock from "@/components/code-block";
import { Badge } from "@/components/ui/badge";

export default function ProjectStructurePage() {
  return (
    <main className="text-lg">
      <div className="space-y-10">
        <section id="overview" className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Project Structure
          </h1>
          <p>
            Understanding the folder structure will help you quickly locate components, pages, and
            configuration files. Below are recommended layouts for Next.js 13+ (App Router) and
            React (Vite) projects.
          </p>
        </section>

        <section id="nextjs-structure" className="space-y-6">
          <h1 className="text-2xl font-semibold">
            Folder Layout: Next.js 13+ (App Router) Style (no src/ wrapper)
          </h1>
          <CodeBlock
            language="bash"
            code={`my-project/
├── app/                   # App Router pages (Next.js)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│
├── components/            # Reusable UI components
│   ├── ui/                # Buttons, inputs, modals...
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── login-form-1.tsx  # Login form component
│   └── navbar.tsx
│
├── lib/                   # Utilities & constants
│   └── utils.ts
│
├── types/                 # TypeScript definitions
│   └── index.d.ts
│
├── public/                # Static assets (images, icons, fonts)
│   ├── favicon.ico
│   └── logo.png
│
├── .env.local             # Environment variables
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies & scripts`}
          />
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            This structure ensures a clean separation of concerns, making it easier to maintain and
            scale your Next.js project.
          </p>
        </section>

        <section id="react-structure" className="space-y-6">
          <h1 className="text-2xl font-semibold">Folder Layout: React (Vite) Style</h1>
          <CodeBlock
            language="bash"
            code={`my-project/
├── public/                # Static assets (images, icons, fonts)
│   └── logo.png
│
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # Buttons, inputs, modals...
│   │   │   ├── button.tsx
│   │   │   └── input.tsx
│   │   ├── login-form-1.tsx  # Login form component
│   │   └── navbar.tsx
│   │
│   ├── pages/             # Page-level components
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
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            This is a typical folder layout for React projects created with Vite. The{" "}
            <code>
              <Badge variant={"secondary"}>src</Badge>
            </code>{" "}
            folder holds your main source code including components, pages, styles, and utilities.
          </p>
        </section>

        <section id="components" className="space-y-4">
          <h1 className="text-2xl font-semibold">Finding Components</h1>
          <p>
            All reusable UI elements are stored in the{" "}
            <code>
              <Badge variant={"secondary"}>components</Badge>
            </code>{" "}
            folder — either at the root level (Next.js) or inside <code>src/</code> (React).
          </p>
          <ul className="list-inside list-disc">
            <li>
              <strong>Buttons</strong> →{" "}
              <code>
                <Badge variant={"secondary"}>components/ui/button.tsx</Badge>
              </code>
            </li>
            <li>
              <strong>Login Page</strong> →{" "}
              <code>
                <Badge variant={"secondary"}>components/login-form-1.tsx</Badge>
              </code>{" "}
              (can be imported into any page).
            </li>
            <li>
              <strong>Navigation Bar</strong> →{" "}
              <code>
                <Badge variant={"secondary"}>components/navbar.tsx</Badge>
              </code>
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            You can customize these components by editing their files or creating new ones in the
            same folder.
          </p>
        </section>

        <section id="next-steps" className="space-y-4">
          <h1 className="text-2xl font-semibold">Next Steps</h1>
          <p>
            Now that you understand the project structure, start customizing components and adding
            new pages. For styling, edit{" "}
            <code>
              <Badge variant={"secondary"}>tailwind.config.js</Badge>
            </code>{" "}
            and{" "}
            <code>
              <Badge variant={"secondary"}>src/styles/globals.css</Badge>
            </code>
            .
          </p>
          <p>
            You can also explore the{" "}
            <a href="/docs/blocks" className="underline">
              Components
            </a>{" "}
            section for a full list of ready-to-use UI elements.
          </p>
        </section>
      </div>
    </main>
  );
}
