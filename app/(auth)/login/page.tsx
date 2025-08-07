import { LoginForm } from "@/components/app/login-form";
import React, { Suspense } from "react";

export const metadata = {
  title: "Login",
  description:
    "Access your zyncUI account. Sign in with Google, GitHub to manage your projects, templates, and components.",
  keywords: [
    "zyncUI",
    "login",
    "sign in",
    "UI library login",
    "component library auth",
    "developer tools",
    "React components",
    "GitHub login",
    "Google login",
  ],
  openGraph: {
    title: "Sign in - zyncUI",
    description:
      "Login to access your dashboard, templates, saved blocks and more on zyncUI – the modern UI library for developers.",
    url: "https://zyncui.com/login",
    siteName: "zyncUI",
    images: [
      {
        //   url: 'https://zyncui.com/og-login.png',
        width: 1200,
        height: 630,
        alt: "zyncUI Login Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign in - zyncUI",
    description: "Access your dashboard and projects. Sign in with Google, GitHub or credentials.",
    // images: ['https://zyncui.com/og-login.png'],
  },
};

const LoginPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
