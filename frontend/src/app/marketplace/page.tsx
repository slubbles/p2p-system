"use client";

import { useState, useMemo } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AdvertisementCard } from "@/components/advertisement-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { CreateAdvertisementDialog } from "@/components/create-advertisement-dialog";
import { Button } from "@/components/ui/button";
import { mockAdvertisements } from "@/lib/mock-data";
import { MarketplaceFilters } from "@/lib/types";
import { ProtectedRoute } from "@/components/auth/protected-route";

function MarketplacePage() {
  const [filters, setFilters] = useState<MarketplaceFilters>({});
  const [searchQuery, setSearchQuery] = useState("");

  // Filter advertisements
  const filteredAds = useMemo(() => {
    return mockAdvertisements.filter((ad) => {
      // Search filter
      if (searchQuery && !ad.product.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !ad.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Industry filter
      if (filters.industry && ad.industry !== filters.industry) {
        return false;
      }

      // Payment method filter
      if (filters.paymentMethods && filters.paymentMethods.length > 0) {
        const hasMatchingPayment = filters.paymentMethods.some((method) =>
          ad.paymentMethods.includes(method)
        );
        if (!hasMatchingPayment) return false;
      }

      // Rating filter
      if (filters.minRating && ad.seller.stats.rating < filters.minRating) {
        return false;
      }

      // Verified filter
      if (filters.verifiedOnly && !ad.seller.verified) {
        return false;
      }

      return true;
    });
  }, [filters, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="py-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Browse Marketplace
            </h1>
            <p className="text-base text-muted-foreground mb-6">
              Connect with verified sellers. Trade directly. Zero platform fees.
            </p>

            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <CreateAdvertisementDialog />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Filters Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <FilterSidebar filters={filters} onFilterChange={setFilters} />
              </div>
            </aside>

            {/* Advertisements Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredAds.length} {filteredAds.length === 1 ? 'advertisement' : 'advertisements'} found
                </p>
                <select className="text-sm border border-border rounded-md px-3 py-1.5 bg-background">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                  <option>Sort by: Rating</option>
                </select>
              </div>

              {filteredAds.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredAds.map((ad) => (
                    <AdvertisementCard key={ad.id} ad={ad} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">No advertisements match your filters</p>
                  <Button variant="outline" onClick={() => setFilters({})}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Export with authentication protection
export default function ProtectedMarketplacePage() {
  return (
    <ProtectedRoute requireAuth={true}>
      <MarketplacePage />
    </ProtectedRoute>
  );
}
