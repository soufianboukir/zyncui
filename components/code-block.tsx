"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

export default function CodeBlock({ code, language }: { code: string; language: string }) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 cursor-pointer rounded bg-white/90 p-1.5 text-xs text-black dark:bg-white/10 dark:text-white/90"
      >
        {copied ? <CopyCheck className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
      </button>

      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? atomDark : prism}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1.5rem",
          fontSize: "0.9rem",
          maxHeight: "300px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
