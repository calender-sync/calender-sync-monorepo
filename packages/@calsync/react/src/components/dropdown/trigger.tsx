import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import * as React from "react"

interface CalSyncDropdownTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {}

const CalSyncDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTrigger>,
  CalSyncDropdownTriggerProps
>(({ children, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuTrigger
      ref={forwardedRef}
      asChild
      {...rest}
    >
      <Button variant="outline">{children}</Button>
    </DropdownMenuTrigger>
  )
})

CalSyncDropdownTrigger.displayName = "CalSyncDropdown.Trigger"

export { CalSyncDropdownTrigger, type CalSyncDropdownTriggerProps }
