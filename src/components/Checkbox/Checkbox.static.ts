import type { Checkbox } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export const checkboxVariants = cva(
    'relative block h-5 w-5 shrink-0 cursor-pointer rounded-sm border border-highlight bg-background shadow-inset transition-all duration-350 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:opacity-50 data-checked:border-primary/50 data-checked:bg-linear-to-tl data-checked:from-primary/5 data-checked:to-primary/25 data-checked:shadow-raised'
)

export const checkboxIndicatorVariants = cva(
    '-translate-1/2 absolute top-1/2 left-1/2 flex items-center justify-center'
)

export interface CheckboxProps
    extends React.ComponentProps<typeof Checkbox.Root>,
        VariantProps<typeof checkboxVariants> {}
