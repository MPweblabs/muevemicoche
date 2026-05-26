"use client"

import { Handshake, Plus } from "lucide-react"

// Para anadir logos reales:
// 1. Sube los logos a /public/logos/ (formato PNG o SVG)
// 2. Cambia "logo: null" por "logo: '/logos/nombre-empresa.png'"
const collaborators = [
  { 
    name: "Bca group", 
    logo: "/images/collaborations/bca-group.png",
  },
  { 
    name: "Automóviles Cobeña", 
    logo: "/images/collaborations/automovilescobena.png",
  },
  { 
    name: "LocalizaVO", 
    logo: "/images/collaborations/localiza.jpeg",
  },
  { 
    name: "Renault", 
    logo: "/images/collaborations/renault.jpeg",
  },
  { 
    name: "Europcar", 
    logo: "/images/collaborations/Europcar.jpeg",
  },
  { 
    name: "Alcopa", 
    logo: "/images/collaborations/Alcopa.jpeg",
  },
  { 
    name: "Axxa", 
    logo: "/images/collaborations/Axxa.jpg",
  },
  { 
    name: "Occident", 
    logo: "/images/collaborations/Occident.webp",
  },
  { 
    name: "Terrania", 
    logo: "/images/collaborations/Terrania.png",
  },
  
]

export function CollaborationsSection() {
  return (
    <section id="colaboraciones" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Colaboramos con los mejores
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empresas que confian en nosotros
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collaborators.map((collab, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 h-24 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              {collab.logo ? (
                <img 
                  src={collab.logo} 
                  alt={`Logo de ${collab.name}`}
                  className="max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
                  <Plus className="w-6 h-6" />
                  <span className="text-xs">Logo</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {"¿Quieres colaborar con nosotros?"}
          </p>
          <a 
            href="#contacto" 
            className="text-primary font-medium hover:underline"
          >
            Contactaños para más informacion
          </a>
        </div>
      </div>
    </section>
  )
}
