import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AmbientElements } from '@/components/ambient-elements'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Kevzo8 | Kevin Vega - Developer, Educator, Content Creator',
  description: 'Portfolio of Kevin Vega (Kevzo8) - Filipino Software Engineer, University Instructor, VTuber, and Variety Streamer. Building software, teaching the next generation, and creating content.',
  keywords: ['Kevin Vega', 'Kevzo8', 'Software Engineer', 'VTuber', 'Filipino Developer', 'Content Creator', 'Educator'],
  authors: [{ name: 'Kevin Vega' }],
  creator: 'Kevin Vega',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.svg',
  }
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AmbientElements />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
