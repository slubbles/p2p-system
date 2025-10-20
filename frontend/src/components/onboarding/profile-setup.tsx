"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/auth-context";

export function ProfileSetup() {
  const { user, updateUserProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.profile.name || '',
    email: user?.profile.email || '',
    bio: user?.profile.bio || '',
    location: user?.profile.location || '',
    businessName: user?.profile.businessName || '',
    businessType: user?.profile.businessType || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Please fill in required fields');
      return;
    }

    setIsLoading(true);
    try {
      await updateUserProfile(formData);
      // The context will automatically move to next step
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isSeller = user?.role === 'seller';

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Complete Your Profile
        </h1>
        <p className="text-lg text-muted-foreground">
          {isSeller 
            ? 'Tell buyers about your business and build trust'
            : 'Help us personalize your marketplace experience'
          }
        </p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">
                  {isSeller ? 'Contact Name' : 'Full Name'} *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="City, Country"
              />
            </div>

            <div>
              <Label htmlFor="bio">
                {isSeller ? 'Business Description' : 'About You'}
              </Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder={
                  isSeller 
                    ? 'Describe your business, products, and what makes you unique...'
                    : 'Tell us a bit about yourself...'
                }
                rows={3}
              />
            </div>
          </div>

          {/* Seller-specific fields */}
          {isSeller && (
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-lg font-semibold">Business Information</h3>
              
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Your business or company name"
                />
              </div>

              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Select 
                  value={formData.businessType} 
                  onValueChange={(value) => handleInputChange('businessType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agriculture">Agriculture & Farming</SelectItem>
                    <SelectItem value="livestock">Livestock & Animals</SelectItem>
                    <SelectItem value="electronics">Electronics & Technology</SelectItem>
                    <SelectItem value="textiles">Textiles & Clothing</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="trading">Trading & Distribution</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? 'Saving...' : 'Continue to Verification'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}