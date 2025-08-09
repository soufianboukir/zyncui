"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardTitle } from "../../ui/card";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  // .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  // .min(6, { message: "Password must be at least 6 characters long" }),
});

export const LoginForm1 = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<{ login: boolean; google: boolean; github: boolean }>({
    login: false,
    google: false,
    github: false,
  });

  // const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    await signIn("google", { callbackUrl: "/" });
    setLoading(prev => ({ ...prev, google: false }));
  }

  async function handleGithubOAuth() {
    setLoading(prev => ({ ...prev, github: true }));
    await signIn("github", { callbackUrl: "/" });
    setLoading(prev => ({ ...prev, github: false }));
  }

  return (
    <div className={`flex h-screen flex-col items-center justify-center gap-6`}>
      <Card className="min-w-sm md:min-w-md">
        <CardTitle className="text-center text-[23px] font-extrabold">Welcome Back</CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit} className="mb-[15px] flex w-full flex-col gap-2.5">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={e => {
                setFormData(prev => ({ ...prev, email: e.target.value }));
              }}
              placeholder="m@example.com"
              className={`px-3.5 py-3 ${errors.email && "border-red-400 bg-red-500/10"}`}
            />
            {errors.email && (
              <p className="mt-2 flex items-center text-sm text-red-400">
                <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.email}
              </p>
            )}

            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={e => {
                setFormData(prev => ({ ...prev, password: e.target.value }));
              }}
              placeholder="********"
              className={`px-3.5 py-3 ${errors.password && "border-red-400 bg-red-500/10"}`}
            />
            {errors.password && (
              <p className="mt-2 flex items-center text-sm text-red-400">
                <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.password}
              </p>
            )}

            <p className="m-0 text-end text-[#747474] underline decoration-[#747474] dark:text-white">
              <span className="cursor-pointer text-[9px] font-bold hover:text-black dark:hover:text-white">
                Forgot password
              </span>
            </p>

            <Button
              type="submit"
              variant="outline"
              disabled={loading.login}
              className="cursor-pointer"
            >
              Log in
            </Button>
          </form>

          <p className="m-0 text-xs text-[#747474] dark:text-white">
            Dont have an account?
            <span className="ml-1 cursor-pointer text-xs font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
              Sign up
            </span>
          </p>

          <div className="mt-5 flex w-full flex-col justify-start gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex w-full cursor-pointer items-center justify-center gap-2 py-4"
              onClick={handleGoogleOAuth}
              disabled={loading.google}
            >
              {loading.google ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
                  Login with google{" "}
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="flex w-full cursor-pointer items-center justify-center gap-2 py-4"
              onClick={handleGithubOAuth}
              disabled={loading.github}
            >
              {loading.github ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Image
                    className="invert dark:invert-0"
                    src="/icons/github.svg"
                    alt="github icon"
                    width={20}
                    height={20}
                  />
                  Login with github
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link href="/terms-of-service">Terms of Service</Link> and{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </div>
    </div>
  );
};
