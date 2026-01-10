import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardFooterVariants = cva('p-6 pt-0')

export interface CardFooterProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof cardFooterVariants> {}
