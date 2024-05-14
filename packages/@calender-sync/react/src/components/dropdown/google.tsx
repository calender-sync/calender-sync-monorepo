import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalenderSync } from "@calender-sync/hooks"
import * as React from "react"
import useCalenderLinkDropdown from "./use-calender-link-dropdown"

interface CalSyncDropdownGoogleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownGoogleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownGoogleButtonProps
>((props, forwardedRef) => {
  const { addToCalendar } = useCalenderSync()
  const { event, newTab } = useCalenderLinkDropdown()

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
