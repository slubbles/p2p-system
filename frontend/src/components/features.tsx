"use client";

import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Advertisement Model",
    description: "Post offers like Binance P2P. Buyers browse and choose sellers based on reputation and terms.",
  },
  {
    title: "Time-Based Automation",
    description: "Auto-cancel unpaid orders, auto-release after delivery confirmation. No manual intervention.",
  },
  {
    title: "Trust & Reputation",
    description: "Seller ratings, completion rates, verification badges. Build trust through transparency.",
  },
  {
    title: "Flexible Payments",
    description: "Support any payment method: bank transfers, crypto, PayPal, cash on delivery.",
  },
  {
    title: "Dispute Resolution",
    description: "Built-in arbitration system with evidence upload and fair resolution process.",
  },
  {
    title: "White-Label Ready",
    description: "Configure for any industry. Agriculture, electronics, textiles, or create your own.",
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A complete P2P marketplace framework based on Binance's proven model
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-foreground"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
