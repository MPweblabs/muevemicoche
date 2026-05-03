"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Nosotros", href: "#quienes-somos" },
  { label: "Proceso", href: "#como-funciona" },
  { label: "Faqs", href: "#faqs" },
  { label: "Calendario", href: "#disponibilidad" },
  { label: "Colaboraciones", href: "#colaboraciones"},
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold text-foreground tracking-tight">
            MueveMiCoche
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild className="rounded-full px-6 h-11">
            <a href="#hero">Pedir presupuesto</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-3 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-4 rounded-full h-12">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
                Pedir presupuesto
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
