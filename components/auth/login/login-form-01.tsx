"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardTitle } from "../../ui/card";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
// import { z } from "zod";

export const LoginForm1 = () => {
  // const [errors, setErrors] = useState<{ email: string; password: string }>({
  //   email: "",
  //   password: "",
  // });
  const [loading, setLoading] = useState<{ login: boolean; google: boolean; github: boolean }>({
    login: false,
    google: false,
    github: false,
  });

  // const loginSchema = z.object({
  //   email: z.string().email({ message: "Invalid email address" }),
  //   password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  // });

  // type LoginForm = z.infer<typeof loginSchema>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    // const data = {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // };

    // const result = loginSchema.safeParse(data);

    // if (!result.success) {
    //   const { email, password } = result.error.format();
    //   console.log("Errors", result.error.format());
    //   console.log("Email error:", email);
    //   console.log("password error:", password);
    //   email && setErrors(prev => ({ ...prev, email: email.errors }));
    //   password && setErrors(prev => ({ ...prev, password: password.errors }));
    //   return;
    // }

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
            <Input type="email" placeholder="m@example.com" className="px-3.5 py-3" />
            {/* {errors.email && <p className="text-red-600">{errors.email}</p>} */}
            <Input type="password" placeholder="********" className="px-3.5 py-3" />
            {/* {errors.password && <p className="text-red-600">{errors.password}</p>} */}

            <p className="m-0 text-end text-[#747474] underline decoration-[#747474] dark:text-white">
              <span className="cursor-pointer text-[9px] font-bold hover:text-black dark:hover:text-white">
                Forgot password
              </span>
            </p>

            <Button type="submit" variant="outline" className="cursor-pointer">
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
