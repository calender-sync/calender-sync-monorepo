import { CalSyncDropdown } from "@/index"
import ICONS from "@/lib/icons"
import type { Meta, StoryObj } from "@storybook/react"

function ExampleDropdown() {
  return (
    <div className="container p-4 mx-auto">
      <CalSyncDropdown.Menu>
        <CalSyncDropdown.Trigger className="flex items-center gap-2">
          <ICONS.calender />
          Add to Calendar
        </CalSyncDropdown.Trigger>
        <CalSyncDropdown.Content>
          <CalSyncDropdown.GoogleButton />
          <CalSyncDropdown.AppleButton />
          <CalSyncDropdown.OutlookButton />
          <CalSyncDropdown.YahooButton />
        </CalSyncDropdown.Content>
      </CalSyncDropdown.Menu>
    </div>
  )
}

const meta: Meta<typeof ExampleDropdown> = {
  component: ExampleDropdown,
}

type Story = StoryObj<typeof ExampleDropdown>

export const Basic: Story = {}

export default meta
