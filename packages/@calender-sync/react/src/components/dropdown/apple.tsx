import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalenderSync } from "@calender-sync/hooks"
import * as React from "react"
import useCalenderLinkDropdown from "./use-calender-link-dropdown"

interface CalSyncDropdownAppleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownAppleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownAppleButtonProps
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
        addToCalendar("apple", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.apple />
        <span>Add to Apple Calender</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownAppleButton.displayName = "CalSyncDropdown.AppleButton"

export { CalSyncDropdownAppleButton, type CalSyncDropdownAppleButtonProps }
