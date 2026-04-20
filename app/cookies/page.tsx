import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Cookies | MueveMiCoche",
  description: "Política de cookies de MueveMiCoche. Información sobre el uso de cookies en nuestra web.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Política de Cookies</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Cookies Técnicas (Necesarias)</h3>
            <p>Son esenciales para el funcionamiento del sitio web y no pueden desactivarse.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Gestión de sesión de usuario</li>
              <li>Preferencias de idioma</li>
              <li>Seguridad del sitio</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Cookies Analíticas</h3>
            <p>Nos ayudan a entender cómo los usuarios interactúan con el sitio web.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Vercel Analytics: análisis de rendimiento y uso del sitio</li>
              <li>Duración: hasta 2 años</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Cookies de Preferencias</h3>
            <p>Permiten recordar sus preferencias de navegación.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Tema visual (claro/oscuro)</li>
              <li>Formularios guardados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Gestión de Cookies</h2>
            <p>
              Puede configurar su navegador para rechazar cookies o para que le avise cuando se envíen. Sin embargo, si desactiva las cookies, algunas funciones del sitio pueden no estar disponibles.
            </p>
            <p className="mt-4">Enlaces a la configuración de cookies de los principales navegadores:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Cookies de Terceros</h2>
            <p>
              Utilizamos servicios de terceros que pueden establecer sus propias cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Vercel Analytics:</strong> para análisis de uso del sitio web.</li>
              <li><strong>WhatsApp:</strong> para el widget de chat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Actualización de la Política</h2>
            <p>
              Esta política de cookies puede actualizarse periódicamente. Le recomendamos revisarla regularmente para estar informado sobre cómo utilizamos las cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Contacto</h2>
            <p>
              Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en: privacidad@muevemicoche.es
            </p>
          </section>

          <p className="text-sm mt-8 pt-8 border-t border-border">
            Última actualización: Abril 2026
          </p>
        </div>
      </div>
    </main>
  )
}
