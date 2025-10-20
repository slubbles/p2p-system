"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockAdvertisements } from "@/lib/mock-data";
import { ProtectedRoute } from "@/components/auth/protected-route";

type OrderStep = 1 | 2 | 3;

function OrderPage() {
  const params = useParams();
  const adId = params?.id as string;
  const ad = mockAdvertisements.find((a) => a.id === adId);

  const [step, setStep] = useState<OrderStep>(1);
  const [quantity, setQuantity] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds

  // Timer countdown
  useEffect(() => {
    if (step === 2 && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!ad) {
    return <div>Advertisement not found</div>;
  }

  const totalPrice = quantity * ad.price;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > s ? "bg-foreground" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>
                Select Quantity
              </span>
              <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>
                Payment
              </span>
              <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>
                Confirm
              </span>
            </div>
          </div>

          {/* Order Details Card */}
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-bold">
                {ad.seller.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{ad.product}</h3>
                  <Badge variant="secondary">{ad.industry}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Seller: {ad.seller.name} {ad.seller.verified && "✓"}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>★ {ad.seller.stats.rating.toFixed(1)}</span>
                  <span>•</span>
                  <span>{ad.seller.stats.totalOrders} orders</span>
                  <span>•</span>
                  <span>{ad.seller.stats.completionRate}% completion</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">${ad.price.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground">per {ad.priceUnit}</div>
              </div>
            </div>

            {/* Step Content */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Select Quantity</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quantity">
                      Quantity ({ad.minOrder} - {ad.maxOrder} {ad.priceUnit})
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      min={ad.minOrder}
                      max={ad.maxOrder}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {ad.paymentMethods.map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
                            paymentMethod === method
                              ? "border-foreground bg-muted"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method}
                            checked={paymentMethod === method}
                            onChange={() => setPaymentMethod(method)}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Quantity</span>
                      <span className="font-medium">
                        {quantity} {ad.priceUnit}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Unit Price</span>
                      <span className="font-medium">${ad.price.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Total</span>
                        <span className="text-2xl font-bold">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full rounded-full"
                  size="lg"
                  disabled={!paymentMethod || quantity < ad.minOrder || quantity > ad.maxOrder}
                >
                  Continue to Payment
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Payment Instructions</h2>
                  <Badge variant="destructive" className="text-lg px-4 py-1">
                    ⏱ {formatTime(timeRemaining)}
                  </Badge>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete payment within 30 minutes or order will be automatically cancelled
                  </p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium">Payment Method:</span>
                      <p className="text-base">{paymentMethod}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Amount to Pay:</span>
                      <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-3">Seller&apos;s Payment Details:</h3>
                  <div className="space-y-2 text-sm">
                    {paymentMethod === "Bank Transfer" && (
                      <>
                        <div>
                          <span className="text-muted-foreground">Bank Name:</span>
                          <p className="font-medium">Bangkok Bank</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Account Number:</span>
                          <p className="font-medium font-mono">123-456-7890</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Account Name:</span>
                          <p className="font-medium">{ad.seller.name}</p>
                        </div>
                      </>
                    )}
                    {paymentMethod.includes("USDT") && (
                      <div>
                        <span className="text-muted-foreground">USDT Address (TRC-20):</span>
                        <p className="font-medium font-mono break-all">
                          TXq9vM8Kj3x2Y5nR8pL9wC4bN6tV7uH3fG
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proof">Upload Payment Proof (Optional)</Label>
                  <Input id="proof" type="file" accept="image/*" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Note to Seller (Optional)</Label>
                  <Textarea
                    id="note"
                    placeholder="Add any notes or transaction reference..."
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 rounded-full">
                    I Have Paid
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center py-8">
                <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center mx-auto text-4xl">
                  ✓
                </div>
                <h2 className="text-2xl font-bold">Payment Submitted!</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your payment has been marked as sent. The seller will confirm receipt and ship your order.
                </p>

                <div className="p-4 bg-muted/50 rounded-lg max-w-md mx-auto text-left">
                  <h3 className="font-semibold mb-3">Order Details:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order ID:</span>
                      <span className="font-mono">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product:</span>
                      <span>{ad.product}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span>{quantity} {ad.priceUnit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="secondary">Pending Confirmation</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Seller has 24 hours to confirm payment. You&apos;ll be notified once confirmed.
                </p>

                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => window.location.href = "/marketplace"}>
                    Back to Marketplace
                  </Button>
                  <Button onClick={() => window.location.href = "/profile"}>
                    View My Orders
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Export with authentication protection
export default function ProtectedOrderPage() {
  return (
    <ProtectedRoute requireAuth={true}>
      <OrderPage />
    </ProtectedRoute>
  );
}
