import { Slider as BaseSlider, mergeProps } from '@base-ui/react'
import {
    type SliderProps,
    sliderRangeVariants,
    sliderThumbVariants,
    sliderTrackVariants,
    sliderVariants,
} from './Slider.static'

export const Slider: React.FC<SliderProps> = props => {
    const rootProps = mergeProps(props, {
        className: sliderVariants(),
    })

    return (
        <BaseSlider.Root {...rootProps}>
            <BaseSlider.Control className={'relative'}>
                <BaseSlider.Track className={sliderTrackVariants()}>
                    <BaseSlider.Indicator
                        className={sliderRangeVariants({ variant: props.variant })}
                    />
                </BaseSlider.Track>
                <BaseSlider.Thumb className={sliderThumbVariants()} />
            </BaseSlider.Control>
        </BaseSlider.Root>
    )
}
