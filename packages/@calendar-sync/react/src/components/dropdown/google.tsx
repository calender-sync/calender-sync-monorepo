import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarLinkDropdown from "./use-calendar-link-dropdown"

interface CalSyncDropdownGoogleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownGoogleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownGoogleButtonProps
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
        void addToCalendar("google", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.google />
        <span>Add to Google Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownGoogleButton.displayName = "CalSyncDropdown.GoogleButton"

export { CalSyncDropdownGoogleButton, type CalSyncDropdownGoogleButtonProps }
