'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryById } from '@/data/products'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

interface CategoryPageProps {
  params: {
    categoryId: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = params
  
  if (!categoryId) {
    return null
  }
  const category = getCategoryById(categoryId)
  const visibleProducts = category?.products.filter(
    (product) => (product.images && product.images.length > 0) || product.image
  )

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <nav className="text-sm text-charcoal-600 mb-4">
            <Link href="/" className="hover:text-industrial-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-industrial-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal-900">{category.name}</span>
          </nav>
          
          <div className="flex items-start space-x-4 mb-6">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-charcoal-600 max-w-3xl">
                {category.description}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

