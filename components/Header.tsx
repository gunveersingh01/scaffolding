'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Factory, ShoppingCart } from 'lucide-react'
import { categories } from '@/data/products'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const { getTotalItems } = useCart()
  const cartCount = getTotalItems()

  return (
    <header className="bg-white shadow-industrial sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Factory className="w-8 h-8 text-industrial-600 group-hover:text-industrial-700 transition-colors" />
            <span className="text-2xl font-heading font-bold text-charcoal-900">
              Bhavika Overseas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-charcoal-700 hover:text-industrial-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-charcoal-700 hover:text-industrial-600 font-medium transition-colors">
              About Us
            </Link>
            
            {/* Products Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('products')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center space-x-1 text-charcoal-700 hover:text-industrial-600 font-medium transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeMegaMenu === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-industrial-lg border border-charcoal-200 p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/products/${category.id}`}
                          className="group p-3 rounded-lg hover:bg-industrial-50 transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{category.icon}</span>
                            <div>
                              <h3 className="font-semibold text-charcoal-900 group-hover:text-industrial-600 transition-colors">
                                {category.name}
                              </h3>
                              <p className="text-sm text-charcoal-600 mt-1 line-clamp-2">
                                {category.description}
                              </p>
                              <span className="text-xs text-industrial-600 mt-2 inline-block">
                                {category.products.length} products →
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-charcoal-200">
                      <Link
                        href="/products"
                        className="text-industrial-600 hover:text-industrial-700 font-semibold text-sm"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        View All Products →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/quality" className="text-charcoal-700 hover:text-industrial-600 font-medium transition-colors">
              Quality
            </Link>
            <Link href="/manufacturing" className="text-charcoal-700 hover:text-industrial-600 font-medium transition-colors">
              Manufacturing
            </Link>
            <Link href="/contact" className="text-charcoal-700 hover:text-industrial-600 font-medium transition-colors">
              Contact
            </Link>
            <Link 
              href="/cart"
              className="relative text-charcoal-700 hover:text-industrial-600 font-medium transition-colors p-2"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-industrial-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            <Link 
              href="/request-quote" 
              className="bg-industrial-600 text-white px-6 py-2 rounded-lg hover:bg-industrial-700 font-semibold transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-charcoal-200 py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-charcoal-700 hover:text-industrial-600 font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-charcoal-700 hover:text-industrial-600 font-medium">
                  About Us
                </Link>
                <Link href="/products" className="text-charcoal-700 hover:text-industrial-600 font-medium">
                  Products
                </Link>
                <Link href="/quality" className="text-charcoal-700 hover:text-industrial-600 font-medium">
                  Quality
                </Link>
                <Link href="/manufacturing" className="text-charcoal-700 hover:text-industrial-600 font-medium">
                  Manufacturing
                </Link>
                <Link href="/contact" className="text-charcoal-700 hover:text-industrial-600 font-medium">
                  Contact
                </Link>
                <Link 
                  href="/cart"
                  className="text-charcoal-700 hover:text-industrial-600 font-medium flex items-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
                </Link>
                <Link 
                  href="/request-quote" 
                  className="bg-industrial-600 text-white px-6 py-2 rounded-lg hover:bg-industrial-700 font-semibold text-center"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

