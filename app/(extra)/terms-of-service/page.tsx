"use client";

import { useRouter } from "next/navigation";

export default function TermsOfService() {
  const router = useRouter();

  return (
    <main className="prose prose-slate dark:prose-invert mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p className="font-semibold">Last updated: August 2025</p>
      <br />
      <p>
        These Terms of Service govern your use of zyncUI. By accessing or using our services, you
        agree to be bound by these Terms. If you do not agree, do not use the platform.
      </p>

      <h2 className="mt-2 text-xl font-semibold">1. Use of the Service</h2>
      <p>
        You may use the platform only in accordance with these Terms and all applicable laws. You
        must be at least 13 years old to use this service.
      </p>

      <h2 className="mt-2 text-xl font-semibold">2. Account Information</h2>
      <p>
        To access certain features, you may need to authenticate via Google or GitHub. We collect
        basic account info (name, email, avatar) for identification and personalization.
      </p>

      <h2 className="mt-2 text-xl font-semibold">3. Payment Terms</h2>
      <p>
        If you choose to upgrade to a paid plan, billing is handled by a third-party provider. We do
        not store payment credentials, only transaction metadata as needed.
      </p>

      <h2 className="mt-2 text-xl font-semibold">4. User Responsibilities</h2>
      <p>
        You agree not to misuse the service, attempt unauthorized access, or violate any applicable
        laws. Misuse may result in suspension or termination of access.
      </p>

      <h2 className="mt-2 text-xl font-semibold">5. Intellectual Property</h2>
      <p>
        All content, code, and assets provided through the platform are owned by or licensed to
        zyncUI. You may not copy, resell, or redistribute them without permission.
      </p>

      <h2 className="mt-2 text-xl font-semibold">6. Changes to the Service</h2>
      <p>
        We may update or discontinue features at any time without notice. We are not liable for any
        resulting impact on your usage or workflow.
      </p>

      <h2 className="mt-2 text-xl font-semibold">7. Termination</h2>
      <p>
        We reserve the right to terminate or suspend access if you violate these terms. You may stop
        using the service at any time.
      </p>

      <h2 className="mt-2 text-xl font-semibold">8. Disclaimer</h2>
      <p>
        The service is provided “as is” without warranties. We are not responsible for data loss,
        downtime, or any indirect damages.
      </p>

      <h2 className="mt-2 text-xl font-semibold">9. Governing Law</h2>
      <p>
        These terms are governed by the laws of your country of residence unless otherwise required
        by law.
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
