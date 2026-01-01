'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductById, getCategoryById } from '@/data/products'
import { Package, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const formatStyleName = (src: string) => {
  const fileName = src.split('/').pop() ?? ''
  const baseName = fileName.replace(/\.[^/.]+$/, '')
  const cleaned = baseName.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  return cleaned.replace(/\b\w/g, (match) => match.toUpperCase())
}

const getStyleLabel = (category: string, index: number, src: string) => {
  if (category === 'Wrought Iron Components') {
    return `Style ${index + 1}`
  }
  return formatStyleName(src)
}

interface ProductPageProps {
  params: {
    categoryId: string
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = params
  
  if (!productId) {
    return null
  }
  const product = getProductById(productId)
  const category = product ? getCategoryById(product.categoryId) : null
  const productImages = product?.images?.length
    ? product.images
    : product?.image
      ? [product.image]
      : []
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const activeIndex = hoverIndex ?? selectedIndex
  const selectedLabel = productImages[selectedIndex]
    ? getStyleLabel(product?.category ?? '', selectedIndex, productImages[selectedIndex])
    : ''

  if (!product || !category) {
    notFound()
  }

  useEffect(() => {
    setSelectedIndex(0)
    setHoverIndex(null)
  }, [product?.id])
  

  return (
    <div className="min-h-screen bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <nav className="text-sm text-charcoal-600 mb-8">
            <Link href="/" className="hover:text-industrial-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-industrial-600">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${category.id}`} className="hover:text-industrial-600">{category.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Image */}
            <div>
              {productImages.length > 0 ? (
                <div className="w-full h-96 bg-white border border-charcoal-200 rounded-lg flex items-center justify-center">
                  {/* Fence band photo set here from productImages[activeIndex]. */}
                  <img
                    src={productImages[activeIndex]}
                    alt={`${product.name} image`}
                    className="max-h-80 w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-charcoal-100 to-charcoal-200 rounded-lg flex items-center justify-center">
                  <Package className="w-32 h-32 text-charcoal-400" />
                </div>
              )}

              {selectedLabel && (
                <p className="mt-3 text-sm text-charcoal-600">
                  Selected style: <span className="font-medium text-charcoal-900">{selectedLabel}</span>
                </p>
              )}

              {productImages.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {productImages.map((src, index) => {
                    const isSelected = index === selectedIndex
                    const label = getStyleLabel(product.category, index, src)
                    return (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className={`h-20 rounded-md flex items-center justify-center transition-colors ${
                          isSelected ? 'border-2 border-industrial-500' : 'border border-charcoal-200'
                        }`}
                        aria-label={`${product.name} ${label}`}
                      >
                        <img
                          src={src}
                          alt={`${product.name} ${label}`}
                          className="max-h-16 w-auto object-contain"
                        />
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
            

            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-charcoal-600 mb-6">
                {product.description}
              </p>

              {/* Materials & Finishes */}
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-2">Materials Available:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.material.map((mat) => (
                      <span key={mat} className="bg-industrial-100 text-industrial-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-2">Finishes Available:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finish.map((fin) => (
                      <span key={fin} className="bg-charcoal-100 text-charcoal-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {fin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Export Suitability */}
              {product.exportSuitable && (
                <div className="bg-industrial-50 border border-industrial-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-industrial-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Export Suitable - Meets International Standards</span>
                  </div>
                </div>
              )}

              {/* Add to Cart / Request Quote */}
              <div className="space-y-4">
                <AddToCartButton
                  product={product}
                  showQuantitySelector={true}
                  selectedStyle={
                    productImages[selectedIndex]
                      ? {
                          index: selectedIndex,
                          label: selectedLabel,
                          image: productImages[selectedIndex],
                        }
                      : undefined
                  }
                />
                <Link
                  href="/request-quote"
                  className="inline-flex items-center space-x-2 text-industrial-600 hover:text-industrial-700 font-semibold text-sm transition-colors"
                >
                  <span>Need a custom quote?</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-charcoal-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-charcoal-900 mb-4">
              Applications / Use Cases
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.applications.map((app, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-industrial-600 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-charcoal-200 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl text-charcoal-900 mb-3">
                Product Specifications
              </h3>
              <div className="space-y-2 text-charcoal-700">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Materials:</span>
                  <span className="font-medium">{product.material.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Finishes:</span>
                  <span className="font-medium">{product.finish.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Export Ready:</span>
                  <span className="font-medium">{product.exportSuitable ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-charcoal-200 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl text-charcoal-900 mb-3">
                Why Choose This Product?
              </h3>
              <ul className="space-y-2 text-charcoal-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-industrial-600 mt-0.5 flex-shrink-0" />
                  <span>Manufactured to international quality standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-industrial-600 mt-0.5 flex-shrink-0" />
                  <span>Multiple material and finish options available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-industrial-600 mt-0.5 flex-shrink-0" />
                  <span>Custom specifications can be accommodated</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-industrial-600 mt-0.5 flex-shrink-0" />
                  <span>Export-grade packaging and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
  
}

