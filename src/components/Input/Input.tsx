import { mergeProps, useRender } from '@base-ui/react'
import { type InputProps, inputVariants } from './Input.static'

export const Input: React.FC<InputProps> = props => {
    const { type } = props
    const mergedProps = mergeProps(props, { className: inputVariants(), type })

    const element = useRender({
        defaultTagName: 'input',
        props: mergedProps,
        render: props.render,
    })

    return element
}
