import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ness Farm Stay | Boutique Villas in Panchkhal, Nepal',
  description: 'Private farm retreat with valley views near Palanchok Bhagawati Temple. Two luxury villas with organic farm-to-table dining.',
  keywords: 'Panchkhal hotel, Palanchok Bhagawati accommodation, Nepal farm stay, Kathmandu valley retreat, boutique villa Nepal',
  authors: [{ name: 'Ness Farm Stay' }],
  openGraph: {
    title: 'Ness Farm Stay | Boutique Villas in Panchkhal',
    description: 'Escape to nature in our private 2-villa farm retreat',
    images: ['/images/hero-main.jpg'],
    url: 'https://nessfarmstay.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
