export const forgotPasswordCode = `
"use client";

import React, { FormEvent, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert, Loader } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(false)    
    if(email === '') { setError('Email is required'); return}
    setLoading(true);
    setTimeout(() => {
        setLoading(false)
        setError("");
        setIsSent(true)
    }, 3000);
  };
  return (
  <div
    className="flex h-full w-full items-center justify-center bg-white dark:bg-black p-4">

        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold">Forgot password</CardTitle>
                <CardDescription>
                    Enter your email associated with your account
                </CardDescription>
                
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {
                                error && <div className="text-red-500 flex gap-2 text-sm items-center"><CircleAlert className="h-4 w-4"/>{error}</div>
                            }
                            {
                                isSent && <div className="text-green-600 text-sm">If email exists in our system, a reset link was sent</div>
                            }
                        </div>
                        <Button disabled={loading} className="w-full cursor-pointer">
                            {
                                loading ? <><Loader className="w-8 h-8 animate-spin"/> loading</>: "Send reset link"
                            }
                        </Button>
                    </div>
                </form>
                <Link href={''} className="float-right mt-2 hover:underline text-sm">
                    Login
                </Link>
            </CardContent>
        </Card>
        </div>
  );
};

export default ForgotPasswordForm;`;

export const forgotPasswordExample = `
import { ForgotPasswordForm } from "@/components/forgot-password-form"


const page = () => {
    return <div className="bg-muted flex min-h-svh items-center justify-center gap-6 p-6 md:p-10">
        <ForgotPasswordForm />
    </div>
}

export default page`;
