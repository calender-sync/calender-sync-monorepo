import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import * as React from "react"

interface CalSyncDropdownOutlookButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownOutlookButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownOutlookButtonProps
>(({}, forwardedRef) => {
  return (
    <DropdownMenuItem ref={forwardedRef}>
      <div className="flex items-center space-x-2">
        <ICONS.outlook />
        <span>Add to Outlook Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownOutlookButton.displayName = "CalSyncDropdown.OutlookButton"

export { CalSyncDropdownOutlookButton, type CalSyncDropdownOutlookButtonProps }
