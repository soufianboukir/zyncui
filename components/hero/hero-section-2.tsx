"use client";

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
