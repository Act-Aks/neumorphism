import type { Slider } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export const sliderVariants = cva('h-4 w-full')
export const sliderRangeVariants = cva('absolute h-full rounded-full', {
    defaultVariants: {
        variant: 'default',
    },
    variants: {
        variant: {
            default: 'bg-linear-to-l from-primary to-primary/75',
            secondary: 'bg-linear-to-l from-muted-foreground to-muted-foreground/75',
        },
    },
})
export const sliderTrackVariants = cva('relative h-4 w-full rounded-full shadow-inset')
export const sliderThumbVariants = cva(
    'h-5 w-5 cursor-pointer rounded-full border border-highlight bg-background shadow-inset transition-shadow duration-350 ease-out active:shadow-raised'
)

export interface SliderProps
    extends React.ComponentProps<typeof Slider.Root>,
        VariantProps<typeof sliderRangeVariants> {}
