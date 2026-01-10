import { mergeProps, useRender } from '@base-ui/react'
import { type BadgeProps, badgeVariants } from './badge.static'

export const Badge: React.FC<BadgeProps> = props => {
    const { variant } = props
    const mergedProps = mergeProps(props, { className: badgeVariants({ variant }) })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}
