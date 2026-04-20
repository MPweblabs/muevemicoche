import { Clock, Shield, Banknote, MapPin, Headphones, FileCheck } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Entrega en 72h",
    description: "Garantizada en toda España.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "100% Asegurado",
    description: "Cobertura total del trayecto.",
    highlight: false,
  },
  {
    icon: Banknote,
    title: "Precio cerrado",
    description: "Sin sorpresas ni extras.",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Puerta a puerta",
    description: "Recogida y entrega donde indiques.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "Atencion 24/7",
    description: "Seguimiento en tiempo real.",
    highlight: false,
  },
  {
    icon: FileCheck,
    title: "Sin papeleo",
    description: "Gestionamos todo por ti.",
    highlight: false,
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Ventajas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Por que elegirnos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`p-8 rounded-2xl transition-all ${
                benefit.highlight 
                  ? "bg-foreground text-background" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                benefit.highlight ? "bg-background/10" : "bg-background"
              }`}>
                <benefit.icon className={`h-7 w-7 ${
                  benefit.highlight ? "text-background" : "text-primary"
                }`} />
              </div>
              <h3 className={`text-xl font-bold mt-6 ${
                benefit.highlight ? "text-background" : "text-foreground"
              }`}>
                {benefit.title}
              </h3>
              <p className={`mt-2 ${
                benefit.highlight ? "text-background/70" : "text-muted-foreground"
              }`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
