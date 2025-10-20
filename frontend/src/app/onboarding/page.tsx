"use client";

import { useAuth } from "@/contexts/auth-context";
import { RoleSelection } from "@/components/onboarding/role-selection";
import { ProfileSetup } from "@/components/onboarding/profile-setup";
import { Verification } from "@/components/onboarding/verification";
import { OnboardingComplete } from "@/components/onboarding/onboarding-complete";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const { needsOnboarding, onboardingStep, isConnected, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if not connected or no onboarding needed
  useEffect(() => {
    if (!isConnected) {
      router.push('/');
      return;
    }
    
    if (isAuthenticated && !needsOnboarding) {
      router.push('/marketplace');
      return;
    }
  }, [isConnected, isAuthenticated, needsOnboarding, router]);

  if (!isConnected || !needsOnboarding) {
    return null; // Will redirect
  }

  const renderStep = () => {
    switch (onboardingStep) {
      case 'role-selection':
        return <RoleSelection />;
      case 'profile-setup':
        return <ProfileSetup />;
      case 'verification':
        return <Verification />;
      case 'completed':
        return <OnboardingComplete />;
      default:
        return <RoleSelection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {['Role', 'Profile', 'Verify', 'Complete'].map((step, index) => {
                const stepNumber = index + 1;
                const isActive = 
                  (onboardingStep === 'role-selection' && stepNumber === 1) ||
                  (onboardingStep === 'profile-setup' && stepNumber === 2) ||
                  (onboardingStep === 'verification' && stepNumber === 3) ||
                  (onboardingStep === 'completed' && stepNumber === 4);
                const isCompleted = 
                  (onboardingStep === 'profile-setup' && stepNumber === 1) ||
                  (onboardingStep === 'verification' && stepNumber <= 2) ||
                  (onboardingStep === 'completed' && stepNumber <= 3);

                return (
                  <div key={step} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        isActive
                          ? "bg-foreground text-background"
                          : isCompleted
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? "✓" : stepNumber}
                    </div>
                    {index < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          isCompleted ? "bg-foreground" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className={onboardingStep === 'role-selection' ? "font-medium" : "text-muted-foreground"}>
                Select Role
              </span>
              <span className={onboardingStep === 'profile-setup' ? "font-medium" : "text-muted-foreground"}>
                Setup Profile
              </span>
              <span className={onboardingStep === 'verification' ? "font-medium" : "text-muted-foreground"}>
                Verification
              </span>
              <span className={onboardingStep === 'completed' ? "font-medium" : "text-muted-foreground"}>
                Complete
              </span>
            </div>
          </div>

          {/* Onboarding content */}
          {renderStep()}
        </div>
      </main>

      <Footer />
    </div>
  );
}