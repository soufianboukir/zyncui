import faqs from "@/constants/faqs";

export default function IntroductionPage() {
  return (
    <main className="text-lg">
      <div className="space-y-10">
        <section id="introduction" className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            What is zyncUI?
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              A collection of pre-built pages and UI components built with{" "}
              <strong className="font-semibold">
                <a className="underline" href="https://react.dev" target="_blank">
                  React
                </a>
              </strong>
              ,{" "}
              <strong className="font-semibold">
                <a href="https://tailwindcss.com" target="_blank" className="underline">
                  Tailwind CSS
                </a>
              </strong>
              , and{" "}
              <strong className="font-semibold">
                <a href="https://ui.shadcn.com" target="_blank" className="underline">
                  Shadcn/ui
                </a>
              </strong>
              , designed to help you build modern applications faster.
            </p>
            <br />
            <p>
              This project includes customizable{" "}
              <strong className="font-semibold">authentication pages</strong>,{" "}
              <strong className="font-semibold">landing sections</strong>,{" "}
              <strong className="font-semibold">UI components</strong>, and more — ready to copy,
              paste, and extend directly in your project.
            </p>
            <br />
            <p>
              Just like Shadcn/ui,{" "}
              <strong className="font-semibold">this is not a traditional component library</strong>
              .<br />
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            What{"'"}s included
          </h2>

          <ul className="list-disc space-y-3 pl-5 marker:text-gray-400 dark:marker:text-gray-500">
            <li className="pl-2">Authentication pages (Login, Signup, Forgot Password)</li>
            <li className="pl-2">Hero sections, CTA blocks, and pricing tables</li>
            <li className="pl-2">Reusable components (Buttons, Inputs, Cards, Modals)</li>
            <li className="pl-2">Light/Dark mode support</li>
            <li className="pl-2">Tailwind CSS and Shadcn/ui powered styling</li>
            <li className="pl-2">And more components being added regularly</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Why this approach?
          </h2>

          <ul className="list-disc space-y-3 pl-5 marker:text-gray-400 dark:marker:text-gray-500">
            <li className="pl-2">
              Copy-paste directly into your app — no installation or version mismatch
            </li>
            <li className="pl-2">Full control of the code: tweak UI/UX without constraints</li>
            <li className="pl-2">Use it with any React or Next.js project</li>
            <li className="pl-2">Easy to adapt to your design language or component patterns</li>
          </ul>
        </section>
      </div>

      <div className="mt-16" id="faqs">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h2>

        <div className="space-y-1 divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, idx) => (
            <div key={idx} className="pt-8 first:pt-0">
              <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-gray-100">
                {faq.question}
              </h3>
              <p className="font-normal text-black/80 dark:text-white/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10" id="whoIsItFor">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Who&apos;s It For?
        </h2>

        <div className="flex flex-col">
          {[
            {
              title: "SaaS builders",
              description: "Quickly add auth flows, dashboards, and settings pages",
            },
            {
              title: "Marketing teams",
              description: "Launch landing pages and promo sections fast",
            },
            {
              title: "Internal tools",
              description: "Build admin panels and data dashboards quickly",
            },
            {
              title: "React developers",
              description: "Works with Next.js, Vite, and other React frameworks",
            },
            {
              title: "Freelancers",
              description: "Deliver client projects faster with ready-made components",
            },
          ].map(({ title, description }, idx) => (
            <div key={idx} className="mb-2">
              <div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}:
                </span>
                <span className="text-gray-600 dark:text-gray-300"> {description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
