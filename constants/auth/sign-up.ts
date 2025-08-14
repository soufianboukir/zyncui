export const signUp1Code = `"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { CircleAlert, Loader } from "lucide-react";
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
  r_password: z.string().min(6, "Please retype your password"),
});

export const SignUpForm1 = () => {
  const [formData, setFormData] = useState<{
    fullname: string;
    email: string;
    password: string;
    r_password: string;
  }>({
    fullname: "",
    email: "",
    password: "",
    r_password: "",
  });

  const [errors, setErrors] = useState<{
    fullname?: string;
    email?: string;
    password?: string;
    r_password?: string;
  }>({
    fullname: "",
    email: "",
    password: "",
    r_password: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateFormData = loginSchema.safeParse({
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
      r_password: formData.r_password,
    });

    setErrors({ fullname: "", email: "", password: "", r_password: "" });
    if (!validateFormData.success) {
      const { fullname, email, password, r_password } =
        validateFormData.error.flatten().fieldErrors;
      setErrors({
        fullname: fullname?.[0],
        email: email?.[0],
        password: password?.[0],
        r_password: r_password?.[0],
      });
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
    <div className="m-3">
      <div className="flex max-w-7xl">
        <Card className="min-w-sm rounded-none border-r-0 md:min-w-xl md:px-20">
          {/**header card */}
          <CardHeader className="space-y-5">
            <CardTitle className="text-[30px] font-extrabold">Create Account</CardTitle>
            <CardDescription className="text-xl dark:text-white">
              Get started with your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/**form for create accounte */}
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-2">
                <Label className="text-muted-foreground text-[15px]">Full name</Label>
                <Input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="John doe"
                />
                {errors.fullname && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.fullname}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground text-[15px]">Email address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="m@example.com"
                />
                {errors.email && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground text-[15px]">Password</Label>
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

              <div className="space-y-2">
                <Label className="text-muted-foreground text-[15px]">Retype Password</Label>
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
              <Button
                type="submit"
                className="w-full cursor-pointer rounded-4xl"
                disabled={loading.form}
              >
                {loading.form ? <Loader className="animate-spin" /> : "Sign Up"}
              </Button>
            </form>

            <p className="text-muted-foreground mt-4 text-center text-sm">
              Already have an account?
              <span className="ml-1 cursor-pointer text-sm font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
                <Link href="#">Sign in</Link>
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
                  className={\`bg-primary/10 aspect-square rounded-2xl \${
                    i % 2 === 0 ? "animate-pulse" : ""
                  }\`}
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

`;

export const signUp1Example = `import { SignUpForm1 } from "@/components/auth/signUp/sign-up-form-1";
import React from "react";

const page = () => {
  return (
    <div>
      <SignUpForm1 />
    </div>
  );
};

export default page;
`;

export const signUp2Code = `"use client";

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
    <div className="max-w-7xl">
      <div className="flex justify-center">
        <Image
          src={"/icons/placeholder.svg"}
          width={60}
          height={60}
          className="rounded-full"
          alt={"logo icon"}
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
                      {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
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
                      <Image src={"/icons/google.webp"} width={25} height={25} alt="google icon" />
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
  );
};

`;

export const signUp2Example = `import { SignUpForm2 } from "@/components/auth/signUp/sign-up-form-2";

const page = () => {
  return (
    <div>
      <SignUpForm2 />
    </div>
  );
};

export default page;
`;
