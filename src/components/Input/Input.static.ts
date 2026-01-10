import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const inputVariants = cva(
    'flex w-full rounded-md border border-highlight bg-background px-3 py-2 text-sm shadow-inset ring-offset-background file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:opacity-50'
)

export interface InputProps
    extends useRender.ComponentProps<'input'>,
        VariantProps<typeof inputVariants> {}
