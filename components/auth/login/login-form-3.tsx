"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { CircleAlert, Loader } from "lucide-react";
import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm3 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState({ login: false, google: false, github: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = loginSchema.safeParse(formData);
    setErrors({});
    if (!validation.success) {
      const { email, password } = validation.error.flatten().fieldErrors;
      setErrors({ email: email?.[0], password: password?.[0] });
      return;
    }

    setLoading(prev => ({ ...prev, login: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, login: false }));
    }, 2000);
  };

  const handleGoogleOAuth = () => {
    setLoading(prev => ({ ...prev, google: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, google: false }));
    }, 3000);
  };

  const handleGithubOAuth = () => {
    setLoading(prev => ({ ...prev, github: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, github: false }));
    }, 3000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-6 py-2">
          Sign in
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[430px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-semibold">Welcome back</h2>
            <p className="text-muted-foreground text-sm">
              Login or create account with Google or Github
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="zuncui@example.com"
              className={errors.email ? "border-red-400 bg-red-500/10" : ""}
            />
            {errors.email && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              placeholder="********"
              className={errors.password ? "border-red-400 bg-red-500/10" : ""}
            />
            {errors.password && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.password}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center gap-2 py-3"
              onClick={handleGoogleOAuth}
              disabled={loading.google}
              type="button"
            >
              {loading.google ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Image src={"/icons/google.webp"} width={20} height={20} alt="Google" />
                  Continue with Google
                </>
              )}
            </Button>

            <Button
              variant="outline"
              className="flex w-full items-center justify-center gap-2 bg-black py-3 text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
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
                    alt="Github"
                    className="invert dark:invert-0"
                  />
                  Continue with Github
                </>
              )}
            </Button>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading.login}>
              {loading.login ? "Logging in..." : "Login"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
