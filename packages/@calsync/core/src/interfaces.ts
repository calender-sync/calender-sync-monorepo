import type { Dayjs, UnitType } from "dayjs"

interface CalendarEventOrganizer {
  name: string
  email: string
}

interface CalendarEvent {
  title: string
  start: any
  end?: any
  duration?: [number, UnitType]
  allDay?: boolean
  rRule?: string
  description?: string
  location?: string
  organizer?: CalendarEventOrganizer
  busy?: boolean
  guests?: string[]
  url?: string
}

interface NormalizedCalendarEvent
  extends Omit<CalendarEvent, "start" | "end" | "duration"> {
  startTime: Dayjs
  endTime: Dayjs
}

interface Google extends Record<string, string | boolean | number | undefined> {
  action: string
  text: string
  dates: string
  details?: string
  location?: string
  trp?: boolean
  sprop?: string
  add?: string
  src?: string
  recur?: string
}

interface Outlook
  extends Record<string, string | boolean | number | undefined> {
  path: string
  rru: string
  startdt: string
  enddt: string
  subject: string
  allday?: boolean
  body?: string
  location?: string
}

interface Yahoo extends Record<string, string | boolean | number | undefined> {
  v: number
  title: string
  st: string
  et: string
  desc?: string
  in_loc?: string
}

export type {
  CalendarEvent,
  CalendarEventOrganizer,
  Google,
  NormalizedCalendarEvent,
  Outlook,
  Yahoo,
}
