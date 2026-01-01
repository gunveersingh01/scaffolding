import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProviderWrapper from '@/components/CartProviderWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bhavika Overseas | Manufacturers & Exporters of Scaffolding, Industrial Hardware & Tools',
  description: 'Leading manufacturer and exporter of scaffolding systems, industrial hardware, tools, and fence fittings. Export-grade quality products for global markets.',
  keywords: 'scaffolding, industrial hardware, tools, fence fittings, wrought iron, export, manufacturing',
  authors: [{ name: 'Bhavika Overseas' }],
  openGraph: {
    title: 'Bhavika Overseas | Industrial Hardware & Tools Manufacturer',
    description: 'Export-grade scaffolding, industrial hardware, and tools',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProviderWrapper>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  )
}

