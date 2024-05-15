import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarLinkDropdown from "./use-calendar-link-dropdown"

interface CalSyncDropdownAppleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownAppleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownAppleButtonProps
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
        addToCalendar("apple", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.apple />
        <span>Add to Apple Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownAppleButton.displayName = "CalSyncDropdown.AppleButton"

export { CalSyncDropdownAppleButton, type CalSyncDropdownAppleButtonProps }
