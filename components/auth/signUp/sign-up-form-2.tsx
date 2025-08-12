"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import z from "zod";
// import { toast } from "sonner";

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

export const SignUpForm2 = () => {
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

  // phone-input doesn't accept the above handle change function that takes the value as e: React.ChangeEvent<HTMLInputElement>
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
    x: boolean;
  }>({
    form: false,
    google: false,
    github: false,
    x: false,
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

  async function handleXOAuth() {
    setLoading(prev => ({ ...prev, x: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, x: false }));
    }, 3000);
    // your OAuth x with google here
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[95%] rounded-full md:w-[60%] lg:w-[40%]">
        <div className="flex justify-center">
          <Image
            src={"/icons/placeholder.svg"}
            width={60}
            height={60}
            className="rounded-full"
            alt={"Kasbah learn hub"}
          />
        </div>
        <div className="mt-2 flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              {/**header signUp */}
              <CardTitle className="text-xl">Create your account</CardTitle>
              <CardDescription>
                Sign up to attend classes, complete quizzes, and monitor your learning journey
              </CardDescription>
              <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="underline underline-offset-4 duration-200 hover:text-blue-500"
                >
                  Sign in
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/**form for create accout with email */}
                <div className="grid gap-4">
                  {error && <div className="mb-2 text-center text-red-600">{error}</div>}

                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 items-start justify-start gap-2">
                      <div className="grid gap-1">
                        <Label htmlFor="name">Full name *</Label>
                        <Input
                          type="name"
                          name="name"
                          placeholder="eg, Joen doe"
                          onChange={handleChange}
                        />
                        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
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
                          <p className="text-sm text-red-600">{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="m@example.com"
                      />
                      {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 items-start gap-2">
                      <div className="grid gap-1">
                        <Label htmlFor="email">Password *</Label>
                        <PasswordInput
                          value={formData.password}
                          name="password"
                          onChange={handleChange}
                          placeholder="*********"
                        />
                        {errors.password && (
                          <p className="text-sm text-red-600">{errors.password}</p>
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
                          <p className="text-sm text-red-600">{errors.r_password}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Button
                      type="submit"
                      className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700"
                      disabled={loading.form}
                    >
                      {loading.form ? (
                        <div>
                          <Loader className="animate-spin" />
                        </div>
                      ) : (
                        "Continue"
                      )}
                    </Button>
                  </div>
                </div>
                <div className="after:border-border relative my-4 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or sign up with
                  </span>
                </div>

                {/**btn for continue with google and X and github */}
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 py-5"
                    type="button"
                    onClick={handleGoogleOAuth}
                    disabled={loading.google}
                  >
                    {loading.google ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <>
                        <Image
                          src={"/icons/google.webp"}
                          width={25}
                          height={25}
                          alt="google icon"
                        />
                        Sign up with Google
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 py-5"
                    type="button"
                    onClick={handleXOAuth}
                    disabled={loading.x}
                  >
                    {loading.x ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <>
                        <Image src={"/icons/x.png"} width={25} height={25} alt="X icon" />
                        Sign up with X
                      </>
                    )}
                  </Button>

                  <Button
                    // variant="outline"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 py-5"
                    type="button"
                    onClick={handleGithubOAuth}
                    disabled={loading.github}
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
                        />
                        Sign up with Github
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/**footer policy */}
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};
