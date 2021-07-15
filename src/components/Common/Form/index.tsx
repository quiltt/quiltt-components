import * as React from 'react'

import classNames from 'classnames'

import FormGroup from './FormGroup'
import FormInput from './FormInput'
import FormInputGroup from './FormInputGroup'
import FormLabel from './FormLabel'
import FormSelect from './FormSelect'
import FormTextarea from './FormTextarea'

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  noValidate?: boolean
  validated?: boolean
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(function Form(
  props,
  ref
) {
  const { className, children, noValidate, validated, ...otherProps } = props

  const cls = classNames(className, validated && 'is-validated')

  return (
    <form className={cls} ref={ref} noValidate={noValidate} {...otherProps}>
      {children}
    </form>
  )
})

Form.displayName = 'Form'

export default Object.assign(Form, {
  Group: FormGroup,
  InputGroup: FormInputGroup,
  Input: FormInput,
  Select: FormSelect,
  Textarea: FormTextarea,
  Label: FormLabel,
})
