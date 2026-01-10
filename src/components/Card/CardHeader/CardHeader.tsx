import { mergeProps, useRender } from '@base-ui/react'
import { type CardHeaderProps, cardHeaderVariants } from './CardHeader.static'

export const CardHeader: React.FC<CardHeaderProps> = props => {
    const mergedProps = mergeProps(props, { className: cardHeaderVariants() })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}
