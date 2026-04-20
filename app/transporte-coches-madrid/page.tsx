import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { 
  Car, 
  Clock, 
  Shield, 
  MapPin, 
  CheckCircle, 
  Phone,
  ArrowRight,
  Building2,
  Truck
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Transporte de Coches en Madrid | MueveMiCoche - Recogida en 24h',
  description: 'Servicio de transporte de coches en Madrid y Comunidad de Madrid. Recogida en 24 horas, entrega en toda Espana en 72h. Presupuesto gratis. Precio cerrado sin sorpresas.',
  keywords: [
    'transporte coches Madrid',
    'transporte vehiculos Madrid',
    'enviar coche desde Madrid',
    'transporte coche Madrid Barcelona',
    'transporte coche Madrid Valencia',
    'transporte coche Madrid Sevilla',
    'portacoches Madrid',
    'grua coches Madrid',
    'transporte coches Comunidad de Madrid',
    'empresa transporte vehiculos Madrid',
    'mover coche Madrid',
    'transporte coches urgente Madrid',
    'transporte coches Wallapop Madrid',
    'transporte coches compra online Madrid',
    'transporte coches concesionario Madrid',
    'transporte flotas vehiculos Madrid',
  ],
  openGraph: {
    title: 'Transporte de Coches en Madrid | MueveMiCoche',
    description: 'Transporte de vehiculos en Madrid. Recogida en 24h, entrega en 72h. Presupuesto gratis.',
    url: 'https://muevemicoche.es/transporte-coches-madrid',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://muevemicoche.es/transporte-coches-madrid',
  },
}

const zones = [
  "Madrid Centro",
  "Arganzuela", 
  "Retiro",
  "Salamanca",
  "Chamartin",
  "Tetuan",
  "Chamberi",
  "Fuencarral-El Pardo",
  "Moncloa-Aravaca",
  "Latina",
  "Carabanchel",
  "Usera",
  "Puente de Vallecas",
  "Moratalaz",
  "Ciudad Lineal",
  "Hortaleza",
  "Villaverde",
  "Villa de Vallecas",
  "Vicalvaro",
  "San Blas-Canillejas",
  "Barajas",
]

const municipios = [
  "Alcobendas",
  "Alcorcon",
  "Getafe",
  "Leganes",
  "Mostoles",
  "Fuenlabrada",
  "Alcala de Henares",
  "Torrejon de Ardoz",
  "Parla",
  "Coslada",
  "Pozuelo de Alarcon",
  "Las Rozas",
  "San Sebastian de los Reyes",
  "Rivas-Vaciamadrid",
  "Majadahonda",
]

const routes = [
  { from: "Madrid", to: "Barcelona", time: "48h", price: "desde 299" },
  { from: "Madrid", to: "Valencia", time: "24h", price: "desde 249" },
  { from: "Madrid", to: "Sevilla", time: "36h", price: "desde 279" },
  { from: "Madrid", to: "Bilbao", time: "36h", price: "desde 269" },
  { from: "Madrid", to: "Malaga", time: "48h", price: "desde 289" },
  { from: "Madrid", to: "Zaragoza", time: "24h", price: "desde 199" },
]

const faqs = [
  {
    question: "Cuanto cuesta transportar un coche desde Madrid?",
    answer: "El precio depende del destino y tipo de vehiculo. Las rutas mas comunes desde Madrid tienen precios desde 199 euros. Solicita tu presupuesto gratis y sin compromiso."
  },
  {
    question: "Cuanto tarda el transporte de coches desde Madrid?",
    answer: "Garantizamos la entrega en menos de 72 horas a cualquier punto de Espana. Para destinos cercanos como Valencia o Zaragoza, la entrega puede ser en 24 horas."
  },
  {
    question: "Recogeis el coche en cualquier punto de Madrid?",
    answer: "Si, ofrecemos servicio puerta a puerta en todos los distritos de Madrid y municipios de la Comunidad de Madrid. Recogemos en domicilios, concesionarios, talleres o donde nos indiques."
  },
  {
    question: "El transporte esta asegurado?",
    answer: "Si, todos nuestros transportes incluyen seguro a todo riesgo que cubre cualquier desperfecto durante el traslado. Tu vehiculo viaja 100% protegido."
  },
  {
    question: "Puedo transportar un coche comprado por Wallapop o Coches.net?",
    answer: "Por supuesto. Muchos de nuestros clientes en Madrid nos contratan para recoger coches comprados online en otras ciudades. Nos encargamos de todo."
  },
]

