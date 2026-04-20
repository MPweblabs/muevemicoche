const stats = [
  { value: "5.000+", label: "Vehiculos transportados" },
  { value: "72h", label: "Entrega maxima" },
  { value: "100%", label: "Cobertura de seguro" },
  { value: "24/7", label: "Atencion al cliente" },
]

export function StatsBanner() {
  return (
    <section className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-background">
                {stat.value}
              </div>
              <div className="text-sm text-background/60 mt-2">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-background/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
