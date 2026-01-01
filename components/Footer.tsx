import Link from 'next/link'
import { Factory, Mail, Phone, MapPin } from 'lucide-react'
import { categories } from '@/data/products'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="w-6 h-6 text-industrial-400" />
              <span className="text-xl font-heading font-bold">Bhavika Overseas</span>
            </div>
            <p className="text-charcoal-300 text-sm mb-4">
              Leading manufacturer and exporter of scaffolding systems, industrial hardware, tools, and fence fittings.
            </p>
            <div className="space-y-2 text-sm text-charcoal-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Industrial Area, Export Zone</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@bhavikaoverseas.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-charcoal-300 hover:text-industrial-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal-300 hover:text-industrial-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-charcoal-300 hover:text-industrial-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-charcoal-300 hover:text-industrial-400 transition-colors">
                  Quality & Certifications
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-charcoal-300 hover:text-industrial-400 transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal-300 hover:text-industrial-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products/${category.id}`}
                    className="text-charcoal-300 hover:text-industrial-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">More Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(6).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products/${category.id}`}
                    className="text-charcoal-300 hover:text-industrial-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-8 pt-8 text-center text-sm text-charcoal-400">
          <p>&copy; {new Date().getFullYear()} Bhavika Overseas. All rights reserved. | Manufacturers & Exporters of Industrial Hardware & Tools</p>
        </div>
      </div>
    </footer>
  )
}

