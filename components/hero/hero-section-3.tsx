import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection3 = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-between gap-10 px-[5%] py-12 lg:flex-row lg:gap-16 lg:py-20 dark:bg-black">
      <div className="flex w-full flex-col lg:w-1/2">
        <h1 className="text-4xl leading-tight font-semibold sm:text-5xl lg:text-7xl">
          Put people first
        </h1>

        <p className="mt-4 text-lg leading-relaxed sm:text-xl lg:text-2xl">
          The lantern flickered softly against the damp brick wall, casting shadows that danced like
          restless spirits. A faint scent of rain lingered in the air.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Input type="text" className="h-11 flex-1" placeholder="Enter your email" />
          <Button className="h-11 cursor-pointer px-6">Book a demo</Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <div>
            <h1 className="mb-1 text-3xl font-semibold sm:text-4xl lg:text-5xl">75.2%</h1>
            <p className="text-base font-medium sm:text-lg">Average daily activity</p>
          </div>
          <div className="hidden h-16 border border-gray-300 sm:block" />
          <div>
            <h1 className="mb-1 text-3xl font-semibold sm:text-4xl lg:text-5xl">~ 20k</h1>
            <p className="text-base font-medium sm:text-lg">Active users</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Image
                key={i}
                src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                alt={`User ${i + 1}`}
                width={40}
                height={40}
                className="rounded-full border border-white shadow-md"
              />
            ))}
          </div>

          <p className="text-base font-medium sm:text-lg">
            Trusted by <span className="font-bold">1000+</span> happy users
          </p>
        </div>

        <div className="mt-10">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Why choose us?</h2>
          <ul className="list-inside list-disc space-y-1 text-base sm:text-lg">
            <li>Seamless onboarding process</li>
            <li>24/7 customer support</li>
            <li>Powerful analytics & insights</li>
          </ul>
        </div>
      </div>

      <div className="flex w-full justify-center lg:w-[45%]">
        <Image
          src="/hero-images/hero-section-3.png"
          alt="Hero Illustration"
          width={800}
          height={600}
          className="h-auto max-w-full bg-transparent object-contain dark:invert"
        />
      </div>
    </section>
  );
};

export default HeroSection3;
