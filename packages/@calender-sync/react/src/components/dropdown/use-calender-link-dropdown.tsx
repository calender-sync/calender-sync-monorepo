import * as React from "react"
import { CalendarSyncDropdownContext } from "./context"

export default function useCalenderLinkDropdown() {
  const context = React.useContext(CalendarSyncDropdownContext)

  if (!context) {
    throw new Error(
      "useCalenderLinkDropdown must be used within a CalSyncDropdown component",
    )
  }

  const { event, ...rest } = context

  if (!event || Object.keys(event).length === 0) {
    throw new Error(
      "useCalenderLinkDropdown must be used within a CalSyncDropdown component with an event",
    )
  }

  return { event, ...rest }
}
