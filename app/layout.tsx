import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AmbientElements } from '@/components/ambient-elements'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = 'https://kevinguadalupevega.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kevzo8 | Kevin Vega - Software Engineer, Educator, Content Creator',
  description: 'Portfolio of Kevin Vega (Kevzo8) - Filipino Software Engineer, University Instructor, VTuber, and Variety Streamer. Expert in full-stack development, web technologies, and digital content creation.',
  keywords: [
    'Kevin Vega',
    'Kevzo8',
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'VTuber',
    'Filipino Developer',
    'Content Creator',
    'Educator',
    'University Instructor',
    'React Developer',
    'TypeScript Developer',
    'Next.js Developer'
  ],
  authors: [{ name: 'Kevin Vega', url: siteUrl }],
  creator: 'Kevin Vega',
  publisher: 'Kevin Vega',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kevzo8 - Kevin Vega Portfolio',
    title: 'Kevzo8 | Kevin Vega - Software Engineer & Educator',
    description: 'Discover the portfolio of Kevin Vega - a Filipino software engineer, university educator, and content creator specializing in web development and tech education.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kevzo8 Kevin Vega Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevzo8 | Kevin Vega - Software Engineer & Educator',
    description: 'Portfolio of Kevin Vega - Filipino Software Engineer, Educator, and Content Creator',
    creator: '@kevzo8',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology',
  alternates: {
    canonical: siteUrl,
  },
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
  // Structured data for organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Vega',
    alternateName: 'Kevzo8',
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://www.facebook.com/cmsckvz',
      'https://twitter.com/kevzo8',
      'https://www.youtube.com/@kevzo8',
      'https://www.twitch.tv/kevzo8',
      'https://github.com/kevzo8',
    ],
    knowsAbout: [
      'Full Stack Web Development',
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Software Engineering',
      'Web Technologies',
      'Programming Education',
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href={siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <meta name="theme-color" content="#1a2332" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AmbientElements />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
