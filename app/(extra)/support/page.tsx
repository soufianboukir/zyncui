"use client";

import { useRouter } from "next/navigation";

export default function Support() {
  const router = useRouter();

  return (
    <main className="prose prose-slate dark:prose-invert mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-semibold">Support</h1>
      <br />
      <p>
        Need help or have questions? We{"'"}re here to support you. Whether you{"'"}re facing a
        technical issue, need billing assistance, or want to give feedback — you can reach out
        anytime.
      </p>

      <h2 className="mt-2 text-xl font-semibold">1. Contact Support</h2>
      <p>
        You can contact us via email at
        <a href="mailto:soufianeboukir0@gmail.com" className="text-blue-400">
          {" "}
          soufianeboukir0@gmail.com
        </a>
        . We typically respond within 1-2 business days.
      </p>

      <h2 className="mt-2 text-xl font-semibold">2. Common Issues</h2>
      <ul>
        <li>Having trouble logging in with Google or GitHub?</li>
        <li>Not seeing purchased components or premium access?</li>
        <li>Something{"'"}s broken or looks off?</li>
      </ul>
      <p>Let us know — we{"'"}ll look into it quickly.</p>

      <h2 className="mt-2 text-xl font-semibold">3. Feature Requests</h2>
      <p>
        Have ideas for new components, templates, or platform features? Send them our way — we
        actively review user suggestions to guide future updates.
      </p>

      <h2 className="mt-2 text-xl font-semibold">4. Documentation</h2>
      <p>
        For detailed usage instructions, setup guides, and examples, visit our{" "}
        <a href="/docs">documentation</a> page.
      </p>

      <h2 className="mt-2 text-xl font-semibold">5. Refunds & Billing</h2>
      <p>
        If you{"'"}ve experienced issues with a paid plan or need billing help, email us with your
        account details and we{"'"}ll sort it out.
      </p>

      <h2 className="mt-2 text-xl font-semibold">6. Stay Updated</h2>
      <p>
        We post major updates and announcements on the homepage. Make sure to check there for the
        latest changes.
      </p>

      <button
        onClick={() => router.back()}
        className="mt-5 mb-4 text-blue-600 hover:underline dark:text-blue-400"
      >
        ← Back to previous page
      </button>
    </main>
  );
}
