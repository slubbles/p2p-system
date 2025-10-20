"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mockUsers, mockOrders, mockReviews } from "@/lib/mock-data";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

// Helper to normalize user data from different sources
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeUser(user: any) {
  if (!user) return null;
  
  return {
    name: user.profile?.name || user.name || 'Anonymous User',
    address: user.address,
    verified: user.verification?.isKYCVerified || user.verified || false,
    joinedDate: user.createdAt || user.joinedDate || new Date().toISOString(),
    stats: {
      totalOrders: user.stats?.totalOrders || 0,
      completionRate: user.stats?.completionRate || 0,
      rating: user.stats?.avgRating || user.stats?.rating || 0,
      reviewCount: user.stats?.reviewCount || 0,
      avgShippingTime: user.stats?.avgShippingTime || 0,
      totalStaked: user.stats?.totalStaked || 0,
    }
  };
}

function ProfilePage() {
  const { user: authUser } = useAuth();
  // Use authenticated user or fall back to mock for development
  const rawUser = authUser || mockUsers[0];
  const user = normalizeUser(rawUser);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <Card className="p-8 mb-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-foreground text-background flex items-center justify-center text-4xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  {user.verified && (
                    <Badge variant="default" className="text-sm px-3">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  {user.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  Member since {new Date(user.joinedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <Link href="/profile/edit">
                  <Button variant="outline">Edit Profile</Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold mb-1">{user.stats.totalOrders}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold mb-1">{user.stats.completionRate}%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold mb-1">★ {user.stats.rating.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold mb-1">{user.stats.avgShippingTime}h</div>
              <div className="text-sm text-muted-foreground">Avg Shipping Time</div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Orders */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="p-4 border border-border rounded-lg hover:border-muted-foreground transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">
                            {order.advertisement.product}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Order #{order.id.toUpperCase()}
                          </p>
                        </div>
                        <Badge variant="secondary">{order.status.replace("_", " ")}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Quantity:</span>
                          <span className="ml-2 font-medium">
                            {order.quantity} {order.advertisement.priceUnit}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Total:</span>
                          <span className="ml-2 font-medium">
                            ${order.totalPrice.toFixed(2)}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Payment:</span>
                          <span className="ml-2 font-medium">{order.paymentMethod}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Date:</span>
                          <span className="ml-2 font-medium">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Link href={`/marketplace/${order.advertisement.id}`}>
                          <Button size="sm" variant="outline" className="text-xs">
                            View Details
                          </Button>
                        </Link>
                        {order.status === "payment_confirmed" && (
                          <Link href={`/orders/${order.id}`}>
                            <Button size="sm" className="text-xs">
                              Track Shipment
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                  {mockOrders.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No orders yet
                    </div>
                  )}
                </div>
              </Card>

              {/* Reviews Received */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Reviews</h2>
                <div className="space-y-4">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="pb-4 border-b border-border last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                            {review.reviewer.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{review.reviewer.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(review.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-sm">{"★".repeat(review.rating)}</div>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                  {mockReviews.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No reviews yet
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Reputation Score */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Reputation Score</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Overall</span>
                      <span className="font-medium">{user.stats.rating.toFixed(1)}/5.0</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-foreground h-2 rounded-full"
                        style={{ width: `${(user.stats.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">5 stars</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">4 stars</span>
                      <span className="font-medium">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">3 stars</span>
                      <span className="font-medium">2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">2 stars</span>
                      <span className="font-medium">1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">1 star</span>
                      <span className="font-medium">0%</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Staking Info */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Staking Status</h3>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold mb-1">
                    ${user.stats.totalStaked.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Staked</div>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Staking builds trust and shows commitment to the marketplace.
                </p>
                <Link href="/stake">
                  <Button variant="outline" className="w-full" size="sm">
                    Increase Stake
                  </Button>
                </Link>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link href="/marketplace?action=create">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Post New Ad
                    </Button>
                  </Link>
                  <Link href="/profile/advertisements">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      My Advertisements
                    </Button>
                  </Link>
                  <Link href="/profile/settings">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Export with authentication protection
export default function ProtectedProfilePage() {
  return (
    <ProtectedRoute requireAuth={true}>
      <ProfilePage />
    </ProtectedRoute>
  );
}
