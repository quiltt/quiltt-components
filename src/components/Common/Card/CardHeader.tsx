import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Removes default styles (if true) so you can override with your own background styles
   */
  colored?: boolean
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  function Card(props, ref) {
    const { className, children, colored = false, ...otherProps } = props

    const baseStyle = styles.cardHeader.base
    const uncoloredStyle = styles.cardHeader.default

    const cls = classNames(
      'card-header',
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

export default CardHeader
