"use client"

import { useState } from "react"
import { MapPin, Car, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const vehicleTypes = [
  { value: "sedan", label: "Turismo / Sedan" },
  { value: "suv", label: "SUV / Todoterreno" },
  { value: "furgoneta", label: "Furgoneta" },
  { value: "moto", label: "Motocicleta" },
  { value: "clasico", label: "Vehiculo clasico" },
  { value: "otro", label: "Otro" },
]

export function HeroSection() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [vehicleType, setVehicleType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, me gustaria solicitar presupuesto:\n\n- Origen: ${origin}\n- Destino: ${destination}\n- Vehiculo: ${vehicleTypes.find(v => v.value === vehicleType)?.label || vehicleType}`
    const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left - Big Typography */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible ahora
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Tu coche donde quieras en{" "}
              <span className="text-primary">72 horas</span>
            </h1>
            
            <p className="mt-8 text-xl text-muted-foreground max-w-lg">
              Transporte de vehiculos puerta a puerta en toda España. 
              Sin complicaciones.
            </p>

            {/* Trust Signals */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">100% Asegurado</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">+5.000 transportes</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Precio cerrado</span>
              </div>
            </div>
          </div>

          {/* Right - Quote Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="rounded-3xl bg-foreground p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-background mb-2">
                Presupuesto gratis
              </h2>
              <p className="text-background/60 mb-8">
                Respuesta en menos de 1 hora
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-background/40" />
                    <Input
                      type="text"
                      placeholder="Ciudad de origen"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="pl-12 h-14 bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-background/40 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-background/40" />
                    <Input
                      type="text"
                      placeholder="Ciudad de destino"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-12 h-14 bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-background/40 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Select value={vehicleType} onValueChange={setVehicleType} required>
                    <SelectTrigger className="w-full h-14 bg-background/10 border-background/20 text-background rounded-xl [&>span]:text-background/40 [&[data-state=open]>span]:text-background">
                      <Car className="mr-2 h-5 w-5 text-background/40" />
                      <SelectValue placeholder="Tipo de vehiculo" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl mt-2"
                  size="lg"
                >
                  Calcular precio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-background/50">
                Sin compromiso. Respuesta inmediata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
