import { NextResponse } from "next/server"

// URL del calendario publico en formato iCal (no necesita API key)
// Se obtiene de: Google Calendar > Configuracion del calendario > Direccion publica en formato iCal
const ICAL_URL = process.env.GOOGLE_CALENDAR_ICAL_URL || ""

function parseICalDate(dateStr: string): string | null {
  // Formato: 20240115 o 20240115T100000Z
  if (!dateStr) return null

  const year = dateStr.substring(0, 4)
  const month = dateStr.substring(4, 6)
  const day = dateStr.substring(6, 8)

  return `${year}-${month}-${day}`
}

function parseICalEvents(icalData: string): string[] {
  const busyDates: string[] = []
  const events = icalData.split("BEGIN:VEVENT")

  for (const event of events.slice(1)) {
    // Buscar DTSTART
    const dtStartMatch = event.match(/DTSTART[^:]*:(\d{8})/)
    const dtEndMatch = event.match(/DTEND[^:]*:(\d{8})/)

    if (dtStartMatch) {
      const startDate = parseICalDate(dtStartMatch[1])

      if (startDate) {
        if (dtEndMatch) {
          // Evento de varios dias
          const endDate = parseICalDate(dtEndMatch[1])
          if (endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            // El endDate en iCal es exclusivo, asi que restamos un dia
            end.setDate(end.getDate() - 1)

            const current = new Date(start)
            while (current <= end) {
              busyDates.push(current.toISOString().split("T")[0])
              current.setDate(current.getDate() + 1)
            }
          }
        } else {
          busyDates.push(startDate)
        }
      }
    }
  }

  return [...new Set(busyDates)]
}

export async function GET() {
  if (!ICAL_URL) {
    // Si no hay configuracion, devolver array vacio (modo demo)
    return NextResponse.json({ busyDates: [] })
  }

  try {
    const response = await fetch(ICAL_URL, {
      next: { revalidate: 300 }, // Cache por 5 minutos
    })

    if (!response.ok) {
      console.error("Error fetching iCal:", response.status)
      return NextResponse.json({ busyDates: [] })
    }

    const icalData = await response.text()
    const busyDates = parseICalEvents(icalData)

    // Filtrar solo fechas futuras (hoy y adelante)
    const today = new Date().toISOString().split("T")[0]
    const futureDates = busyDates.filter(date => date >= today)

    return NextResponse.json({ busyDates: futureDates })
  } catch (error) {
    console.error("Error fetching calendar:", error)
    return NextResponse.json({ busyDates: [] })
  }
}
