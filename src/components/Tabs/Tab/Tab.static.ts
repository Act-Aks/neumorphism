import type { Tabs } from '@base-ui/react'
import { cva } from 'class-variance-authority'

export const tabVariants = cva(
    'relative z-10 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 font-medium text-sm ring-offset-background transition-all duration-350 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-selected:bg-background data-selected:text-foreground data-selected:shadow-inset'
)

export interface TabProps extends React.ComponentProps<typeof Tabs.Tab> {}
