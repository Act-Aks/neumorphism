import { Checkbox as BaseCheckbox, mergeProps } from '@base-ui/react'
import { Check } from 'lucide-react'
import type { CheckboxProps } from './Checkbox.static'
import { checkboxIndicatorVariants, checkboxVariants } from './Checkbox.static'

export const Checkbox: React.FC<CheckboxProps> = props => {
    const rootProps = mergeProps(props, {
        className: checkboxVariants(),
    })
    const indicatorProps = mergeProps(props, {
        className: checkboxIndicatorVariants(),
    })

    return (
        <BaseCheckbox.Root {...rootProps}>
            <BaseCheckbox.Indicator {...indicatorProps}>
                <Check className='h-3 w-3 text-primary' />
            </BaseCheckbox.Indicator>
        </BaseCheckbox.Root>
    )
}
