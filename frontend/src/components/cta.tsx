"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
          Ready to Build Your
          <br />
          P2P Marketplace?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-background/70 mb-14 leading-relaxed">
          Fork the repository, customize for your industry, and launch in days not months.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-20">
          <Link href="https://github.com/slubbles/p2p-system" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-full px-10 py-6 text-base font-medium w-full shadow-xl hover:shadow-2xl transition-all"
            >
              Fork on GitHub →
            </Button>
          </Link>
          <Link href="/docs" className="block w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-10 py-6 text-base font-medium bg-transparent text-background border-background/30 hover:bg-background/10 hover:border-background/50 w-full transition-all"
            >
              Read Documentation
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="pt-16 border-t border-background/10">
          <p className="text-sm text-background/50 mb-8 tracking-wide">Trusted by developers worldwide</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-sm">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-background/70" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-background/70 tracking-wide">MIT License</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-background/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-background/70 tracking-wide">100% Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
