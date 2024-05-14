import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import * as React from "react"

interface CalSyncDropdownGoogleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownGoogleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownGoogleButtonProps
>(({}, forwardedRef) => {
  return (
    <DropdownMenuItem ref={forwardedRef}>
      <div className="flex items-center space-x-2">
        <ICONS.google />
        <span>Add to Google Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownGoogleButton.displayName = "CalSyncDropdown.GoogleButton"

export { CalSyncDropdownGoogleButton, type CalSyncDropdownGoogleButtonProps }
