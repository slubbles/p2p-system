"use client";

import { Card } from "@/components/ui/card";

const features = [
  {
    icon: "📢",
    title: "Advertisement Model",
    description: "Post offers like Binance P2P. Buyers browse and choose sellers based on reputation and terms.",
  },
  {
    icon: "⏰",
    title: "Time-Based Automation",
    description: "Auto-cancel unpaid orders, auto-release after delivery confirmation. No manual intervention.",
  },
  {
    icon: "⭐",
    title: "Trust & Reputation",
    description: "Seller ratings, completion rates, verification badges. Build trust through transparency.",
  },
  {
    icon: "💳",
    title: "Flexible Payments",
    description: "Support any payment method: bank transfers, crypto, PayPal, cash on delivery.",
  },
  {
    icon: "⚖️",
    title: "Dispute Resolution",
    description: "Built-in arbitration system with evidence upload and fair resolution process.",
  },
  {
    icon: "🎨",
    title: "White-Label Ready",
    description: "Configure for any industry. Agriculture, electronics, textiles, or create your own.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 md:py-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Everything You Need
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A complete P2P marketplace framework based on Binance&apos;s proven model
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-border/50 bg-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
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
