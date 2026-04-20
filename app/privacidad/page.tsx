import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | MueveMiCoche",
  description: "Política de privacidad y protección de datos de MueveMiCoche. Cumplimiento RGPD.",
}

export default function PrivacidadPage() {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidad</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Responsable del Tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identidad:</strong> MueveMiCoche S.L.</li>
              <li><strong>CIF:</strong> B-XXXXXXXX</li>
              <li><strong>Dirección:</strong> [Dirección completa], España</li>
              <li><strong>Email:</strong> privacidad@muevemicoche.es</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Finalidad del Tratamiento</h2>
            <p>En MueveMiCoche tratamos la información que nos facilitan los usuarios con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Gestionar las solicitudes de presupuesto de transporte de vehículos.</li>
              <li>Prestar el servicio de transporte contratado.</li>
              <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo con consentimiento).</li>
              <li>Atender consultas y reclamaciones.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Legitimación</h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>La ejecución de un contrato de servicios de transporte.</li>
              <li>El consentimiento del interesado para comunicaciones comerciales.</li>
              <li>El interés legítimo del responsable para la mejora de servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Conservación de Datos</h2>
            <p>
              Los datos personales se conservarán mientras se mantenga la relación comercial y, una vez finalizada, durante los plazos legalmente establecidos para atender posibles responsabilidades.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Destinatarios</h2>
            <p>
              Los datos podrán ser comunicados a: empresas colaboradoras de transporte, administraciones públicas cuando sea legalmente exigible, y proveedores de servicios tecnológicos bajo acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Derechos RGPD</h2>
            <p>Puede ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Acceso:</strong> Conocer qué datos personales tratamos.</li>
              <li><strong>Rectificación:</strong> Modificar datos inexactos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
              <li><strong>Limitación:</strong> Restringir el tratamiento en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, envíe un email a privacidad@muevemicoche.es adjuntando copia de su DNI.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el tratamiento no autorizado o ilícito y contra su pérdida, destrucción o daño accidental.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Reclamaciones</h2>
            <p>
              Si considera que el tratamiento no se ajusta a la normativa vigente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
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