export default function TransporteCochesMadrid() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-foreground via-foreground to-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                Madrid y Comunidad de Madrid
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transporte de Coches en Madrid
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Recogemos tu vehiculo en cualquier punto de Madrid y lo entregamos en toda Espana en menos de 72 horas. Presupuesto gratis al instante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                  <Link href="/#hero">
                    Pedir presupuesto gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+34600000000">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">24h</div>
                <div className="text-white/70 text-sm">Recogida en Madrid</div>
              </div>
              <div>
                <div className="text-4xl font-bold">72h</div>
                <div className="text-white/70 text-sm">Entrega garantizada</div>
              </div>
              <div>
                <div className="text-4xl font-bold">100%</div>
                <div className="text-white/70 text-sm">Asegurado</div>
              </div>
              <div>
                <div className="text-4xl font-bold">+2000</div>
                <div className="text-white/70 text-sm">Coches desde Madrid</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que elegir MueveMiCoche en Madrid
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Somos la empresa de transporte de vehiculos de referencia en Madrid
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Recogida en 24h", desc: "Recogemos tu coche en cualquier punto de Madrid en menos de 24 horas" },
                { icon: Shield, title: "Seguro a todo riesgo", desc: "Tu vehiculo viaja 100% protegido con cobertura completa" },
                { icon: MapPin, title: "Puerta a puerta", desc: "Recogida y entrega en la direccion que nos indiques en Madrid" },
                { icon: Car, title: "Todo tipo de vehiculos", desc: "Coches, furgonetas, motos, vehiculos de alta gama y clasicos" },
                { icon: Building2, title: "Particulares y empresas", desc: "Servicio para concesionarios, flotas y particulares" },
                { icon: Truck, title: "Flota propia", desc: "Portacoches modernos con conductores profesionales" },
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/50 border border-border">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Routes from Madrid */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Rutas populares desde Madrid
              </h2>
              <p className="text-muted-foreground">
                Precios orientativos para turismos estandar
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {routes.map((route, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {route.from} - {route.to}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{route.price}€</div>
                      <div className="text-sm text-muted-foreground">Entrega en {route.time}</div>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/#hero">Pedir</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage zones */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cobertura en Madrid
              </h2>
              <p className="text-muted-foreground">
                Recogemos en todos los distritos y municipios
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Distritos de Madrid
                </h3>
                <div className="flex flex-wrap gap-2">
                  {zones.map((zone, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Municipios principales
                </h3>
                <div className="flex flex-wrap gap-2">
                  {municipios.map((muni, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
                      {muni}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-foreground text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Necesitas transportar tu coche desde Madrid?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Solicita tu presupuesto gratis ahora y recibe respuesta en minutos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                <Link href="/#hero">
                  Pedir presupuesto gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Local Business Schema for Madrid */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MueveMiCoche Madrid",
            "description": "Servicio de transporte de coches en Madrid. Recogida en 24 horas y entrega en toda Espana en menos de 72 horas.",
            "url": "https://muevemicoche.es/transporte-coches-madrid",
            "telephone": "+34600000000",
            "email": "madrid@muevemicoche.es",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Gran Via",
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
                "name": "Madrid"
              },
              {
                "@type": "State",
                "name": "Comunidad de Madrid"
              }
            ],
            "priceRange": "€€",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de transporte de vehiculos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transporte de coches Madrid-Barcelona",
                    "description": "Transporte de vehiculos desde Madrid a Barcelona en 48 horas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transporte de coches Madrid-Valencia",
                    "description": "Transporte de vehiculos desde Madrid a Valencia en 24 horas"
                  }
                }
              ]
            }
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }),
        }}
      />
    </div>
  )
}
