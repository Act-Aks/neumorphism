import type { Tabs } from '@base-ui/react'
import { cva } from 'class-variance-authority'

export const tabListVariants = cva(
    'relative inline-flex h-12 items-center justify-center gap-4 rounded-2xl border-3 border-border bg-linear-to-tl from-background to-highlight/75 p-1 text-muted-foreground shadow-raised'
)

export interface TabListProps extends React.ComponentProps<typeof Tabs.List> {}
