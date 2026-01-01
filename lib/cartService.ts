// Abstract cart service - Shopify-ready architecture
// No browser APIs - pure functions only

export interface CartItem {
  itemId: string
  productId: string
  productName: string
  quantity: number
  price?: number // Optional for now, will be used with Shopify
  styleLabel?: string
  styleIndex?: number
  styleImage?: string
}

// Pure functions - no localStorage, no browser APIs
export const cartService = {
  // Add item to cart (pure function)
  addItem(items: CartItem[], item: CartItem): CartItem[] {
    const existingIndex = items.findIndex(i => i.itemId === item.itemId)
    
    if (existingIndex >= 0) {
      // Update quantity if item exists
      const updated = [...items]
      updated[existingIndex].quantity += item.quantity
      return updated
    } else {
      // Add new item
      return [...items, item]
    }
  },

  // Remove item from cart (pure function)
  removeItem(items: CartItem[], itemId: string): CartItem[] {
    return items.filter(i => i.itemId !== itemId)
  },

  // Update item quantity (pure function)
  updateQuantity(items: CartItem[], itemId: string, quantity: number): CartItem[] {
    if (quantity <= 0) {
      return this.removeItem(items, itemId)
    }
    
    return items.map(item =>
      item.itemId === itemId ? { ...item, quantity } : item
    )
  },

  // Get total items count (pure function)
  getTotalItems(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0)
  },
}

