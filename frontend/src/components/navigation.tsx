"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ConnectWallet } from "@/components/connect-wallet";
import { useAuth } from "@/contexts/auth-context";

export function Navigation() {
  const { isAuthenticated, needsOnboarding } = useAuth();

  return (
    <nav className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
            <span className="text-background font-bold text-lg">P</span>
          </div>
          <span className="font-semibold text-base tracking-tight">P2P Marketplace</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {isAuthenticated && !needsOnboarding && (
            <Link 
              href="/marketplace" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Marketplace
            </Link>
          )}
          {isAuthenticated && (
            <Link 
              href="/profile" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              My Profile
            </Link>
          )}
          <Link 
            href="/docs" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Documentation
          </Link>
          <Link 
            href="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            About
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <ConnectWallet />
          {isAuthenticated && !needsOnboarding && (
            <Link href="/marketplace">
              <Button size="sm" className="rounded-full text-sm px-6 shadow-sm hover:shadow-md transition-all">
                Browse Market
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
