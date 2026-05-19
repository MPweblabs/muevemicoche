import { Shield, Truck, Clock, CheckCircle, File, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { title } from "process"

const features = [
  {
    icon: Shield,
    title: "Contacto directo con conductor",
  },
  {
    icon: Truck,
    title: "Trabajamos con flota",
  },
  {
    icon: Clock,
    title: "Siempre puntuales",
  },
  {
    icon: CheckCircle,
    title: "Profesionales certificados",
  },
  {
    icon: File,
    title: "Carnet tipo B1",
  },
  {
    icon: Car,
    title: "Industriales y personales"
  }
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Sobre nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              {"Comprar un coche fuera no debería ser un problema"}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Comprar un coche fuera de tu ciudad no debería ser un problema. En MueveMiCoche nos encargamos de recogerlo y entregarlo donde nos indiques, con un proceso claro, seguro y sin complicaciones.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature.title}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-10 rounded-full px-8 h-12">
              <a href="#contacto">Contactar</a>
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-secondary overflow-hidden relative">
              <img
                src="/images/conductor.png"
                alt="Vehículo conducido por conductor profesional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">+5.000</div>
              <div className="text-background/60 text-sm">Vehiculos transportados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
