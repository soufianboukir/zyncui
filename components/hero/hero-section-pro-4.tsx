"use client";
import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Check, BarChart2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection4() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const heroImages = [
    "/hero-img/showcase1.jpg",
    "/hero-img/showcase2.jpg",
    "/hero-img/showcase3.jpg",
    "/hero-img/showcase4.jpg",
  ];

  const features = [
    "AI-powered analytics",
    "Real-time collaboration",
    "Enterprise-grade security",
    "Customizable workflows",
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Diagonal background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_49%,rgba(59,130,246,0.05)_50%)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(to_bottom_right,transparent_49%,rgba(59,130,246,0.1)_50%)]"></div>

      {/* Floating grid */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-[length:90px_90px] dark:bg-[url('/images/grid-dark.svg')]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content section */}
          <div
            className={`space-y-8 transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
              <BarChart2 className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Now with AI insights
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block text-slate-900 dark:text-white">Redefining</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                Business Intelligence
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-300">
              Transform raw data into actionable insights with our next-generation analytics
              platform powered by artificial intelligence.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button className="group h-12 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 text-white shadow-lg transition-all hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="h-12 border-slate-300 px-6 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image showcase */}
          <div
            className={`relative h-[500px] transition-all delay-200 duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
          >
            {/* Image slideshow */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-800">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>

            {/* Image selector */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-8 rounded-full transition-all ${index === currentImageIndex ? "bg-blue-600 dark:bg-blue-400" : "bg-slate-300 dark:bg-slate-600"}`}
                />
              ))}
            </div>

            {/* Floating card */}
            <div className="absolute -right-6 -bottom-6 w-64 rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-3 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Visual Analytics</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Interactive dashboards
                  </p>
                </div>
              </div>
              <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">85%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Faster insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="animate-float absolute top-1/4 left-10 h-24 w-24 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/20"></div>
      <div className="animate-float-delayed absolute right-20 bottom-1/3 h-32 w-32 rounded-full bg-cyan-100 blur-3xl dark:bg-cyan-900/20"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
