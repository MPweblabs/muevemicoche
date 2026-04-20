import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones | MueveMiCoche",
  description: "Términos y condiciones del servicio de transporte de vehículos MueveMiCoche.",
}

export default function TerminosPage() {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">Términos y Condiciones</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Objeto del Servicio</h2>
            <p>
              MueveMiCoche ofrece servicios de transporte de vehículos en territorio nacional. El servicio incluye la recogida del vehículo en el punto de origen designado y su entrega en el punto de destino acordado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Solicitud y Presupuesto</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los presupuestos tienen una validez de 7 días desde su emisión.</li>
              <li>El precio final puede variar en función de las características específicas del vehículo y las condiciones de acceso.</li>
              <li>La confirmación del servicio requiere la aceptación expresa del presupuesto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Plazos de Entrega</h2>
            <p>
              MueveMiCoche se compromete a realizar la entrega en un plazo máximo de 72 horas desde la recogida del vehículo, salvo circunstancias excepcionales debidamente comunicadas.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Los plazos pueden verse afectados por condiciones meteorológicas adversas.</li>
              <li>Los festivos nacionales y autonómicos no computan a efectos de plazo.</li>
              <li>El cliente será informado de cualquier incidencia que afecte al plazo previsto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Obligaciones del Cliente</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar información veraz sobre el vehículo y sus condiciones.</li>
              <li>Entregar el vehículo con la documentación en regla (permiso de circulación, ITV vigente, seguro).</li>
              <li>El vehículo debe tener un máximo de 1/4 de combustible.</li>
              <li>Retirar todos los objetos de valor del interior del vehículo.</li>
              <li>Estar presente o designar representante en la recogida y entrega.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Seguro y Responsabilidad</h2>
            <p>
              Todos los transportes incluyen seguro de responsabilidad civil y de daños al vehículo transportado.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Cobertura máxima: según valor declarado del vehículo.</li>
              <li>Se realizará inspección visual documentada antes y después del transporte.</li>
              <li>Cualquier daño debe comunicarse en el momento de la entrega.</li>
              <li>No se cubren daños preexistentes no declarados ni objetos personales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Cancelaciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancelación con más de 48h de antelación: sin coste.</li>
              <li>Cancelación entre 24h y 48h: 25% del presupuesto.</li>
              <li>Cancelación con menos de 24h: 50% del presupuesto.</li>
              <li>No presentación sin aviso: 100% del presupuesto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Forma de Pago</h2>
            <p>
              El pago se realizará según las condiciones acordadas en el presupuesto aceptado. Se admiten transferencia bancaria, tarjeta de crédito/débito y pago en efectivo en la entrega.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Resolución de Conflictos</h2>
            <p>
              Para cualquier controversia derivada del servicio, las partes acuerdan someterse a los Juzgados y Tribunales de la ciudad del domicilio del cliente.
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
