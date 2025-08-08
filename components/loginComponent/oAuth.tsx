import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Roboto } from "next/font/google";

const fontRoboto = Roboto({
  subsets: ["latin"],
});

const OAuth = () => {
  return (
    <>
      <form className="mb-[15px] flex w-full flex-col gap-2.5">
        <Input type="email" placeholder="email" className="px-3.5 py-3" />
        <Input type="password" placeholder="password" className="px-3.5 py-3" />

        <p className="m-0 text-end text-[#747474] underline decoration-[#747474] dark:text-white">
          <span className="cursor-pointer text-[9px] font-bold hover:text-black dark:hover:text-gray-700">
            Forgot password
          </span>
        </p>

        <Button className={fontRoboto.className}>Log in</Button>
      </form>

      <p className="m-0 text-xs text-[#747474] dark:text-white">
        Dont have an account?
        <span className="ml-1 cursor-pointer text-xs font-extrabold text-black underline decoration-black dark:text-white dark:decoration-white">
          Sign up
        </span>
      </p>

      <div className="mt-5 flex w-full flex-col justify-start gap-4">
        <Button
          variant="outline"
          className="flex w-full cursor-pointer items-center justify-center gap-2 py-4"
        >
          <Image src="/icons/google.webp" alt="google icon" width={20} height={20} />
          Login with google
        </Button>

        <Button>
          <Image
            className="invert dark:invert-0"
            src="/icons/github.svg"
            alt="github icon"
            width={20}
            height={20}
          />
          Login with github
        </Button>
      </div>
    </>
  );
};

export default OAuth;
