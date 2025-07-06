import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ubuntu Transition',
  description: 'Seamlessly transition from Windows to Ubuntu with our comprehensive roadmap.',
  keywords: 'Windows, Ubuntu, Linux, transition, guide, tutorial, migration',
  authors: [{ name: 'Oday Bakkour' }],
  openGraph: {
    title: 'Ubuntu Transition',
    description: 'Seamlessly transition from Windows to Ubuntu with our comprehensive roadmap.',
    type: 'website',
  },
}

function Navbar() {
  // This is a workaround for Next.js App Router SSR/CSR. In a real app, use a client component for active link.
  if (typeof window === 'undefined') return null
  const pathname = window.location.pathname
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Tools', href: '/tools' },
  ]
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#181c27] border-b border-[#23283a]">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <Globe className="w-7 h-7 text-purple-400" />
          <span className="text-xl font-bold text-white tracking-tight">Ubuntu Transition</span>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-gray-200 hover:text-white hover:bg-purple-700/20 ${pathname === link.href ? 'bg-purple-600 text-white' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#181c27] text-white min-h-screen'}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 