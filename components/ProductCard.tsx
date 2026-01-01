'use client'

import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'
import { Product } from '@/data/products'
import AddToCartButton from './AddToCartButton'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const previewImage = product.image ?? product.images?.[0]

  return (
    <div className="bg-white rounded-lg shadow-industrial hover:shadow-industrial-lg transition-all duration-300 p-6 group border border-charcoal-100 hover:border-industrial-300 h-full flex flex-col">
      <Link
        href={`/products/${product.categoryId}/${product.id}`}
        className="flex-1"
      >
        <div className="mb-4">
          <div className="w-full h-48 bg-gradient-to-br from-charcoal-100 to-charcoal-200 rounded-lg flex items-center justify-center mb-4 group-hover:from-industrial-100 group-hover:to-industrial-200 transition-colors overflow-hidden">
            {previewImage ? (
              <img
                src={previewImage}
                alt={`${product.name} preview`}
                className="w-full h-full object-contain p-6"
              />
            ) : (
              <Package className="w-16 h-16 text-charcoal-400 group-hover:text-industrial-600 transition-colors" />
            )}
          </div>
          <h3 className="text-xl font-heading font-semibold text-charcoal-900 group-hover:text-industrial-600 transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-charcoal-600 line-clamp-3 mb-4">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-charcoal-100 mb-4">
          <div className="flex flex-wrap gap-2">
            {product.material.slice(0, 2).map((mat) => (
              <span key={mat} className="text-xs bg-charcoal-100 text-charcoal-700 px-2 py-1 rounded">
                {mat}
              </span>
            ))}
          </div>
          <ArrowRight className="w-5 h-5 text-industrial-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
      
      {/* Add to Cart Section */}
      <div className="pt-4 border-t border-charcoal-100" onClick={(e) => e.stopPropagation()}>
        <AddToCartButton product={product} showQuantitySelector={false} />
      </div>
    </div>
  )
}

