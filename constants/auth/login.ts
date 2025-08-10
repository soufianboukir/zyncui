export const login1Code = `
"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardTitle } from "../../ui/card";
import Link from "next/link";
import { useState } from "react";
import { CircleAlert, Loader } from "lucide-react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm1 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState({ login: false, google: false, github: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateFormData = loginSchema.safeParse(formData);
    setErrors({});

    if (!validateFormData.success) {
      const { email, password } = validateFormData.error.flatten().fieldErrors;
      setErrors({ email: email?.[0], password: password?.[0] });
      return;
    }

    setLoading((prev) => ({ ...prev, login: true }));

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, login: false }));
    }, 2000);

    // your backend logic here
  };

  const handleGoogleOAuth = async () => {
    setLoading((prev) => ({ ...prev, google: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, google: false }));
    }, 3000);
    // your Google OAuth logic here
  };

  const handleGithubOAuth = async () => {
    setLoading((prev) => ({ ...prev, github: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, github: false }));
    }, 3000);
    // your GitHub OAuth logic here
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <Card className="min-w-sm md:min-w-md">
        <CardTitle className="text-center text-[23px] font-extrabold">
          Welcome Back
        </CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit} className="mb-[15px] flex w-full flex-col gap-4">
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="zuncui@example.com"
                className={\`px-3.5 py-3 \${errors.email ? "border-red-400 bg-red-500/10" : ""}\`}
              />
              {errors.email && (
                <p className="mt-1 flex items-center text-sm font-medium text-red-400">
                  <CircleAlert className="mr-2 h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                placeholder="********"
                className={\`px-3.5 py-3 \${errors.password ? "border-red-400 bg-red-500/10" : ""}\`}
              />
              {errors.password && (
                <p className="mt-1 flex items-center text-sm font-medium text-red-400">
                  <CircleAlert className="mr-2 h-4 w-4" />
                  {errors.password}
                </p>
              )}
              <p className="text-end text-[#747474] underline decoration-[#747474] dark:text-white">
                <span className="cursor-pointer text-xs font-bold hover:text-black dark:hover:text-white">
                  Forgot password
                </span>
              </p>
            </div>

            <Button type="submit" disabled={loading.login} className="mt-4 cursor-pointer">
              {loading.login ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="m-0 text-sm text-[#747474] dark:text-white">
            Don't have an account?
            <span className="ml-1 cursor-pointer font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
              <Link href="#">Sign up</Link>
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
                <>
                  <Loader className="animate-spin" /> Loading...
                </>
              ) : (
                <>
                  <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
                  Login with Google
                </>
              )}
            </Button>

            <Button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2 py-4"
              onClick={handleGithubOAuth}
              disabled={loading.github}
            >
              {loading.github ? (
                <>
                  <Loader className="animate-spin" /> Loading...
                </>
              ) : (
                <>
                  <Image
                    className="invert dark:invert-0"
                    src="/icons/github.svg"
                    alt="github icon"
                    width={20}
                    height={20}
                  />
                  Login with GitHub
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground text-center text-xs">
        By clicking continue, you agree to our{" "}
        <Link href="/terms-of-service">Terms of Service</Link> and{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </div>
    </div>
  );
};
`;
