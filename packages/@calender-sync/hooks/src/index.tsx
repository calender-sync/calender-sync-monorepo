import {
  apple,
  google,
  outlook,
  outlookMobile,
  yahoo,
  type CalendarEvent,
  type CalenderType,
} from "@calender-sync/core"

function useCalenderSync() {
  const generateCalendarUrl = (type: CalenderType, event: CalendarEvent) => {
    let url = ""

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    switch (type) {
      case "google":
        url = google(event)
        break
      case "apple":
        url = apple(event)
        break
      case "yahoo":
        url = yahoo(event)
        break
      case "outlook":
        url = isMobile ? outlookMobile(event) : outlook(event)
        break
    }

    return url
  }

  const addToCalendar = (
    type: CalenderType,
    event: CalendarEvent,
    newTab = true,
  ) => {
    let url = generateCalendarUrl(type, event)

    if (newTab) {
      window.open(url, "_blank")
    } else {
      window.location.href = url
    }
  }

  return {
    generateCalendarUrl,
    addToCalendar,
  }
}

export { useCalenderSync, type CalendarEvent, type CalenderType }
