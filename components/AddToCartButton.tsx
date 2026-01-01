'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingCart, AlertCircle } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import QuantitySelector from './QuantitySelector'
import { Product } from '@/data/products'

interface AddToCartButtonProps {
  product: Product
  showQuantitySelector?: boolean
  className?: string
  selectedStyle?: {
    index: number
    label: string
    image?: string
  }
}

const MAX_CART_QUANTITY = 25

export default function AddToCartButton({
  product,
  showQuantitySelector = true,
  className = '',
  selectedStyle,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    if (quantity > MAX_CART_QUANTITY) {
      // Redirect to RFQ for bulk orders
      router.push('/request-quote')
      return
    }

    const styleSuffix = selectedStyle ? `-style-${selectedStyle.index + 1}` : ''
    const styleLabel = selectedStyle?.label
    const itemId = `${product.id}${styleSuffix}`

    addItem({
      itemId,
      productId: product.id,
      productName: product.name,
      quantity,
      styleLabel,
      styleIndex: selectedStyle?.index,
      styleImage: selectedStyle?.image,
    })

    // Reset quantity after adding
    setQuantity(1)
  }

  const isBulkOrder = quantity > MAX_CART_QUANTITY

  return (
    <div className={`space-y-3 ${className}`}>
      {showQuantitySelector && (
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-charcoal-700">
            Quantity:
          </label>
          <QuantitySelector
            min={1}
            max={MAX_CART_QUANTITY + 5} // Allow selection up to 30 to show bulk message
            value={quantity}
            onChange={setQuantity}
          />
          {isBulkOrder && (
            <span className="text-sm text-charcoal-500">
              (Max 25 for cart)
            </span>
          )}
        </div>
      )}

      {isBulkOrder && (
        <div className="flex items-center space-x-2 p-3 bg-industrial-50 border border-industrial-200 rounded-lg text-sm text-industrial-700">
          <AlertCircle className="w-4 h-4" />
          <span>Orders over 25 units require a quote. Click button to request quote.</span>
        </div>
      )}

      <button
        onClick={handleAddToCart}
        className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
          isBulkOrder
            ? 'bg-industrial-500 text-white hover:bg-industrial-600'
            : 'bg-industrial-600 text-white hover:bg-industrial-700'
        }`}
        title={
          isBulkOrder
            ? 'Bulk orders require a quote - Click to request quote'
            : 'Add to cart'
        }
      >
        {!isBulkOrder && <ShoppingCart className="w-5 h-5" />}
        <span>
          {isBulkOrder
            ? 'Request Quote (Bulk Order)'
            : 'Add to Cart'}
        </span>
      </button>
    </div>
  )
}

