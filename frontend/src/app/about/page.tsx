"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 rounded-full">About the Project</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Democratizing Peer-to-Peer
              <br />
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Commerce for Everyone
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An open-source framework that brings Binance&apos;s proven P2P model to physical goods, 
              enabling truly decentralized marketplaces for any industry.
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-muted-foreground mb-4">
                  Traditional marketplaces like Amazon and Alibaba have created monopolies that:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Take 15-40% fees from sellers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Control all buyer-seller relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Hold funds in escrow indefinitely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Make arbitrary rules and decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Favor large sellers over small businesses</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground mb-4">
                  A peer-to-peer marketplace framework that provides:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>0% platform fees</strong> - Optional staking instead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Direct transactions</strong> - Buyers pay sellers directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Trustless escrow</strong> - Smart contracts, not middlemen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>On-chain reputation</strong> - Can&apos;t be faked or deleted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>100% open source</strong> - Fork it, customize it, own it</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Binance Model */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why the Binance P2P Model?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Binance processes billions in P2P volume monthly with a proven, battle-tested system
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-bold mb-2">Proven at Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Handles billions in monthly volume. If it works for crypto, it works for physical goods.
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold mb-2">Simple UX</h3>
                <p className="text-sm text-muted-foreground">
                  Advertisement model is intuitive. Buyers choose sellers based on reputation and terms.
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-bold mb-2">Trust Built-In</h3>
                <p className="text-sm text-muted-foreground">
                  Time-based automation prevents scams. Auto-cancel, auto-release mechanisms protect both sides.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Who Is This For?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">🌾</div>
                <h3 className="font-bold mb-2">Farmers</h3>
                <p className="text-sm text-muted-foreground">
                  Sell crops directly to buyers. No middleman taking 30% margins.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold mb-2">Manufacturers</h3>
                <p className="text-sm text-muted-foreground">
                  B2B marketplace for bulk orders. Connect directly with retailers.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold mb-2">Developing Markets</h3>
                <p className="text-sm text-muted-foreground">
                  Regions without Amazon/Alibaba. Build local alternatives.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold mb-2">Developers</h3>
                <p className="text-sm text-muted-foreground">
                  Build custom marketplaces. Fork, modify, deploy in days.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Built With Modern Tech</h2>
              <p className="text-muted-foreground">Production-ready stack used by leading companies</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Next.js 15</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• shadcn/ui</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Blockchain</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Solidity Smart Contracts</li>
                  <li>• EVM Compatible</li>
                  <li>• The Graph (indexing)</li>
                  <li>• IPFS (storage)</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Infrastructure</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Vercel (hosting)</li>
                  <li>• PostgreSQL</li>
                  <li>• Prisma ORM</li>
                  <li>• XMTP (messaging)</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">100% Open Source</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Released under MIT License. Use it commercially, modify it, fork it. No restrictions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://github.com/slubbles/p2p-system" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8">
                  View on GitHub
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Try Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What&apos;s Next?</h2>
              <p className="text-muted-foreground">Our development roadmap</p>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Phase 1: Foundation</h3>
                    <p className="text-sm text-muted-foreground">Next.js frontend, design system, landing page</p>
                    <Badge variant="default" className="mt-2">Complete</Badge>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Phase 2: Core Marketplace</h3>
                    <p className="text-sm text-muted-foreground">Browse, create ads, order flow, user profiles</p>
                    <Badge variant="default" className="mt-2">Complete</Badge>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Phase 3: Web3 Integration</h3>
                    <p className="text-sm text-muted-foreground">Wallet connection, smart contracts, IPFS</p>
                    <Badge variant="secondary" className="mt-2">In Progress</Badge>
                  </div>
                </div>
              </Card>
              <Card className="p-6 opacity-60">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Phase 4: Real-Time Features</h3>
                    <p className="text-sm text-muted-foreground">Messaging, notifications, automated timers</p>
                    <Badge variant="outline" className="mt-2">Planned</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
