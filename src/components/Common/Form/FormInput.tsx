import * as React from 'react'

import classNames from 'classnames'

import FormInputFeedback from './FormInputFeedback'
import styles from './styles'

type DefaultInput = React.ComponentPropsWithRef<'input'>
export interface FormInputProps extends Omit<DefaultInput, 'size'> {
  /**
   * Defines the color of the input
   */
  valid?: boolean
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean
  /**
   * Defines the type of the input
   */
  type?: string
  /**
   * Defines the size of the input
   */
  size?: 'sm' | 'base' | 'lg'
  htmlSize?: number
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  function Input(props, ref) {
    const {
      valid,
      disabled,
      className,
      htmlSize,
      size = 'base',
      type = 'text',
      ...otherProps
    } = props

    const baseStyle = styles.input.base
    const smStyle = styles.input.sm
    const lgStyle = styles.input.lg
    const activeStyle = styles.input.active
    const disabledStyle = styles.input.disabled
    const validStyle = styles.input.valid
    const invalidStyle = styles.input.invalid
    const radioStyle = styles.input.radio
    const checkStyle = styles.input.checkbox

    function hasValidation() {
      return valid !== undefined
    }

    function validationStyle(): string {
      if (hasValidation()) {
        return valid ? validStyle : invalidStyle
      }
      return ''
    }

    function sizeStyle(): string {
      switch (size) {
        case 'sm':
          return smStyle
        case 'lg':
          return lgStyle
        default:
          return baseStyle
      }
    }

    function typeStyle(): string {
      switch (type) {
        case 'radio':
          return radioStyle
        case 'checkbox':
          return checkStyle
        default:
          return sizeStyle()
      }
    }

    const cls = classNames(
      typeStyle(),
      // don't apply activeStyle if has valid or disabled
      !hasValidation() && !disabled && activeStyle,
      // don't apply disabledStyle if has valid
      !hasValidation() && disabled && disabledStyle,
      validationStyle(),
      className
    )

    return (
      <input
        size={htmlSize}
        className={cls}
        type={type}
        ref={ref}
        disabled={disabled}
        {...otherProps}
      />
    )
  }
)

export default Object.assign(FormInput, {
  Feedback: FormInputFeedback,
})
