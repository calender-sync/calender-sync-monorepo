import { DropdownMenu } from "@/components/ui/dropdown-menu"
import * as React from "react"

interface CalSyncDropdownMenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu> {}

const CalSyncDropdownMenu = ({
  children,
  ...rest
}: CalSyncDropdownMenuProps) => {
  return <DropdownMenu {...rest}>{children}</DropdownMenu>
}

CalSyncDropdownMenu.displayName = "CalSyncDropdown.Menu"

export { CalSyncDropdownMenu, type CalSyncDropdownMenuProps }
