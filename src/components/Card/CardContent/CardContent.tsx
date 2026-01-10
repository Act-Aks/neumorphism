import { mergeProps, useRender } from '@base-ui/react'
import { type CardContentProps, cardContentVariants } from './CardContent.static'

export const CardContent: React.FC<CardContentProps> = props => {
    const mergedProps = mergeProps(props, { className: cardContentVariants() })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}
