"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function OnboardingComplete() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/marketplace');
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full bg-foreground text-background flex items-center justify-center text-5xl mx-auto mb-6">
          ✓
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          You&apos;re All Set!
        </h1>
        <p className="text-lg text-muted-foreground">
          Your account has been created successfully
        </p>
      </div>

      <Card className="p-8 mb-8">
        <h3 className="text-xl font-semibold mb-6">What&apos;s Next?</h3>
        
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Explore the Marketplace</h4>
              <p className="text-sm text-muted-foreground">
                Browse thousands of products from verified sellers worldwide
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Complete Your Profile</h4>
              <p className="text-sm text-muted-foreground">
                Add more details to build trust and connect with the community
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Start Trading</h4>
              <p className="text-sm text-muted-foreground">
                Buy or sell with confidence using our secure escrow system
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Button 
        size="lg"
        className="rounded-full px-12 text-base font-medium"
        onClick={handleContinue}
      >
        Go to Marketplace
      </Button>

      <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="/docs" className="hover:text-foreground transition-colors">
          📚 Documentation
        </a>
        <a href="/profile" className="hover:text-foreground transition-colors">
          👤 My Profile
        </a>
        <a href="/about" className="hover:text-foreground transition-colors">
          ℹ️ About
        </a>
      </div>
    </div>
  );
}
