import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Applies specific styles for checkboxes
   */
  check?: boolean
  /**
   * Applies specific styles for radios
   */
  radio?: boolean
  /**
   * Defines if the label is disabled (you should still disable child elements)
   */
  disabled?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  props,
  ref
) {
  const { children, check, radio, disabled, className, ...other } = props

  const baseStyle = styles.label.base
  const checkStyle = styles.label.check
  const disabledStyle = styles.label.disabled

  const cls = classNames(
    baseStyle,
    // check and radio are interchangeable
    (check || radio) && checkStyle,
    disabled && disabledStyle,
    className
  )

  return (
    // Disabling this eslint rule as component will receive input as child
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cls} ref={ref} {...other}>
      {children}
    </label>
  )
})

export default Label
