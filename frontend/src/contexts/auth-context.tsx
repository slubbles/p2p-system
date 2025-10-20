"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

// User types for our P2P marketplace
export type UserRole = 'buyer' | 'seller' | 'admin';
export type UserStatus = 'pending' | 'verified' | 'suspended';

export interface User {
  id: string;
  address: string;
  role: UserRole;
  status: UserStatus;
  profile: {
    name?: string;
    email?: string;
    avatar?: string;
    bio?: string;
    location?: string;
    businessName?: string; // for sellers
    businessType?: string; // for sellers
  };
  verification: {
    isEmailVerified: boolean;
    isKYCVerified: boolean;
    isBusinessVerified: boolean; // for sellers
  };
  stats: {
    totalOrders: number;
    completionRate: number;
    avgRating: number;
    reviewCount: number;
  };
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  // Wallet connection state
  isConnected: boolean;
  address: string | undefined;
  
  // User state
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  disconnectWallet: () => void;
  updateUserProfile: (updates: Partial<User['profile']>) => Promise<void>;
  setUserRole: (role: UserRole) => Promise<void>;
  completeOnboarding: () => Promise<void>;
  
  // Onboarding state
  needsOnboarding: boolean;
  onboardingStep: 'role-selection' | 'profile-setup' | 'verification' | 'completed';
  userRole: UserRole | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState<AuthContextType['onboardingStep']>('role-selection');

  // Check if user needs onboarding
  const needsOnboarding = isConnected && (!user || !user.role || user.status === 'pending');
  const isAuthenticated = isConnected && !!user && user.status !== 'suspended';

  // Load user data when wallet connects
  useEffect(() => {
    if (isConnected && address) {
      loadUserData(address);
    } else {
      setUser(null);
    }
  }, [isConnected, address]);

  const loadUserData = async (walletAddress: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with real API call
      // For now, check if user exists in localStorage (mock)
      const savedUser = localStorage.getItem(`user_${walletAddress}`);
      
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        
        // Determine onboarding step based on user data
        if (!userData.role) {
          setOnboardingStep('role-selection');
        } else if (!userData.profile.name) {
          setOnboardingStep('profile-setup');
        } else if (!userData.verification.isEmailVerified) {
          setOnboardingStep('verification');
        } else {
          setOnboardingStep('completed');
        }
      } else {
        // New user - start onboarding
        setOnboardingStep('role-selection');
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
    setUser(null);
    setOnboardingStep('role-selection');
  };

  const updateUserProfile = async (updates: Partial<User['profile']>) => {
    if (!user || !address) return;

    const updatedUser = {
      ...user,
      profile: { ...user.profile, ...updates },
      updatedAt: new Date().toISOString(),
    };

    setUser(updatedUser);
    
    // TODO: Replace with real API call
    localStorage.setItem(`user_${address}`, JSON.stringify(updatedUser));
  };

  const setUserRole = async (role: UserRole) => {
    if (!address) return;

    const newUser: User = {
      id: `user_${Date.now()}`,
      address,
      role,
      status: 'pending',
      profile: {},
      verification: {
        isEmailVerified: false,
        isKYCVerified: false,
        isBusinessVerified: false,
      },
      stats: {
        totalOrders: 0,
        completionRate: 0,
        avgRating: 0,
        reviewCount: 0,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setUser(newUser);
    setOnboardingStep('profile-setup');
    
    // TODO: Replace with real API call
    localStorage.setItem(`user_${address}`, JSON.stringify(newUser));
  };

  const completeOnboarding = async () => {
    if (!user || !address) return;

    const updatedUser = {
      ...user,
      status: 'verified' as UserStatus,
      updatedAt: new Date().toISOString(),
    };

    setUser(updatedUser);
    setOnboardingStep('completed');
    
    // TODO: Replace with real API call
    localStorage.setItem(`user_${address}`, JSON.stringify(updatedUser));
  };

  const value: AuthContextType = {
    isConnected,
    address,
    user,
    isLoading,
    isAuthenticated,
    disconnectWallet,
    updateUserProfile,
    setUserRole,
    completeOnboarding,
    needsOnboarding,
    onboardingStep,
    userRole: user?.role,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}