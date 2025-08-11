import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/providers/session-provider";
import { Footer } from "@/components/app/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "zyncUI - Accelerate Your UI Workflow",
    template: "%s - zyncUI",
  },
  description:
    "A customizable React + Tailwind UI library with ready-to-use components, layouts, and full pages like login, signup, and more — designed for developers who want to build fast.",
  keywords: [
    "zyncUI",
    "React UI library",
    "Tailwind components",
    "prebuilt pages",
    "login page",
    "signup page",
    "component library",
    "Next.js UI kit",
    "developer tools",
    "UI templates",
    "React layouts",
  ],
  metadataBase: new URL("https://zyncui.com"),
  openGraph: {
    title: "zyncUI - React + Tailwind UI Library with Prebuilt Pages",
    description:
      "zyncUI offers pre-designed components and full pages like login, signup, dashboards, and more — built with React and Tailwind CSS.",
    url: "https://zyncui.com",
    siteName: "zyncUI",
    images: [
      {
        url: "https://zyncui.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "zyncUI - Modern UI Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zyncUI - Prebuilt React + Tailwind Pages and Components",
    description:
      "A modern UI library with prebuilt pages, sections, and components for React + Tailwind apps. Build beautiful UIs faster.",
    images: ["https://zyncui.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
