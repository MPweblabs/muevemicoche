import { Shield, Truck, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Shield,
    title: "Seguro a todo riesgo",
  },
  {
    icon: Truck,
    title: "Flota moderna",
  },
  {
    icon: Clock,
    title: "Siempre puntuales",
  },
  {
    icon: CheckCircle,
    title: "Profesionales certificados",
  },
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
              {"¿Te gusta conducir?"}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Llevamos anos transportando vehiculos por toda Espana. 
              Nuestro equipo de profesionales garantiza que tu coche 
              llegue en perfectas condiciones.
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
                src="/images/conducir.jpg" 
                alt="Coche en carretera al atardecer con vistas al mar"
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
