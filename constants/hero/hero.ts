export const Hero1Code = `{
'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function HeroSection1() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const mobileMenu = document.getElementById('mobile-menu')
            const menuButton = document.getElementById('menu-button')
            
            if (mobileMenuOpen && 
                mobileMenu && 
                !mobileMenu.contains(event.target as Node) &&
                menuButton &&
                !menuButton.contains(event.target as Node)
            ) {
                setMobileMenuOpen(false)
            }
        }

        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [mobileMenuOpen])
    return (
        <div className="bg-white dark:bg-black min-h-screen relative overflow-hidden isolate">
            {mobileMenuOpen && (
                <div 
                    className="absolute inset-0 z-40 bg-black/20 dark:bg-black/40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
            <header className="relative z-50 w-full">
                <nav className="flex items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <div className="h-8 w-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
                                <span className="text-white dark:text-black font-bold text-lg">C</span>
                            </div>
                        </Link>
                    </div>

                 
                    <div className="flex lg:hidden">
                        <Button
                            id="menu-button"
                            variant="ghost"
                            size="sm"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white relative z-50"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </Button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>

            
                <div
                    id="mobile-menu"
                    className={\`absolute top-0 right-0 z-40 w-80 max-w-[calc(100vw-2rem)] h-screen bg-gray-50 dark:bg-black border-l border-gray-200 dark:border-black transform transition-transform duration-300 ease-in-out lg:hidden \${
                        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }\`}
                >
                    <div className="p-6 pt-20">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <div className="h-8 w-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
                                    <span className="text-white dark:text-black font-bold text-lg">C</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flow-root">
                            <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="relative isolate px-6 lg:px-8">
            
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-purple-300 dark:from-gray-600 dark:to-gray-400 opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-300 dark:ring-gray-700 hover:ring-gray-400 dark:hover:ring-gray-600 transition-colors">
                            Announcing our next round of funding.{' '}
                            <Link href="#" className="font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            <span className="text-balance">
                                Data to enrich your{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                                    online business
                                </span>
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            Elit sunt amet fugiat veniam occaecat.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button
                                size="lg"
                                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold px-6 py-3 transition-colors"
                            >
                                Get started
                            </Button>
                            <Link
                                href="#"
                                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-purple-300 dark:from-gray-600 dark:to-gray-400 opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}}`;
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
export const Hero2Code = `'use client'

import { Menu, X, ArrowRight, Play, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'

export default function HeroSection2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu')
      const menuButton = document.getElementById('menu-button')
      
      if (mobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target as Node) &&
          menuButton &&
          !menuButton.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <div className="relative overflow-hidden bg-background w-full min-h-screen">
      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div 
          className="absolute inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={\`absolute top-0 right-0 z-40 w-80 max-w-[85%] h-full bg-background border-l shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden \${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }\`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="h-8 w-8 rounded-md flex items-center justify-center text-white dark:text-black dark:bg-white bg-black font-bold">Y</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              {['Product', 'Features', 'Marketplace', 'Company'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="p-6 border-t hidden">
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                Log in
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Header/Navbar */}
      <header className="relative z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="h-8 w-8 rounded-md flex items-center justify-center text-white dark:text-black dark:bg-white bg-black font-bold">Y</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              id="menu-button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {['Product', 'Features', 'Marketplace', 'Company'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:ml-8">
            <Button variant="ghost" asChild>
              <Link href="#">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </Button>
          </div>
        </nav>
      </header>
     
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
        
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm mb-8">
            <Check className="h-4 w-4 mr-2 text-green-500" />
            Trusted by thousands of developers
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Build amazing apps</span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              faster than ever
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            The complete toolkit for modern web development with everything you need in one package.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg" className="px-8">
              <Play className="mr-2 h-4 w-4" />
              Watch demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Check className="h-5 w-5 text-primary" />,
                title: "Type Safe",
                description: "Full TypeScript support out of the box"
              },
              {
                icon: <Check className="h-5 w-5 text-primary" />,
                title: "Dark Mode",
                description: "Automatic dark mode detection"
              },
              {
                icon: <Check className="h-5 w-5 text-primary" />,
                title: "Accessible",
                description: "WCAG compliant components"
              }
            ].map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-secondary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {["Acme", "Globex", "Soylent", "Initech", "Umbrella"].map((company) => (
                <div key={company} className="font-medium">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
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
