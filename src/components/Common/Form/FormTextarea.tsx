import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export interface FormTextareaProps
  extends React.ComponentPropsWithRef<'textarea'> {
  /**
   * Defines the color of the Formtextarea
   */
  valid?: boolean
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  function FormTextarea(props, ref) {
    const { valid, disabled, className, children, ...otherProps } = props

    const baseStyle = styles.textarea.base
    const activeStyle = styles.textarea.active
    const disabledStyle = styles.textarea.disabled
    const validStyle = styles.textarea.valid
    const invalidStyle = styles.textarea.invalid

    function hasValidation(valid: boolean | undefined) {
      return valid !== undefined
    }

    function validationStyle(valid: boolean | undefined): string {
      if (hasValidation(valid)) {
        return valid ? validStyle : invalidStyle
      }
      return ''
    }

    const cls = classNames(
      baseStyle,
      // don't apply activeStyle if has valid or disabled
      !hasValidation(valid) && !disabled && activeStyle,
      // don't apply disabledStyle if has valid
      !hasValidation(valid) && disabled && disabledStyle,
      validationStyle(valid),
      className
    )

    return (
      <textarea className={cls} ref={ref} disabled={disabled} {...otherProps}>
        {children}
      </textarea>
    )
  }
)

export default FormTextarea
