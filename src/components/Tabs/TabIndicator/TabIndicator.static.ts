import type { Tabs } from '@base-ui/react'
import { cva } from 'class-variance-authority'

export const tabIndicatorVariants = cva(
    'absolute rounded-sm border border-background bg-background shadow-raised transition-all duration-350'
)

export interface TabIndicatorProps extends React.ComponentProps<typeof Tabs.Indicator> {}
