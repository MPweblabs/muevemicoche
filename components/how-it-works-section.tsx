import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Solicita presupuesto",
    description: "Rellena el formulario con origen, destino y tipo de vehiculo.",
  },
  {
    number: "02",
    title: "Confirma y reserva",
    description: "Recibe tu presupuesto y elige la fecha de recogida.",
  },
  {
    number: "03",
    title: "Recogemos tu coche",
    description: "Nuestro equipo recoge el vehiculo en el punto acordado.",
  },
  {
    number: "04",
    title: "Entrega garantizada",
    description: "Tu coche llega a destino en menos de 72 horas.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Así de fácil
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="bg-background rounded-2xl p-8 h-full border border-transparent hover:border-primary/20 transition-all hover:shadow-lg">
                <span className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8 h-12">
            <a href="#hero">
              Empezar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
