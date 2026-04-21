"use client"

import { useState, useMemo, useEffect } from "react"
import { ChevronLeft, ChevronRight, Loader2, CalendarCheck, CalendarX } from "lucide-react"
import { Button } from "@/components/ui/button"

const DAYS_OF_WEEK = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

const DEMO_BUSY_DATES = [
  "2026-04-22", "2026-04-23", "2026-04-28",
  "2026-05-01", "2026-05-02", "2026-05-08", "2026-05-15",
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

function formatDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

export function AvailabilityCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [busyDates, setBusyDates] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDemo, setIsDemo] = useState(false)

  useEffect(() => {
    async function fetchBusyDates() {
      try {
        const response = await fetch("/api/calendar")
        const data = await response.json()
        
        if (data.isDemo) {
          setIsDemo(true)
          setBusyDates(DEMO_BUSY_DATES)
        } else {
          setIsDemo(false)
          setBusyDates(data.busyDates || [])
        }
      } catch {
        setIsDemo(true)
        setBusyDates(DEMO_BUSY_DATES)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBusyDates()
  }, [])

  const busyDatesSet = useMemo(() => new Set(busyDates), [busyDates])

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const availableCount = useMemo(() => {
    let count = 0
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      if (date >= todayStart && !busyDatesSet.has(formatDate(currentYear, currentMonth, day))) {
        count++
      }
    }
    return count
  }, [currentYear, currentMonth, daysInMonth, busyDatesSet, today])

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const isPastDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayStart
  }

  const isToday = (day: number) => {
    return currentYear === today.getFullYear() && currentMonth === today.getMonth() && day === today.getDate()
  }

  const isBusy = (day: number) => {
    return busyDatesSet.has(formatDate(currentYear, currentMonth, day))
  }

  const canGoPrevious = () => {
    return currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth())
  }

  return (
    <section id="disponibilidad" className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header - simplified for mobile */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Disponibilidad
          </h2>
          <p className="mt-2 md:mt-4 text-muted-foreground">
            Verde = disponible | Rojo = ocupado
          </p>
          {isDemo && (
            <p className="mt-2 text-xs text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-full">
              Modo demo - Calendario no configurado
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile: Stats row at top */}
          <div className="flex gap-3 mb-6 lg:hidden">
            <div className="flex-1 bg-green-500 rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold">{availableCount}</div>
              <p className="text-xs text-green-100">disponibles</p>
            </div>
            <div className="flex-1 bg-foreground rounded-xl p-4 text-background text-center">
              <div className="text-2xl font-bold">{busyDates.filter(d => d.startsWith(`${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`)).length}</div>
              <p className="text-xs text-background/60">ocupados</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-3">
              <div className="bg-background rounded-2xl border border-border shadow-sm p-4 md:p-8">
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPreviousMonth}
                    disabled={!canGoPrevious()}
                    className="rounded-full h-9 w-9 md:h-10 md:w-10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {MONTHS[currentMonth]} {currentYear}
                    </h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={goToNextMonth} 
                    className="rounded-full h-9 w-9 md:h-10 md:w-10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Days header - abbreviated more on mobile */}
                <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 md:mb-4">
                  {DAYS_OF_WEEK.map((day) => (
                    <div key={day} className="text-center text-[10px] md:text-xs font-semibold text-muted-foreground uppercase py-1 md:py-2">
                      {day.charAt(0)}
                      <span className="hidden md:inline">{day.slice(1)}</span>
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                {isLoading ? (
                  <div className="flex items-center justify-center py-16 md:py-20">
                    <Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <div className="grid grid-cols-7 gap-1 md:gap-2">
                    {Array.from({ length: firstDay }).map((_, index) => (
                      <div key={`empty-${index}`} className="aspect-square" />
                    ))}

                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const day = index + 1
                      const past = isPastDate(day)
                      const busy = isBusy(day)
                      const todayDate = isToday(day)

                      return (
                        <div
                          key={day}
                          className={`
                            aspect-square flex items-center justify-center rounded-lg md:rounded-xl 
                            text-xs md:text-sm font-semibold transition-all duration-200 cursor-default relative
                            ${past 
                              ? "text-muted-foreground/30 bg-transparent" 
                              : busy && todayDate
                                ? "bg-red-500 text-white ring-2 ring-foreground ring-offset-2"
                                : busy
                                  ? "bg-red-500 text-white"
                                  : todayDate
                                    ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                                    : "bg-green-500 text-white"
                            }
                          `}
                        >
                          {day}
                          {todayDate && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Side panel - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-2 space-y-6">
              {/* Available days card */}
              <div className="bg-green-500 rounded-2xl p-6 text-white">
                <CalendarCheck className="w-10 h-10 mb-4 opacity-80" />
                <div className="text-5xl font-bold mb-2">{availableCount}</div>
                <p className="text-green-100 font-medium">dias disponibles</p>
              </div>

              {/* Legend card */}
              <div className="bg-background rounded-2xl border border-border p-6">
                <h4 className="font-semibold text-foreground mb-4">Leyenda</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">15</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Disponible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">15</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Ocupado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary ring-2 ring-primary ring-offset-2 flex items-center justify-center relative">
                      <span className="text-xs font-semibold text-primary-foreground">15</span>
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">Hoy</span>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-foreground rounded-2xl p-6 text-background">
                <CalendarX className="w-8 h-8 mb-3 text-background/60" />
                <h4 className="font-semibold mb-2">No encuentras fecha?</h4>
                <p className="text-sm text-background/60 mb-4">
                  Contactanos y buscamos una solucion
                </p>
                <Button 
                  asChild 
                  variant="secondary" 
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  <a href="#contacto">Contactar</a>
                </Button>
              </div>
            </div>

            {/* Mobile CTA - shown only on mobile */}
            <div className="lg:hidden mt-4">
              <Button asChild className="w-full" size="lg">
                <a href="#contacto">No encuentras fecha? Contactanos</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
