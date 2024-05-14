import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import * as React from "react"

interface CalSyncDropdownAppleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownAppleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownAppleButtonProps
>(({}, forwardedRef) => {
  return (
    <DropdownMenuItem ref={forwardedRef}>
      <div className="flex items-center space-x-2">
        <ICONS.apple />
        <span>Add to Apple Calender</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownAppleButton.displayName = "CalSyncDropdown.AppleButton"

export { CalSyncDropdownAppleButton, type CalSyncDropdownAppleButtonProps }
