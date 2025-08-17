"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { InputOtp } from "@/components/ui/input-otp";
import { useState } from "react";

export function EmailVerificationForm({ className, ...props }: React.ComponentProps<"div">) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!otp || otp.length !== 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Your email has been verified");
    }, 3000);
  }

  async function handleResend() {
    setError(null);
    setSuccess(null);
    setResending(true);

    setTimeout(() => {
      setResending(false);
      setSuccess("Verification code resent to your email.");
    }, 3000);
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4 dark:bg-black">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Verify Your Email</CardTitle>
            <CardDescription>We{"'"}ve sent a 6-digit code to your email</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <div className="flex justify-center gap-2">
                    <InputOtp value={otp} onChange={setOtp} />
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Didn&apos;t receive a code?{" "}
                    <button
                      type="button"
                      className="cursor-pointer underline"
                      onClick={handleResend}
                      disabled={resending}
                    >
                      {resending ? "Resending..." : "Resend"}
                    </button>
                  </p>
                </div>

                {error && <p className="text-center text-sm text-red-600">{error}</p>}
                {success && <p className="text-center text-sm text-green-600">{success}</p>}

                <Button type="submit" className="cursor-pointer" disabled={loading}>
                  {loading ? "Verifying..." : "Verify Email"}
                </Button>

                <div className="text-center text-sm">
                  <Link href="#" className="hover:underline">
                    Back to login
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
