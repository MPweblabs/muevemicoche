"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedPrivacy) {
      alert("Debes aceptar la politica de privacidad")
      return
    }
    const message = `Hola, me gustaria contactar:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\n\nMensaje: ${formData.message}`
    window.open(`https://wa.me/34600000000?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left - Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Hablemos de tu transporte
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Estamos aqui para ayudarte. Contactanos y te respondemos en menos de 1 hora.
            </p>

            <div className="mt-10 space-y-6">
              <a href="tel:+34600000000" className="flex items-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground group-hover:bg-primary transition-colors">
                  <Phone className="h-6 w-6 text-background" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefono</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    +34 600 000 000
                  </div>
                </div>
              </a>

              <a href="mailto:info@muevemicoche.es" className="flex items-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground group-hover:bg-primary transition-colors">
                  <Mail className="h-6 w-6 text-background" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    info@muevemicoche.es
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground">
                  <MapPin className="h-6 w-6 text-background" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cobertura</div>
                  <div className="text-lg font-semibold text-foreground">
                    Toda Espana
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Escribenos
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                name="name"
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                className="h-14 rounded-xl bg-secondary border-0"
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 rounded-xl bg-secondary border-0"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-14 rounded-xl bg-secondary border-0"
                  required
                />
              </div>

              <Textarea
                name="message"
                placeholder="Tu mensaje..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] rounded-xl bg-secondary border-0 resize-none"
                required
              />

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={acceptedPrivacy}
                  onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
                  className="mt-0.5"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  Acepto la{" "}
                  <Link href="/privacidad" className="text-primary hover:underline">
                    politica de privacidad
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full h-14 text-base font-semibold rounded-xl" size="lg">
                Enviar mensaje
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
