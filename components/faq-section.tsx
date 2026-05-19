"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "¿Cómo funciona el servicio?",
    answer: "Recogemos tu coche en el punto acordado y lo entregamos en la dirección que nos indiques. Un conductor profesional se encarga de todo el traslado de forma segura.",
  },
  {
    question: "¿Que necesito para que podais recoger mi coche?",
    answer: "Respuesta aquí"
  },
  {
    question: "¿Quien conduce mi coche?",
    answer: "Tu vehiculo es trasladado por conductores profesionales con experiencia. No utilizamos grúas, el coche se conduce de forma segura durante todo el trayecto.",
  },
  {
    question: "¿Cuanto tarda el traslado?",
    answer: "El tiempo de entrega suele ser inferior a 72 horas, dependiendo de la distancia y disponibilidad.",
  },
  {
    question: "¿El coche esta asegurado durante el traslado?",
    answer: "Si, todos los traslados incluyen seguro para garantizar la tranquilidad durante todo el proceso.",
  },
  {
    question: "¿Desde donde hasta donde podeis recoger el coche?",
    answer: "Ofrecemos servicio en toda España, recogiendo y entregando el vehiculo en la dirección que nos indiques (servicio puerta a puerta).",
  },
  {
    question: "¿Que tipo de vehiculos podeis trasladar?",
    answer: "Trabajamos con todo tipo de vehiculos, tanto manuales Cómo automaticos.",
  },
  {
    question: "{Cómo solicito un traslado?",
    answer: "Solo tienes que rellenar el formulario o contactar por WhatsApp. Te daremos un presupuesto sin compromiso.",
  },
  {
    question: "¿Hay costes ocultos?",
    answer: "No. El precio que te damos es final, sin sorpresas.",
  },
]

function FaqItem({ 
  faq, 
  index, 
  isOpen, 
  onToggle,
  animationDelay 
}: { 
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
  animationDelay: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), animationDelay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [animationDelay])

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-background rounded-2xl border-2 overflow-hidden transition-all duration-500",
        "transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isOpen 
          ? "border-primary shadow-lg shadow-primary/10" 
          : "border-border hover:border-primary/30 hover:shadow-md"
      )}
      style={{ transitionDelay: isVisible ? "0ms" : `${animationDelay}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left group"
      >
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 font-bold text-sm",
          isOpen 
            ? "bg-primary text-primary-foreground rotate-0 scale-110" 
            : "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-105"
        )}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <span className={cn(
          "flex-1 font-semibold transition-colors duration-300 text-base",
          isOpen ? "text-primary" : "text-foreground"
        )}>
          {faq.question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen 
            ? "bg-primary text-primary-foreground rotate-180" 
            : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        )}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div className={cn(
        "grid transition-all duration-500 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pl-20">
            <div className="h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            FAQS
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 mb-6 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Preguntas{" "}
            <span className="text-primary relative">
              frecuentes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Todo lo que necesitas saber sobre nuestro servicio
          </p>
        </div>

        {/* FAQ List - 2 columns with independent alignment */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              faq={faq} 
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
              animationDelay={index * 80}
            />
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Estamos aqui para ayudarte con cualquier duda
              </p>
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 gap-2 shadow-xl"
              >
                <a href="#contacto">
                  <MessageCircle className="w-5 h-5" />
                  Contactanos ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
