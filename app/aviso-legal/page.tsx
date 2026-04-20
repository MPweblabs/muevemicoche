import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Aviso Legal | MueveMiCoche",
  description: "Aviso legal y condiciones de uso del servicio de transporte de vehículos MueveMiCoche.",
}

export default function AvisoLegalPage() {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">Aviso Legal</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Denominación social:</strong> MueveMiCoche S.L.</li>
              <li><strong>CIF:</strong> B-XXXXXXXX</li>
              <li><strong>Domicilio social:</strong> [Dirección completa], España</li>
              <li><strong>Email:</strong> info@muevemicoche.es</li>
              <li><strong>Teléfono:</strong> +34 600 000 000</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web muevemicoche.es, del que es titular MueveMiCoche S.L. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las presentes disposiciones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Condiciones de Uso</h2>
            <p>
              El usuario se compromete a utilizar el sitio web y sus servicios de conformidad con la ley, la moral, las buenas costumbres y el orden público. El usuario se obliga a no utilizar el sitio web con fines ilícitos o lesivos contra MueveMiCoche o terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a MueveMiCoche, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Exclusión de Responsabilidad</h2>
            <p>
              MueveMiCoche no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Legislación Aplicable</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del usuario.
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
