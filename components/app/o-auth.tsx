import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";

interface OAuthProps {
  loading: { google: boolean; github: boolean };
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<
    React.SetStateAction<{ google: boolean; github: boolean }>
  >;
}

const OAuth: React.FC<OAuthProps> = ({
  loading,
  setLoading,
}) => {
    async function handleGoogleOAuth() {
        setLoading((prev) => ({ ...prev, google: true }));
        await signIn("google", { callbackUrl: "/" });
        setLoading((prev) => ({ ...prev, google: false }));
    }

    async function handleGithubOAuth() {
        setLoading((prev) => ({ ...prev, github: true }));
        await signIn("github", { callbackUrl: "/" });
        setLoading((prev) => ({ ...prev, github: false }));
    }

    return (
        <div className="flex flex-col gap-4">
            <Button
                variant="outline"
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-4"
                onClick={handleGoogleOAuth}
                disabled={loading.google}
                type="button"
            >
                
                {loading.google ? <Loader className="animate-spin" /> : <><Image src={'/icons/google.webp'} width={20} height={20} alt="google icon" /> Continue with google</>}
            </Button>

            <Button
                variant="outline"
                className="w-full cursor-pointer hover:bg-black/85 dark:hover:bg-white/85 dark:bg-white dark:text-black hover:text-white bg-black text-white flex items-center justify-center gap-2 py-4"
                onClick={handleGithubOAuth}
                disabled={loading.github}
                type="button"
            >
                {loading.github ? <Loader className="animate-spin" /> : <><Image src={'/icons/github.svg'} width={20} height={20} alt="github icon" className="invert dark:invert-0"/> Continue with github</>}
            </Button>
        </div>
    );
};

export default OAuth;