import { NextResponse } from "next/server"

// Google Calendar ID - debe ser un calendario publico
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || ""
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY || ""

export async function GET() {
  if (!CALENDAR_ID || !API_KEY) {
    // Si no hay configuracion, devolver array vacio (modo demo)
    return NextResponse.json({ busyDates: [] })
  }

  try {
    // Obtener eventos de los proximos 60 dias
    const now = new Date()
    const timeMin = now.toISOString()
    const timeMax = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString()

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`

    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache por 5 minutos
    })

    if (!response.ok) {
      console.error("Google Calendar API error:", response.status)
      return NextResponse.json({ busyDates: [] })
    }

    const data = await response.json()

    // Extraer fechas de los eventos (dias ocupados)
    const busyDates: string[] = []
    
    for (const event of data.items || []) {
      // Eventos de dia completo tienen "date", eventos con hora tienen "dateTime"
      const startDate = event.start?.date || event.start?.dateTime?.split("T")[0]
      const endDate = event.end?.date || event.end?.dateTime?.split("T")[0]

      if (startDate) {
        // Si es un evento de varios dias, agregar todas las fechas
        const start = new Date(startDate)
        const end = endDate ? new Date(endDate) : start

        // Para eventos de dia completo, el endDate es el dia siguiente (exclusivo)
        // Asi que restamos un dia si es evento de dia completo
        if (event.end?.date) {
          end.setDate(end.getDate() - 1)
        }

        const current = new Date(start)
        while (current <= end) {
          busyDates.push(current.toISOString().split("T")[0])
          current.setDate(current.getDate() + 1)
        }
      }
    }

    // Eliminar duplicados
    const uniqueDates = [...new Set(busyDates)]

    return NextResponse.json({ busyDates: uniqueDates })
  } catch (error) {
    console.error("Error fetching calendar:", error)
    return NextResponse.json({ busyDates: [] })
  }
}
