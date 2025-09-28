import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Legal Eyes - Expert Legal Services | Professional Law Firm',
  description: 'Legal Eyes provides expert legal services with integrity, dedication, and results. Comprehensive legal solutions including corporate law, civil litigation, family law, real estate law, criminal defense, and immigration law.',
  keywords: 'legal services, law firm, attorney, lawyer, corporate law, civil litigation, family law, real estate law, criminal defense, immigration law, legal consultation',
  authors: [{ name: 'Legal Eyes' }],
  creator: 'Legal Eyes',
  publisher: 'Legal Eyes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://legaleyes.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ru-RU': '/ru',
      'hy-AM': '/hy',
    },
  },
  openGraph: {
    title: 'Legal Eyes - Expert Legal Services',
    description: 'Professional legal services with over 15 years of experience. Expert attorneys providing comprehensive legal solutions.',
    url: 'https://legaleyes.com',
    siteName: 'Legal Eyes',
    images: [
      {
        url: '/legal_eyes_logo.png',
        width: 1200,
        height: 630,
        alt: 'Legal Eyes - Professional Legal Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Eyes - Expert Legal Services',
    description: 'Professional legal services with over 15 years of experience. Expert attorneys providing comprehensive legal solutions.',
    images: ['/legal_eyes_logo.png'],
    creator: '@legaleyes',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/legal_eyes_logo.png" />
        <link rel="apple-touch-icon" href="/legal_eyes_logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#0f193d" />
        <meta name="msapplication-TileColor" content="#0f193d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Legal Eyes",
              "description": "Expert legal services with integrity, dedication, and results",
              "url": "https://legaleyes.com",
              "logo": "https://legaleyes.com/legal_eyes_logo.png",
              "telephone": "+1 (555) 123-4567",
              "email": "info@legaleyes.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Justice Boulevard",
                "addressLocality": "Legal District",
                "addressRegion": "City",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "areaServed": "United States",
              "serviceType": ["Corporate Law", "Civil Litigation", "Family Law", "Real Estate Law", "Criminal Defense", "Immigration Law"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}