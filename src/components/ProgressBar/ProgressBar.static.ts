import type { useRender } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export const progressVariants = cva(
    'relative overflow-hidden rounded-full bg-background shadow-inset focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    {
        defaultVariants: {
            orientation: 'horizontal',
        },
        variants: {
            orientation: {
                horizontal: 'h-5 w-full',
                vertical: 'h-full w-5',
            },
        },
    }
)

export const progressIndicatorVariants = cva('rounded-full border-none', {
    defaultVariants: {
        orientation: 'horizontal',
        variant: 'default',
    },
    variants: {
        orientation: {
            horizontal: 'bg-linear-to-l',
            vertical: 'bg-linear-to-t',
        },
        variant: {
            default: 'from-primary to-primary/75',
            secondary: 'from-muted-foreground to-muted-foreground/75',
        },
    },
})

export interface ProgressBarProps
    extends useRender.ComponentProps<'progress'>,
        VariantProps<typeof progressVariants>,
        VariantProps<typeof progressIndicatorVariants> {}
