"use client";

import { Advertisement } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AdvertisementCardProps {
  ad: Advertisement;
}

export function AdvertisementCard({ ad }: AdvertisementCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Seller Info */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
            {ad.seller.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm">{ad.seller.name}</h3>
              {ad.seller.verified && (
                <Badge variant="default" className="text-xs px-1.5 py-0">
                  ✓
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>★ {ad.seller.stats.rating.toFixed(1)}</span>
              <span>•</span>
              <span>{ad.seller.stats.totalOrders} orders</span>
              <span>•</span>
              <span>{ad.seller.stats.completionRate.toFixed(1)}%</span>
            </div>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">
          {ad.industry}
        </Badge>
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h4 className="font-bold text-lg mb-1 group-hover:text-muted-foreground transition-colors">
          {ad.product}
        </h4>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {ad.description}
        </p>
      </div>

      {/* Price & Quantity */}
      <div className="mb-4 p-3 bg-muted/30 rounded-lg">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold">
            ${ad.price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">
            / {ad.priceUnit}
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          Min: {ad.minOrder} {ad.priceUnit} • Max: {ad.maxOrder} {ad.priceUnit}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Stock: {ad.availableStock.toLocaleString()} {ad.priceUnit} available
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-4">
        <div className="text-xs text-muted-foreground mb-2">Accepts:</div>
        <div className="flex flex-wrap gap-1">
          {ad.paymentMethods.map((method, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {method}
            </Badge>
          ))}
        </div>
      </div>

      {/* Location & Shipping */}
      <div className="mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{ad.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ships in {ad.shippingTime}</span>
        </div>
      </div>

      {/* Action Button */}
      <Link href={`/marketplace/${ad.id}`}>
        <Button className="w-full rounded-full" size="sm">
          View Details
        </Button>
      </Link>
    </Card>
  );
}
