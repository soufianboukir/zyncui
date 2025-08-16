"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlert, Eye, EyeOff, Loader, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm4 = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState<{
    login: boolean;
    x: boolean;
    google: boolean;
    github: boolean;
  }>({
    login: false,
    google: false,
    github: false,
    x: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateFormData = loginSchema.safeParse({
      email: formData.email,
      password: formData.password,
    });

    setErrors({ email: "", password: "" });
    if (!validateFormData.success) {
      const { email, password } = validateFormData.error.flatten().fieldErrors;
      setErrors({ email: email?.[0], password: password?.[0] });
      return;
    }

    setLoading(prev => ({ ...prev, login: true }));

    setTimeout(() => {
      setLoading(prev => ({ ...prev, login: false }));
    }, 2000);
  };

  async function handleGoogleOAuth() {
    setLoading(prev => ({ ...prev, google: true }));

    setTimeout(() => {
      setLoading(prev => ({ ...prev, google: false }));
    }, 3000);
    // your OAuth logic with google here
  }

  async function handleGithubOAuth() {
    setLoading(prev => ({ ...prev, github: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, github: false }));
    }, 3000);
    // your OAuth github with google here
  }

  async function handleXOAuth() {
    setLoading(prev => ({ ...prev, x: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, x: false }));
    }, 3000);
    // your OAuth x with google here
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-4 dark:bg-black">
      <Card className="min-w-sm md:max-w-md">
        <CardHeader className="mb-5 space-y-1 text-center">
          <Image
            src="/icons/placeholder.svg"
            alt="login logo"
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 pb-7">
            <div className="flex flex-col gap-1">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="text-base-content/40 h-5 w-5 text-black/50 dark:text-white/50" />
                </div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                  }}
                  placeholder="zuncui@example.com"
                  className="border-0 border-b pl-10"
                />
              </div>
              {errors.email && (
                <p className="flex items-center text-sm text-red-400">
                  <CircleAlert className="mr-2 h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="text-base-content/40 h-5 w-5 text-black/50 dark:text-white/50" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  name="password"
                  value={formData.password}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, password: e.target.value }));
                  }}
                  className="border-0 border-b pl-10"
                />
                <button
                  type="button"
                  className={`absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-black dark:text-white`}
                  disabled={formData.password === ""}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div>
                {errors.password && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.password}
                  </p>
                )}
                <Label className="m-0 flex justify-end underline">
                  <span className="cursor-pointer text-[13px] font-bold">
                    <Link href="#">Forgot password?</Link>
                  </span>
                </Label>
              </div>
            </div>
            <Button type="submit" className="cursor-pointer" disabled={loading.login}>
              {loading.login ? <Loader className="animate-spin" /> : "Login"}
            </Button>
          </form>

          <div className="flex items-center justify-center py-5">
            <hr className="w-[30%]" />
            <Label className="mx-2 text-sm">Or continue with</Label>
            <hr className="w-[30%]" />
          </div>

          <div className="flex justify-center gap-5">
            <Button
              type="button"
              className="cursor-pointer border bg-white"
              onClick={handleGithubOAuth}
              disabled={loading.github}
            >
              {loading.github ? (
                <Loader className="animate-spin" />
              ) : (
                <Image src="/icons/github.svg" alt="github icon" width={20} height={20} />
              )}
            </Button>

            <Button
              type="button"
              className="cursor-pointer border bg-white"
              onClick={handleGoogleOAuth}
              disabled={loading.google}
            >
              {loading.google ? (
                <Loader className="animate-spin" />
              ) : (
                <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
              )}
            </Button>

            <Button
              type="button"
              className="cursor-pointer border bg-white"
              onClick={handleXOAuth}
              disabled={loading.x}
            >
              {loading.x ? (
                <Loader className="animate-spin" />
              ) : (
                <Image src="/icons/x.png" alt="x icon" width={20} height={20} />
              )}
            </Button>
          </div>
        </CardContent>
        <div className="text-muted-foreground *:[a]:hover:text-primary m-3 mt-2 text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
          <Link href="#">Privacy Policy</Link>.
        </div>
      </Card>
    </div>
  );
};
