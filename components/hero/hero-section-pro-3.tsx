"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Globe, Star, ArrowUpRight, ChevronDown, Zap, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection3() {
  const [mounted, setMounted] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { value: "99.9%", label: "Uptime", icon: Target },
    { value: "50K+", label: "Users", icon: Users },
    { value: "180+", label: "Countries", icon: Globe },
    { value: "4.9★", label: "Rating", icon: Star },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-800 text-slate-200 dark:bg-slate-950 dark:text-slate-100">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animate-pulse bg-[linear-gradient(rgba(71,85,105,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(71,85,105,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.15)_1px,transparent_1px)]"></div>

      {/* Dynamic Orbs */}
      <div className="animate-float absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-slate-600/20 to-slate-500/20 blur-3xl dark:from-slate-700/20 dark:to-slate-600/20"></div>
      <div className="animate-float-delayed absolute right-10 bottom-20 h-96 w-96 rounded-full bg-gradient-to-r from-slate-700/20 to-slate-600/20 blur-3xl dark:from-slate-800/20 dark:to-slate-700/20"></div>
      <div className="animate-float-slow absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-slate-600/20 to-slate-700/20 blur-2xl dark:from-slate-700/20 dark:to-slate-800/20"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(15px) rotate(-120deg);
          }
          66% {
            transform: translateY(-25px) rotate(-240deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div
                className={`transform transition-all delay-500 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="mb-6 inline-flex items-center rounded-full border border-slate-600 bg-slate-700/50 px-4 py-2 dark:border-slate-700 dark:bg-slate-800/50">
                  <Award className="mr-2 h-4 w-4 text-slate-400 dark:text-slate-400" />
                  <span className="text-sm text-slate-300 dark:text-slate-300">
                    Winner of Innovation Award 2024
                  </span>
                </div>

                <h1 className="text-5xl leading-tight font-bold lg:text-7xl">
                  <span className="block text-slate-100 dark:text-slate-100">Transform Your</span>
                  <span className="block animate-pulse bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent dark:from-slate-300 dark:via-slate-400 dark:to-slate-500">
                    Digital Future
                  </span>
                </h1>
              </div>

              <p
                className={`max-w-2xl transform text-xl leading-relaxed text-slate-400 transition-all delay-700 duration-1000 dark:text-slate-400 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Experience the next generation of digital innovation with our cutting-edge platform.
                Build, deploy, and scale applications that shape tomorrow&apos;s world.
              </p>

              <div
                className={`flex transform flex-col gap-4 transition-all delay-900 duration-1000 sm:flex-row ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <Button
                  size="lg"
                  className="group border border-slate-500 bg-gradient-to-r from-slate-600 to-slate-700 px-8 text-slate-100 shadow-xl transition-all duration-300 hover:scale-105 hover:from-slate-500 hover:to-slate-600 hover:shadow-2xl dark:border-slate-600 dark:from-slate-700 dark:to-slate-800 dark:text-slate-200 dark:hover:from-slate-600 dark:hover:to-slate-700"
                >
                  Start Building Now
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-500 px-8 text-slate-800/50 hover:bg-slate-700/50 hover:text-slate-200 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-200"
                >
                  View Demo
                </Button>
              </div>

              {/* Metrics */}
              <div
                className={`grid transform grid-cols-4 gap-4 pt-8 transition-all delay-1100 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div
                      key={index}
                      className={`rounded-lg p-4 text-center transition-all duration-500 ${
                        activeMetric === index
                          ? "scale-105 border border-slate-600 bg-slate-700/50 dark:border-slate-700 dark:bg-slate-800/50"
                          : "hover:bg-slate-700/30 dark:hover:bg-slate-800/30"
                      }`}
                    >
                      <IconComponent
                        className={`mx-auto mb-2 h-6 w-6 transition-colors duration-300 ${
                          activeMetric === index
                            ? "text-slate-300 dark:text-slate-300"
                            : "text-slate-500 dark:text-slate-500"
                        }`}
                      />
                      <div className="text-2xl font-bold text-slate-200 dark:text-slate-200">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-500">
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div
              className={`relative transform transition-all delay-600 duration-1000 ${mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            >
              <div className="relative">
                {/* Hero Image Container */}
                <Image
                  src="/hero-img/r.jpg"
                  alt="Digital Analytics Dashboard"
                  width={800}
                  height={384}
                  className="h-full w-full rounded-2xl object-cover opacity-90 dark:opacity-80"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-transparent to-slate-800/20 dark:from-slate-900/70 dark:via-transparent dark:to-slate-900/30"></div>

                {/* Content overlay */}
                <div className="absolute right-6 bottom-6 left-6">
                  <div className="rounded-lg border border-slate-600/50 bg-slate-700/80 p-4 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/80">
                    <h3 className="mb-2 text-lg font-semibold text-slate-100 dark:text-slate-200">
                      Real-time Analytics
                    </h3>
                    <p className="text-sm text-slate-300 dark:text-slate-400">
                      Monitor your digital transformation in real-time with advanced insights and
                      predictive analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 flex h-24 w-24 animate-bounce items-center justify-center rounded-full border border-slate-500 bg-gradient-to-r from-slate-600 to-slate-700 shadow-xl dark:border-slate-600 dark:from-slate-700 dark:to-slate-800">
                <Star className="h-8 w-8 text-slate-200 dark:text-slate-300" />
              </div>

              <div className="absolute -bottom-4 -left-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-lg border border-slate-500 bg-gradient-to-r from-slate-700 to-slate-600 shadow-xl dark:border-slate-600 dark:from-slate-800 dark:to-slate-700">
                <Zap className="h-6 w-6 text-slate-200 dark:text-slate-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex transform justify-center pt-16 transition-all delay-1300 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-slate-500 dark:text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
