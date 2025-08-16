"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CircleAlert, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm2 = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({
    email: "",
    password: "",
  });

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
    <div className="flex h-full w-full items-center justify-center p-4">
      <Card className="flex-row p-0">
        <div className="md:min-w- flex min-w-sm flex-col gap-7 py-6">
          <CardHeader>
            <CardTitle className="text-center text-[23px] font-extrabold">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Continue with your best provider
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={e => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                  }}
                  value={formData.email}
                  placeholder="w@example.com"
                  className={`px-3.5 py-3 ${errors.email && "border-red-400 bg-red-500/10"}`}
                />
                {errors.email && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="m-0 flex justify-between p-0">
                  <Label>Password</Label>
                  <Label className="m-0 text-end underline">
                    <span className="cursor-pointer text-sm font-bold">
                      <Link href="#">Forgot password?</Link>
                    </span>
                  </Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={e => {
                    setFormData(prev => ({ ...prev, password: e.target.value }));
                  }}
                  value={formData.password}
                  placeholder="********"
                  className={`px-3.5 py-3 ${errors.email && "border-1 border-red-400 bg-red-500/10"}`}
                />
                {errors.password && (
                  <p className="flex items-center text-sm text-red-400">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    {errors.password}
                  </p>
                )}
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

            <p className="mt-4 text-center text-sm">
              <span>Dont have an account? </span>
              <span className="ml-1 cursor-pointer text-sm font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
                <Link href="#">Sign up</Link>
              </span>
            </p>
          </CardContent>
          <div className="m-4 flex w-full justify-center">
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
              By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>.
            </div>
          </div>
        </div>

        <div className="bg-muted relative hidden rounded-r-xl md:block md:min-w-md">
          <Image
            src="/icons/placeholder.svg"
            alt="Image"
            className="absolute inset-0 h-full w-full rounded-r-xl object-cover dark:brightness-[0.2] dark:grayscale"
            width={100}
            height={100}
          />
        </div>
      </Card>
    </div>
  );
};
