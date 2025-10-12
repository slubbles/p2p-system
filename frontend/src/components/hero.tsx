"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pt-24 md:pb-24">
      {/* Grid background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
            <span className="text-xs font-medium">Universal P2P Framework</span>
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 px-4">
            Build P2P Marketplaces
            <br />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              For Any Industry
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Binance-inspired marketplace framework. From rice farmers to electronics retailers. 
            Open-source, white-label, and production-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Button size="lg" className="rounded-full px-8 text-base font-medium w-full sm:w-auto">
              Start Building
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-medium w-full sm:w-auto">
              View Documentation
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto px-4">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Open Source</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">0%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Platform Fee</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Industries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
