import * as React from 'react'

import classNames from 'classnames'

import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImg from './CardImg'
import styles from './styles'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Removes default styles (if true) so you can override with your own background styles
   */
  colored?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  props,
  ref
) {
  const { className, children, colored = false, ...otherProps } = props

  const baseStyle = styles.card.base
  const uncoloredStyle = styles.card.default

  const cls = classNames(
    'card',
    baseStyle,
    !colored && uncoloredStyle,
    className
  )

  return (
    <div className={cls} ref={ref} {...otherProps}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Object.assign(Card, {
  Body: CardBody,
  Header: CardHeader,
  Footer: CardFooter,
  Img: CardImg,
})
