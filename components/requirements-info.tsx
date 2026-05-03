import { Fuel, FileCheck, Shield, Key, AlertCircle } from "lucide-react"

const requirements = [
    {
        icon: Fuel,
        title: "Deposito lleno",
        description: "Si no está lleno se cobra aparte el deposito",
    },
    {
        icon: FileCheck,
        title: "ITV en vigor",
        description: "Inspeccion tecnica al dia",
    },
    {
        icon: Shield,
        title: "Seguro activo",
        description: "Poliza de seguro vigente",
    },
    {
        icon: Key,
        title: "Documentacion",
        description: "Permiso de circulacion y ficha tecnica",
    },
]

export function RequirementsInfo({ variant = "light" }: { variant?: "light" | "dark" }) {
    const isDark = variant === "dark"

    return (
        <div className={`rounded-2xl p-6 ${isDark ? "bg-background/10" : "bg-muted"}`}>
            <div className={`flex items-center gap-2 mb-4 ${isDark ? "text-background" : "text-foreground"}`}>
                <AlertCircle className="h-5 w-5" />
                <h4 className="font-semibold">Requisitos del vehiculo</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {requirements.map((req) => (
                    <div key={req.title} className="flex items-start gap-3">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isDark ? "bg-background/20" : "bg-background"}`}>
                            <req.icon className={`h-4 w-4 ${isDark ? "text-background" : "text-primary"}`} />
                        </div>
                        <div>
                            <p className={`text-sm font-medium ${isDark ? "text-background" : "text-foreground"}`}>
                                {req.title}
                            </p>
                            <p className={`text-xs ${isDark ? "text-background/60" : "text-muted-foreground"}`}>
                                {req.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
