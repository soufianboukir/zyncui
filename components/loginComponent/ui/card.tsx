import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "h-[500px] w-[400px] rounded-[10px] bg-[#fff] px-8 py-5 shadow-[0_5px_15px_rgba(0,0,0,0.35)] dark:bg-[#171717]",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("mx-0 mt-2.5 mb-8 text-center text-[28px] font-extrabold", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("", className)} {...props} />;
}

export { Card, CardTitle, CardContent };
