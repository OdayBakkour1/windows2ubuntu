import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Windows to Ubuntu - Your Ultimate Transition Guide',
  description: 'Seamlessly transition from Windows to Ubuntu with our comprehensive roadmap. Learn everything from backup strategies to productivity optimization.',
  keywords: 'Windows, Ubuntu, Linux, transition, guide, tutorial, migration',
  authors: [{ name: 'Oday Bakkour' }],
  openGraph: {
    title: 'Windows to Ubuntu - Your Ultimate Transition Guide',
    description: 'Seamlessly transition from Windows to Ubuntu with our comprehensive roadmap.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
} 