import type { Tabs } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export const tabIndicatorVariants = cva(
    'absolute inset-0 top-1/2 h-8 w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-lg border border-background bg-background shadow-raised transition-all duration-300 ease-in-out'
)

export interface TabIndicatorProps
    extends React.ComponentProps<typeof Tabs.Indicator>,
        VariantProps<typeof tabIndicatorVariants> {}
