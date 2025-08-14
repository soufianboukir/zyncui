export const resetPasswordCode = `
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
  const [isReseted,setIsReseted] = useState(false)
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
    setError('')
    setErrors({
      password: '',
      r_password: ''
    })
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
        setIsReseted(true)
        setLoading(false)
    }, 3000);
  };
  return (
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
                                <div className="text-sm text-red-500 flex items-center gap-2"><AlertCircle className="w-4 h-4"/>{errors.password}</div>
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
                                <div className="text-sm text-red-500 flex items-center gap-2"><AlertCircle className="w-4 h-4"/>{errors.r_password}</div>
                                )}
                                {
                                  isReseted && <div className="text-green-600 text-sm">Password has been reseted successfully</div>
                                }
                            </div>
                            <Button
                                type="submit"
                                className="w-full cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? (
                                <div>
                                    <Loader className="animate-spin w-8 h-8" />
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
  );
};

export default ResetPasswordForm;`;

export const resetPasswordExample = `
import ResetPasswordForm from "@/components/reset-password-form"


const page = () => {
    return <div className="bg-muted flex min-h-svh items-center justify-center gap-6 p-6 md:p-10">
        <ResetPasswordForm />
    </div>
}

export default page`;

export const passwordInputCode = `
"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PasswordInputProps = {
  value: string;
  name: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const PasswordInput = ({ value, name, onChange, placeholder, className }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  // disable the eye icon button if value is empty
  const disabled = value === "";

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("hide-password-toggle pr-10", className)}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        disabled={disabled}
        className="absolute top-0 right-0 h-full cursor-pointer px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword && !disabled ? (
          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeIcon className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
      </Button>

      <style>{\`
        .hide-password-toggle::-ms-reveal,
        .hide-password-toggle::-ms-clear {
          visibility: hidden;
          pointer-events: none;
          display: none;
        }
      \`}</style>
    </div>
  );
};

export { PasswordInput };
`;
