import type { Tabs } from '@base-ui/react'
import { cva } from 'class-variance-authority'

export const tabsVariants = cva('w-full')

export interface TabsProps extends React.ComponentProps<typeof Tabs.Root> {}
