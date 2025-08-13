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
    <div className={\`flex h-screen flex-col items-center justify-center gap-6\`}>
      <Card className="min-w-sm md:min-w-md">
        <CardTitle className="text-center text-[23px] font-extrabold">Welcome Back</CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit} className="mb-[15px] flex w-full flex-col gap-4">
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={e => {
                  setFormData(prev => ({ ...prev, email: e.target.value }));
                }}
                placeholder="zuncui@example.com"
                className={\`px-3.5 py-3 \${errors.email && "border-red-400 bg-red-500/10"}\`}
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
                onChange={e => {
                  setFormData(prev => ({ ...prev, password: e.target.value }));
                }}
                placeholder="********"
                className={\`px-3.5 py-3 \${errors.password && "border-red-400 bg-red-500/10"}\`}
              />
              {errors.password && (
                <p className="mt-1 flex items-center text-sm font-medium text-red-400">
                  <CircleAlert className="mr-2 h-4 w-4" />
                  {errors.password}
                </p>
              )}
              <p className="text-end text-[#747474] underline decoration-[#747474] dark:text-white">
                <span className="cursor-pointer text-xs font-bold hover:text-black dark:hover:text-white">
                  <Link href="#">Forgot password</Link>
                </span>
              </p>
            </div>

            <Button type="submit" disabled={loading.login} className="mt-4 cursor-pointer">
              {loading.login ? "Loging in..." : "Login"}
            </Button>
          </form>

          <p className="m-0 text-sm text-[#747474] dark:text-white">
            Dont have an account?
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
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
};
`;

export const login1Example = `import { LoginForm1 } from "@/components/auth/login/login-form-1";

const page = () => {
  return (
    <div>
      <LoginForm1 />
    </div>
  );
};

export default page;`;

export const login2Code = `
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
    <div className="flex h-screen flex-col items-center justify-center gap-6">
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
                  className={\`px-3.5 py-3 \${errors.email && "border-red-400 bg-red-500/10"}\`}
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
                  className={\`px-3.5 py-3 \${errors.email && "border-1 border-red-400 bg-red-500/10"}\`}
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
                  <>
                    <Image src="/icons/github.svg" alt="github icon" width={20} height={20} />
                  </>
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
                  <>
                    <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
                  </>
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
                  <>
                    <Image src="/icons/x.png" alt="x icon" width={20} height={20} />
                  </>
                )}
              </Button>
            </div>

            <p className="mt-4 text-center text-sm">
              Dont have an account?
              <span className="ml-1 cursor-pointer text-sm font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
                <Link href="#">Sign up</Link>
              </span>
            </p>
          </CardContent>
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

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
};
`;
export const login2Example = `import { LoginForm2 } from "@/components/auth/login/login-form-2";

const page = () => {
  return (
    <div>
      <LoginForm2 />
    </div>
  );
};

export default page;`;

export const login3Code = `
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
          <Dialog>
            <form onSubmit={handleSubmit}>
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer border-0 hover:bg-white">
                  Sign in
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <CardHeader className="mb-1 text-center">
                  <CardTitle className="text-xl">Welcome back</CardTitle>
                  <CardDescription>Login or create account with Google or Github</CardDescription>
                </CardHeader>
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
                      className={\`px-3.5 py-3 \${errors.email && "border-red-400 bg-red-500/10"}\`}
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
                      className={\`px-3.5 py-3 \${errors.password && "border-red-400 bg-red-500/10"}\`}
                    />
                    {errors.password && (
                      <p className="flex items-center text-sm font-medium text-red-400">
                        <CircleAlert className="mr-2 h-4 w-4" />
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

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
                          <Image
                            src={"/icons/google.webp"}
                            width={20}
                            height={20}
                            alt="google icon"
                          />{" "}
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
      </Card>
    </div>
  );
};
`;

export const login3Example = `import { LoginForm3 } from "@/components/auth/login/login-form-3";

const page = () => {
  return (
    <div>
      <LoginForm3 />
    </div>
  );
};

export default page;`;

export const login4Code = String.raw`
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlert, Eye, EyeOff, Loader, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm4 = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <Card className="min-w-sm md:max-w-md">
        {/**header and logo */}
        <CardHeader className="mb-5 space-y-1 text-center">
          <Image
            src="/icons/placeholder.svg"
            alt="login logo"
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>

        <CardContent>
          {/**form login */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 pb-7">
            <div className="flex flex-col gap-1">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="text-base-content/40 h-5 w-5 text-black/50 dark:text-white/50" />
                </div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                  }}
                  placeholder="zuncui@example.com"
                  className="border-0 border-b pl-10"
                />
              </div>
              {errors.email && (
                <p className="flex items-center text-sm text-red-400">
                  <CircleAlert className="mr-2 h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="text-base-content/40 h-5 w-5 text-black/50 dark:text-white/50" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  name="password"
                  value={formData.password}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, password: e.target.value }));
                  }}
                  className="border-0 border-b pl-10"
                />
                <button
                  type="button"
                  className={\`absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-black dark:text-white\`}
                  disabled={formData.password === ""}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div>
                {errors.password && (
                  <p className="flex items-center text-sm text-red-400">
                    <CircleAlert className="mr-2 h-4 w-4" />
                    {errors.password}
                  </p>
                )}
                <Label className="m-0 flex justify-end underline">
                  <span className="cursor-pointer text-[13px] font-bold">
                    <Link href="#">Forgot password?</Link>
                  </span>
                </Label>
              </div>
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

          {/**btn for github and google and X */}
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
                <>
                  <Image src="/icons/github.svg" alt="github icon" width={20} height={20} />
                </>
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
                <>
                  <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
                </>
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
                <>
                  <Image src="/icons/x.png" alt="x icon" width={20} height={20} />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/**footer policy */}
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
};
`;

export const login4Example = `import { LoginForm4 } from "@/components/auth/login/login-form-4";

const page = () => {
  return (
    <div>
      <LoginForm4 />
    </div>
  );
};

export default page;`;
