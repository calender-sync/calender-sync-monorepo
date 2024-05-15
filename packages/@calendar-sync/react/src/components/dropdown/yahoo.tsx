import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarLinkDropdown from "./use-calendar-link-dropdown"

interface CalSyncDropdownYahooButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalSyncDropdownYahooButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalSyncDropdownYahooButtonProps
>((props, forwardedRef) => {
  const { addToCalendar } = useCalendarSync()
  const { event, newTab } = useCalendarLinkDropdown()

  return (
    <DropdownMenuItem
      {...props}
      ref={forwardedRef}
      role="link"
      onClick={(e) => {
        e.preventDefault()
        void addToCalendar("yahoo", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.yahoo />
        <span>Add to Yahoo Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalSyncDropdownYahooButton.displayName = "CalSyncDropdown.YahooButton"

export { CalSyncDropdownYahooButton, type CalSyncDropdownYahooButtonProps }
