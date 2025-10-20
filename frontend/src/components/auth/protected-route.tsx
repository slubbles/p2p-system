"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, UserRole } from "@/contexts/auth-context";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: UserRole;
  redirectTo?: string;
}

export function ProtectedRoute({
  children,
  requireAuth = true,
  requireRole,
  redirectTo = "/",
}: ProtectedRouteProps) {
  const router = useRouter();
  const { isConnected, isAuthenticated, needsOnboarding, user, isLoading } = useAuth();

  useEffect(() => {
    // Wait for auth to load
    if (isLoading) return;

    // Require wallet connection
    if (requireAuth && !isConnected) {
      router.push(redirectTo);
      return;
    }

    // Require completed onboarding
    if (requireAuth && isConnected && needsOnboarding) {
      router.push("/onboarding");
      return;
    }

    // Require specific role
    if (requireRole && user?.role !== requireRole) {
      router.push("/marketplace");
      return;
    }

    // Check if authenticated (not suspended)
    if (requireAuth && !isAuthenticated) {
      router.push(redirectTo);
      return;
    }
  }, [isLoading, isConnected, isAuthenticated, needsOnboarding, user, requireAuth, requireRole, redirectTo, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-foreground border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (requireAuth && !isConnected) return null;
  if (requireAuth && needsOnboarding) return null;
  if (requireRole && user?.role !== requireRole) return null;
  if (requireAuth && !isAuthenticated) return null;

  return <>{children}</>;
}

// HOC version for easier use
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  options?: Omit<ProtectedRouteProps, "children">
) {
  return function ProtectedComponent(props: P) {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}
