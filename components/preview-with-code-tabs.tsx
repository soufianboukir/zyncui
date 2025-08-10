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
}

export const PreviewWithCodeTabs: React.FC<PreviewWithCodeTabsProps> = ({
  preview,
  code,
  onlyPro,
  codeLanguage = "tsx",
  tabLabels = { preview: "Preview", code: "Code" },
}) => {
  return (
    <Tabs defaultValue="preview" className="mt-6 max-w-4xl">
      <div className="mb-2 flex items-center justify-between">
        <TabsList className="bg-muted rounded-md p-1">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:bg-background rounded-md px-4 py-1.5 text-sm font-medium"
          >
            {tabLabels.preview}
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-background rounded-md px-4 py-1.5 text-sm font-medium"
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

      <TabsContent value="preview" className="bg-muted/30 rounded-lg border lg:w-4xl">
        <div className="flex max-h-[70vh] items-center justify-center overflow-auto">{preview}</div>
      </TabsContent>

      <TabsContent value="code" className="max-w-4xl">
        <CodeBlock code={code} copy language={codeLanguage} />
      </TabsContent>
    </Tabs>
  );
};
