import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Removes default styles (if true) so you can override with your own background styles
   */
  colored?: boolean
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  function Card(props, ref) {
    const { className, children, colored = false, ...otherProps } = props

    const baseStyle = styles.cardFooter.base
    const uncoloredStyle = styles.cardFooter.default

    const cls = classNames(
      'card-footer',
      baseStyle,
      !colored && uncoloredStyle,
      className
    )

    return (
      <div className={cls} ref={ref} {...otherProps}>
        {children}
      </div>
    )
  }
)

export default CardFooter
