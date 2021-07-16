import * as React from 'react'

import classNames from 'classnames'

import { AsProp, CustomComponentRefForwardingComponent } from 'utils/components'

import styles from './styles'

export interface FormInputFeedbackProps
  extends React.HTMLAttributes<HTMLElement>,
    AsProp {
  type?: 'valid' | 'invalid'
  tooltip?: boolean
}

type Ref = React.ReactNode | HTMLElement | string

const FormInputFeedback: CustomComponentRefForwardingComponent<
  'div',
  FormInputFeedbackProps
> = React.forwardRef<Ref, FormInputFeedbackProps>(function FormInputFeedback(
  props,
  ref
) {
  const {
    as = 'div',
    className,
    type = 'valid',
    tooltip = false,
    ...otherProps
  } = props

  const typeIdentifier = `${type}-${tooltip ? 'tooltip' : 'feedback'}`
  const baseStyles = styles.feedback.base
  const validStyles =
    type === 'invalid' ? styles.feedback.invalid : styles.feedback.valid
  const cls = classNames(typeIdentifier, baseStyles, validStyles, className)

  return React.createElement(as as string, {
    className: cls,
    ref,
    ...otherProps,
  })
})

FormInputFeedback.displayName = 'Feedback'

export default FormInputFeedback
