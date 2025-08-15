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
                src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                alt={`User ${i + 1}`}
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
