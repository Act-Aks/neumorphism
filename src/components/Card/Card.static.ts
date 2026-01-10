import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariants = cva('rounded-2xl border-3 border-border', {
    defaultVariants: {
        variant: 'raised',
    },
    variants: {
        variant: {
            inset: 'shadow-inset',
            raised: 'shadow-raised',
        },
    },
})

export interface CardProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof cardVariants> {}
