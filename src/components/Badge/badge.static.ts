import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full border-2 border-border px-2.5 py-0.5 font-semibold shadow-raised transition-all duration-200 hover:shadow-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    {
        defaultVariants: {
            variant: 'default',
        },
        variants: {
            variant: {
                default: 'bg-muted text-foreground',
                destructive:
                    'bg-linear-to-tl from-destructive/5 to-destructive/25 text-destructive',
                primary: 'bg-linear-to-tl from-primary/5 to-primary/25 text-primary',
                warning: 'bg-linear-to-tl from-warning/5 to-warning/25 text-warning',
            },
        },
    }
)

export interface BadgeProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof badgeVariants> {}
