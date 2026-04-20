import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, ArrowRight, Phone, Car } from "lucide-react"

export const metadata: Metadata = {
  title: 'Transporte de Coches Sevilla | MueveMiCoche - Desde 279€',
  description: 'Transporte de coches en Sevilla y Andalucia. Recogida en 24h. Desde 279€. Presupuesto gratis.',
  keywords: ['transporte coches Sevilla', 'transporte vehiculos Sevilla', 'enviar coche Sevilla', 'portacoches Sevilla'],
  openGraph: {
    title: 'Transporte de Coches Sevilla | MueveMiCoche',
    url: 'https://muevemicoche.es/transporte-coches-sevilla',
  },
  alternates: { canonical: 'https://muevemicoche.es/transporte-coches-sevilla' },
}

export default function TransporteCochesSevilla() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-foreground via-foreground to-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm mb-6">
                <MapPin className="w-4 h-4" />Sevilla y Andalucia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transporte de Coches en Sevilla
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Servicio de transporte de vehiculos en Sevilla con entrega en 72h
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                  <Link href="/#hero">Pedir presupuesto<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+34600000000"><Phone className="mr-2 h-5 w-5" />Llamar</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div><div className="text-4xl font-bold">24h</div><div className="text-white/70 text-sm">Recogida</div></div>
              <div><div className="text-4xl font-bold">72h</div><div className="text-white/70 text-sm">Entrega</div></div>
              <div><div className="text-4xl font-bold">279€</div><div className="text-white/70 text-sm">Desde</div></div>
              <div><div className="text-4xl font-bold">100%</div><div className="text-white/70 text-sm">Asegurado</div></div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Rutas desde Sevilla</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { to: "Madrid", price: "279", time: "36h" },
                { to: "Barcelona", price: "349", time: "48h" },
                { to: "Valencia", price: "299", time: "48h" },
              ].map((route, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3"><Car className="w-4 h-4" />Sevilla - {route.to}</div>
                  <div className="text-2xl font-bold">desde {route.price}€</div>
                  <div className="text-sm text-muted-foreground mb-4">Entrega en {route.time}</div>
                  <Button asChild size="sm" className="w-full"><Link href="/#hero">Presupuesto</Link></Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-foreground text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Mover tu coche desde Sevilla?</h2>
            <Button asChild size="lg" className="bg-white text-foreground"><Link href="/#hero">Presupuesto gratis</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
