"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Industry, PaymentMethod } from "@/lib/types";

const industries: Industry[] = ["Agriculture", "Livestock", "Electronics", "Textiles", "Other"];
const paymentMethods: PaymentMethod[] = [
  "Bank Transfer",
  "USDT (TRC-20)",
  "PayPal",
  "Cash on Delivery",
  "Crypto (ETH)",
  "Crypto (USDC)",
];

export function CreateAdvertisementDialog() {
  const [open, setOpen] = useState(false);
  const [selectedPayments, setSelectedPayments] = useState<PaymentMethod[]>([]);

  const togglePaymentMethod = (method: PaymentMethod) => {
    setSelectedPayments((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Advertisement created!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full px-6">Post Advertisement</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Post New Advertisement</DialogTitle>
          <DialogDescription>
            Create an advertisement for your product. Buyers will see your offer and can place orders.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Industry */}
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select required>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="product">Product Name</Label>
            <Input
              id="product"
              placeholder="e.g., Premium Jasmine Rice"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your product, quality, certifications, etc."
              rows={4}
              required
            />
          </div>

          {/* Price & Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (USD)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Per Unit</Label>
              <Input
                id="unit"
                placeholder="kg, piece, meter, etc."
                required
              />
            </div>
          </div>

          {/* Min & Max Order */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minOrder">Minimum Order</Label>
              <Input
                id="minOrder"
                type="number"
                placeholder="100"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxOrder">Maximum Order</Label>
              <Input
                id="maxOrder"
                type="number"
                placeholder="5000"
                required
              />
            </div>
          </div>

          {/* Available Stock */}
          <div className="space-y-2">
            <Label htmlFor="stock">Available Stock</Label>
            <Input
              id="stock"
              type="number"
              placeholder="10000"
              required
            />
          </div>

          {/* Payment Methods */}
          <div className="space-y-2">
            <Label>Payment Methods Accepted</Label>
            <div className="grid grid-cols-2 gap-2 p-4 border border-border rounded-lg">
              {paymentMethods.map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedPayments.includes(method)}
                    onChange={() => togglePaymentMethod(method)}
                    className="w-4 h-4"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
            {selectedPayments.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedPayments.map((method) => (
                  <Badge key={method} variant="secondary">
                    {method}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Shipping Time */}
          <div className="space-y-2">
            <Label htmlFor="shippingTime">Shipping Time</Label>
            <Input
              id="shippingTime"
              placeholder="e.g., 24-48 hours, 3-5 business days"
              required
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="City, Country"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-2">
            <Label htmlFor="terms">Terms & Conditions</Label>
            <Textarea
              id="terms"
              placeholder="Your specific terms, policies, bulk discounts, etc."
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Post Advertisement
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
