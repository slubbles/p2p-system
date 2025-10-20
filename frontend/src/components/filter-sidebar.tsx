"use client";

import { MarketplaceFilters, PaymentMethod, Industry } from "@/lib/types";
import { Separator } from "@/components/ui/separator";

interface FilterSidebarProps {
  filters: MarketplaceFilters;
  onFilterChange: (filters: MarketplaceFilters) => void;
}

const industries: Industry[] = ["Agriculture", "Livestock", "Electronics", "Textiles", "Other"];
const paymentMethods: PaymentMethod[] = [
  "Bank Transfer",
  "USDT (TRC-20)",
  "PayPal",
  "Cash on Delivery",
  "Crypto (ETH)",
  "Crypto (USDC)",
];

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const togglePaymentMethod = (method: PaymentMethod) => {
    const current = filters.paymentMethods || [];
    const updated = current.includes(method)
      ? current.filter((m) => m !== method)
      : [...current, method];
    onFilterChange({ ...filters, paymentMethods: updated });
  };

  return (
    <div className="space-y-6">
      {/* Industry Filter */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Industry</h3>
        <div className="space-y-2">
          {industries.map((industry) => (
            <label key={industry} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="industry"
                checked={filters.industry === industry}
                onChange={() => onFilterChange({ ...filters, industry })}
                className="w-4 h-4"
              />
              <span className="text-sm">{industry}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="industry"
              checked={!filters.industry}
              onChange={() => onFilterChange({ ...filters, industry: undefined })}
              className="w-4 h-4"
            />
            <span className="text-sm">All Industries</span>
          </label>
        </div>
      </div>

      <Separator />

      {/* Payment Methods */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Payment Methods</h3>
        <div className="space-y-2">
          {paymentMethods.map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.paymentMethods?.includes(method) || false}
                onChange={() => togglePaymentMethod(method)}
                className="w-4 h-4"
              />
              <span className="text-xs">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Seller Rating */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Minimum Rating</h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => onFilterChange({ ...filters, minRating: rating })}
                className="w-4 h-4"
              />
              <span className="text-sm">★ {rating}+</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={!filters.minRating}
              onChange={() => onFilterChange({ ...filters, minRating: undefined })}
              className="w-4 h-4"
            />
            <span className="text-sm">Any Rating</span>
          </label>
        </div>
      </div>

      <Separator />

      {/* Verified Sellers Only */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.verifiedOnly || false}
            onChange={(e) =>
              onFilterChange({ ...filters, verifiedOnly: e.target.checked })
            }
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">Verified Sellers Only</span>
        </label>
      </div>

      {/* Clear Filters */}
      {(filters.industry || filters.paymentMethods?.length || filters.minRating || filters.verifiedOnly) && (
        <>
          <Separator />
          <button
            onClick={() => onFilterChange({})}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear All Filters
          </button>
        </>
      )}
    </div>
  );
}
