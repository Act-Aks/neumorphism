import { mergeProps, useRender } from '@base-ui/react'
import { type CardProps, cardVariants } from './Card.static'
import { CardContent } from './CardContent/CardContent'
import { CardDescription } from './CardDescription/CardDescription'
import { CardFooter } from './CardFooter/CardFooter'
import { CardHeader } from './CardHeader/CardHeader'
import { CardTitle } from './CardTitle/CardTitle'

export function Card(props: CardProps) {
    const { variant } = props
    const mergedProps = mergeProps(props, { className: cardVariants({ variant }) })

    const element = useRender({
        defaultTagName: 'div',
        props: mergedProps,
        render: props.render,
    })

    return element
}

Card.Content = CardContent
Card.Description = CardDescription
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Title = CardTitle
