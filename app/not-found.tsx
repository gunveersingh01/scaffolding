import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-charcoal-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-charcoal-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-industrial-600 text-white px-6 py-3 rounded-lg hover:bg-industrial-700 font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-charcoal-100 text-charcoal-900 px-6 py-3 rounded-lg hover:bg-charcoal-200 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

