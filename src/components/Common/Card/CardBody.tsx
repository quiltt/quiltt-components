import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  function CardBody(props, ref) {
    const { className, children, ...otherProps } = props

    const baseStyle = styles.cardBody.base

    const cls = classNames('card-body', baseStyle, className)

    return (
      <div className={cls} ref={ref} {...otherProps}>
        {children}
      </div>
    )
  }
)

export default CardBody
