import { mergeProps, useRender } from '@base-ui/react'
import { type CardTitleProps, cardTitleVariants } from './CardTitle.static'

export const CardTitle: React.FC<CardTitleProps> = props => {
    const mergedProps = mergeProps(props, { className: cardTitleVariants() })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}
