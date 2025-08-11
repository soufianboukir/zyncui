"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlert, Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import z from "zod";

const loginSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const SignUp1 = () => {
  const [formData, setFormData] = useState<{ fullname: string; email: string; password: string }>({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ fullname?: string; email?: string; password?: string }>({
    fullname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<{
    form: boolean;
    google: boolean;
    github: boolean;
  }>({
    form: false,
    google: false,
    github: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateFormData = loginSchema.safeParse({
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    });

    setErrors({ fullname: "", email: "", password: "" });
    if (!validateFormData.success) {
      const { fullname, email, password } = validateFormData.error.flatten().fieldErrors;
      setErrors({ fullname: fullname?.[0], email: email?.[0], password: password?.[0] });
      return;
    }

    setLoading(prev => ({ ...prev, form: true }));

    setTimeout(() => {
      setLoading(prev => ({ ...prev, form: false }));
    }, 2000);

    // your backend logic
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

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex">
        <Card className="min-w-sm rounded-none border-r-0 md:min-w-xl md:px-20">
          {/**header card */}
          <CardHeader className="space-y-5">
            <CardTitle className="text-[30px] font-extrabold">Create Account</CardTitle>
            <CardDescription className="text-xl text-white">
              Get started with your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/**form for create accounte */}
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-3">
                <Label className="text-muted-foreground text-[16px]">Full name</Label>
                <Input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, fullname: e.target.value }));
                  }}
                  placeholder="John doe"
                />
                {errors.fullname && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.fullname}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Label className="text-muted-foreground text-[16px]">Email address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                  }}
                  placeholder="m@example.com"
                />
                {errors.email && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative">
                <Label className="text-muted-foreground mb-3 text-[16px]">Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, password: e.target.value }));
                  }}
                  placeholder="********"
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute top-11 right-0 flex cursor-pointer items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-base-content/40 h-5 w-5" />
                  ) : (
                    <Eye className="text-base-content/40 h-5 w-5" />
                  )}
                </button>
                {errors.password && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.password}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full cursor-pointer rounded-4xl"
                disabled={loading.form}
              >
                {loading.form ? <Loader className="animate-spin" /> : "Sign Up"}
              </Button>
            </form>

            <p className="text-muted-foreground mt-4 text-center text-sm">
              Dont have an account?
              <span className="ml-1 cursor-pointer text-sm font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
                <Link href="#">Sign up</Link>
              </span>
            </p>

            {/**btn continue with google and github */}
            <div className="flex items-center justify-center py-10">
              <hr className="w-[30%]" />
              <Label className="mx-2 text-sm">Or continue with</Label>
              <hr className="w-[30%]" />
            </div>

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
                    <Loader className="animate-spin" /> loading...
                  </>
                ) : (
                  <>
                    <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
                    Login with google{" "}
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
                    <Loader className="animate-spin" /> loading...
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
                    Login with github
                  </>
                )}
              </Button>
            </div>
          </CardContent>

          {/**footer policy */}
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy</Link>.
          </div>
        </Card>

        {/* Right side */}
        <div className="bg-card hidden items-center justify-center border border-l-0 p-12 lg:flex">
          <div className="max-w-md text-center">
            <div className="mb-8 grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-primary/10 aspect-square rounded-2xl ${
                    i % 2 === 0 ? "animate-pulse" : ""
                  }`}
                />
              ))}
            </div>
            <h2 className="mb-4 text-2xl font-bold">Join our community</h2>
            <p className="text-base-content/60">
              Connect with friends, share moments, and stay in touch with your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
