"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Documentation</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Complete P2P Marketplace Documentation
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to build, deploy, and scale your peer-to-peer marketplace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">🚀 Quick Start</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get up and running in minutes
              </p>
              <Link href="#quick-start" className="text-sm font-medium hover:underline">
                Read Guide →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">🏗️ Architecture</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Understand the system design
              </p>
              <Link href="#architecture" className="text-sm font-medium hover:underline">
                View Docs →
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">🔐 Security</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Trustless & secure by design
              </p>
              <Link href="#security" className="text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>

          {/* Documentation Sections */}
          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Getting Started</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#introduction" className="text-muted-foreground hover:text-foreground">Introduction</Link></li>
                    <li><Link href="#installation" className="text-muted-foreground hover:text-foreground">Installation</Link></li>
                    <li><Link href="#configuration" className="text-muted-foreground hover:text-foreground">Configuration</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Core Concepts</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#advertisements" className="text-muted-foreground hover:text-foreground">Advertisements</Link></li>
                    <li><Link href="#order-flow" className="text-muted-foreground hover:text-foreground">Order Flow</Link></li>
                    <li><Link href="#reputation" className="text-muted-foreground hover:text-foreground">Reputation System</Link></li>
                    <li><Link href="#disputes" className="text-muted-foreground hover:text-foreground">Disputes</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Blockchain</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#smart-contracts" className="text-muted-foreground hover:text-foreground">Smart Contracts</Link></li>
                    <li><Link href="#web3" className="text-muted-foreground hover:text-foreground">Web3 Integration</Link></li>
                    <li><Link href="#ipfs" className="text-muted-foreground hover:text-foreground">IPFS Storage</Link></li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="prose prose-neutral max-w-none">
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  The P2P Marketplace Framework is inspired by Binance&apos;s proven P2P trading model, adapted for physical goods. 
                  It enables anyone to create a decentralized marketplace where buyers and sellers can trade directly without 
                  platform intermediaries.
                </p>
                <Card className="p-6 bg-muted/30">
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ <strong>0% Platform Fees</strong> - Optional staking instead of commissions</li>
                    <li>✅ <strong>Advertisement Model</strong> - Like Binance P2P, not traditional listings</li>
                    <li>✅ <strong>Time-Based Automation</strong> - Auto-cancel, auto-release mechanisms</li>
                    <li>✅ <strong>Flexible Payments</strong> - Bank transfer, crypto, cash on delivery</li>
                    <li>✅ <strong>On-Chain Reputation</strong> - Immutable seller ratings</li>
                    <li>✅ <strong>Dispute Resolution</strong> - Built-in arbitration system</li>
                  </ul>
                </Card>
              </section>

              <section id="quick-start" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Clone the Repository</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>git clone https://github.com/slubbles/p2p-system.git{"\n"}cd p2p-system/frontend{"\n"}npm install</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Run Development Server</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>npm run dev</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Open in Browser</h3>
                    <p className="text-muted-foreground">
                      Navigate to <code className="bg-muted px-2 py-1 rounded">http://localhost:3000</code>
                    </p>
                  </div>
                </div>
              </section>

              <section id="architecture" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
                <p className="text-muted-foreground mb-6">
                  The marketplace is built on a three-layer architecture:
                </p>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-lg font-bold mb-2">Layer 1: Blockchain Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      Smart contracts for escrow, reputation, and dispute resolution. Deployed on EVM-compatible chains 
                      (Polygon, Arbitrum, Base, etc.)
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-bold mb-2">Layer 2: Off-Chain Coordination</h3>
                    <p className="text-sm text-muted-foreground">
                      IPFS for storage, The Graph for indexing, XMTP for encrypted messaging between buyers and sellers.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-bold mb-2">Layer 3: Frontend Application</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.js 15 with TypeScript, Tailwind CSS, and shadcn/ui. Fully responsive and production-ready.
                    </p>
                  </Card>
                </div>
              </section>

              <section id="order-flow" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Order Flow</h2>
                <p className="text-muted-foreground mb-4">
                  The order process follows Binance P2P&apos;s proven model with time-based automation:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-sm">
                  <li><strong>Buyer selects advertisement</strong> - Chooses quantity and payment method</li>
                  <li><strong>30-minute payment window</strong> - Buyer pays seller directly (outside platform)</li>
                  <li><strong>Buyer marks &quot;Payment Sent&quot;</strong> - Uploads proof (optional)</li>
                  <li><strong>Seller confirms payment</strong> - Has 24 hours to verify</li>
                  <li><strong>Seller ships product</strong> - Provides tracking info</li>
                  <li><strong>Buyer confirms delivery</strong> - Or auto-releases after 7 days</li>
                  <li><strong>Order complete</strong> - Reputation updated, stakes released</li>
                </ol>
              </section>

              <section id="deployment" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Deployment</h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-muted/30">
                    <h3 className="text-lg font-bold mb-2">Deploy Frontend (Vercel)</h3>
                    <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm mt-3">
                      <code>npm install -g vercel{"\n"}vercel</code>
                    </pre>
                  </Card>
                  <Card className="p-6 bg-muted/30">
                    <h3 className="text-lg font-bold mb-2">Deploy Smart Contracts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      See <code>TRUSTLESS_ARCHITECTURE.md</code> for complete smart contract deployment guide.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Additional Resources */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/slubbles/p2p-system/blob/main/TRUSTLESS_ARCHITECTURE.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="p-6 hover:shadow-lg transition-all h-full">
                      <h3 className="text-lg font-bold mb-2">📚 Full Architecture Docs</h3>
                      <p className="text-sm text-muted-foreground">
                        30+ pages covering smart contracts, security, and implementation
                      </p>
                    </Card>
                  </a>
                  <a 
                    href="https://github.com/slubbles/p2p-system/blob/main/P2P_MARKETPLACE_FRAMEWORK.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="p-6 hover:shadow-lg transition-all h-full">
                      <h3 className="text-lg font-bold mb-2">🔧 Framework Specification</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete framework docs with industry templates
                      </p>
                    </Card>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
