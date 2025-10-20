"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/auth-context";
import { useAppKit } from "@reown/appkit/react";

export function ConnectWallet() {
  const { isConnected, address, user, needsOnboarding, disconnectWallet, isLoading } = useAuth();
  const { open } = useAppKit();
  const router = useRouter();

  // Redirect to onboarding when wallet connects and user needs onboarding
  useEffect(() => {
    if (isConnected && needsOnboarding) {
      router.push('/onboarding');
    }
  }, [isConnected, needsOnboarding, router]);

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        Loading...
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        {user && (
          <Badge variant={user.status === 'verified' ? 'default' : 'secondary'} className="text-xs">
            {user.role === 'seller' ? '🏪' : '🛒'} {user.status}
          </Badge>
        )}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={disconnectWallet} 
          className="text-xs border-2 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
        >
          {address.slice(0, 6)}...{address.slice(-4)}
        </Button>
      </div>
    );
  }

  return (
    <Button 
      size="sm" 
      onClick={() => open()} 
      className="rounded-full text-sm px-6 shadow-sm hover:shadow-md transition-all border-2 border-foreground hover:bg-foreground hover:text-background active:scale-95 active:shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    >
      Connect Wallet
    </Button>
  );
}