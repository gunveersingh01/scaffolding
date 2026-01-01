'use client'

import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  min?: number
  max?: number
  value: number
  onChange: (quantity: number) => void
  disabled?: boolean
}

export default function QuantitySelector({
  min = 1,
  max = 25,
  value,
  onChange,
  disabled = false,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = parseInt(e.target.value) || min
    const clampedValue = Math.max(min, Math.min(max, numValue))
    onChange(clampedValue)
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={disabled || value <= min}
        className="p-1 rounded border border-charcoal-300 hover:bg-charcoal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
        className="w-16 text-center border border-charcoal-300 rounded px-2 py-1 focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 disabled:opacity-50"
      />
      <button
        type="button"
        onClick={handleIncrease}
        disabled={disabled || value >= max}
        className="p-1 rounded border border-charcoal-300 hover:bg-charcoal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}

