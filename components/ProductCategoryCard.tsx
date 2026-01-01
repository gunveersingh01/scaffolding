import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/data/products'

interface ProductCategoryCardProps {
  category: Category
}

export default function ProductCategoryCard({ category }: ProductCategoryCardProps) {
  return (
    <Link
      href={`/products/${category.id}`}
      className="block bg-white rounded-lg shadow-industrial hover:shadow-industrial-lg transition-all duration-300 p-6 group border border-charcoal-100 hover:border-industrial-300"
    >
      <div className="flex items-start space-x-4 mb-4">
        <span className="text-4xl">{category.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-heading font-semibold text-charcoal-900 group-hover:text-industrial-600 transition-colors mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-charcoal-600 line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-charcoal-100">
        <span className="text-sm text-charcoal-500">
          {category.products.length} products
        </span>
        <ArrowRight className="w-5 h-5 text-industrial-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

