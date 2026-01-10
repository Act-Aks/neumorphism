import { mergeProps, useRender } from '@base-ui/react'
import { type ButtonProps, buttonVariants } from './Button.static'

export const Button: React.FC<ButtonProps> = props => {
    const { variant, size, shape } = props
    const mergedProps = mergeProps(props, {
        className: buttonVariants({ shape, size, variant }),
        tabIndex: 0,
    })

    const element = useRender({
        defaultTagName: 'button',
        props: mergedProps,
        render: props.render,
    })

    return element
}
