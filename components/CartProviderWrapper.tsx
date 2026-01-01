'use client'

import { CartProvider } from '@/contexts/CartContext'
import { ReactNode } from 'react'

// Client-only wrapper to safely provide cart context
export default function CartProviderWrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}

