// codeSnippets.ts

export const nextJsSnippets = {
  createApp: `npx create-next-app@latest my-project`,
  installationSteps: `
TypeScript? → Yes (recommended)
ESLint? → Yes
Tailwind CSS? → Yes
Src directory? → Your choice
App Router (recommended) → Yes
Import alias? → Default (@/*)`,
  devServer: `cd my-project
npm run dev`,
  example: `import LoginPage from "components/login-form-01";

export default function Page() {
  return <LoginPage />;
}`,
};

export const reactJsSnippets = {
  projectOptions: `? Project name: my-project
? Select a framework: › React
? Select a variant: › TypeScript`,
  tailwindInstallation: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
  tailwindConfig: `// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}`,
  tailwindDirectives: `/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`,
};
