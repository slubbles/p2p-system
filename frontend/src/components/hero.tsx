"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppKit } from "@reown/appkit/react";

export function Hero() {
  const { open } = useAppKit();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pt-24 md:pb-24">
      {/* Grid background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Gradient blur effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 rounded-full px-4 py-1.5 border border-border/50 shadow-sm">
            <span className="text-xs font-medium tracking-wide">Open Source P2P Framework</span>
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Build P2P Marketplaces
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            A Binance-inspired framework for trustless peer-to-peer marketplaces. From rice farmers to electronics retailers. Open-source, customizable, and production-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-20">
            <Button 
              size="lg" 
              onClick={() => open()}
              className="rounded-full px-10 py-6 text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-all border-2 border-foreground hover:bg-foreground hover:text-background active:scale-95"
            >
              Connect Wallet →
            </Button>
            <Link href="/demo" className="block w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-medium w-full hover:bg-muted/50 transition-all">
                View Screenshots
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-8 sm:gap-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">Open Source</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">24h</div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">To Launch</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">Industries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
