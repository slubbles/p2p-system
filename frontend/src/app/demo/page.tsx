"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useAppKit } from "@reown/appkit/react";

export default function DemoPage() {
  const { open } = useAppKit();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full">Portfolio Demo</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              P2P Marketplace Demo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A trustless peer-to-peer marketplace framework inspired by Binance P2P. 
              Built with Next.js 15, React 19, WalletConnect, and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => open()}
                className="rounded-full px-8 border-2 border-foreground hover:bg-foreground hover:text-background"
              >
                Connect Wallet to Try →
              </Button>
              <Link href="https://github.com/slubbles/p2p-system" target="_blank">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Source Code
                </Button>
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">🛠️ Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="font-semibold">React 19</div>
                <div className="text-xs text-muted-foreground">UI Framework</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">▲</div>
                <div className="font-semibold">Next.js 15</div>
                <div className="text-xs text-muted-foreground">App Router</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-semibold">Tailwind v4</div>
                <div className="text-xs text-muted-foreground">Styling</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">🔗</div>
                <div className="font-semibold">WalletConnect</div>
                <div className="text-xs text-muted-foreground">Web3 Auth</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-semibold">wagmi v2</div>
                <div className="text-xs text-muted-foreground">React Hooks</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">viem v2</div>
                <div className="text-xs text-muted-foreground">Ethereum</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">🎭</div>
                <div className="font-semibold">shadcn/ui</div>
                <div className="text-xs text-muted-foreground">Components</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">📘</div>
                <div className="font-semibold">TypeScript</div>
                <div className="text-xs text-muted-foreground">Type Safety</div>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">✨ Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔐</div>
                  <div>
                    <h3 className="font-bold mb-2">Wallet-Based Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Web3-native auth using WalletConnect. Support for 300+ wallets including MetaMask, Coinbase, Trust Wallet.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📢</div>
                  <div>
                    <h3 className="font-bold mb-2">Advertisement Model</h3>
                    <p className="text-sm text-muted-foreground">
                      Binance P2P-inspired ad system. Sellers post offers, buyers browse and select based on reputation and terms.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎨</div>
                  <div>
                    <h3 className="font-bold mb-2">Customizable by Industry</h3>
                    <p className="text-sm text-muted-foreground">
                      Pre-configured templates for Agriculture, Livestock, Electronics, Textiles, or create your own.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="font-bold mb-2">Time-Based Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Auto-cancel and auto-release mechanisms prevent scams. Smart contract-ready escrow system.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <h3 className="font-bold mb-2">On-Chain Reputation</h3>
                    <p className="text-sm text-muted-foreground">
                      Immutable seller ratings and review history. Cannot be faked or deleted. Trust through transparency.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💳</div>
                  <div>
                    <h3 className="font-bold mb-2">Flexible Payments</h3>
                    <p className="text-sm text-muted-foreground">
                      Support for crypto (USDT, ETH, USDC), bank transfer, PayPal, or cash on delivery. Sellers choose methods.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Screenshots Placeholder */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">📸 Screenshots</h2>
            <div className="space-y-8">
              {/* Homepage */}
              <Card className="p-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative">
                  <Image 
                    src="/homepage.png" 
                    alt="Homepage Screenshot" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold mb-2">🏠 Homepage</h3>
                <p className="text-sm text-muted-foreground">
                  Vercel-inspired minimalist design with clear value proposition and CTAs
                </p>
              </Card>

              {/* Marketplace */}
              <Card className="p-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative">
                  <Image 
                    src="/marketplace.png" 
                    alt="Marketplace Screenshot" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold mb-2">🛒 Marketplace</h3>
                <p className="text-sm text-muted-foreground">
                  Filter-enabled marketplace with seller ratings, payment methods, and detailed product info
                </p>
              </Card>

              {/* Profile */}
              <Card className="p-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative">
                  <Image 
                    src="/profile.png" 
                    alt="Profile Screenshot" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold mb-2">👤 User Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive profile with reputation stats, order history, and received reviews
                </p>
              </Card>

              {/* Onboarding */}
              <Card className="p-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative">
                  <Image 
                    src="/onboarding.png" 
                    alt="Onboarding Screenshot" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold mb-2">🚀 Onboarding Flow</h3>
                <p className="text-sm text-muted-foreground">
                  First-time user experience with role selection (buyer/seller) and profile completion
                </p>
              </Card>
            </div>
          </div>

          {/* Architecture */}
          <Card className="p-8 mb-16 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">🏗️ Architecture Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Next.js 15 App Router with React Server Components</li>
                  <li>✅ TypeScript for type safety</li>
                  <li>✅ Tailwind CSS v4 for styling</li>
                  <li>✅ shadcn/ui component library</li>
                  <li>✅ Responsive mobile-first design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Web3 Integration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ WalletConnect v2 (AppKit)</li>
                  <li>✅ wagmi React hooks for Ethereum</li>
                  <li>✅ viem for type-safe Ethereum interactions</li>
                  <li>✅ Support for Mainnet, Sepolia, Polygon</li>
                  <li>✅ Context-based auth state management</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-12 bg-foreground text-background">
              <h2 className="text-3xl font-bold mb-4">Ready to Try It?</h2>
              <p className="text-background/70 mb-8 max-w-2xl mx-auto">
                Connect your wallet to explore the full marketplace experience. 
                No signup required—just your Web3 wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => open()}
                  className="rounded-full px-10"
                >
                  Connect Wallet Now →
                </Button>
                <Link href="/">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-full px-10 bg-transparent text-background border-background/30 hover:bg-background/10"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
