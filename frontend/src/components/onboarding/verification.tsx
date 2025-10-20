"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/auth-context";

export function Verification() {
  const { userRole, completeOnboarding } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    taxId: "",
    phoneNumber: "",
    governmentId: "",
  });

  const isSeller = userRole === 'seller';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real app, this would verify documents and KYC
      await new Promise(resolve => setTimeout(resolve, 1500));
      await completeOnboarding();
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = async () => {
    setIsLoading(true);
    try {
      await completeOnboarding();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {isSeller ? 'Seller Verification' : 'Account Verification'}
        </h1>
        <p className="text-lg text-muted-foreground">
          {isSeller 
            ? 'Verify your identity to start selling on the marketplace'
            : 'Optional: Verify your account for enhanced security'}
        </p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSeller && (
            <>
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="Your Company LLC"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  required={isSeller}
                />
              </div>

              <div>
                <Label htmlFor="taxId">Tax ID / EIN *</Label>
                <Input
                  id="taxId"
                  placeholder="XX-XXXXXXX"
                  value={formData.taxId}
                  onChange={(e) => setFormData({...formData, taxId: e.target.value})}
                  required={isSeller}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Required for payment processing and tax reporting
                </p>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            />
          </div>

          <div>
            <Label htmlFor="governmentId">Government ID Upload</Label>
            <div className="mt-2">
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:bg-muted/30 cursor-pointer transition-colors">
                <div className="text-4xl mb-2">📄</div>
                <p className="text-sm text-muted-foreground mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  Driver&apos;s license, passport, or national ID
                </p>
              </div>
            </div>
          </div>

          {isSeller && (
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span>🔒</span>
                Why verification?
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Build trust with buyers</li>
                <li>• Access higher transaction limits</li>
                <li>• Required for payment processing</li>
                <li>• Comply with regulations</li>
              </ul>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {!isSeller && (
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleSkip}
                disabled={isLoading}
              >
                Skip for Now
              </Button>
            )}
            <Button
              type="submit"
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : isSeller ? 'Submit for Review' : 'Verify Account'}
            </Button>
          </div>
        </form>
      </Card>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Your information is encrypted and securely stored. We never share your data with third parties.
        </p>
      </div>
    </div>
  );
}
