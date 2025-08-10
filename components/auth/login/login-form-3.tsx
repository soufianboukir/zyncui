"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { CircleAlert, Loader } from "lucide-react";
import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Pasword is required" }),
});

export const LoginForm3 = () => {
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
    <div className={cn("flex h-screen flex-col items-center justify-center gap-6")}>
      <Card className="min-w-sm md:min-w-md">
        <div className="text-center">
          {/**dialog login usin email and password */}
          <Dialog>
            <CardHeader className="mb-1 text-center">
              <CardTitle className="text-xl">Welcome back</CardTitle>
              <CardDescription>Login or create account with Google or Github</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer border-0 hover:bg-white">
                  Open Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-extrabold">Login</DialogTitle>
                  <DialogDescription className="text-md text-center">
                    Continue with your best provider
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={e => {
                        setFormData(prev => ({ ...prev, email: e.target.value }));
                      }}
                      placeholder="zuncui@example.com"
                      className={`px-3.5 py-3 ${errors.email && "border-red-400 bg-red-500/10"}`}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center text-sm font-medium text-red-400">
                        <CircleAlert className="mr-2 h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={e => {
                        setFormData(prev => ({ ...prev, password: e.target.value }));
                      }}
                      placeholder="********"
                      className={`px-3.5 py-3 ${errors.password && "border-red-400 bg-red-500/10"}`}
                    />
                    {errors.password && (
                      <p className="flex items-center text-sm font-medium text-red-400">
                        <CircleAlert className="mr-2 h-4 w-4" />
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" className="cursor-pointer" disabled={loading.login}>
                    {loading.login ? "Loging in..." : "Login"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        {/*login for github or google*/}
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="flex w-full cursor-pointer items-center justify-center gap-2 py-4"
              onClick={handleGoogleOAuth}
              disabled={loading.google}
              type="button"
            >
              {loading.google ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Image src={"/icons/google.webp"} width={20} height={20} alt="google icon" />{" "}
                  Continue with google
                </>
              )}
            </Button>

            <Button
              variant="outline"
              className="flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-4 text-white hover:bg-black/85 hover:text-white dark:bg-white dark:text-black dark:hover:bg-white/85"
              onClick={handleGithubOAuth}
              disabled={loading.github}
              type="button"
            >
              {loading.github ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Image
                    src={"/icons/github.svg"}
                    width={20}
                    height={20}
                    alt="github icon"
                    className="invert dark:invert-0"
                  />{" "}
                  Continue with github
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
