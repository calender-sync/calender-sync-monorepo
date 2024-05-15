import { DropdownMenu } from "@/components/ui/dropdown-menu"
import * as React from "react"
import {
  CalendarSyncDropdownContext,
  type CalendarSyncDropdownProps,
} from "./context"

interface CalSyncDropdownMenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu>,
    CalendarSyncDropdownProps {}

const CalSyncDropdownMenu = ({
  children,
  event,
  newTab = true,
  ...rest
}: CalSyncDropdownMenuProps) => {
  return (
    <CalendarSyncDropdownContext.Provider
      value={{
        event,
        newTab,
      }}
    >
      <DropdownMenu {...rest}>{children}</DropdownMenu>
    </CalendarSyncDropdownContext.Provider>
  )
}

CalSyncDropdownMenu.displayName = "CalSyncDropdown.Menu"

export { CalSyncDropdownMenu, type CalSyncDropdownMenuProps }
