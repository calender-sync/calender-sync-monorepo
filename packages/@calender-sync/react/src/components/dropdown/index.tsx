import * as React from "react"
import {
  CalSyncDropdownAppleButton,
  type CalSyncDropdownAppleButtonProps,
} from "./apple"
import {
  CalSyncDropdownContent,
  type CalSyncDropdownContentProps,
} from "./content"
import {
  CalSyncDropdownGoogleButton,
  type CalSyncDropdownGoogleButtonProps,
} from "./google"
import { CalSyncDropdownMenu, type CalSyncDropdownMenuProps } from "./menu"
import {
  CalSyncDropdownOutlookButton,
  type CalSyncDropdownOutlookButtonProps,
} from "./outlook"
import {
  CalSyncDropdownTrigger,
  type CalSyncDropdownTriggerProps,
} from "./trigger"
import {
  CalSyncDropdownYahooButton,
  type CalSyncDropdownYahooButtonProps,
} from "./yahoo"

function CalSyncDropdown({ children }: React.PropsWithChildren) {
  return children
}

CalSyncDropdown.displayName = "CalSyncDropdown.Root"

CalSyncDropdown.Menu = CalSyncDropdownMenu
CalSyncDropdown.Trigger = CalSyncDropdownTrigger
CalSyncDropdown.Content = CalSyncDropdownContent
CalSyncDropdown.GoogleButton = CalSyncDropdownGoogleButton
CalSyncDropdown.AppleButton = CalSyncDropdownAppleButton
CalSyncDropdown.OutlookButton = CalSyncDropdownOutlookButton
CalSyncDropdown.YahooButton = CalSyncDropdownYahooButton

export {
  CalSyncDropdown,
  CalSyncDropdownAppleButton,
  CalSyncDropdownContent,
  CalSyncDropdownGoogleButton,
  CalSyncDropdownMenu,
  CalSyncDropdownOutlookButton,
  CalSyncDropdownTrigger,
  CalSyncDropdownYahooButton,
  type CalSyncDropdownAppleButtonProps,
  type CalSyncDropdownContentProps,
  type CalSyncDropdownGoogleButtonProps,
  type CalSyncDropdownMenuProps,
  type CalSyncDropdownOutlookButtonProps,
  type CalSyncDropdownTriggerProps,
  type CalSyncDropdownYahooButtonProps,
}
