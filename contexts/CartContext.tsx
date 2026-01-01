'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { cartService, CartItem } from '@/lib/cartService'

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'bhavika_cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  // Load cart from localStorage on mount (hydration-safe)
  useEffect(() => {
    setIsMounted(true)
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        const normalized = Array.isArray(parsed)
          ? parsed.map((item) => ({
              ...item,
              itemId: item.itemId ?? item.productId,
            }))
          : []
        setItems(normalized)
      }
    } catch (error) {
      console.error('Failed to load cart:', error)
      setItems([])
    }
  }, [])

  // Sync with localStorage when items change
  useEffect(() => {
    if (!isMounted) return
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
      console.error('Failed to save cart:', error)
    }
  }, [items, isMounted])

  const addItem = (item: CartItem) => {
    setItems(prev => cartService.addItem(prev, item))
  }

  const removeItem = (itemId: string) => {
    setItems(prev => cartService.removeItem(prev, itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    setItems(prev => cartService.updateQuantity(prev, itemId, quantity))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return cartService.getTotalItems(items)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

