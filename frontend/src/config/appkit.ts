import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia, polygon } from '@reown/appkit/networks'

// Get projectId from environment with a working fallback
// For development: Get your free project ID from https://cloud.reown.com/
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'c5ab2b1e23a46cf3a91f85fd938a8e78'

// Create the Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, sepolia, polygon],
  projectId,
})

// Create AppKit instance
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia, polygon],
  projectId,
  metadata: {
    name: 'P2P Marketplace',
    description: 'Universal P2P Marketplace Framework - Decentralized peer-to-peer trading platform',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://p2p-marketplace.vercel.app',
    icons: [typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : 'https://p2p-marketplace.vercel.app/favicon.ico']
  },
  features: {
    analytics: false,
    email: false,
    socials: []
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#000000',
    '--w3m-border-radius-master': '2px'
  }
})

export { wagmiAdapter }