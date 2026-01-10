import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const switchVariants = cva(
    'block h-5.5 w-12 cursor-pointer rounded-full border border-highlight bg-background shadow-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:opacity-50 data-checked:border-primary data-checked:bg-primary'
)
export const switchThumbVariants = cva(
    'after:-translate-1/2 relative block h-5 w-5 translate-x-0 rounded-full border border-highlight bg-background shadow-inset transition-all duration-350 ease-out after:absolute after:top-1/2 after:left-1/2 after:h-1 after:w-1 after:rounded-full after:bg-muted-foreground data-checked:translate-x-6.5 data-checked:after:bg-primary'
)

export interface SwitchProps
    extends useRender.ComponentProps<'switch'>,
        VariantProps<typeof switchVariants> {}
