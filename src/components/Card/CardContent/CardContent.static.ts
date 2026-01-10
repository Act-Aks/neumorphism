import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardContentVariants = cva('p-6 pt-0')

export interface CardContentProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof cardContentVariants> {}
