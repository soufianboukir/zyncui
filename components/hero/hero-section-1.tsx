"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection2() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      <div className="relative isolate w-full">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-purple-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-gray-600 dark:to-gray-400 dark:opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-screen-xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-300 transition-colors hover:ring-gray-400 dark:text-gray-400 dark:ring-gray-700 dark:hover:ring-gray-600">
              Announcing our next round of funding.{" "}
              <Link
                href="#"
                className="font-semibold text-gray-900 transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-6xl dark:text-white">
              <span className="text-balance">
                Data to enrich your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
                  online business
                </span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Get started
              </Button>
              <Link
                href="#"
                className="text-sm leading-6 font-semibold text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-purple-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:from-gray-600 dark:to-gray-400 dark:opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
