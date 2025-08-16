export const emailVerificationCode = `'use client'

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { InputOtp } from "@/components/ui/input-otp";
import { useState } from "react";

export function EmailVerificationForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
        setLoading(false)
        setSuccess('Your email has been verified')
    }, 3000);
  }

  async function handleResend() {

    setError(null);
    setSuccess(null);
    setResending(true);

    setTimeout(() => {
        setResending(false)
        setSuccess('Verification code resent to your email.')
    }, 3000);
  }

  return (
         <div
    className="flex h-full w-full items-center justify-center bg-white dark:bg-black p-4">
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card>
                    <CardHeader className="text-center">
                    <CardTitle className="text-xl">Verify Your Email</CardTitle>
                    <CardDescription>
                        We{"'"}ve sent a 6-digit code to your email
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                        <div className="grid gap-3">
                            <div className="flex gap-2 justify-center">
                            <InputOtp value={otp} onChange={setOtp} />
                            </div>
                            <p className="text-muted-foreground text-xs">
                            Didn&apos;t receive a code?{" "}
                            <button
                                type="button"
                                className="underline cursor-pointer"
                                onClick={handleResend}
                                disabled={resending}
                            >
                                {resending ? "Resending..." : "Resend"}
                            </button>
                            </p>
                        </div>

                        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

                        <Button
                            type="submit"
                            className="cursor-pointer"
                            disabled={loading}
                        >
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
}`;

export const emailVerificationExample = `
import { EmailVerificationForm } from "@/components/email-verification-form"


const page = () => {
    return <div className="bg-muted flex min-h-svh items-center justify-center gap-6 p-6 md:p-10">
        <EmailVerificationForm />
    </div>
}

export default page`;

export const otpInputCode = `"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

export function InputOtp({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <InputOTP maxLength={6} value={value} onChange={onChange}>
      {[...Array(6)].map((_, i) => (
        <InputOTPGroup key={i}>
          <InputOTPSlot index={i} className="w-12 h-12 text-xl" />
        </InputOTPGroup>
      ))}
    </InputOTP>
  );
}
`;
