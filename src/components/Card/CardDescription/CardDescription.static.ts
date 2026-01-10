import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardDescriptionVariants = cva('text-muted-foreground text-sm')

export interface CardDescriptionProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof cardDescriptionVariants> {}
