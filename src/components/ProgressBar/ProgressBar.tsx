import { mergeProps, Progress } from '@base-ui/react'
import {
    type ProgressBarProps,
    progressIndicatorVariants,
    progressVariants,
} from './ProgressBar.static'

export const ProgressBar: React.FC<ProgressBarProps> = props => {
    const { orientation, variant } = props
    const rootProps = mergeProps(props, { className: progressVariants({ orientation }) })
    const indicatorProps = mergeProps(props, {
        className: progressIndicatorVariants({ orientation, variant }),
    })
    const { value, ...otherProps } = rootProps

    return (
        <Progress.Root value={value} {...otherProps}>
            <Progress.Track className={'h-full w-full'}>
                <Progress.Indicator
                    {...indicatorProps}
                    style={
                        orientation === 'vertical'
                            ? {
                                  bottom: 0,
                                  height: `${value}%`,
                                  position: 'absolute',
                                  width: '100%',
                              }
                            : {}
                    }
                />
            </Progress.Track>
        </Progress.Root>
    )
}
