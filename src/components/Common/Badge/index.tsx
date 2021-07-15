import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge
   */
  type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary' | 'secondary'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  props,
  ref
) {
  const { className, children, type = 'neutral', ...otherProps } = props

  const baseStyle = styles.base
  const typeStyle = {
    success: styles.success,
    danger: styles.danger,
    warning: styles.warning,
    neutral: styles.neutral,
    primary: styles.primary,
    secondary: styles.secondary,
  }

  const cls = classNames(baseStyle, typeStyle[type], className)

  return (
    <span className={cls} ref={ref} {...otherProps}>
      {children}
    </span>
  )
})

export default Badge
