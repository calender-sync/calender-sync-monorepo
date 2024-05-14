import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import * as React from "react"

interface CalSyncDropdownContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuContent> {}

const CalSyncDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  CalSyncDropdownContentProps
>(({ children, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuContent
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </DropdownMenuContent>
  )
})

CalSyncDropdownContent.displayName = "CalSyncDropdown.Content"

export { CalSyncDropdownContent, type CalSyncDropdownContentProps }
