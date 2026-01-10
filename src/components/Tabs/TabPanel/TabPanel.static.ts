import type { Tabs } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export const tabPanelVariants = cva(
    'mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
)

export interface TabPanelProps
    extends React.ComponentProps<typeof Tabs.Panel>,
        VariantProps<typeof tabPanelVariants> {}
