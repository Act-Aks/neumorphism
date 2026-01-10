import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardTitleVariants = cva('font-semibold leading-none tracking-tight')

export interface CardTitleProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof cardTitleVariants> {}
