import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  /**
   * Defines the color of the select
   */
  valid?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  props,
  ref
) {
  const { valid, children, className, multiple, disabled, ...other } = props

  const baseStyle = styles.select.base
  const activeStyle = styles.select.active
  const validStyle = styles.select.valid
  const invalidStyle = styles.select.invalid
  const disabledStyle = styles.select.disabled
  const selectStyle = styles.select.select

  function hasValidation() {
    return valid !== undefined
  }

  function validationStyle(): string {
    if (hasValidation()) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation() && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation() && disabled && disabledStyle,
    validationStyle(),
    !multiple && selectStyle,
    className
  )

  return (
    <select
      className={cls}
      ref={ref}
      disabled={disabled}
      multiple={!!multiple}
      {...other}
    >
      {children}
    </select>
  )
})

export default Select
