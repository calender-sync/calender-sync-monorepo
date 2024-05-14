import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import * as React from "react"

interface CalSyncDropdownYahooButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownYahooButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownYahooButtonProps
>(({}, forwardedRef) => {
  return (
    <DropdownMenuItem ref={forwardedRef}>
      <div className="flex items-center space-x-2">
        <ICONS.yahoo />
        <span>Add to Yahoo Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownYahooButton.displayName = "CalSyncDropdown.YahooButton"

export { CalSyncDropdownYahooButton, type CalSyncDropdownYahooButtonProps }
