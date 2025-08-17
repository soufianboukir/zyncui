"use client";

import React, { FormEvent, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader } from "lucide-react";
import z from "zod";
import { PasswordInput } from "@/components/ui/password-input";

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    r_password: z.string().min(6, "Please retype your password"),
  })
  .refine(data => data.password === data.r_password, {
    message: "Passwords do not match",
    path: ["r_password"],
  });

type ResetPasswordErrors = {
  password?: string;
  r_password?: string;
};

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isReseted, setIsReseted] = useState(false);
  const [errors, setErrors] = useState<ResetPasswordErrors>({ password: "", r_password: "" });
  const [formData, setFormData] = useState({
    password: "",
    r_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setErrors({
      password: "",
      r_password: "",
    });
    const result = resetPasswordSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        password: fieldErrors.password?.[0],
        r_password: fieldErrors.r_password?.[0],
      });
      return;
    }
    if (!result.success) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setIsReseted(true);
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Reset password</CardTitle>
          <CardDescription>Create a new password for your account</CardDescription>
          {error && <div className="mb-2 text-center text-red-600">{error}</div>}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <PasswordInput
                    name="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="r_password">Retype password</Label>
                  <PasswordInput
                    name="r_password"
                    placeholder="********"
                    value={formData.r_password}
                    onChange={handleChange}
                  />
                  {errors.r_password && (
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      {errors.r_password}
                    </div>
                  )}
                  {isReseted && (
                    <div className="text-sm text-green-600">
                      Password has been reseted successfully
                    </div>
                  )}
                </div>
                <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
                  {loading ? (
                    <div>
                      <Loader className="h-8 w-8 animate-spin" />
                    </div>
                  ) : (
                    "Update password"
                  )}
                </Button>
                <div className="flex justify-end gap-3 text-sm">
                  <Link href={""} className="duration-200 hover:underline">
                    Back to login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
