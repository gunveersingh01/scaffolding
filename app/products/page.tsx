'use client'

import Link from 'next/link'
import { categories } from '@/data/products'
import { motion } from 'framer-motion'
import ProductCategoryCard from '@/components/ProductCategoryCard'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Comprehensive range of industrial hardware, scaffolding systems, and tools manufactured to international standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  )
  
}

