"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { RequirementsInfo } from "@/components/requirements-info"
import { Phone, Mail, MapPin, Send } from "lucide-react"

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
    if (!acceptedPrivacy) return
    const message = `Hola, me gustaria contactar:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\n\nMensaje: ${formData.message}`
    window.open(`https://wa.me/34600000000?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm">
            CONTACTO
          </span>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-4 mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Hablamos cuando{" "}
            <span className="text-primary">quieras</span>
          </h2>

          <div className="mt-10">
            <RequirementsInfo variant="light" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Estamos aqui para ayudarte. Contactanos por el medio que prefieras.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefono</div>
                  <a href="tel:+34600000000" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    +34 600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:info@muevemicoche.es" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    info@muevemicoche.es
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
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
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Enviar mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="h-12 bg-muted border-0"
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-muted border-0"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-muted border-0"
                  required
                />
              </div>
              <Textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] bg-muted border-0 resize-none"
                required
              />

              <div className="flex items-start gap-2">
                <Checkbox
                  id="privacy"
                  checked={acceptedPrivacy}
                  onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
                  className="mt-0.5 border-1 border-gray-900"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Acepto la{" "}
                  <Link href="/privacidad" className="text-primary hover:underline">
                    politica de privacidad
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12"
                disabled={!acceptedPrivacy}
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
