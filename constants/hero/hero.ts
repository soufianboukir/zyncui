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
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <div className="from-background via-background to-muted/40 relative min-h-screen w-full overflow-hidden bg-gradient-to-b">
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

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Type Safe", description: "Full TypeScript support out of the box" },
            { title: "Dark Mode", description: "Automatic dark mode detection" },
            { title: "Accessible", description: "WCAG compliant components" },
          ].map(feature => (
            <Card
              key={feature.title}
              className="border-muted border bg-white/70 p-6 text-center shadow-lg backdrop-blur-lg dark:bg-black/50"
            >
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Check className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{feature.description}</p>
            </Card>
          ))}
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
}`;
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
export const Hero3Code = `'use client'
import React, { useState, useEffect } from 'react';
import { Users, Globe, Star, ArrowUpRight, ChevronDown, Zap, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function HeroSection3() {
  const [mounted, setMounted] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { value: "99.9%", label: "Uptime", icon: Target },
    { value: "50K+", label: "Users", icon: Users },
    { value: "180+", label: "Countries", icon: Globe },
    { value: "4.9★", label: "Rating", icon: Star }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="relative min-h-screen bg-slate-800 dark:bg-slate-950 text-slate-200 dark:text-slate-100 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(71,85,105,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(71,85,105,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse"></div>
      
      {/* Dynamic Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-slate-600/20 to-slate-500/20 dark:from-slate-700/20 dark:to-slate-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-slate-700/20 to-slate-600/20 dark:from-slate-800/20 dark:to-slate-700/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-slate-600/20 to-slate-700/20 dark:from-slate-700/20 dark:to-slate-800/20 rounded-full blur-2xl animate-float-slow"></div>

      <style jsx>{\`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(15px) rotate(-120deg); }
          66% { transform: translateY(-25px) rotate(-240deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
      \`}</style>

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-12 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className={\`transform transition-all duration-1000 delay-500 \${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}\`}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 mb-6">
                  <Award className="h-4 w-4 text-slate-400 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-300 dark:text-slate-300">Winner of Innovation Award 2024</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-slate-100 dark:text-slate-100">Transform Your</span>
                  <span className="block bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 dark:from-slate-300 dark:via-slate-400 dark:to-slate-500 bg-clip-text text-transparent animate-pulse">
                    Digital Future
                  </span>
                </h1>
              </div>

              <p className={\`text-xl text-slate-400 dark:text-slate-400 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-700 \${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}\`}>
                Experience the next generation of digital innovation with our cutting-edge platform. 
                Build, deploy, and scale applications that shape tomorrow&apos;s world.
              </p>

              <div className={\`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-900 \${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}\`}>
                <Button size="lg" className="bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 hover:from-slate-500 hover:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-700 text-slate-100 dark:text-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 border border-slate-500 dark:border-slate-600">
                  Start Building Now
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-500 dark:border-slate-600 text-slate-800/50 dark:text-slate-300 hover:bg-slate-700/50 dark:hover:bg-slate-800/50 hover:text-slate-200 dark:hover:text-slate-200 px-8">
                  View Demo
                </Button>
              </div>

              {/* Metrics */}
              <div className={\`grid grid-cols-4 gap-4 pt-8 transform transition-all duration-1000 delay-1100 \${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}\`}>
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div 
                      key={index}
                      className={\`text-center p-4 rounded-lg transition-all duration-500 \${
                        activeMetric === index 
                          ? 'bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 scale-105' 
                          : 'hover:bg-slate-700/30 dark:hover:bg-slate-800/30'
                      }\`}
                    >
                      <IconComponent className={\`h-6 w-6 mx-auto mb-2 transition-colors duration-300 \${
                        activeMetric === index ? 'text-slate-300 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'
                      }\`} />
                      <div className="text-2xl font-bold text-slate-200 dark:text-slate-200">{metric.value}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-500">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className={\`relative transform transition-all duration-1000 delay-600 \${mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}\`}>
              <div className="relative">
                {/* Hero Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-700/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-600 dark:border-slate-700 shadow-2xl">
                  <img 
                    src="/hero-img/r.jpg"
                    alt="Digital Analytics Dashboard"
                    className="w-full h-96 object-cover opacity-90 dark:opacity-80"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-transparent to-slate-800/20 dark:from-slate-900/70 dark:via-transparent dark:to-slate-900/30"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-700/80 dark:bg-slate-900/80 backdrop-blur-md rounded-lg p-4 border border-slate-600/50 dark:border-slate-700/50">
                      <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-200 mb-2">Real-time Analytics</h3>
                      <p className="text-sm text-slate-300 dark:text-slate-400">Monitor your digital transformation in real-time with advanced insights and predictive analytics.</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center shadow-xl animate-bounce border border-slate-500 dark:border-slate-600">
                  <Star className="h-8 w-8 text-slate-200 dark:text-slate-300" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-800 dark:to-slate-700 rounded-lg flex items-center justify-center shadow-xl animate-pulse border border-slate-500 dark:border-slate-600">
                  <Zap className="h-6 w-6 text-slate-200 dark:text-slate-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={\`flex justify-center pt-16 transform transition-all duration-1000 delay-1300 \${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}\`}>
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-slate-500 dark:text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
export const hero3Example = `import HeroSection3 from "@/components/hero/hero-section-pro-3";

export default function page() {
  return (
    <div>
      <HeroSection3 />
    </div>
  );
}   `;

export const Hero4Code = `'use client'
import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Check, BarChart2, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection4() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const heroImages = [
    "/hero-img/showcase1.jpg",
    "/hero-img/showcase2.jpg",
    "/hero-img/showcase3.jpg",
    "/hero-img/showcase4.jpg"
  ];

  const features = [
    "AI-powered analytics",
    "Real-time collaboration",
    "Enterprise-grade security",
    "Customizable workflows"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Diagonal background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_49%,rgba(59,130,246,0.05)_50%)] dark:bg-[linear-gradient(to_bottom_right,transparent_49%,rgba(59,130,246,0.1)_50%)] bg-[size:3rem_3rem]"></div>

      {/* Floating grid */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] dark:bg-[url('/images/grid-dark.svg')] bg-[length:90px_90px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content section */}
          <div className={\`space-y-8 transition-all duration-1000 \${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}\`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <BarChart2 className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Now with AI insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-slate-900 dark:text-white">Redefining</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Transform raw data into actionable insights with our next-generation analytics platform powered by artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="group h-12 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="h-12 px-6 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Play className="h-4 w-4 mr-2" />
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
          <div className={\`relative h-[500px] transition-all duration-1000 delay-200 \${mounted ? 'opacity-100' : 'opacity-0'}\`}>
            {/* Image slideshow */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={\`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 \${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}\`}
                  style={{ backgroundImage: \`url(\${image})\` }}
                />
              ))}
            </div>

            {/* Image selector */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={\`h-2 w-8 rounded-full transition-all \${index === currentImageIndex ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-300 dark:bg-slate-600'}\`}
                />
              ))}
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 w-64 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Visual Analytics</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Interactive dashboards</p>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg flex items-center justify-center">
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
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-cyan-100 dark:bg-cyan-900/20 blur-3xl animate-float-delayed"></div>

      <style jsx>{\`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      \`}</style>
    </div>
  );
}`;
export const hero4Example = `import HeroSection4 from "@/components/hero/hero-section-pro-4";

export default function page() {

    return (
        <div>
            <HeroSection4 />
        </div>
    )
}`;
