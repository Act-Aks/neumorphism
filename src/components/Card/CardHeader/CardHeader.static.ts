import type { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardHeaderVariants = cva('flex flex-col space-y-1.5 p-6')

export interface CardHeaderProps
    extends useRender.ComponentProps<'div'>,
        VariantProps<typeof cardHeaderVariants> {}
