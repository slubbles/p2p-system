"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

const industries = [
  {
    name: "Agriculture",
    icon: "🌾",
    description: "Rice, wheat, vegetables, fruits",
    examples: ["Jasmine Rice", "Organic Wheat", "Fresh Produce"],
  },
  {
    name: "Livestock",
    icon: "🐔",
    description: "Chickens, eggs, dairy, meat",
    examples: ["Free-range Eggs", "Organic Chicken", "Fresh Dairy"],
  },
  {
    name: "Electronics",
    icon: "📱",
    description: "Phones, laptops, components",
    examples: ["Smartphones", "PC Components", "Accessories"],
  },
  {
    name: "Textiles",
    icon: "🧵",
    description: "Fabric, clothing, materials",
    examples: ["Cotton Fabric", "Silk Materials", "Garments"],
  },
];

export function IndustryShowcase() {
  const router = useRouter();

  const handleIndustryClick = (industryName: string) => {
    router.push(`/marketplace?industry=${industryName}`);
  };

  return (
    <section className="py-24 sm:py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            One Framework,
            <br />
            Infinite Possibilities
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Pre-configured templates for popular industries or create your own custom marketplace
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              onClick={() => handleIndustryClick(industry.name)}
              className="p-8 sm:p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-border/50 bg-card group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                  {industry.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="text-base text-muted-foreground mb-5">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
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
        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground mb-5">
            Don&apos;t see your industry? No problem.
          </p>
          <Badge variant="outline" className="px-6 py-2.5 text-sm font-medium border-border/50 shadow-sm">
            Fully Customizable Configuration System
          </Badge>
        </div>
      </div>
    </section>
  );
}
