import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
    'inline-flex cursor-pointer items-center justify-center border-3 border-border bg-linear-to-tl font-medium shadow-raised transition-all duration-250 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 active:scale-97 active:shadow-inset disabled:pointer-events-none disabled:opacity-50',
    {
        defaultVariants: {
            shape: 'default',
            size: 'default',
            variant: 'default',
        },
        variants: {
            shape: {
                circle: 'rounded-full',
                default: 'rounded-xl',
            },
            size: {
                default: 'h-12 px-4',
                icon: 'h-12 w-12',
            },
            variant: {
                default: 'from-muted/5 to-muted/25',
                destructive: 'from-destructive/5 to-destructive/25 text-destructive',
                primary: 'from-primary/5 to-primary/25 text-primary',
                warning: 'from-warning/5 to-warning/25 text-warning',
            },
        },
    }
)

export interface ButtonProps
    extends useRender.ComponentProps<'button'>,
        VariantProps<typeof buttonVariants> {}
