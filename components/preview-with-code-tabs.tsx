"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import React from "react";
import CodeBlock from "./code-block";

interface PreviewWithCodeTabsProps {
  preview: React.ReactNode;
  code: string;
  codeLanguage?: string;
  onlyPro?: boolean;
  tabLabels?: {
    preview: string;
    code: string;
  };
  isFlex: boolean;
}

export const PreviewWithCodeTabs: React.FC<PreviewWithCodeTabsProps> = ({
  preview,
  code,
  onlyPro,
  codeLanguage = "tsx",
  tabLabels = { preview: "Preview", code: "Code" },
  isFlex,
}) => {
  return (
    <Tabs defaultValue="preview" className="mx-auto mt-2 w-full max-w-5xl">
      <div className="mb-2 flex items-center justify-between">
        <TabsList className="bg-muted rounded-md p-1">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:bg-background cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium"
          >
            {tabLabels.preview}
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-background cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium"
          >
            {tabLabels.code}
          </TabsTrigger>
        </TabsList>

        {onlyPro && (
          <Badge variant="default" className="text-xs font-semibold">
            Pro only
          </Badge>
        )}
      </div>

      <TabsContent value="preview" className="bg-muted/30 mt-2 rounded-lg border">
        <div
          className={`hide-scrollbar ${isFlex && "flex max-h-[600px] items-center justify-center"} overflow-x-auto p-4`}
        >
          {preview}
        </div>
      </TabsContent>

      <TabsContent value="code">
        <CodeBlock code={code} copy language={codeLanguage} />
      </TabsContent>
    </Tabs>
  );
};
