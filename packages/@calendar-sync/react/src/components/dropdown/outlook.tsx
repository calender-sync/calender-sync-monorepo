import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarLinkDropdown from "./use-calendar-link-dropdown"

interface CalSyncDropdownOutlookButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownOutlookButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownOutlookButtonProps
>((props, forwardedRef) => {
  const { addToCalendar } = useCalendarSync()
  const { event, newTab } = useCalendarLinkDropdown()

  return (
    <DropdownMenuItem
      {...props}
      role="link"
      ref={forwardedRef}
      onClick={(e) => {
        e.preventDefault()
        addToCalendar("outlook", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.outlook />
        <span>Add to Outlook Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownOutlookButton.displayName = "CalSyncDropdown.OutlookButton"

export { CalSyncDropdownOutlookButton, type CalSyncDropdownOutlookButtonProps }
