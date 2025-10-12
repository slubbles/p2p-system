"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
            <span className="text-background font-bold text-lg">P</span>
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight hidden sm:inline">P2P Marketplace</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            href="/marketplace" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Marketplace
          </Link>
          <Link 
            href="/features" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link 
            href="/docs" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
          <Link 
            href="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-sm">
            Sign In
          </Button>
          <Button size="sm" className="rounded-full text-sm px-4 sm:px-6">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
