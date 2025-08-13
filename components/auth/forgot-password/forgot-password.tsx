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
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(false);
    if (email === "") {
      setError("Email is required");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError("");
      setIsSent(true);
    }, 3000);
  };
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold">Forgot password</CardTitle>
        <CardDescription>Enter your email associated with your account</CardDescription>
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
                onChange={e => setEmail(e.target.value)}
              />
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <CircleAlert className="h-4 w-4" />
                  {error}
                </div>
              )}
              {isSent && (
                <div className="text-sm text-green-600">
                  If email exists in our system, a reset link was sent
                </div>
              )}
            </div>
            <Button disabled={loading} className="w-full cursor-pointer">
              {loading ? (
                <>
                  <Loader className="h-8 w-8 animate-spin" /> loading
                </>
              ) : (
                "Send reset link"
              )}
            </Button>
          </div>
        </form>
        <Link href={"#"} className="float-right mt-2 text-sm hover:underline">
          Login
        </Link>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordForm;
