import type { CalenderType } from "@/lib/types"
import {
	apple,
	google,
	outlook,
	outlookMobile,
	yahoo,
	type CalendarEvent,
} from "@calender-sync/core"

function useCalenderSync() {
  const addToCalendar = (type: CalenderType, event: CalendarEvent) => {
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

    window.open(url, "_blank")
  }

  return {
    addToCalendar,
  }
}

export { useCalenderSync }
