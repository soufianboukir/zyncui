"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

export default function CodeBlock({
  code,
  language,
  copy,
}: {
  code: string;
  language: string;
  copy?: boolean;
}) {
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
    <div className="group relative mt-2 w-full max-w-full overflow-x-auto">
      {copy && (
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="absolute top-3 right-3 z-40 cursor-pointer rounded bg-white p-2 text-sm text-black shadow-md transition-opacity hover:opacity-90 dark:bg-gray-700 dark:text-white"
        >
          {copied ? <CopyCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </button>
      )}

      <div className="overflow-x-auto rounded-lg">
        <SyntaxHighlighter
          language={language}
          style={theme === "dark" ? atomDark : prism}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            fontSize: "0.95rem",
            maxHeight: "600px",
            margin: 0,
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
