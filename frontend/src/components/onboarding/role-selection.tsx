"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/auth-context";

export function RoleSelection() {
  const { setUserRole } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'seller' | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedRole) return;
    
    setIsLoading(true);
    try {
      await setUserRole(selectedRole);
    } catch (error) {
      console.error('Failed to set user role:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Welcome to P2P Marketplace
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose your role to get started. You can always change this later.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Buyer Card */}
        <Card 
          className={`p-8 cursor-pointer transition-all duration-200 ${
            selectedRole === 'buyer' 
              ? 'ring-2 ring-foreground bg-muted/50' 
              : 'hover:shadow-lg hover:bg-muted/30'
          }`}
          onClick={() => setSelectedRole('buyer')}
        >
          <div className="text-4xl mb-4">🛒</div>
          <h3 className="text-xl font-bold mb-2">I want to buy</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Discover products from verified sellers worldwide. Pay securely and track your orders.
          </p>
          <div className="space-y-2">
            <Badge variant="secondary" className="text-xs">Browse products</Badge>
            <Badge variant="secondary" className="text-xs">Secure payments</Badge>
            <Badge variant="secondary" className="text-xs">Order tracking</Badge>
          </div>
        </Card>

        {/* Seller Card */}
        <Card 
          className={`p-8 cursor-pointer transition-all duration-200 ${
            selectedRole === 'seller' 
              ? 'ring-2 ring-foreground bg-muted/50' 
              : 'hover:shadow-lg hover:bg-muted/30'
          }`}
          onClick={() => setSelectedRole('seller')}
        >
          <div className="text-4xl mb-4">🏪</div>
          <h3 className="text-xl font-bold mb-2">I want to sell</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Reach customers globally. Post advertisements and manage orders with zero platform fees.
          </p>
          <div className="space-y-2">
            <Badge variant="secondary" className="text-xs">Post ads</Badge>
            <Badge variant="secondary" className="text-xs">0% fees</Badge>
            <Badge variant="secondary" className="text-xs">Global reach</Badge>
          </div>
        </Card>
      </div>

      <Button 
        onClick={handleContinue}
        disabled={!selectedRole || isLoading}
        size="lg"
        className="rounded-full px-8"
      >
        {isLoading ? 'Setting up...' : 'Continue'}
      </Button>
    </div>
  );
}