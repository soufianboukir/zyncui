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
    <div className="group relative mt-3 w-[420px] sm:w-[100%] md:max-w-5xl">
      {copy ? (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 z-10 cursor-pointer rounded bg-white/90 p-1.5 text-xs text-black transition-opacity hover:opacity-80 dark:bg-white/10 dark:text-white/90"
          aria-label="Copy code"
        >
          {copied ? (
            <CopyCheck className="h-3.5 w-3.5 text-green-600" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      ) : null}

      <div className="overflow-x-auto rounded-lg">
        <SyntaxHighlighter
          language={language}
          style={theme === "dark" ? atomDark : prism}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            fontSize: "0.9rem",
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
