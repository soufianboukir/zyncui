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
import { PhoneInput } from "@/components/ui/phone-input";
import { PasswordInput } from "@/components/ui/password-input";

const signupSchema = z
  .object({
    name: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    r_password: z.string().min(6, "Please retype your password"),
  })
  .refine(data => data.password === data.r_password, {
    message: "Passwords do not match",
    path: ["r_password"],
  });

export const SignUpForm1 = () => {
  const [error, setError] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
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

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  const [loading, setLoading] = useState<{
    form: boolean;
    google: boolean;
    github: boolean;
  }>({
    form: false,
    google: false,
    github: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setError("");
    const result = signupSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        r_password: fieldErrors.r_password?.[0],
      });
      return;
    }
    setLoading(prev => ({ ...prev, form: true }));

    try {
      setTimeout(() => {
        setLoading(prev => ({ ...prev, form: false }));

        // toast.success("Registred successfully");
      }, 1500);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      // setLoading(prev => ({ ...prev, form: true }));
    }
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
    <Dialog>
      <div className="flex justify-center">
        <DialogTrigger asChild>
          <Button variant="outline" className="px-6 py-2">
            Sign up
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[430px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-semibold">Welcome back</h2>
            <p className="text-muted-foreground text-sm">
              Sign up or create account with Google or Github
            </p>
          </div>

          {error && <div className="mb-2 text-center text-red-600">{error}</div>}

          <div className="grid gap-1">
            <Label htmlFor="name">Full name *</Label>
            <Input type="name" name="name" placeholder="eg, Joen doe" onChange={handleChange} />
            {errors.name && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="email">Phone number *</Label>
            <div className="flex gap-1">
              <PhoneInput
                placeholder="Enter a phone number"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                name="phoneNumber"
              />
            </div>
            {errors.phoneNumber && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.phoneNumber}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="zuncui@example.com"
              name="email"
              className={errors.email ? "border-red-400 bg-red-500/10" : ""}
            />
            {errors.email && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="email">Password *</Label>
            <PasswordInput
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="*********"
            />
            {errors.password && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.password}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="email">Retype password *</Label>
            <PasswordInput
              value={formData.r_password}
              name="r_password"
              onChange={handleChange}
              placeholder="*********"
            />
            {errors.r_password && (
              <p className="flex items-center text-sm text-red-400">
                <CircleAlert className="mr-2 h-4 w-4" />
                {errors.r_password}
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
            <Button type="submit" disabled={loading.form}>
              {loading.form ? <Loader className="animate-spin" /> : "Sign up"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
