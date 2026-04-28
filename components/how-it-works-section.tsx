import { FileText, CalendarDays, UserCheck, MapPin, ShieldCheck, Home, Clock, Car, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Presupuesto",
    description: "Indica origen y destino",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Reserva",
    description: "Elige fecha",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Recogida profesional",
    description: "Conductor asignado",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Entrega garantizada",
    description: "Rapido y seguro",
  },
]



export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Proceso
          </span>
          <div className="w-8 h-0.5 bg-primary mx-auto mt-3 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Como trasladamos tu coche{" "}
            <br className="hidden md:block" />
            en Espana <span className="text-primary">en 4 pasos</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              {/* Step Card */}
              <div className="relative bg-background rounded-2xl p-6 md:p-8 shadow-sm border border-border w-full md:w-56 lg:w-64 text-center">
                {/* Number Badge */}
                <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-primary mx-auto mb-3" />

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center px-2 lg:px-4">
                  <div className="flex items-center gap-1 text-primary/40">
                    <span className="w-1 h-1 rounded-full bg-current" />
                    <span className="w-1 h-1 rounded-full bg-current" />
                    <span className="w-1 h-1 rounded-full bg-current" />
                    <span className="w-1 h-1 rounded-full bg-current" />
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Cards - Individual pieces */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-background rounded-2xl shadow-sm border border-border p-6 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <span className="font-bold text-foreground text-sm uppercase tracking-wider">
              Seguro incluido
            </span>
          </div>

          <div className="bg-background rounded-2xl shadow-sm border border-border p-6 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Home className="w-7 h-7 text-primary" />
            </div>
            <span className="font-bold text-foreground text-sm uppercase tracking-wider">
              Puerta a puerta
            </span>
          </div>

          <div className="bg-background rounded-2xl shadow-sm border border-border p-6 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <span className="font-bold text-foreground text-sm uppercase tracking-wider">
              Seguimiento en tiempo real
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-base gap-3">
            <a href="#hero">
              <Car className="w-5 h-5" />
              Solicitar presupuesto
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Rapidez, seguridad y confianza en cada traslado
          </p>
        </div>
      </div>
    </section>
  )
}
