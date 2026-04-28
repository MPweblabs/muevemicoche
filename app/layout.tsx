import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d4ed8',
}

export const metadata: Metadata = {
  title: 'MueveMiCoche | Transporte de Coches Madrid - Entrega en 72h | Presupuesto Gratis',
  description: 'Transporte de coches en Madrid y toda España. Recogida en 24h, entrega en 72h. Precio cerrado, 100% asegurado. Presupuesto gratis. Servicio puerta a puerta desde Madrid.',
  keywords: [
    'transporte coches Madrid',
    'transporte vehiculos Madrid',
    'transporte de coches',
    'transporte de vehiculos',
    'enviar coche Madrid',
    'mover coche Madrid',
    'transporte coche Madrid Barcelona',
    'transporte coche Madrid Valencia',
    'transporte coche Madrid Sevilla',
    'portacoches Madrid',
    'grua coches Madrid',
    'transporte urgente vehiculos',
    'transporte coches 72 horas',
    'presupuesto transporte coche',
    'empresa transporte coches Madrid',
    'transporte coches Wallapop',
    'transporte coches compra online',
    'transporte flotas vehiculos',
  ],
  authors: [{ name: 'MueveMiCoche' }],
  creator: 'MueveMiCoche',
  publisher: 'MueveMiCoche',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://muevemicoche.es',
    siteName: 'MueveMiCoche',
    title: 'MueveMiCoche | Transporte de Coches Madrid - Entrega en 72h',
    description: 'Transporte de coches en Madrid y toda España. Recogida en 24h, entrega en 72h. Presupuesto gratis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MueveMiCoche - Transporte de Coches en Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MueveMiCoche | Transporte de Coches Madrid',
    description: 'Transporte de coches en Madrid y toda España. Entrega en 72h. Presupuesto gratis.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://muevemicoche.es',
  },
  category: 'Transporte',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://muevemicoche.es/#organization",
              "name": "MueveMiCoche",
              "alternateName": "MueveMiCoche Madrid",
              "description": "Servicio de transporte de coches en Madrid y toda España. Recogida en 24h, entrega en 72h. Presupuesto gratis.",
              "url": "https://muevemicoche.es",
              "telephone": "+34603950295",
              "email": "info@muevemicoche.es",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Gran Via 1",
                "addressLocality": "Madrid",
                "addressRegion": "Madrid",
                "postalCode": "28013",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.4168",
                "longitude": "-3.7038"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Madrid",
                  "@id": "https://www.wikidata.org/wiki/Q2807"
                },
                {
                  "@type": "State", 
                  "name": "Comunidad de Madrid"
                },
                {
                  "@type": "Country",
                  "name": "España"
                }
              ],
              "priceRange": "€€",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/muevemicoche",
                "https://tiktok.com/@muevemicoche"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Transporte de Vehiculos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transporte de coches Madrid",
                      "description": "Recogida de vehiculos en Madrid y entrega en toda España en 72h"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transporte urgente vehiculos",
                      "description": "Transporte express de vehiculos con entrega en 24-48h"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Transporte flotas",
                      "description": "Servicio de transporte para concesionarios y flotas de vehiculos"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MueveMiCoche",
              "url": "https://muevemicoche.es",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://muevemicoche.es/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://muevemicoche.es"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Transporte Coches Madrid",
                  "item": "https://muevemicoche.es/transporte-coches-madrid"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
