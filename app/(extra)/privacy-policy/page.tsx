"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main className="prose prose-slate dark:prose-invert mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="font-semibold">Last updated: August 2025</p>
      <br />
      <p>
        This Privacy Policy explains how we collect, use, and protect your personal information when
        you use our platform.
      </p>

      <h2 className="mt-2 text-xl font-semibold">1. Information We Collect</h2>
      <p>
        When you sign in using Google or GitHub, we collect basic account details including your
        name, email address, and avatar. If you choose to make a purchase, we may also collect
        limited billing-related information (handled securely through our payment provider).
      </p>

      <h2 className="mt-2 text-xl font-semibold">2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Authenticate and personalize your experience</li>
        <li>Display your profile details within the app</li>
        <li>Process payments and manage access to premium features</li>
        <li>Improve the performance and usability of our platform</li>
      </ul>

      <h2 className="mt-2 text-xl font-semibold">3. Payment Information</h2>
      <p>
        Payments are handled by a third-party payment processor. We do not store your card or
        billing details directly. Only limited metadata (such as transaction status) may be stored
        for account-related tracking.
      </p>

      <h2 className="mt-2 text-xl font-semibold">4. Sharing of Information</h2>
      <p>
        We do not sell, rent, or share your personal data with any third parties. Your data remains
        strictly confidential and used only for the purposes described in this policy.
      </p>

      <h2 className="mt-2 text-xl font-semibold">5. Data Security</h2>
      <p>
        We implement technical and organizational measures to protect your information. However, no
        method of transmission or storage is completely secure. Please keep your credentials
        confidential.
      </p>

      <h2 className="mt-2 text-xl font-semibold">6. Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal data at any time through your
        account settings or by contacting us directly.
      </p>

      <h2 className="mt-2 text-xl font-semibold">7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make significant changes, we will
        notify you via the platform or email. Continued use of the service means you accept the
        updated terms.
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
