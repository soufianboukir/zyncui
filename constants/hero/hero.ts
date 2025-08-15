export const Hero1Code = `"use client";

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
`;
export const hero1Example = `import HeroSection1 from "@/components/hero/hero-section-1";

const page = () => {
  return (
    <div>
      <HeroSection1 />
    </div>
  );
};

export default page;

`;
export const Hero2Code = `"use client";

import { ArrowRight, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="from-background via-background to-muted/40 relative min-h-screen w-full overflow-hidden bg-gradient-to-b mx-auto">
      <div className="from-primary/30 absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r to-blue-500/30 opacity-60 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 text-center md:pt-28 lg:px-8">
        <div className="border-primary/30 bg-primary/10 text-primary inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur">
          <Check className="text-primary mr-2 h-4 w-4" />
          Trusted by 5,000+ developers
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Build beautiful apps</span>
          <span className="from-primary bg-gradient-to-r to-blue-500 bg-clip-text text-transparent">
            without the hassle
          </span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          The complete toolkit for modern web development with ready-to-use components, templates,
          and utilities — all in one place.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8">
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Play className="mr-2 h-4 w-4" />
            Watch demo
          </Button>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg mt-5">
          <Image
          width={300}
          height={600}
            src="https://images.unsplash.com/photo-1659479749984-d48333116052?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beautiful illustration"
            className="w-full h-auto object-cover"
          />
        </div>




        <div className="mt-20">
          <p className="text-muted-foreground mb-4 text-sm">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {["Acme", "Globex", "Soylent", "Initech", "Umbrella"].map(company => (
              <div key={company} className="font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export const hero2Example = `
import HeroSection2 from "@/components/hero/hero-section-2";

const page = () => {
  return (
    <div>
      <HeroSection2 />
    </div>
  );
};

export default page;

`;
export const Hero3Code = `
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection3 = () => {
  return (
    <section className="w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 py-12 lg:py-20 dark:bg-black px-[5%]">
      <div className="w-full lg:w-1/2 flex flex-col">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
          Put people first
        </h1>

        <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed">
          The lantern flickered softly against the damp brick wall, casting
          shadows that danced like restless spirits. A faint scent of rain
          lingered in the air.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Input type="text" className="h-11 flex-1" placeholder="Enter your email" />
          <Button className="h-11 px-6 cursor-pointer">Book a demo</Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-1">
              75.2%
            </h1>
            <p className="text-base sm:text-lg font-medium">
              Average daily activity
            </p>
          </div>
          <div className="hidden sm:block border border-gray-300 h-16" />
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-1">
              ~ 20k
            </h1>
            <p className="text-base sm:text-lg font-medium">Active users</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Image
                key={i}
                src={\`https://randomuser.me/api/portraits/men/${`i + 10`}.jpg\`}
                alt={\`User ${`i + 1`}\`}
                width={40}
                height={40}
                className="rounded-full border border-white shadow-md"
              />
            ))}
          </div>

          <p className="text-base sm:text-lg font-medium">
            Trusted by <span className="font-bold">1000+</span> happy users
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Why choose us?
          </h2>
          <ul className="list-disc list-inside text-base sm:text-lg space-y-1">
            <li>Seamless onboarding process</li>
            <li>24/7 customer support</li>
            <li>Powerful analytics & insights</li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-[45%] flex justify-center">
        <Image
          src="/hero-images/hero-section-3.png"
          alt="Hero Illustration"
          width={800}
          height={600}
          className="object-contain bg-transparent dark:invert max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection3;
`;
export const hero3Example = `import HeroSection3 from "@/components/hero/hero-section-3";

export default function page() {
  return (
    <div>
      <HeroSection3 />
    </div>
  );
}   `;
