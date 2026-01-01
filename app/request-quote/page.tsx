'use client'

import { Send, Package, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { categories, getAllProducts } from '@/data/products'

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productCategory: '',
    product: '',
    quantity: '',
    material: '',
    finish: '',
    specifications: '',
    message: '',
  })

  const products = getAllProducts()
  const selectedCategory = categories.find(cat => cat.id === formData.productCategory)
  const categoryProducts = selectedCategory ? selectedCategory.products : []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote request submitted:', formData)
    alert('Thank you for your quote request. We will contact you soon with pricing information!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            Request a Quote
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Get a customized quote for your requirements. Fill out the form below and our team will contact you with pricing information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-charcoal-50 rounded-lg p-6 lg:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-charcoal-900 mb-4 flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Contact Information</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-charcoal-900 mb-4 flex items-center space-x-2">
                <Package className="w-5 h-5" />
                <span>Product Information</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="productCategory" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Product Category *
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    required
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Product
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    disabled={!formData.productCategory}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 disabled:bg-charcoal-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Product</option>
                    {categoryProducts.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    placeholder="e.g., 1000 units"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="material" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Material Preference
                  </label>
                  <select
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  >
                    <option value="">Any</option>
                    <option value="MS">MS (Mild Steel)</option>
                    <option value="GI">GI (Galvanized Iron)</option>
                    <option value="SS">SS (Stainless Steel)</option>
                    <option value="Alloy">Alloy</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="finish" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Finish Preference
                  </label>
                  <select
                    id="finish"
                    name="finish"
                    value={formData.finish}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  >
                    <option value="">Any</option>
                    <option value="Galvanized">Galvanized</option>
                    <option value="Powder-coated">Powder-coated</option>
                    <option value="Plain">Plain</option>
                    <option value="Zinc Plated">Zinc Plated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-charcoal-900 mb-4">
                Additional Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="specifications" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Special Specifications or Requirements
                  </label>
                  <textarea
                    id="specifications"
                    name="specifications"
                    rows={4}
                    value={formData.specifications}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-industrial-600 text-white px-6 py-4 rounded-lg hover:bg-industrial-700 font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Submit Quote Request</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

