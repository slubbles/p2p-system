"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    name: "Agriculture",
    description: "Rice, wheat, vegetables, fruits",
    examples: ["Jasmine Rice", "Organic Wheat", "Fresh Produce"],
  },
  {
    name: "Livestock",
    description: "Chickens, eggs, dairy, meat",
    examples: ["Free-range Eggs", "Organic Chicken", "Fresh Dairy"],
  },
  {
    name: "Electronics",
    description: "Phones, laptops, components",
    examples: ["Smartphones", "PC Components", "Accessories"],
  },
  {
    name: "Textiles",
    description: "Fabric, clothing, materials",
    examples: ["Cotton Fabric", "Silk Materials", "Garments"],
  },
];

export function IndustryShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            One Framework,
            <br />
            Infinite Possibilities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Pre-configured templates for popular industries or create your own custom marketplace
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-border bg-card group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">{industry.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:text-muted-foreground transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Don't see your industry? No problem.
          </p>
          <Badge variant="outline" className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium">
            Fully Customizable Configuration System
          </Badge>
        </div>
      </div>
    </section>
  );
}
