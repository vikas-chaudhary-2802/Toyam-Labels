import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreeToyam | Your Brand. Every Sip.',
  description: 'Transform your water bottles into powerful branding assets — for hospitality and high-footfall distribution.',
}

import { Navbar } from '@/components/premium/Navbar';
import { Footer } from '@/components/premium/Footer';

import { MouseSpotlight } from '@/components/premium/MouseSpotlight';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased selection:bg-blue-500/30 selection:text-blue-200 flex flex-col min-h-screen overflow-x-hidden w-full relative">
        <MouseSpotlight />
        {/* Global Grid Background */}
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Radial mask to fade out the grid toward the edges to make it look premium */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]"></div>
        
        <Navbar />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
