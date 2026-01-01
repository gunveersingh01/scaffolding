'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import QuantitySelector from '@/components/QuantitySelector'
import { motion } from 'framer-motion'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalItems } = useCart()
  const router = useRouter()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <ShoppingCart className="w-24 h-24 text-charcoal-300 mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-bold text-charcoal-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-charcoal-600 mb-8">
              Add products to your cart to get started
            </p>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-industrial-600 text-white px-8 py-4 rounded-lg hover:bg-industrial-700 font-semibold text-lg transition-colors"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-heading font-bold text-charcoal-900">
              Shopping Cart
            </h1>
            <button
              onClick={clearCart}
              className="text-sm text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              Clear Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.itemId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-charcoal-200 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {item.styleImage && (
                        <div className="h-16 w-16 flex-shrink-0 rounded-md border border-charcoal-200 bg-white flex items-center justify-center overflow-hidden">
                          <img
                            src={item.styleImage}
                            alt={item.styleLabel ? `${item.productName} ${item.styleLabel}` : item.productName}
                            className="h-full w-full object-contain p-2"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-charcoal-900 mb-2">
                          {item.productName}
                        </h3>
                        {item.styleLabel && (
                          <p className="text-sm text-charcoal-600">
                            Style: <span className="font-medium text-charcoal-900">{item.styleLabel}</span>
                          </p>
                        )}
                        <p className="text-xs text-charcoal-500 mt-1">
                          Item ID: <span className="font-medium text-charcoal-700">{item.itemId}</span>
                        </p>
                        <div className="flex items-center space-x-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <label className="text-sm font-medium text-charcoal-700">
                              Quantity:
                            </label>
                            <QuantitySelector
                              min={1}
                              max={25}
                              value={item.quantity}
                              onChange={(qty) => updateQuantity(item.itemId, qty)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.itemId)}
                      className="ml-4 p-2 text-charcoal-400 hover:text-charcoal-900 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-charcoal-50 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-heading font-semibold text-charcoal-900 mb-4">
                  Cart Summary
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-charcoal-700">
                    <span>Items:</span>
                    <span className="font-medium">{getTotalItems()}</span>
                  </div>
                  <div className="border-t border-charcoal-200 pt-3">
                    <div className="flex justify-between text-lg font-semibold text-charcoal-900">
                      <span>Total Items:</span>
                      <span>{getTotalItems()}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link
                    href="/request-quote"
                    className="block w-full bg-industrial-600 text-white px-6 py-3 rounded-lg hover:bg-industrial-700 font-semibold text-center transition-colors"
                  >
                    Proceed to Quote Request
                  </Link>
                  <Link
                    href="/products"
                    className="block w-full text-center text-charcoal-600 hover:text-charcoal-900 font-medium transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <p className="text-xs text-charcoal-500 mt-4 text-center">
                  For pricing and checkout, please request a quote
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

