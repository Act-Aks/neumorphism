import { Switch as BaseSwitch, mergeProps } from '@base-ui/react'
import type { SwitchProps } from './Switch.static'
import { switchThumbVariants, switchVariants } from './Switch.static'

export const Switch: React.FC<SwitchProps> = props => {
    const rootProps = mergeProps(props, { className: switchVariants() })
    const thumbProps = mergeProps(props, { className: switchThumbVariants() })

    return (
        <BaseSwitch.Root {...rootProps}>
            <BaseSwitch.Thumb {...thumbProps} />
        </BaseSwitch.Root>
    )
}
