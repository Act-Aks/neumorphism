import { mergeProps, useRender } from '@base-ui/react'
import { type CardFooterProps, cardFooterVariants } from './CardFooter.static'

export const CardFooter: React.FC<CardFooterProps> = props => {
    const mergedProps = mergeProps(props, { className: cardFooterVariants() })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}
