import { mergeProps, useRender } from '@base-ui/react'
import { type CardDescriptionProps, cardDescriptionVariants } from './CardDescription.static'

export const CardDescription: React.FC<CardDescriptionProps> = props => {
    const mergedProps = mergeProps(props, { className: cardDescriptionVariants() })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}
