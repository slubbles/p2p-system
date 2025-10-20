// Type definitions for P2P Marketplace

export interface User {
  id: string;
  address: string; // Wallet address
  name: string;
  avatar?: string;
  joinedDate: string;
  verified: boolean;
  stats: UserStats;
}

export interface UserStats {
  totalOrders: number;
  completionRate: number; // 0-100
  avgShippingTime: number; // in hours
  totalStaked: number; // in USD
  rating: number; // 0-5
  reviewCount: number;
}

export type PaymentMethod = 
  | "Bank Transfer"
  | "USDT (TRC-20)"
  | "PayPal"
  | "Cash on Delivery"
  | "Crypto (ETH)"
  | "Crypto (USDC)";

export type Industry = 
  | "Agriculture"
  | "Livestock"
  | "Electronics"
  | "Textiles"
  | "Other";

export interface Advertisement {
  id: string;
  seller: User;
  industry: Industry;
  product: string;
  description: string;
  price: number; // per unit
  priceUnit: string; // "kg", "piece", "meter", etc.
  minOrder: number;
  maxOrder: number;
  availableStock: number;
  paymentMethods: PaymentMethod[];
  shippingTime: string; // "24-48 hours"
  location: string;
  terms: string;
  images: string[];
  createdAt: string;
  active: boolean;
}

export type OrderStatus = 
  | "pending_payment"
  | "payment_sent"
  | "payment_confirmed"
  | "shipped"
  | "delivered"
  | "completed"
  | "disputed"
  | "cancelled";

export interface Order {
  id: string;
  advertisement: Advertisement;
  buyer: User;
  seller: User;
  quantity: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
  paidAt?: string;
  shippedAt?: string;
  deliveredAt?: string;
  completedAt?: string;
  timeline: OrderTimeline[];
  paymentTimer?: number; // seconds remaining
  releaseTimer?: number; // seconds remaining
  shippingAddress?: string;
  trackingNumber?: string;
}

export interface OrderTimeline {
  status: OrderStatus;
  timestamp: string;
  note?: string;
}

export interface Review {
  id: string;
  orderId: string;
  reviewer: User;
  reviewee: User;
  rating: number; // 1-5
  comment: string;
  timestamp: string;
}

export interface MarketplaceFilters {
  search?: string;
  industry?: Industry;
  paymentMethods?: PaymentMethod[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  verifiedOnly?: boolean;
}
